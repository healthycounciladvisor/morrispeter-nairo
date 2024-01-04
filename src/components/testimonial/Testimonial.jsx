import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `  Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s.`,
      reviewerName: "Nancy Byers",
      designation: "CEO at ib-themes",
    },
    {
      imageName: "team-2",
      desc: ` Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s.`,
      reviewerName: "Jara Afsari",
      designation: "CEO at ib-themes",
    },
    {
      imageName: "team-4",
      desc: ` Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s.`,
      reviewerName: "Janiaya kiaram",
      designation: "Visual Designer",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div key={i}>
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
