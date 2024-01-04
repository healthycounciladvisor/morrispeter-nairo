import React from "react";
import TextLoop from "react-text-loop";

const sliderContent = {
  name: "Risue Nairobi",
  description: `Ever since I was a little child, I grew fond of programming, just like I was born for it and now I got confidence to make the world bette place.
Logical and result-driven software developer dedicated to building and optimizing user-focused websites and applications. Judicious and creative when crafting effective websites, apps and ecommerce platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with calm and focused attitude.`,
  btnText: " Donwload CV",
};

const SliderTwo = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/slider/home-banner-2.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-12">
              <div className="type-box">
                <h6>Hello, My name is</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                  <p className="loop-text lead"> Software Engineer</p>
                  <p className="loop-text lead">Visual Designer</p>
                  <p className="loop-text lead"> Grphic Designer</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="mt-4">
                  <a
                    className="px-btn px-btn-white"
                    href="img/resume.png"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderTwo;
