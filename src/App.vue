<template>
  <div id="app">
    <AppHeader />

    <Intro />

    <Schedule />

    <Speakers />

    <Team />

    <Location />

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './Header';
import Intro from './Intro';
import Schedule from './Schedule';
import Speakers from './Speakers';
import Team from './Team';
import Location from './Location';
import AppFooter from './Footer';

export default {
  name: 'app',
  components: {
    AppHeader,
    Intro,
    Schedule,
    Speakers,
    Team,
    Location,
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
</style>
