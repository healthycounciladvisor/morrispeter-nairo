import React from "react";
import PreviewDemoGallery from "../components/PreviewDemoGallery";
import useDocumentTitle from "../components/useDocumentTitle";

const FeaturesContent = [
  {
    img: "1",
    title: "React 17.0.2",
    descriptions: `We used latest react vertion ^17.0.2. Max Components are Reusable for you. It's a awesome design made by React.`,
    delayAnimation: "",
  },
  {
    img: "2",
    title: "Bootstrap 5 CSS",
    descriptions: `Made this template Bootstrap 5 CSS Without Jquery. So definitely 100% Responsive & fit any type of devices.`,
    delayAnimation: "200",
  },
  {
    img: "5",
    title: "Sass Available",
    descriptions: `It's tamplate has Sass available for css.All Modules are well oraganized. You can Change css by sass`,
    delayAnimation: "400",
  },
  {
    img: "4",
    title: "Well Documented",
    descriptions: `It's documented organized way Both Online and Offline. So anyone start from zero knowledge.`,
    delayAnimation: "600",
  },
  {
    img: "3",
    title: "Perfect Responsive",
    descriptions: `It's 100% Responsive for all devices such as mobile, tablet, desktop even larger screen device too.`,
  },
  {
    img: "6",
    title: "Fast Loading Speed",
    descriptions: `Since it's made with Latest React JS so u get faster loading speed.It's enhance your pages ultra super fast`,
    delayAnimation: "200",
  },
  {
    img: "7",
    title: "Modern Design",
    descriptions: `It's followed with modern, creative and trendy design for Creative people and Organization.`,
    delayAnimation: "400",
  },
  {
    img: "8",
    title: "24/7 Support",
    descriptions: `We are provide 24/7  support for all clients.You can purchase without any type of hesitation.`,
    delayAnimation: "600",
  },
];

const Preview = () => {
  useDocumentTitle("Nario - Preview || React Personal Portfolio Template");
  return (
    <>
      <section
        className="section demo-section preview-section theme-light dark-bg"
        id="demo"
      >
        <div className="container">
          {/* End tile */}
          <div className="preview-inner">
            <PreviewDemoGallery />
          </div>
        </div>

        <span className=" preview-sticker pos-sticker react-sticker">
          <h6>React</h6>
          <img src="img/preview/react.svg" alt="react krozo" />
        </span>
      </section>
      {/* End Preview section */}

      <section className="section feature-section " id="features">
        <div className="container-fluid">
          <div className="title-wrapper text-center">
            <span className="tag">Features</span>
            <h2 className="text-black title">
              <span className="theme-color ">David Meier</span> All Features
            </h2>
          </div>

          <div className="row">
            {FeaturesContent.map((val, i) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 my-3"
                key={i}
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="feature-box-01">
                  <div>
                    <div className="icon">
                      <img
                        src={`img/preview/features/${val.img}.svg`}
                        alt="features"
                      ></img>
                    </div>
                    <div className="feature-content">
                      <h5>{val.title}</h5>
                      <p>{val.descriptions}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End feature section */}

      <section className="section theme-light dark-bg purchase-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <div className="purchase-block-inner">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  You are at the right step now
                </h6>

                <h3
                  className="m-15px-b"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Purchase The Nairo and Build Your Own{" "}
                  <span className="theme-color">React JS</span> &{" "}
                  <span className="theme-color">Bootstrap5 </span> Based
                  Portfolio Template.
                </h3>

                <a
                  href="https://themeforest.net/item/nairo-react-personal-portfolio-template/33404455"
                  className="px-btn px-btn-white"
                  target="_blank"
                  rel="noreferrer"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <span>Buy Now</span>
                </a>
              </div>
              {/* End .purchase-block-inner */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
