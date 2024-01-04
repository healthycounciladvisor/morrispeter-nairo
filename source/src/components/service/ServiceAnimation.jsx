import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Web Design",
    descriptions: `Anybody have a demand. It may be about life or about business and boths. 
    If you are a business man, you must consider demand of business. 
    Even if you are a rich manager, you are feeled something about your business.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Web Development",
    descriptions: `Alius levert en ontwikkelt duurzame energie-oplossingen. 
    Als groothandel zetten wij ons aljaren in voor positieve energie.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Seo Marketing",
    descriptions: `Specializing in Personal Concierge Services and Rentals of Luxury Villas & Hotels, Private Jets, Exclusive Yachts, Exotic Cars & Private Islands`,
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
