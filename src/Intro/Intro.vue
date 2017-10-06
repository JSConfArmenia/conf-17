<template>

  <section class="Intro">
    <div class="Container">

        <div class="IntroGroup">

          <Countdown date="1511589600" />
          <h1>JavaScript Conference 2017</h1>
          <h2>25 NOVEMBER, 2017, YEREVAN</h2>

        </div>

    </div>
  </section>

</template>

<script>
import Countdown from './Countdown';

export default {
  name: 'Intro',
  components: {
    Countdown,
  },
};
</script>

<style scoped>

.Intro {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../_assets/countdown-bg.jpg);
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.IntroGroup{
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
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

@media (max-width: 768px) {

  .Intro {
    height: auto;
    padding-top: 100px;
    padding-bottom: 60px;
  }

  h1 {
    font-size: 35px;
  }

  h2 {
    font-size: 20px;
  }
}

</style>
