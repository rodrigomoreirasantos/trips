"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import ReactCountryFlag from "react-country-flag";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Button from "@/components/Button";

import { Trip } from "@prisma/client";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

const TripConfirmation = ({ params }: { params: { tripId: string } }) => {
  const [trip, setTrip] = useState<Trip | null>();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const router = useRouter();

  const { status, data } = useSession();

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTrip = async () => {
      const response = await fetch(`/api/trips/check`, {
        method: "POST",
        body: JSON.stringify({
          tripId: params.tripId,
          startDate: searchParams.get("startDate"),
          endDate: searchParams.get("endDate"),
        }),
      });

      const res = await response.json();

      if (res?.error) {
        return router.push("/");
      }

      setTrip(res.trip);
      setTotalPrice(res.totalPrice);
    };

    if (status === "unauthenticated") {
      router.push("/");
    }

    fetchTrip();
  }, [status, searchParams, params, router]);

  if (!trip) return null;

  const handleBuyClick = async () => {
    const res = await fetch("http://localhost:3000/api/payment", {
      method: "POST",
      body: Buffer.from(
        JSON.stringify({
          tripId: params.tripId,
          startDate: searchParams.get("startDate"),
          endDate: searchParams.get("endDate"),
          guests: Number(searchParams.get("guests")),
          totalPrice,
          coverImage: trip.coverImage,
          name: trip.name,
          description: trip.description,
        })
      ),
    });

    if (!res.ok) {
      return toast.error("An error occurred while making a reservation!", {
        position: "bottom-center",
      });
    }

    const { sessionId } = await res.json();

    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_KEY as string
    );

    await stripe?.redirectToCheckout({ sessionId });

    toast.success("Reservation made successfully!", {
      position: "bottom-center",
    });
  };

  const startDate = new Date(searchParams.get("startDate") as string);
  const endDate = new Date(searchParams.get("endDate") as string);
  const guests = searchParams.get("guests");

  return (
    <div className="container mx-auto p-5 lg:max-w-[600px]">
      <h1 className="font-semibold text-xl text-primaryDarker">Your trip</h1>

      {/* CARD */}
      <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
        <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">
          <div className="relative h-[106px] w-[124px]">
            <Image
              src={trip.coverImage}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              alt={trip.name}
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl text-primaryDarker font-semibold">
              {trip.name}
            </h2>
            <div className="flex items-center gap-1">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary underline">
                {trip.location}
              </p>
            </div>
          </div>
        </div>

        <h3 className="font-semibold text-lg text-primaryDarker mt-3">
          Price information
        </h3>

        <div className="flex justify-between mt-1">
          <p className="text-primaryDarker">Total:</p>
          <p className="font-medium">${totalPrice}</p>
        </div>
      </div>

      <div className="flex flex-col mt-5 text-primaryDarker">
        <h3 className="font-semibold">Date</h3>
        <div className="flex items-center gap-1 mt-1">
          <p>{format(startDate, "dd 'of' MMMM")}</p>
          {" - "}
          <p>{format(endDate, "dd 'of' MMMM")}</p>
        </div>

        <h3 className="font-semibold mt-5">Guests</h3>
        <p>{guests} guests</p>

        <Button className="mt-5" onClick={handleBuyClick}>
          Confirm purchase
        </Button>
      </div>
    </div>
  );
};

export default TripConfirmation;
