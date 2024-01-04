import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Branding", "Photography", "Fashion", "Product"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-1.jpg",
        width: 400,
        height: 550,
        title: "Bottle Illustration",
        subTitle: "Figma Shoot",
        alterText: "Bottle Illustration",
        portfolioLink:
          "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-2.jpg",
        width: 400,
        height: 400,
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        portfolioLink:
          "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-3.jpg",
        width: 400,
        height: 700,
        title: "Visual Design",
        subTitle: "Themeforest Marke",
        alterText: "Business Mockup",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-4.jpg",
        width: 400,
        height: 400,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "E-Cosmetics",
        portfolioLink:
          "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-5.jpg",
        width: 400,
        height: 700,
        title: "Chatting Application",
        subTitle: "Codecanyon Market",
        alterText: "Bottle Illustration",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 400,
        height: 500,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-7.jpg",
        width: 400,
        height: 700,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "Business Card",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-8.jpg",
        width: 400,
        height: 550,
        title: "Chatting App Design",
        subTitle: "Codecanyon Market",
        alterText: "Chatting App Design",
        portfolioLink:
          "https://www.behance.net/gallery/128278341/Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-9.jpg",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "Web Motion",
        portfolioLink: "https://www.facebook.com/ibthemes",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 400,
        height: 550,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-3.jpg",
        width: 400,
        height: 700,
        title: "Visual Design",
        subTitle: "Themeforest Marke",
        alterText: "Business Mockup",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-8.jpg",
        width: 400,
        height: 550,
        title: "Chatting App Design",
        subTitle: "Codecanyon Market",
        alterText: "Chatting App Design",
        portfolioLink:
          "https://www.behance.net/gallery/128278341/Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-4.jpg",
        width: 400,
        height: 400,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "E-Cosmetics",
        portfolioLink:
          "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-2.jpg",
        width: 400,
        height: 400,
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        portfolioLink:
          "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
      },

      {
        img: "/img/portfolio/m-portfolio-5.jpg",
        width: 400,
        height: 700,
        title: "Chatting Application",
        subTitle: "Codecanyon Market",
        alterText: "Bottle Illustration",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 400,
        height: 550,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-1.jpg",
        width: 400,
        height: 550,
        title: "Bottle Illustration",
        subTitle: "Figma Shoot",
        alterText: "Bottle Illustration",
        portfolioLink:
          "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-7.jpg",
        width: 400,
        height: 700,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "Business Card",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-9.jpg",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "Web Motion",
        portfolioLink: "https://www.facebook.com/ibthemes",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-2.jpg",
        width: 400,
        height: 400,
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        portfolioLink:
          "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-3.jpg",
        width: 400,
        height: 700,
        title: "Visual Design",
        subTitle: "Themeforest Marke",
        alterText: "Business Mockup",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },

      {
        img: "/img/portfolio/m-portfolio-5.jpg",
        width: 400,
        height: 700,
        title: "Chatting Application",
        subTitle: "Codecanyon Market",
        alterText: "Bottle Illustration",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 400,
        height: 550,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div className="portfolio-box-01" key={i}>
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default Portfolio;
