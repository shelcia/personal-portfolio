import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Link,
  List,
  ListItem,
  Skeleton,
  Typography,
} from "@mui/material";
import TopRightArrow from "../../assets/icons/toprightarrow-medium.svg";

const Writing = () => {
  const [isLoading] = useState(false);
  const [articles] = useState([
    {
      title: "Journey Mapping",
      pubDate: "2023-12-15 19:51:48",
      link: "https://bootcamp.uxdesign.cc/journey-mapping-8c9c5a9b3762?source=rss-dd838a6f81c8------2",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*f-q7wYV030rjbe4yq4Fvfw.png",
      categories: [
        "ux-research",
        "journey-maps",
        "user-experience",
        "user-research",
        "ux",
      ],
      content:
        "A Powerful Tool for Understanding UX — Journey mapping is a visual representation of the user’s experience as they interact with a product or service over time. It involves capturing the user’s actions, thoughts,",
      published: "Bootcamp",
    },
    {
      title: "Modeling The Data: A Guide to Affinity Diagrams",
      pubDate: "2023-11-21 21:15:03",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*adE-Lm7KXiBpm9LdZtVstg.png",
      link: "https://bootcamp.uxdesign.cc/modeling-the-data-a-guide-to-affinity-diagrams-94062cc72fed?source=rss-dd838a6f81c8------2",
      categories: [
        "stakeholder",
        "user-stories",
        "user-experience",
        "affinity-diagrams",
        "user-research",
      ],
      content:
        "This is a part of my class Assignment at UW Madison. Introduction Affinity diagrams offer a structured approach to organizing and comprehending complex information, making them one of the most",
      published: "Bootcamp",
    },
    {
      title: "Cognitive Design — UX",
      pubDate: "2023-11-12 22:47:11",
      link: "https://shelcia.medium.com/cognitive-design-ux-f78de2650141?source=rss-dd838a6f81c8------2",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*qwMOwdjxdZLfkyJ7XZLInA.png",
      categories: [
        "user-experience-design",
        "cognitive",
        "user-experience",
        "affordance",
        "cognitive-design",
      ],
      content:
        "This is a part of my class Assignment at UW Madison. During this week’s class, one concept that particularly stood out to me was the idea of affordances and how they influence user interactions with product",
      published: null,
    },
    {
      title: "The business value of UX research",
      pubDate: "2023-11-01 07:18:27",
      link: "https://bootcamp.uxdesign.cc/the-business-value-of-ux-research-f55bb36d1962?source=rss-dd838a6f81c8------2",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*Gxj5Fwz6zLoaE_OQNaun9g.png",
      categories: ["ux-research", "business", "ux", "user-experience"],
      content:
        "This is a part of my class Assignment at UW Madison. Time for a Kutty(Small) Story: In my professional experience, while working as a Frontend Developer in a startup, I found myself in a team with divers",
      published: "Bootcamp",
    },
    {
      title: "How to Migrate from Create React App (CRA) to Vite Quickly",
      pubDate: "2023-10-20 10:07:23",
      link: "https://shelcia.medium.com/how-to-migrate-from-create-react-app-cra-to-vite-quickly-34510240c3b9?source=rss-dd838a6f81c8------2",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*oVflFsOBrCqQi_jAijSScA.png",
      categories: ["create-react-app", "react", "vitejs"],
      content:
        "Have you been using Create React App (CRA) for your React projects, but now you’re curious about the blazing-fast Vite? Vite, known for its",
      published: null,
    },
    {
      title: "What is good UX?",
      pubDate: "2023-10-05 19:38:14",
      link: "https://shelcia.medium.com/what-is-good-ux-5ea4a09fcf3c?source=rss-dd838a6f81c8------2",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*5TNTM8kTW7Y14ijB_34MRQ.png",
      categories: ["google-search", "good-user-experience", "user-experience"],
      content:
        "Google Search — Still can’t beat this ! — This is a part of my class Assignment at UW Madison. Recently, I attempted to purchase tickets for an Indian movie titled “Jawan” while in the United States. As a firs",
      published: null,
    },
    {
      title: "Dev Website which will pay for your articles",
      pubDate: "2022-11-22 17:47:09",
      link: "https://shelcia.medium.com/dev-website-which-will-pay-for-your-articles-2ab94f0b1c90?",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*QgLRbvc0pmuZZ90tMV7_7g.png",
      categories: [
        "development",
        "writing",
        "writing-life",
        "paid",
        "technical",
      ],
      content:
        "It is always good to have an additional source of income. If you want to earn few bucks writing blogs, do check out the websites below. Neptune.ai They are looking for ML engineers or Data scientists to",
      published: null,
    },
    {
      title: "Auto Commit on Github everyday",
      pubDate: "2022-11-19 15:34:34",
      link: "https://shelcia.medium.com/auto-commit-on-github-everyday-c726c6a7240c?source=rss-dd838a6f81c8------2",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*bdGi_GOSbF07F8kpVN_rbg.png",
      categories: ["automation", "commit", "cron", "workflow", "github"],
      content:
        "A Powerful Tool for Understanding UX — Journey mapping is a visual representation of the user’s experience as they interact with a product or service over time. It involves capturing the user’s actions, thoughts,",
      published: null,
    },
    {
      title: "Building Sliding Puzzle in Vanilla Javascript",
      pubDate: "2022-04-15 10:32:52",
      link: "https://shelcia.medium.com/building-sliding-puzzle-in-vanilla-javascript-42ae4198b4ff?source=rss-dd838a6f81c8------2",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*Fpa6oVP5zsZBL39ipkH3YQ.png",
      categories: ["sliding-puzzle"],
      content:
        "This will be exciting to build. Demo: https://sliding-puzzle-basic.netlify.app/ Prerequisites Bootstrap Javascript CSS/SASS Introduction Step 1: Let’s create index.html file , in there we will add",
      published: null,
    },
    {
      title: "Fetching Recent Medium Posts and displaying it on Readme",
      pubDate: "2022-04-07 19:00:41",
      link: "https://shelcia.medium.com/fetching-recent-medium-posts-and-displaying-it-on-readme-a8f6852ed7cf?source=rss-dd838a6f81c8------2",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*GBUMcQ-MlBcttfApUsYhCQ.png",
      categories: [
        "readme",
        "workflow",
        "automation",
        "medium",
        "github-readme",
      ],
      content:
        "Let’s say you want to show blog post on Github readme, but you don’t want to add it every time when you create an article. We can easily",
      published: null,
    },
    {
      title: "Create a Video Call Web App in 10 minutes with Jitsi and React",
      pubDate: "2022-03-26 19:00:41",
      link: "https://shelcia.medium.com/create-a-video-call-web-app-in-10-minutes-with-jitsi-and-react-5453032f2173?source=rss-dd838a6f81c8------2",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*gXOlECQ5N27Cp4X2ObkqpQ.png",
      categories: ["jitsi", "react"],
      content:
        "This tutorial will be pretty exciting!. We will be integrating Jitsi with our react app and with that, we can create our video call room. With",
      published: "The Startup",
    },
    {
      title: "Send Emails from your NodeJs App with Node mailer",
      pubDate: "2021-04-29 19:00:41",
      link: "https://shelcia.medium.com/send-emails-from-your-nodejs-app-with-node-mailer-6859aa30d72f?source=rss-dd838a6f81c8------2",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*_YD2at9orJxcXTmP6oJssw.png",
      categories: ["nodemailer", "nodejs"],
      content:
        "We will look into using “Nodemailer” to send emails Prerequisites NodeJS REST API Code Editor (I will be using VS code) Postman installed or Postman web account with CORS extension for chrome",
      published: null,
    },
    {
      title: "NodeJs Authentication With JWT",
      pubDate: "2021-01-05 19:00:41",
      link: "https://medium.com/swlh/nodejs-with-jwt-authentication-feb961763541?source=rss-dd838a6f81c8------2",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*tOWLVJQWaV4XcfHLw62TtQ.jpeg",
      categories: ["nodeje", "authentication"],
      content:
        "This is for people who are new to NodeJs and trying to figure out how to build basic authentication with JSON web tokens and integrate it with their frontend. You will either need postman installed on your PC",
      published: "The Startup",
    },
    {
      title: "Build Your First Discord GIF BOT and Deploy",
      pubDate: "2020-12-30 19:00:41",
      link: "https://medium.com/swlh/build-your-first-discord-gif-bot-and-deploy-2cc917888113?source=rss-dd838a6f81c8------2",
      thumbnail:
        "https://miro.medium.com/v2/resize:fill:224:224/1*MZI5du6Iga1qaidLIAJ0Yw.png",
      categories: ["discord-bot", "nodejs"],
      content:
        "A Bot that send GIF replies and is deployed on Heroku for free — Pre-requisites : Some knowledge of Javascript Node installed on your PC or laptop Discord Account (plus you should have servers created by you)",
      published: "The Startup",
    },
  ]);

  // useEffect(() => {
  //   const url =
  //     "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shelcia";

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url, {
  //         headers: {
  //           "Accept-Encoding": "gzip",
  //         },
  //       });
  //       const results = await response.json();
  //       // console.log(results);
  //       setArticles(results.items);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <Container sx={{ overflowX: "hidden" }} data-aos="fade-up">
        <Typography component={"h1"} className="section-title">
          On Medium
        </Typography>
        {isLoading ? (
          <>
            <Skeleton animation="wave" height={150} />
            <Skeleton animation="wave" height={150} />
            <Skeleton animation="wave" height={150} />
          </>
        ) : (
          <List>
            {articles.map((article, idx) => (
              <ListItem
                key={article.title}
                as={Box}
                sx={{
                  borderBottom: "1px solid #000",
                  pt: 4,
                  display: "flex",
                  gap: 2,
                  px: { xs: 0 },
                }}
                data-aos="fade-up"
                data-aos-delay={10 * idx}
              >
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <img
                    src={article.thumbnail}
                    alt={`img-thumbnail-${article.title}`}
                    width={160}
                    height={120}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexGrow: 1,
                    gap: 1,
                    px: { xs: 0 },
                  }}
                >
                  <Typography>
                    {article.published && (
                      <span>
                        Published in{" "}
                        <span style={{ fontWeight: 700 }}>
                          {article.published}
                        </span>
                        {"   "}.
                      </span>
                    )}
                    {"   "} {formatDate(article.pubDate)}
                  </Typography>

                  <Typography
                    component={"h2"}
                    // className="text-serif"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 600,
                    }}
                  >
                    {article.title}
                  </Typography>
                  <Typography>{article.content} ...</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 1, flexFlow: "wrap" }}>
                      {article.categories.map((category) => (
                        <Chip
                          key={category}
                          label={convertSlugToTitle(category)}
                        />
                      ))}
                    </Box>

                    <Link
                      href={article.link}
                      target="_blank"
                      className="article-link"
                      sx={{ mt: { xs: 2 } }}
                      data-cursor-text={"Read more on Medium"}
                    >
                      <Button
                        color="secondary"
                        sx={{ color: "#000", px: { xs: 0 } }}
                      >
                        Read More
                        <span className="article-arrow">
                          <img
                            src={TopRightArrow}
                            alt="medium link arrow"
                            style={{ verticalAlign: "middle" }}
                          />
                        </span>
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </>
  );
};

export default Writing;

function formatDate(inputDate) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = new Date(inputDate).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
}

function convertSlugToTitle(slug) {
  // Split the slug into words
  const words = slug.split("-");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words to form the title
  const title = capitalizedWords.join(" ");

  return title;
}
