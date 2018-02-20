<template>

  <section class="Intro" id="Intro">
    <div class="Container">

        <div class="IntroGroup">

          <!-- <Countdown date="1512799200" /> -->
          <h1 class="Title">JavaScript Conference Armenia</h1>
          <h2 class="Date">9 DECEMBER, 2017, YEREVAN</h2>

          <div class="Slider">
            <carousel paginationColor="#fff" paginationActiveColor="#fff100" :scrollPerPage="true" :perPageCustom="[[768, 2]]" :perPage="1">

              <slide>
                <div
                  class="img"
                  style="background-image:url(https://scontent.fevn2-1.fna.fbcdn.net/v/t31.0-8/25073382_10155901859576310_7197177847728231952_o.jpg?oh=80b0ed6233fb0f6553cced97b7f6fbb7&oe=5B1F3029);">
                </div>
              </slide>
              <slide>
                <div
                  class="img"
                  style="background-image:url(https://scontent.fevn2-1.fna.fbcdn.net/v/t31.0-8/24837668_10155901859646310_7184010251237274349_o.jpg?oh=621f59c6fb75fae7a6daf04bcbf6a9b0&oe=5B03F530);">
                </div>
              </slide>
              <slide>
                <div
                  class="img"
                  style="background-image:url(https://scontent.fevn2-1.fna.fbcdn.net/v/t31.0-8/25311366_2060198000878736_8007967802216877135_o.jpg?oh=a432be0079e2da4c5d671f9aced64c03&oe=5B21FD22);">
                  </div>
              </slide>
              <slide>
                <div
                  class="img"
                  style="background-image:url(https://scontent.fevn2-1.fna.fbcdn.net/v/t31.0-8/25488282_2063412387223964_7752152735492823967_o.jpg?oh=e38180806609669280f4672f84d0f340&oe=5B0F68F7);">
                </div>
              </slide>
              <slide>
                <div
                  class="img"
                  style="background-image:url(https://scontent.fevn1-2.fna.fbcdn.net/v/t31.0-8/25398349_2060941760804360_5085872716075965987_o.jpg?oh=d0d9099bc1be4883d83bdbdbb30ea8af&oe=5B189349);">
                </div>
              </slide>
              <slide>
                <div
                  class="img"
                  style="background-image:url(https://scontent.fevn1-2.fna.fbcdn.net/v/t31.0-8/25358642_2061089900789546_1995170973837600892_o.jpg?oh=c1081d1fa1888731fd5d6a7bf0b8ec8e&oe=5B1B92E6);">
                </div>
              </slide>
              <slide>
                <div
                  class="img"
                  style="background-image:url(https://scontent.fevn1-2.fna.fbcdn.net/v/t31.0-8/26233216_2076259919272544_888604210942923356_o.jpg?oh=139a5605152cede24da5f2368342686f&oe=5B20DEFD);">
                </div>
              </slide>
              <slide>
                <div
                  class="img"
                  style="background-image:url(https://scontent.fevn2-1.fna.fbcdn.net/v/t31.0-8/25075047_1587047164684265_4184221564023360476_o.jpg?oh=69eabdb289a9762787e636437ed0f2f3&oe=5B1E3E12);">
                </div>
              </slide>

            </carousel>
          </div>

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
// import Countdown from './Countdown';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Intro',
  components: {
    // Countdown,
    Carousel,
    Slide,
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

.Slider {
  max-width: 980px;
}

.img {
  width: 450px;
  height: 450px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
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
  margin-bottom: 50px;
}

@media (max-width: 768px) {

  .Intro {
    min-height: 0;
    height: auto;
    padding-top: 100px;
    padding-bottom: 40px;
    flex-direction: column;
  }

  .Slider {
    max-width: 300px;
  }

  .img {
    width: 220px;
    height: 220px;
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
