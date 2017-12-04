<template>

  <section class="Intro" id="Intro">
    <div class="Container">

        <div class="IntroGroup">

          <Countdown date="1512799200" />
          <h1 class="Title">JavaScript Conference Armenia</h1>
          <h2 class="Date">9 DECEMBER, 2017, YEREVAN</h2>
        </div>

    </div>
    <div class="Sponsors">
      <p class="SponsorsDescription">main sponsors</p>
      <a href="https://www.betconstruct.com/" target="_blank" class="SponsorLink">
        <div class="SponsorLogo -betconstruct">

        </div>
      </a>
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
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 200px 0;
  position: relative;
}

.Sponsors {
  position: absolute;
  right: 10%;
  bottom: 60px;
}

.SponsorsDescription {
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.32);
  margin-bottom: 5px;
  text-align: center;
  font-size: .8em;
}

.SponsorLogo {
  width: 320px;
  height: 80px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.SponsorLogo.-betconstruct {
  background-image: url(../_assets/betconstruct-logo.svg);
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
    min-height: 0;
    height: auto;
    padding-top: 100px;
    padding-bottom: 40px;
    flex-direction: column;
    /* text-align: center; */
  }

  .Title,
  .Date {
    text-align: center;
  }

  .IntroGroup {
    align-items: center;
  }

  .Sponsors {
    padding-top: 20px;
    position: static;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
    font-size: .8em;
  }

  .SponsorLink {
    display: block;
    width: 80%;
    max-width: 300px;
  }

  .SponsorLogo {
    width: 100%;
    padding-bottom: 30%;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 16px;
  }
}

</style>
