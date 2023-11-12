import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Photography = () => {
  const Images = [
    {
      id: "col1",
      images: [
        {
          caption: "Lonely Lotus",
          image:
            "https://ik.imagekit.io/shelcia/photos/lotus_I8PMX9Xmd.jpg?updatedAt=1697336223183",
        },
        {
          caption: "A Feminist Tale",
          image:
            "https://ik.imagekit.io/shelcia/photos/ahmedabad_B6eG_Tvvw.jpg?updatedAt=1697336227415",
        },
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
      ],
    },

    {
      id: "col2",
      images: [
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
      ],
    },
    {
      id: "col3",
      images: [
        {
          caption: "Spring - New Hopes",
          image:
            "https://ik.imagekit.io/shelcia/photos/spring_vnS3WOQL3.jpg?updatedAt=1697336439698",
        },
        {
          caption: "India's Gate",
          image:
            "https://ik.imagekit.io/shelcia/photos/India%20gate_nuUhlxSx5.jpg?updatedAt=1697336227378",
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
      ],
    },
  ];

  return (
    <Container>
      <Typography component={"h2"} className="section-title" sx={{ mt: 10 }}>
        Amateur Photography
      </Typography>
      <Box className="img-row">
        {Images.map((col) => (
          <Box className="img-column" key={col.id}>
            {col.images.map((img) => (
              <img src={img.image} alt={img.caption} key={img.caption} />
            ))}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Photography;
