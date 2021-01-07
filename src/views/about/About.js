/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import leaves from '../../pub/leaves.jpg'

export default function Bio() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="div" maxWidth="lg">
        <Typography
          component="div"
          variant="h2"
          align="center"
          gutterBottom= {true}
          style={{color: "white"}}
        >
          <SportsEsportsRoundedIcon style={{fontSize: '8rem', position: 'relative', paddingTop: 80}}/>About
        </Typography>
        <Container component="div">

          <Typography component="div" style={{color: "white"}}>
            <img maxWidth='100%' width="50%" height='auto'src={leaves} alt="" position='sticky' align="left" style={{marginRight: 10}}/>
            <div>
              <p>
                I was raised into humble beginnings in Hawaii, where I developed my love for video games, building computers, and technology by the age of 13. Moving to Las Vegas, I initially got accepted into West Point but turned it down to attend college at the <b><u>University of Nevada, Las Vegas</u></b> to be with my grandfather whose health was in decline. He passed shortly after I began school, where I finished with a <b><u>B.S.B.A. in Economics & Finance (Dual Degree).</u></b>
              </p>
              <p>
                Some have asked me if I ever regretted my decision of not going to what I thought at the time was my dream school. My answer? Absolutely not. Throughout my time at UNLV I was President, Vice President (twice), Alumni Chair, Executive Committee (twice), and Associate Member Educator of Lambda Chi Alpha. Fell in love. Fell out of love. Served the hungry cafeteria style. Fell in love again. Made friends who turned into family. Fell out of love again. <b><u>Became a blue belt in Jiu Jitsu, won the North American Grappling Association Tournament in 2019, and taught kids the practice</u></b>. Most importantly, I fell in love again, but this time “she” was <b><u>my love to build and create through Software Development.</u></b>
              </p>
              <p>
                After my undergrad <b><u>I quickly rose as the Director of Finance for GB Sciences, serving directly under the company’s CFO, where my colleagues and boss all came from Ernst & Young. Here, I worked exclusively with STATA and Tableau.</u></b> Cool. I was working with technology, and this is what I went to college for. I should be happy, right? Wrong. I loved the benefits, coworkers, and what the company stood for, but what was missing? Simple—<b><u>the problems I was solving weren’t too easy or too hard, but not rewarding enough.</u></b> This is where my want to build and create with technology came full circle.  Seeing my company’s Database Administrator work in Java, PHP, CoffeScript, and other technologies was as exciting as finding the lone curly fry in the box of fries you ordered, and boy do I love surprise-curly-fries.
              </p>
              <p>
                <b><u>I took almost a year of teaching myself JavaScript and Vue.js</u></b> until I took the leap of faith and left my job to pursue my new path. I started with <b><u>attending Fullstack Academy in NYC, where I focused on the PERN stack, in a full-time, agile, and highly collaborative environment</u></b>. For my capstone, I <b><u>learned an entirely new stack</u></b>, different from what Fullstack initially taught. My group and I even created a deep learning application, which was powered by <b><u>AWS S3, DynamoDB, Lambda, Cognito, Rekognition, and React Native</u></b>, to name a few. We are currently fine tuning our “baby” for <b><u>deployment on the iOS app store</u></b>.
              </p>
              <p>
                I’ve been <b><u>developing and deploying web and mobile applications for small to mid-sized businesses</u></b>. My favorite part of my line of work are the completely different challenges that come with every new client, and the problems their ideas plan to solve. There’s a saying that goes something like, “there are a million great ideas out there but only few actually are made.” Ultimately, <b><u>I have a passion for helping others and I want to be that person to help those "lost-great-ideas" find their way to fruition</u></b>.
              </p>
              <p>
                <b><u>Who am I? Working with new technologies excite me. Making an impact on the world through technology fuels me. Video games, anime, and Jiu Jitsu keep me sane. Most importantly innovation through collaboration, a love for being out of my comfort zone, clean code, cleaner user experiences, and Software Development define me. Often times I've been told that I learn new technologies quickly, which is incorrect. Through the illusion, people don't see I try a million-and-one different options, where a million of the options were dead end, and one being a winner.</u></b>
              </p>
            </div>
          </Typography>
        </Container>
      </Container>
    </React.Fragment>
  );
}
