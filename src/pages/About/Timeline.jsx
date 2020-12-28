import React from "react";

const Timeline = () => {
  return (
    <React.Fragment>
      <h1>Simple Responsive Vertical Timeline Layout</h1>
      <div class="timeline">
        <h2 class="timeline__item timeline__item--year">1985</h2>

        <div class="timeline__item">
          <h3 class="timeline__title">Born</h3>
        </div>

        <h2 class="timeline__item timeline__item--year">2003</h2>

        <div class="timeline__item">
          <h3 class="timeline__title">Graduated High School</h3>
        </div>

        <h2 class="timeline__item timeline__item--year">2004</h2>

        <div class="timeline__item">
          <h3 class="timeline__title">
            Started at Fox Valley Technical College (FVTC) in an Electrical
            Engineering program
          </h3>
        </div>

        <h2 class="timeline__item timeline__item--year">2006</h2>

        <div class="timeline__item">
          <h3 class="timeline__title">
            Changed at FVTC to Web Design & Development program
          </h3>
        </div>

        <h2 class="timeline__item timeline__item--year">2007</h2>

        <div class="timeline__item">
          <h3 class="timeline__title">Web Design Internship</h3>
          <p class="timeline__blurb">started internship at company 1.</p>
        </div>

        <h2 class="timeline__item timeline__item--year">2008</h2>

        <div class="timeline__item">
          <h3 class="timeline__title">IT Internship</h3>
          <p class="timeline__blurb">Started internship at company 2</p>
        </div>

        <div class="timeline__item">
          <h3 class="timeline__title">Got Married</h3>
        </div>

        <div class="timeline__item">
          <h3 class="timeline__title">Application Engineer</h3>
          <p class="timeline__blurb">
            Started web design/dev job at company 2.
          </p>
        </div>

        <h2 class="timeline__item timeline__item--year">2012</h2>

        <div class="timeline__item">
          <h3 class="timeline__title">First Child</h3>
          <p class="timeline__blurb">
            Spouse and I welcomed our first daughter.
          </p>
        </div>

        <h2 class="timeline__item timeline__item--year">2015</h2>

        <div class="timeline__item">
          <h3 class="timeline__title">Second Child</h3>
          <p class="timeline__blurb">
            Spouse and I welcomed our second daughter.
          </p>
        </div>

        <h2 class="timeline__item timeline__item--year">2016</h2>

        <div class="timeline__item">
          <h3 class="timeline__title">Lead Application Engineer</h3>
          <p class="timeline__blurb">Promotion to mid-level role.</p>
        </div>

        <h2 class="timeline__item timeline__item--year">2018</h2>

        <div class="timeline__item">
          <h3 class="timeline__title">Aerial/Circus Arts</h3>
          <p class="timeline__blurb">
            Started taking classes to learn aerial silks, hoop, and hammock.
          </p>
        </div>

        <h2 class="timeline__item timeline__item--year">2019</h2>
      </div>
    </React.Fragment>
  );
};

export default Timeline;
