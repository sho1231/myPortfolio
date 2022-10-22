import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  React.useEffect(()=>{
    document.title="Experience"
  },[])
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Don Bosco School,Bandel
          </h3>
          <p>ICSE(10th Board exam)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Nopany High,Barabazzar,Kolkata
          </h3>
          <p>ISC(12th Board)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Academy Of Technology,Hooghly
          </h3>
          <p>B.Tech in CSE</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 Aug - 2022 Sept"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer(Intern) - KonnnectBox
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <p>
            <ul>
              <li>Scraping data using nodejs puppeteer</li>
              <li>Created a drag and drop file upload form using angular in the dev site</li>
              <li>Added filter feature in the dev site with.</li>
              <li>Integrated frontend with backend api.</li>
              <li>Created forms and added realtime valdiations with it.</li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
