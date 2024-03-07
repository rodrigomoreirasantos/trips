import { db } from "@/app/_lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params: { userId } }: { params: { userId: string } }
): Promise<void | Response> {
  if (!userId) {
    return new NextResponse("User ID is required", { status: 400 });
  }

  const reservations = await db.tripReservation.findMany({
    where: {
      userId: userId,
    },
    include: {
      trip: true,
    },
  });

  return new NextResponse(JSON.stringify(reservations), { status: 200 });
}
