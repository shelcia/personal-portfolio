import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Contact = () => {
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
    try {
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

      setOpen(true);
    } catch (err) {
      console.log(err);
      setAlert({
        message: "Sending Message failed! Try again later",
        severity: "error",
      });
      setOpen(true);
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
    <Box>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={alert.severity} variant="filled">
          {alert.message}
        </Alert>
      </Snackbar>

      <Card sx={{ width: { xs: "100%", md: 500 }, mx: "auto" }}>
        <CardContent sx={{ p: 4 }}>
          <Typography component={"h2"} className="section-title">
            Send Message
          </Typography>
          <Typography>
            Interested in working with me? Submit your project inquiry using the
            form
          </Typography>
          <Box
            component={"form"}
            sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}
          >
            <TextField
              size="small"
              label="Name"
              color="info"
              value={inputs.name}
              name="name"
              onChange={handleInputs}
            />
            <TextField
              size="small"
              label="Email"
              type="email"
              color="info"
              value={inputs.email}
              name="email"
              onChange={handleInputs}
            />
            <TextField
              size="small"
              label="Message"
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
          <Button
            variant="contained"
            color="secondary"
            sx={{ mx: "auto" }}
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Contact;
