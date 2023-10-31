import * as React from "react";
import Typography from "@mui/material/Typography";
import { experience } from "../../../context/ExperinceContext";
import { Box, Chip } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Journey = () => {
  return (
    <>
      <Typography component={"h2"} className="section-title" sx={{ mt: 10 }}>
        Journey
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {experience.map((item, idx) => (
          <TimelineItem key={idx}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                sx={{ width: "100%", mb: 2 }}
                className="text-serif accordian-title"
              >
                {item.designation}-{item.name}
              </Typography>
              <Typography className="accordian-date" sx={{ mb: 2 }}>
                {item.timeline}
              </Typography>

              <Box sx={{ display: "flex", gap: 0.5, flexFlow: "wrap", mb: 2 }}>
                {item.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{ mb: "4px !important" }}
                  />
                ))}
              </Box>
              <Typography className="accordian-desc" sx={{ mb: 3 }}>
                {item.desc}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};

export default Journey;
