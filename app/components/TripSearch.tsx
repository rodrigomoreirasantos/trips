"use client";

import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import { Controller, useForm } from "react-hook-form";

interface TripSearchForm {
  text: string;
  startDate: Date | null;
  budget: string;
}

const TripSearch = () => {
  const router = useRouter();

  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<TripSearchForm>();

  const onSubmit = (data: TripSearchForm) => {
    router.push(
      `/trips/search?text=${
        data.text
      }&startDate=${data.startDate?.toISOString()}&budget=${data.budget}`
    );
  };

  return (
    <Suspense>
      <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat lg:py-28">
        <h1 className="font-semibold text-2xl text-primaryDarker text-center lg:text-[2.5rem]">
          Find your next <span className="text-primary">trip!</span>
        </h1>

        <div className="flex flex-col gap-4 mt-5 lg:flex-row lg:max-w-[948px] lg:mx-auto lg:p-4 lg:bg-primary lg:mt-12 lg:bg-opacity-20 lg:rounded-lg">
          <Input
            placeholder="Where you want to go?"
            error={!!errors.text}
            errorMessage={errors.text?.message}
            {...register("text", {
              required: {
                value: true,
                message: "Text is required.",
              },
            })}
          />

          <div className="flex gap-4 lg:w-full">
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  onChange={field.onChange}
                  selected={field.value}
                  placeholderText="Date"
                  className="w-full"
                  minDate={new Date()}
                />
              )}
            />

            <Controller
              name="budget"
              control={control}
              render={({ field }) => (
                <CurrencyInput
                  allowDecimals={false}
                  placeholder="Price"
                  onValueChange={field.onChange as any}
                  value={field.value}
                  onBlur={field.onBlur}
                />
              )}
            />
          </div>

          <Button
            onClick={() => handleSubmit(onSubmit)()}
            // className="w-1/2 lg:h-fit"
            className="w-full"
          >
            Search
          </Button>
        </div>
      </div>
    </Suspense>
  );
};

export default TripSearch;
