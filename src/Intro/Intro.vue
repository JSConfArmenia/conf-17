<template>

  <div class="Intro">
    <div class="Container">

        <div class="IntroGroup">

          <Countdown date="1511589600" />
          <h1>JavaScript CONFERENCE 2017</h1>
          <h2>25 NOVEMBER, 2017, YEREVAN</h2>

        </div>

    </div>
  </div>

</template>

<script>

import Countdown from '../Countdown';

export default {
  name: 'Intro',
  components: {
    Countdown,
  },
};

</script>

<style scoped>

.IntroGroup{
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  background-image: url(..//_common/Assets/countdown-bg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  padding: 0 380px;
}

h1 {
  color: #fff;
  font-size: 62px;
  font-weight: 900;
}

h2 {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}

</style>
