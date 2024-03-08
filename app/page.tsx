import Image from "next/image";
import TripSearch from "./components/TripSearch";
import QuickSearch from "./components/QuickSearch";
import RecommendedTrips from "./components/RecommendedTrips";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense>
        <TripSearch />
        <QuickSearch />
        <RecommendedTrips />
      </Suspense>
    </div>
  );
}
