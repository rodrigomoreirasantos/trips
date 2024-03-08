import TripSearch from "./components/TripSearch";
import QuickSearch from "./components/QuickSearch";
import RecommendedTrips from "./components/RecommendedTrips";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <Suspense>
      <div>
        <TripSearch />
        <QuickSearch />
        <RecommendedTrips />
      </div>
    </Suspense>
  );
}
