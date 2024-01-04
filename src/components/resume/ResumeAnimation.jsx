import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Sr. Software Developer`,
    jobType: `Google | Remote`,
    jobDuration: `Aug 2016 - Jun 2017`,
    timeDuraton: `Full Time`,
    compnayName: "Integrated! Pte Ltd",
    jobDescription: `In my academic years at Integrated!, I secured an intern role with Ltd-al as a Software Developer for an intensive year-long program. This unpaid internship was instrumental in transitioning my theoretical knowledge into practical skills. Upon completion, Ltd-al extended a full-time offer acknowledging my capabilities.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Software Engineer`,
    jobType: `Ridian | Remote`,
    jobDuration: `Jun 2017 - Jun 2018`,
    timeDuraton: `Part Time`,
    compnayName: "Lufthansa Industry Solutions",
    jobDescription: `Following the successful completion of my internship program, I was presented with an exciting opportunity to work with Lufthansa on a one-year contract, collaborating with a prestigious company based in Singapore and other countries. Joining a specialized team within Lufthansa, my primary focus revolved around building and implementing APIs, as well as applying Object-Oriented Programming (OOP) software design patterns, primarily utilizing JavaScript and Python.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Full Stack Developer`,
    jobType: `IbThemes | Remote`,
    jobDuration: `Aug 2018 - Jun 2023`,
    timeDuraton: `Full Time`,
    compnayName: "VA Leaders Group",
    jobDescription: ` As a freelance developer collaborating with Leaders Group, I've gained experience in building and maintaining web applications with a range of technologies, working with a team of skilled developers.`,
    delayAnimation: "200",
  },
];

const educatonContent = [
  {
    passingYear: "Sep 2015-Jul 2019",
    degreeTitle: "Ph.D in Horriblensess",
    instituteName: "High School Diploma",
  },
  {
    passingYear: "Oct 2019-Jul 2022",
    degreeTitle: "Bsc. in Computer Science",
    instituteName: "Bachelor of Applied Science - BASc",
  },
  {
    passingYear: "Sep 2023-Present",
    degreeTitle: "Graphic Artist Training ",
    instituteName: "Master of Computer Applications - MCA",
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
