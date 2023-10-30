import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box>
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
            <TextField size="small" label="Email" type="email" color="info" />
            <TextField
              size="small"
              label="Message"
              multiline
              rows={4}
              color="info"
            />
          </Box>
        </CardContent>
        <CardActions
          sx={{
            backgroundColor: "#17181A",
            py: 3,
          }}
        >
          <Button variant="contained" color="secondary" sx={{ mx: "auto" }}>
            Send Message
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Contact;
