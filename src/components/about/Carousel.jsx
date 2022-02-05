import React from "react";
import GlowText from "../../partials/GlowText";

const Carousel = () => {
  const Images = [
    {
      caption: "Two Faces",
      image: "https://ik.imagekit.io/shelcia/Two_Faces_oOB4mwNDx.JPEG",
    },
    {
      caption: "Fire",
      image: "https://ik.imagekit.io/shelcia/Fire_pYpV_b9n6.JPEG",
    },
    {
      caption: "The Flower",
      image: "https://ik.imagekit.io/shelcia/The_Flowe_jDDP6FNs_.JPEG",
    },
    {
      caption: "Blinding Lights",
      image: "https://ik.imagekit.io/shelcia/Blinding_Lights_IuN14vtKG.JPEG",
    },

    {
      caption: "Lonely",
      image: "https://ik.imagekit.io/shelcia/Lonely_-GKnpFcB8.JPEG",
    },
    {
      caption: "Pursuit of Happiness",
      image: "https://ik.imagekit.io/shelcia/Pursuit_YDMdKamb2.JPEG",
    },
    {
      caption: "Reflection",
      image: "https://ik.imagekit.io/shelcia/Reflection_FRW19h0N4.JPEG",
    },
  ];
  return (
    <React.Fragment>
      {/* <h5 className="subtitle">Photography</h5> */}
      <GlowText first="P" second="hoto" third="g" fourth="raphy" />
      <div
        id="photography"
        className="carousel slide mt-5"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#photography"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#photography" data-slide-to="1"></li>
          <li data-target="#photography" data-slide-to="2"></li>
          <li data-target="#photography" data-slide-to="3"></li>
          <li data-target="#photography" data-slide-to="4"></li>
          <li data-target="#photography" data-slide-to="5"></li>
          <li data-target="#photography" data-slide-to="6"></li>
        </ol>
        <div
          className="carousel-inner"
          //   style={{ height: "400px", objectFit: "contain" }}
        >
          {Images.map((img, index) => (
            <div
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              key={index}
            >
              <img
                src={img.image}
                className="d-block w-100"
                alt="..."
                height="400px"
                style={{ objectFit: "contain" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p>{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#photography"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#photography"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
