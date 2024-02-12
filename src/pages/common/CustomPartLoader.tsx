import { Typography } from "@mui/material";
import { Suspense, ComponentType } from "react";

interface Props {
  [key: string]: any;
}

export const CustomLoadable =
  <P extends Props>(Component: ComponentType<P>) =>
  (props: P) =>
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
