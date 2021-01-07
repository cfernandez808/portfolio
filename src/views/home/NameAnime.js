import React, {useEffect} from 'react';
import '../../css/NameAnime.css'
import anime from 'animejs/lib/anime.es.js';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const NameAnime = () => {
  const opacityIn = [0,1];
  const scaleIn = [0.2, 1];
  const scaleOut = 3;
  const durationIn = 500;
  const durationOut = 300;
  const delay = 300;


  useEffect(() => {
    anime.timeline({loop: true})
      .add({
        targets: '.ml4 .letters-1',
        opacity: opacityIn,
        scale: scaleIn,
        duration: durationIn
      }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: scaleOut,
        duration: durationOut,
        easing: "easeInExpo",
        delay: delay
      }).add({
        targets: '.ml4 .letters-2',
        opacity: opacityIn,
        scale: scaleIn,
        duration: durationIn
      }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: scaleOut,
        duration: durationOut,
        easing: "easeInExpo",
        delay: delay
      }).add({
        targets: '.ml4 .letters-3',
        opacity: opacityIn,
        scale: scaleIn,
        duration: durationIn
      }).add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: scaleOut,
        duration: durationOut,
        easing: "easeInExpo",
        delay: delay
      }).add({
        targets: '.ml4 .letters-4',
        opacity: opacityIn,
        scale: scaleIn,
        duration: durationIn
      }).add({
        targets: '.ml4 .letters-4',
        opacity: 0,
        scale: scaleOut,
        duration: durationOut,
        easing: "easeInExpo",
        delay: delay
      }).add({
        targets: '.ml4 .letters-5',
        opacity: opacityIn,
        scale: scaleIn,
        duration: durationIn
      }).add({
        targets: '.ml4 .letters-5',
        opacity: 0,
        scale: scaleOut,
        duration: durationOut,
        easing: "easeInExpo",
        delay: delay
      }).add({
        targets: '.ml4 .letters-6',
        opacity: opacityIn,
        scale: scaleIn,
        duration: durationIn
      }).add({
        targets: '.ml4 .letters-6',
        opacity: 0,
        scale: scaleOut,
        duration: durationOut,
        easing: "easeInExpo",
        delay: delay
      }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
      });
  })
  return (
    <React.Fragment>
      <Container component="div" className="ml4" maxWidth="md" >
        <Typography component="span" variant="h1" className="letters letters-1">Christian</Typography>
        <Typography component="span" variant="h1"  className="letters letters-2">Bryce</Typography>
        <Typography component="span" variant="h1"  className="letters letters-3">Fernandez</Typography>
        <Typography component="span" variant="h1" className="letters letters-4">Fullstack</Typography>
        <Typography component="span" variant="h1"  className="letters letters-5">Software</Typography>
        <Typography component="span" variant="h1"  className="letters letters-6">Engineer</Typography>
      </Container>
    </React.Fragment>
  )
}

export default NameAnime;
