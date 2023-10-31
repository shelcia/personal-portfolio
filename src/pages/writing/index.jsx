import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Link,
  List,
  ListItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import TopRightArrow from "../../assets/icons/toprightarrow.svg";

const Writing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shelcia";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const results = await response.json();
        // console.log(results);
        setArticles(results.items);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
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
          {articles.map((article) => (
            <ListItem
              key={article.title}
              as={Box}
              sx={{
                borderBottom: "1px solid #000",
                py: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 2,
              }}
            >
              <Typography
                component={"h2"}
                className="text-serif"
                sx={{ fontSize: "2rem" }}
              >
                {article.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack direction="row" spacing={1}>
                  {article.categories.map((category) => (
                    <Chip key={category} label={category} />
                  ))}
                </Stack>

                <Link
                  href={article.link}
                  target="_blank"
                  className="article-link"
                >
                  <Button color="secondary" sx={{ color: "#000" }}>
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
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default Writing;
