import React, { useEffect } from "react";

const Result = ({ result }) => {
  useEffect(() => {
    console.log("Render item...");
  });

  return (
    <div>
      <p>
        {result.title}:{result.description}
      </p>
    </div>
  );
};

export default React.memo(Result);
