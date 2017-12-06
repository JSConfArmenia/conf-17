<template>
  <div id="app">
    <AppHeader />

    <Intro />

    <About />

    <Schedule />

    <Speakers />

    <Sponsors />

    <Team />

    <Location />

    <Faq />

    <Quizz />

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './Header';
import Intro from './Intro';
import About from './About';
import Schedule from './Schedule';
import Speakers from './Speakers';
import Quizz from './Quizz';
import Sponsors from './Sponsors';
import Team from './Team';
import Location from './Location';
import Faq from './Faq';
import AppFooter from './Footer';

export default {
  name: 'app',
  components: {
    AppHeader,
    Intro,
    About,
    Schedule,
    Speakers,
    Quizz,
    Sponsors,
    Team,
    Location,
    Faq,
    AppFooter,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i');
/*@import url('bootstrap/dist/css/bootstrap-reboot.css');*/
/*@import url('bootstrap/dist/css/bootstrap-grid.css');*/

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a:hover {
  color: #4bb463;
}

.Container {
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 15px;
}

.Title {
  font-size: 36px;
  color: #333;
  font-weight: 900;
  margin-bottom: 20px;
  line-height: normal;
}

.Button {
  font-size: 16px;
  line-height: 16px;
  color: rgb(255, 255, 255);
  background: #ccc;
  border-radius: 4px;
  font-weight: 500;
  padding: 15px 30px;
  display: inline-block;
  text-decoration: none;
  transition: all .3s ease;
}

.Button.-small {
  font-size: 12px;
  padding: 10px 20px;
}

.Button.-outline {
  background: transparent;
  border: 1px solid;
}

.Button.-outline:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.Button.-blue.-outline {
  color: #008bc2;
  border-color: #008bc2;
}

/* .Button.-blue.-outline:hover {
  color: #006f9a;
  border-color: #006f9a;
} */

.Button.-purple {
  background: rgb(146, 39, 143);
  border-color: rgb(146, 39, 143);
}

.Button.-purple:hover {
  background: rgb(107, 18, 104);
  border-color: rgb(107, 18, 104);
}

.Button.-green {
  background: rgb(138, 195, 41);
}

.Button.-green:hover {
  background-color: rgb(122, 176, 30);
}

.Button.-orange {
  background-color: #FF8A00;
}

.Button:hover {
  text-decoration: none;
  color: #fff;
}

</style>
