import React, { Suspense } from 'react';
import { useNearScreen } from 'hooks';
import { Spinner } from 'components';

const EventsOfDayPanel = React.lazy(() => import('./EventsOfDayPanel'));

export default function LazyTrendingPanel() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '100px' });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <EventsOfDayPanel /> : <Spinner />}
      </Suspense>
    </div>
  );
}
