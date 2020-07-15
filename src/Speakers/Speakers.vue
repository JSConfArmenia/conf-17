<script>
import speakers from '@/_services/speakers';

export default {
  data: () => ({
    speakers,
    speakersList: [
      0,
      1,
      15,
      2,
      3,
      12,
      4,
      5,
      6,
      14,
      9,
      10,
      11,
      13,
      7,
      16,
      17,
      18,
      19,
    ],
  }),
  methods: {
    getSpeaker: function getSpeaker(speakerId) {
      return this.speakers[speakerId];
    },
  },
};
</script>


<template>
  <section class="Speakers" id="Speakers">
    <div class="Container">

      <h2 class="Title">WHO ARE THE NINJAS?</h2>
      <div class="row justify-content-center">

        <div
          class="col-sm-6 col-md-4 col-lg-3 col-speaker"
          :class="`-speaker-${speakerId}`"
          v-for="(speakerId, index) in speakersList" :key="index">
          <div
            class="Img"
            v-bind:style="{ backgroundImage: `url(${speakers[speakerId].img})` }">
          </div>
          <h3 class="Name">{{speakers[speakerId].name}}</h3>
          <h5 class="Position">{{speakers[speakerId].position}}</h5>
        </div>

        <div class="col-sm-6 col-md-4 col-lg-3 col-speaker">
          <a href="https://goo.gl/65ecso">
            <div class="Img -blank"></div>
            <h3 class="Name">Your Name</h3>
            <h5 class="Position">Become a Ninja!</h5>
          </a>
        </div>


      </div>

    </div>
  </section>
</template>


<style scoped>

.Speakers {
  overflow: hidden;
}

.row {
  margin-left: -20px;
  margin-right: -20px;
}

.col-speaker {
  padding-left: 20px;
  padding-right: 20px;
}

.Title {
  color: #fff;
  text-align: center;
  margin-bottom: 45px;
}

.Name {
  color: #fff;
}

a {
  text-decoration: none;
}

.Position {
  color: #fff;
  margin-bottom: 20px;
}

.Speakers {
  background-image: url(../_assets/who-is-speaking-2.png);
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 0 50px 0;
}

.Img {
  padding-bottom: 100%;
  margin-bottom: 10px;
  background-size: cover;
  border: 1px solid #ccc;
  background-color: #fff;
}

.Img.-blank {
  background-image: url(../_assets/NINJA1.png);
}

/* .Img.-Tigran {
  background-image: url(../_assets/TigranBayburtsyan.jpg);
} */

</style>
