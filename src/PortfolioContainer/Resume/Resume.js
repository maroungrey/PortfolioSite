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
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //Skill Progress Bar
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Lorem Ipsum",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      subHeading: "Technologies Used: A, B, C",
    },
    {
      title: "Lorem Ipsum",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      subHeading:
        "Technologies Used: A, B, C",
    },
    {
      title: "Lorem Ipsum",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      subHeading:
        "Technologies Used: A, B, C, D",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Western Governors University"}
        subHeading={"BACHELOR OF SCIENCE - BS, Computer Science (in progress)"}
        fromDate={"2022"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"Los Angeles City College"}
        subHeading={"Candidate for BS, Computer Science & Engineering"}
        fromDate={"2010"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Certificate"}
        subHeading={"Lorem Ipsum"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Organic y Nature"}
          subHeading={"FULL STACK DEVELOPER"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘥 𝘢𝘯𝘥 𝘮𝘢𝘪𝘯𝘵𝘢𝘪𝘯𝘦𝘥 𝘸𝘦𝘣𝘴𝘪𝘵𝘦𝘴, 𝘤𝘳𝘦𝘢𝘵𝘪𝘯𝘨 𝘤𝘶𝘴𝘵𝘰𝘮 𝘧𝘦𝘢𝘵𝘶𝘳𝘦𝘴 𝘢𝘯𝘥 𝘭𝘢𝘺𝘰𝘶𝘵𝘴 𝘧𝘰𝘳 𝘵𝘩𝘦𝘮 𝘢𝘯𝘥 𝘰𝘱𝘵𝘪𝘮𝘪𝘻𝘦𝘥 𝘪𝘯𝘵𝘦𝘳𝘯𝘢𝘭 𝘴𝘺𝘴𝘵𝘦𝘮𝘴.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          - Developed and maintained Shopify eCommerce website, Wordpress and Kajabi blog websites, serving a combined 7,000 daily visitors.
          </span>
          <br />
          <span className="resume-description-text">
            - Redesigned the website's interfaces to match the accessibility standards compliant with the Americans with Disabilities Act (ADA); WCAG Guidelines.
          </span>
          <br />
          <span className="resume-description-text">
            - Maintained the existing Shopify Plus theme and custom apps and modified to accommodate new functionality, created and managed collections, products and metafields.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Wood Carving"
        description="Apart from being a tech enthusiast and a code writer, i also love to carve wooden jewelery in my free time"
      />
      <ResumeHeading
        heading="Language Learning"
        description="Language Learning is something i can never compromise with, I already speak 4 languages on the different levels"
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in video games, pushing the rank and having interactive gaming sessions excites me the most."
      />
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
      className="resume-container screen-container fade-in"
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
