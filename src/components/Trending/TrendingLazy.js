import React, { Suspense } from "react";
import { useNearScreen } from "hooks";
import { Spinner } from "components";
const TrendingPanel = React.lazy(() => import("./TrendingPanel"));

export default function LazyTrendingPanel() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "100px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingPanel /> : <Spinner />}
      </Suspense>
    </div>
  );
}
