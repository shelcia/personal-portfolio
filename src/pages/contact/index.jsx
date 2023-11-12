import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { CustomTextField } from "../../components/common/CustomTextfield";
import { LoadingButton } from "@mui/lab";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    message: "Received Message. Will get back to You !",
    severity: "success",
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sendMessage = async () => {
    setIsLoading(true);
    try {
      if (inputs.name === "" && inputs.email === "" && inputs.message === "") {
        setAlert({
          message: "Please fill in all the fields",
          severity: "error",
        });
        setOpen(true);
        return;
      }

      const body = {
        fields: {
          name: inputs.name,
          email: inputs.email,
          message: inputs.message,
        },
      };

      await fetch("https://api.airtable.com/v0/appTbgDq2M8MBUNrR/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body), // Convert the body to a JSON string
      });

      setAlert({
        message: "Received Message. Will get back to You !",
        severity: "success",
      });

      setOpen(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setAlert({
        message: "Sending Message failed! Try again later",
        severity: "error",
      });
      setOpen(true);
      setIsLoading(false);
    }
  };

  // for toasts
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box data-aos="fade-up">
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        action={
          <>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              {/* <CloseIcon /> */}X
            </IconButton>
          </>
        }
      >
        <Alert severity={alert.severity} variant="filled">
          {alert.message}
        </Alert>
      </Snackbar>

      <Card sx={{ width: { xs: "100%", md: 500 }, mx: "auto" }}>
        <CardContent sx={{ p: 4 }}>
          <Typography component={"h1"} className="section-title">
            Connect !
          </Typography>
          <Typography>
            Interested in working with me? Submit your project inquiry using the
            form
          </Typography>
          <Box
            component={"form"}
            sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}
          >
            <CustomTextField
              size="small"
              label="Name*"
              color="info"
              value={inputs.name}
              name="name"
              onChange={handleInputs}
            />
            <CustomTextField
              size="small"
              label="Email*"
              type="email"
              color="info"
              value={inputs.email}
              name="email"
              onChange={handleInputs}
            />
            <CustomTextField
              size="small"
              label="Message*"
              multiline
              rows={4}
              color="info"
              value={inputs.message}
              name="message"
              onChange={handleInputs}
            />
          </Box>
        </CardContent>
        <CardActions
          sx={{
            backgroundColor: "#17181A",
            py: 3,
          }}
        >
          {isLoading ? (
            <LoadingButton
              loading
              variant="contained"
              sx={{
                mx: "auto",
                backgroundColor: "rgb(255,255,255) !important",
                "&: loadingIndicator": {
                  color: "rgba(0, 0, 0, 0.5) !important",
                },
              }}
            >
              Send Message
            </LoadingButton>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              sx={{ mx: "auto" }}
              onClick={sendMessage}
            >
              Send Message
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default Contact;
