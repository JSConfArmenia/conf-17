<template>
  <div id="app">
    <AppHeader />

    <Intro />

    <Schedule />

    <!-- <Speakers /> -->

    <Location />

    <!-- <Team /> -->

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

a:hover {
  color: #4bb463 !important;
}

</style>
