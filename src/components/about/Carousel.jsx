import React from "react";
import GlowText from "../../partials/GlowText";
import Slider from "react-slick";

const Carousel = () => {
  const Images = [
    {
      caption: "Humayun Tomb - Sad Tale",
      image:
        "https://ik.imagekit.io/shelcia/photos/tomb_6qemUgM5v.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649615903465",
    },
    {
      caption: "Golden Time Sky",
      image:
        "https://ik.imagekit.io/shelcia/photos/sky_aZ6bwN8_R.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649615902206",
    },
    {
      caption: "Qutb Minar",
      image:
        "https://ik.imagekit.io/shelcia/photos/qutb_minar_4zpXeGe40.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649615902260",
    },
    {
      caption: "Mountains",
      image:
        "https://ik.imagekit.io/shelcia/photos/mountains_Z-d4yNfb9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649615901762",
    },
    {
      caption: "Two Faces",
      image:
        "https://ik.imagekit.io/shelcia/photos/Two_Faces_oOB4mwNDx.JPEG?ik-sdk-version=javascript-1.4.3&updatedAt=1649615721232",
    },
    {
      caption: "Fire",
      image:
        "https://ik.imagekit.io/shelcia/photos/Fire_pYpV_b9n6.JPEG?ik-sdk-version=javascript-1.4.3&updatedAt=1649615684372",
    },
    {
      caption: "The Flower",
      image:
        "https://ik.imagekit.io/shelcia/photos/The_Flowe_jDDP6FNs_.JPEG?ik-sdk-version=javascript-1.4.3&updatedAt=1649615723565",
    },
    {
      caption: "Blinding Lights",
      image:
        "https://ik.imagekit.io/shelcia/photos/Blinding_Lights_IuN14vtKG.JPEG?ik-sdk-version=javascript-1.4.3&updatedAt=1649615815387",
    },

    {
      caption: "Lonely",
      image:
        "https://ik.imagekit.io/shelcia/photos/Lonely_-GKnpFcB8.JPEG?ik-sdk-version=javascript-1.4.3&updatedAt=1649615727841",
    },
    {
      caption: "Pursuit of Happiness",
      image:
        "https://ik.imagekit.io/shelcia/photos/Pursuit_YDMdKamb2.JPEG?ik-sdk-version=javascript-1.4.3&updatedAt=1649615653584",
    },
    {
      caption: "Reflection",
      image:
        "https://ik.imagekit.io/shelcia/photos/Reflection_FRW19h0N4.JPEG?ik-sdk-version=javascript-1.4.3&updatedAt=1649615725782",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <GlowText first="P" second="hoto" third="g" fourth="raphy" />
      <div id="photography" className="slide mt-5">
        <Slider {...settings}>
          {Images.map((img, index) => (
            <div
              // className={index === 0 ? "carousel-item active" : "carousel-item"}
              key={index}
            >
              <img
                src={img.image}
                className="d-block w-100"
                alt={`Image - ${img.caption}`}
                height="400px"
                style={{ objectFit: "contain" }}
                loading="lazy"
              />
              {/* <div className="carousel-caption d-none d-md-block">
                <p className="designer-heading">{img.caption}</p>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
