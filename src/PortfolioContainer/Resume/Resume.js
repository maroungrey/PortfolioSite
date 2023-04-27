import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    // { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  // const projectsDetails = [
  //   {
  //     title: "Lorem Ipsum",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  //     subHeading: "Technologies Used: A, B, C",
  //   },
  //   {
  //     title: "Lorem Ipsum",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  //     subHeading:
  //       "Technologies Used: A, B, C",
  //   },
  //   {
  //     title: "Lorem Ipsum",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  //     subHeading:
  //       "Technologies Used: A, B, C, D",
  //   },
  // ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Western Governors University"}
        subHeading={"BACHELOR OF SCIENCE - BS, Computer Science (in progress)"}
        fromDate={"2022"}
        toDate={"2024"}
      />
<br></br>
      <ResumeHeading
        heading={"Los Angeles City College"}
        subHeading={"Candidate for BS, Computer Science & Engineering"}
        fromDate={"2020"}
        toDate={"2022"}
      />

    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Organic by Nature"}
          subHeading={"FULL STACK DEVELOPER"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <p className="resume-description-text">
            <em>Created, maintained and optimized Shopify, Wordpress, Kajabi and Magento 2 websites by designing custom features and layouts while also fine-tuning internal systems.</em>
          </p>
        </div>
        <br></br>
        <ResumeHeading
          heading={"Bonner Trading"}
          subHeading={"FRONT-END DEVELOPER"}
          fromDate={"2020"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <p className="resume-description-text">
            <em>Developed and managed Magento 2 websites, designed new interfaces and extensions, implemented SEO and Google Analytics, and administered backend Apache server.</em>
          </p>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      <div className='row'>
        <div className='col'>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Shopify Plus</li>
            <li>Bootstrap</li>
            <li>Apache</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className='col'>
          <ul>
          <li>Node.js</li>
          <li>React.js</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>WordPress</li>
          <li>Magento 2</li>
          </ul>
        </div>
      </div>
    </div>,


    /* Interests */
    <div className="resume-screen-container" key="interests">
      {/* <ResumeHeading
        heading=""
        description=""
      />
      <ResumeHeading
        heading="Language Learning"
        description="I'm also an avid language learner. I speak 4 languages at different levels. Living in a multicultural world, I believe it's important to understand and communicate with people from different backgrounds."
      />
      <ResumeHeading
        heading="Growing Plants"
        description="Growing plants is another hobby that brings me great joy. Whether it's tending to my vegetable garden or nurturing indoor plants, I enjoy the peace that comes with caring for living things."
      /> */}
      <div className='resume-main-heading'><span>Wood Carving</span></div>
      <div className='resume-heading-description'>One of my greatest passions is wood carving. There's something incredibly satisfying about taking a piece of raw wood and turning it into a beautiful work of art. I love experimenting with different techniques and creating intricate designs.</div>

      <div className='resume-main-heading'><span>Language Learning</span></div>
      <div className='resume-heading-description'>I'm also an avid language learner. I speak 4 languages at different levels. Living in a multicultural world, I believe it's important to understand and communicate with people from different backgrounds.</div>

      <div className='resume-main-heading'><span>Growing Plants</span></div>
      <div className='resume-heading-description'>Growing plants is another hobby that brings me great joy. Whether it's tending to my vegetable garden or nurturing indoor plants.</div>
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;

    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarouselOffsetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carouselOffsetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
