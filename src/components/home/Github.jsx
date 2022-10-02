import React from "react";
import CountUp from "react-countup";
import { counts } from "../../context/GithubContext";

const Github = () => {
  return (
    <React.Fragment>
      <div className="bg-1 h-80">
        <div className="container pt-5">
          <h1 className="subtitle">Github Numbers</h1>
          <div className="row mt-5" data-aos="fade-up">
            {counts.map((item, index) => (
              <div className="col-md-4 py-4" key={item.end}>
                <div className="github-card shadow bg-2 p-5 rounded-lg text-center">
                  <CountUp
                    end={item.end}
                    duration={item.duration}
                    delay={item.delay}
                  />
                  {index === counts.length - 1 && <span>+</span>}
                  <p>{item.title}</p>
                  <p className="text-muted">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Github;
