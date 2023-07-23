import React, { Suspense } from "react";

const LazyJsonEditor = React.lazy(() => import("./jsoneditor"));
const LazyTypeEditor = React.lazy(() => import("./typeeditor"));

const LazyEditors = () => {
  return (
    <div className="border h-full sm:flex">
      <div className="scrollbar-hide aspect-w-1 w-full sm:w-1/2">
        {/* Display this div on small screens (w-full) and half width on larger screens (sm:w-1/2) */}
        <Suspense fallback={<div>Loading JsonEditor...</div>}>
          <LazyJsonEditor />
        </Suspense>
      </div>
      <div className="scrollbar-hide aspect-w-1 w-full sm:w-1/2">
        {/* Display this div on both small and larger screens */}
        <Suspense fallback={<div>Loading TypeEditor...</div>}>
          <LazyTypeEditor />
        </Suspense>
      </div>
    </div>
  );
};

export default LazyEditors;
