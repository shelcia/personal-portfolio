import React from "react";
import Typography from "@mui/material/Typography";
import { experience } from "../../../context/ExperinceContext";
import { Box, Chip, Container } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

type Experience = {
  designation: string;
  name: string;
  timeline: string;
  skills: string[];
  desc: string;
};

type JourneyProps = {
  journeyToRef: React.RefObject<HTMLDivElement>;
};

const Journey: React.FC<JourneyProps> = ({ journeyToRef }) => {
  return (
    <>
      <Container sx={{ pl: 0, overflowX: "hidden" }} ref={journeyToRef}>
        <Typography
          component={"h2"}
          className="section-title"
          sx={{ mt: 10 }}
          data-aos="fade-up"
        >
          Journey
        </Typography>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
          // position="alternate-reverse"
        >
          {experience.map((item: Experience, idx: number) => (
            <TimelineItem key={idx} data-aos="fade-up">
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ width: "100%" }}>
                <Typography
                  sx={{ width: "100%", mb: 1 }}
                  className="text-serif accordian-title"
                >
                  {item.designation}-{item.name}
                </Typography>
                <Typography className="accordian-date" sx={{ mb: 1 }}>
                  {item.timeline}
                </Typography>

                <Box
                  sx={{ display: "flex", gap: 0.5, flexFlow: "wrap", mb: 2 }}
                >
                  {item.skills.map((skill: string) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{ mb: "4px !important" }}
                    />
                  ))}
                </Box>
                <Typography
                  className="accordian-desc"
                  sx={{
                    mb: 6,
                    whiteSpace: "pre-line",
                    wordBreak: "break-word",
                  }}
                >
                  {item.desc}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </>
  );
};

export default Journey;
