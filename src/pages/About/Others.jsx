import React, { useEffect, useState } from "react";
import TagButton from "../../partials/TagButton";
import Carousel from "./Carousel";
import GlowText from "../../partials/GlowText";

const Others = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shelcia";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);
        setArticles(results.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="bg-1 h-80">
        <div className="container py-4" id="skills">
          <h1 className="subtitle mb-5">Others</h1>
          <GlowText first="M" second="edium" third="A" fourth="rticles" />
          <div className="row my-5">
            <div className="col-sm-12">
              {articles.map((article, index) => (
                <div className="card bg-2 p-4 shadow-lg mb-4" key={index + 1}>
                  <div className="row">
                    <div className="col-sm-4 d-flex justify-content-center">
                      <img
                        src={article.thumbnail}
                        alt=""
                        className="img-fluid"
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                      />
                    </div>
                    <div className="col-sm-8 d-flex justify-content-between flex-column">
                      <h4 className="mb-4">{article.title}</h4>
                      <div>
                        {article.categories.map((category, index) => (
                          <TagButton
                            index={index + 1}
                            tag={category}
                            key={index + 1}
                          />
                        ))}
                      </div>

                      <div className="d-flex mt-4 justify-content-between">
                        <a href={article.link} className="mb-0">
                          Article Link
                        </a>
                        <p className="mb-0">
                          Published: {article.pubDate.split(" ")[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Carousel />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Others;
