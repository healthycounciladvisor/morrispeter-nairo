import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+14 695140362",
  email: "morrispeter0311@gmail.com",
};

const sliderContent = {
  name: "David Meier",
  description: `Ever since I was a little child, I grew fond of programming, just like I was born for it and now I got confidence to make the world bette place.
Logical and result-driven software developer dedicated to building and optimizing user-focused websites and applications. Judicious and creative when crafting effective websites, apps and ecommerce platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with calm and focused attitude.`,
  btnText: " Donwload CV",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+14695140362">{conctInfo.phone}</a>
            <a href="morrispeter0311@gmail.com">
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="#">EN</a>
              </li>
              <li>
                <a href="#">FR</a>
              </li>
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6>Hello, My name is</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                  <p className="loop-text lead">SoftWare Developer</p>
                  <p className="loop-text lead"> App Developer</p>
                  <p className="loop-text lead"> App Developer</p>
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
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home-banner.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
