import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Web Design",
    descriptions: `On-Demand Access to Yard Space`,
  },
  {
    icon: "icon-desktop",
    title: "Web Development",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    icon: "icon-target",
    title: "Seo Marketing",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
