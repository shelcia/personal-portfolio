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
import { articles } from "../../context/MediumArticleContext";
import { MediumArticle } from "../../types";
import { convertSlugToTitle, formatDate } from "../../utils";

const Writing: React.FC = () => {
  const [isLoading] = useState<boolean>(false);

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
            {articles.map((article: MediumArticle, idx: number) => (
              <ListItem
                key={article.title}
                // as={Box}
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
                      {article.categories.map((category: string) => (
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
