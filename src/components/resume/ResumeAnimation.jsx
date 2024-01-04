import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Sr. Front-end Engineer`,
    jobType: `Google | Remote`,
    jobDuration: `Feb 2021 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Google LLC",
    jobDescription: `Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Visual Designer`,
    jobType: `Ridian | Remote`,
    jobDuration: `Mar 2020 - Present`,
    timeDuraton: `Part Time`,
    compnayName: "Ridian IT",
    jobDescription: `Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor. Lorem ipsum dolor sit amet, consectetur
    adipisicing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Animation Artist`,
    jobType: `IbThemes | Remote`,
    jobDuration: `Jan 2019 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "IB Themes",
    jobDescription: ` Consectetur adipisicing elit,lorem ipsum dolor sit amet,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor.`,
    delayAnimation: "200",
  },
];

const educatonContent = [
  {
    passingYear: "2018-2020",
    degreeTitle: "Ph.D in Horriblensess",
    instituteName: "University Of Evil Doing",
  },
  {
    passingYear: "2013-2016",
    degreeTitle: "Bsc. in Computer Science",
    instituteName: "World University",
  },
  {
    passingYear: "2010-2012",
    degreeTitle: "Graphic Artist Training ",
    instituteName: "Graphic Master Institute",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
