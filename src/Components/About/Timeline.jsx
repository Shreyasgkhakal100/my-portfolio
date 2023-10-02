import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"June 2022 -Present "}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Placement Coordinator
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             Coimbatore Institute of Technology
            </h4>
            <p data-aos="fade-right">
            As a Student Placement Coordinator, I am playing a pivotal role in bridging the gap between students and prospective employers. My responsibilities included organizing career fairs, facilitating workshops, and connecting students with valuable internship and job opportunities. I am proud to have contributed to the successful career journeys of numerous students, making a positive impact on their professional futures.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Dec 2022 - Mar 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Vice chairman -MELINIA 2K23 (National level Technical Symposium)
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Coimbatore Institute Of Techonology
            </h4>
            <p data-aos="fade-right">
              
The Vice Chairman of a national-level technical symposium is a key leadership role responsible for assisting in the planning, coordination, and execution of the event. They oversee various committees, manage budgets, seek sponsorship, coordinate logistics, and ensure the success of the symposium by collaborating with a team of organizers.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Jul 2022 - Nov2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
             Product Engineer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Smartail Pvt ltd
            </h4>
            <p data-aos="fade-right">
            In my role as a web developer in Chennai, India, I designed and implemented a responsive and user-friendly UI using Angular. I integrated the Java Spring framework to establish seamless communication between the website and the database, ensuring efficient data processing. My collaborative efforts with the team resulted in the successful delivery of a fully functional application within the specified timeframe
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Mar 2020 - Mar2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Public Relations
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             GirlsScript Community
            </h4>
            <p data-aos="fade-right">
            The Girls Script PR team is pivotal in shaping a positive image for the community. We managed communication, foster engagement, and promote events, ensuring a strong online and offline presence. Additionally, we handle crisis management and seek partnerships to amplify the community's impact, all while advocating for women in tech.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jun 2020 - May 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
            FootBall @Sports club
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             Coimbatore Institute of Technology
            </h4>
            <p data-aos="fade-right">
            I played college football at CIT College, showcasing my dedication and teamwork on the field while contributing to the team's success.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"May2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
             Hackathon Runners-Up
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             Melinia 2022
            </h4>
            <p data-aos="fade-right">
            Secured the Runner-Up position in a hackathon by presenting our innovative carpooling app concept. Our user-centric design, real-time algorithms, and push notification system significantly reduced travel costs, carbon emissions, and boosted user engagement, showcasing the potential for sustainable and efficient transportation solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Aug 2019-2024"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student [MSC (Software systems)]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             Coimbatore Institute of technology,COIMBATORE
            </h4>
            <p data-aos="fade-right">
            My CGPA 8.37 reflects my consistent commitment to academic excellence, showcasing my strong foundation of knowledge and dedication to continuous learning.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
