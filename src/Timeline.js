import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Typography from '@material-ui/core/Typography';

import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import StarIcon from '@material-ui/icons/Star';
import LIC from './ChristianLogoFinal.png';
import fsa from './fsa.jpg';
import gb from './gb.png';
import unlv from './unlv.jpg';
import fcr from './fcr.png';
import vision from './vision.jpg';

const Timeline = () => {
  return (
    <React.Fragment>

      <Typography
            component="div"
            variant="h1"
            align="center"
            gutterBottom= {true}
            style={{color: "white"}}
          >
            // Timeline
      </Typography>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'grey', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="November 2020 - Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src={LIC} alt="" height="100%" width="100%" position="sticky"/>}
        >
          <h3 className="vertical-timeline-element-title">Life In Code LLC</h3>
          <h4 className="vertical-timeline-element-subtitle">Fullstack Engineer</h4>
          <h4 className="vertical-timeline-element-subtitle">Contract, Remote</h4>
          <p>
            Fullstack mobile and web app development/deployment mainly utilizing React and AWS services
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2020 - December 2020"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<img src={fsa} alt="" height="100%" width="100%" position="sticky" style={{borderRadius: '50px'}}/>}
        >
          <h3 className="vertical-timeline-element-title">Fullstack Academy</h3>
          <h4 className="vertical-timeline-element-subtitle">Fullstack Web Development Certificate</h4>
          <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
          <p>
            React, Node.js, Express, Postgres, git/github, Mocha, REST API, HTML/CSS, Sequelize
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'grey', color: '#fff' }}
          date="February 2018 - November 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src={gb} height='100%' width='100%' position='sticky' alt="" style={{borderRadius: '50px'}} />}
        >
          <h3 className="vertical-timeline-element-title">GB Sciences, Inc</h3>
          <h4 className="vertical-timeline-element-subtitle">Director of Finance</h4>
          <h4 className="vertical-timeline-element-subtitle">Las Vegas, NV</h4>
          <p>
            Managed a team of 3 handling monthly state compliance reports, SEC reports (10K & 10Q), and bank reconciliations; <br /><br />  Technologies Used: STATA & Tableau
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2013 - December 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src={unlv} height='100%' width='100%' position='sticky' alt="" style={{borderRadius: '50px'}} />}
        >
          <h3 className="vertical-timeline-element-title">University of Nevada, Las Vegas</h3>
          <h4 className="vertical-timeline-element-subtitle">BSBA Economics & Finance Dual Degree</h4>
          <h4 className="vertical-timeline-element-subtitle">Las Vegas, Nevada</h4>
          <p>
            Lambda Chi Alpha (President, Internal VP, External VP, Executive Committe, Alumni Chair, Associate Member Educator), Financial Management Assocation, Threesquare Foodbank Volunteer, Las Vegas Rescue Mission Cafeteria Worker Volunteer
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'grey', color: '#fff' }}
          date="April 2013 - February 2017"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src={fcr} height='100%' width='100%' position='sticky' alt="" style={{borderRadius: '50px'}} />}
        >
          <h3 className="vertical-timeline-element-title">USCCR Registration LTD</h3>
          <h4 className="vertical-timeline-element-subtitle">Operations Manager</h4>
          <h4 className="vertical-timeline-element-subtitle">Las Vegas, NV</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2015 - October 2015"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<img src={vision} height='100%' width='100%' position='sticky' alt="" style={{borderRadius: '50px'}} />}
        >
          <h3 className="vertical-timeline-element-title">Sunnova Energy (Vision Solar)</h3>
          <h4 className="vertical-timeline-element-subtitle">Energy Advisor (Summer Sales)</h4>
          <h4 className="vertical-timeline-element-subtitle">Las Vegas, NV</h4>
          <p>
            Worked full-time, <b>solely Door-to-Door sales</b>, in the beautiful (not) Las Vegas desert heat as the Top 5 Salesman of the entire team
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<ChildFriendlyIcon />}
        />
      </VerticalTimeline>
    </React.Fragment>
  )
}

export default Timeline;
