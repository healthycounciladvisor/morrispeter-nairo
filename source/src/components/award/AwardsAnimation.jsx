import React from "react";

const AwardContnet = [
  {
    img: "a1",
    awardName: "Creative Designer",
    awardFor: "Site of the day",
    delayAnimation: "0",
  },
  {
    img: "a2",
    awardName: "Yearly Best Performer",
    awardFor: "Site of the day",
    delayAnimation: "200",
  },
  {
    img: "a3",
    awardName: "Best Learner Award",
    awardFor: "Site of the day",
    delayAnimation: "400",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.png`} alt="award" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
