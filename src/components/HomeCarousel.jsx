import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../img-crausel-3.jpg';
import image2 from '../img-crausel-2.jpg';
import image3 from '../img-crausel-4.jpg';
import farmVideo from '../dusherra_wishes.mp4'; // Your video path
import { useNavigate } from "react-router-dom";

function HomeCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true
  };

  const slides = [
    {
      video: farmVideo,
      caption: "See Us In Action 🎥",
      sub: "Watch how our products are making a difference on real farms."
    },
    {
      image: image1,
      caption: "Protecting Crops, Ensuring Harvests 🌱",
      sub: "Our eco-friendly pesticides safeguard your fields."
    },
    {
      image: image2,
      caption: "Safe & Effective Solutions",
      sub: "Advanced formulations tested for safety and efficiency."
    },
    {
      image: image3,
      caption: "Helping Farmers Thrive",
      sub: "Supporting sustainable farming with modern science."
    }
  ];

  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: "100%", mt: 2 }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: 450,
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Background Image or Video */}
            {slide.image ? (
              <img
                src={slide.image}
                alt={slide.caption}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            ) : slide.video ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "160%",
                  objectFit: "cover"
                }}
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : null}

            {/* Caption Overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 40,
                left: 40,
                backgroundColor: "rgba(0, 100, 0, 0.6)",
                padding: "15px 25px",
                borderRadius: "12px",
                maxWidth: "60%"
              }}
            >
              <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
                {slide.caption}
              </Typography>
              <Typography variant="body1" sx={{ color: "#f0f0f0", mt: 1 }}>
                {slide.sub}
              </Typography>
              <Button onClick={() => navigate("/about")}
                variant="contained"
                sx={{ mt: 2, backgroundColor: "white", color: "green", fontWeight: "bold" }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default HomeCarousel;
