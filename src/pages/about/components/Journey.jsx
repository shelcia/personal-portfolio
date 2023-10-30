import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMore from "../../../assets/icons/expandmore.svg";
import { experience } from "../../../context/ExperinceContext";
import { Box, Chip, Stack } from "@mui/material";

const Journey = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Typography component={"h2"} className="section-title" sx={{ mt: 10 }}>
        Journey
      </Typography>
      {experience.map((item, idx) => (
        <Accordion
          key={idx}
          expanded={expanded === `panel${idx}`}
          onChange={handleChange(`panel${idx}`)}
          sx={{ py: 3 }}
        >
          <AccordionSummary
            expandIcon={
              <img src={ExpandMore} alt="expand more" width={30} height={30} />
            }
            aria-controls={`panel${idx}bh-content`}
            id={`panel${idx}bh-header`}
          >
            <Typography
              sx={{ width: "100%" }}
              className="text-serif accordian-title"
            >
              {item.designation}-{item.name}
            </Typography>
            {/* <Typography sx={{ color: "text.secondary" }}>
              I am an accordion
            </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{ my: 2, display: "flex", justifyContent: "space-between" }}
            >
              <Stack direction="row" spacing={1}>
                {item.skills.map((skill) => (
                  <Chip key={skill} label={skill} />
                ))}
              </Stack>
              <Typography className="accordian-date">{item.date}</Typography>
            </Box>
            <Typography className="accordian-desc">{item.desc}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      {/*  <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<img src={ExpandMore} alt="expand more" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<img src={ExpandMore} alt="expand more" />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<img src={ExpandMore} alt="expand more" />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<img src={ExpandMore} alt="expand more" />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </>
  );
};

export default Journey;
