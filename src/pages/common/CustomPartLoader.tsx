import { Typography } from "@mui/material";
import React, { Suspense } from "react";
// eslint-disable-next-line react/display-name
export const CustomLoadable = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <>
          <Typography>Loading...</Typography>
        </>
      }
    >
      <Component {...props} />
    </Suspense>
  );
