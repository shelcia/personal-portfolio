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
      <GlowText first="P" second="hoto" third="g" fourth="raphy" />
      <div
        id="photography"
        className="carousel slide mt-5"
        data-ride="carousel"
      >
        <div
          id="carouselPhoto"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {Images.map((img, index) => (
              <div
                className={
                  index === 0 ? "carousel-item active" : "carousel-item"
                }
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
                  <p className="designer-heading">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev border border-0"
            type="button"
            data-bs-target="#carouselPhoto"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next border border-0"
            type="button"
            data-bs-target="#carouselPhoto"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
