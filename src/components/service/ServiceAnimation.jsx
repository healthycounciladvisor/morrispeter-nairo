import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Web Design",
    descriptions: `On-Demand Access to Yard Space`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Web Development",
    descriptions: `Energie voor elkaar`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Seo Marketing",
    descriptions: `Yo LUXURY TRAVEL STARTS HERE`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
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
