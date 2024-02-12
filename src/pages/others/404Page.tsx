import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ErrImg from "../../assets/images/images/404.svg";

const ErrorPage: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <img src={ErrImg} width={"100%"} height={"auto"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component={"h1"} variant="h1" className="text-serif">
              404
            </Typography>
            <Typography component={"h2"} variant="h2" className="text-serif">
              Page not found!
            </Typography>
            <Typography sx={{ mt: 3, fontWeight: 600 }}>
              Either I screwed up OR You tried kinky links
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ErrorPage;
