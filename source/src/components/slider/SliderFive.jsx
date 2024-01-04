import React from "react";
import TextLoop from "react-text-loop";

const sliderContent = {
  name: "Mark Saverin",
  description: `Ever since I was a little child, I grew fond of programming, just like I was born for it and now I got confidence to make the world bette place.
Logical and result-driven software developer dedicated to building and optimizing user-focused websites and applications. Judicious and creative when crafting effective websites, apps and ecommerce platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with calm and focused attitude.`,
  btnText: "HIRE ME",
  btnText2: "My Work",
};

const SliderFive = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two slider-four bg-normal"
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <div className="type-box">
                <h6>Hello there...</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                  <p className="loop-text lead"> Content Writter</p>
                  <p className="loop-text lead">Businessman</p>
                  <p className="loop-text lead">Photographer</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="d-flex btn-wrapper">
                  <a className="px-btn px-btn-theme mr-4" href="#work">
                    {sliderContent.btnText2}
                  </a>
                  <a className="px-btn btn-outline " href="#contactus">
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-md-6 order-1 order-md-2">
              <img src="img/slider/home-professional-2.png" alt="about image" />
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div className="go-to go-to-next">
          <a href="#about">
            <span></span>
          </a>
        </div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderFive;
