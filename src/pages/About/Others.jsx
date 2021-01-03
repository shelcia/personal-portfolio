import React, { useEffect, useState } from "react";
import TagButton from "../../partials/TagButton";

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
          <h1 className="subtitle">Others</h1>
          <div className="row">
            <div className="col-sm-12">
              {articles.map((article, index) => (
                <div className="card bg-2 p-4 shadow-lg" key={index + 1}>
                  <div className="row">
                    <div className="col-sm-4 d-flex justify-content-center">
                      <img
                        src={article.thumbnail}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-sm-8">
                      <h4>{article.title}</h4>
                      {article.categories.map((category, index) => (
                        <TagButton
                          index={index + 1}
                          tag={category}
                          key={index + 1}
                        />
                      ))}
                      <div className="d-flex justify-content-between">
                        <a href={article.link}> Article Link </a>
                        <p>{article.pubDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Others;
