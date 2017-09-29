<template>

  <div class="Intro">
    <div class="Container">

      <div class="Background">

        <div class="IntroGroup">

          <div class="Countdown">
            <Countdown date="1511589600" />
          </div>

          <div class="Paragraph">
            <p class="IntroTitle">JavaScript CONFERENCE 2017</p>
            <p class="IntroSubtitle">25 NOVEMBER, 2017, YEREVAN</p>
          </div>

        </div>

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

<style>


.Background {
  display: flex;
  align-items: center;
  background-image: url(..//_common/Assets/luca-bravo-217276.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
}

.IntroGroup {
  display: flex;
  flex-direction: column;
  padding: 0 380px;

}

.IntroTitle {
  color: #fff;
  font-size: 62px;
  font-weight: 900;
}

.IntroSubtitle {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}

</style>
