import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "On-Demand Access to Yard Space",
    descriptions: `Anybody have a demand. It may be about life or about business and boths. 
    If you are a business man, you must consider demand of business. 
    Even if you are a rich manager, you are feeled something about your business.`,
  },
  {
    icon: "icon-desktop",
    title: "YOUR LUXURY TRAVEL STARTS HERE",
    descriptions: `Specializing in Personal Concierge Services and Rentals of Luxury Villas & Hotels, Private Jets, Exclusive Yachts, Exotic Cars & Private Islands`,
  },
  {
    icon: "icon-target",
    title: "Seo Marketing",
    descriptions: `Your Luxury Travel Stars Here`,
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
