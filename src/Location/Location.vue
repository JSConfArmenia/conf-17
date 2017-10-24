<template>
  <section class="Location" id="Location">
    <iframe
      class="Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12191.027769150662!2d44.504405399999996!3d40.192222300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd173fd4d621%3A0x213beef7d45c07c5!2z1YDVodW11aHVvdW_1aHVttWrINSx1bTVpdaA1avVr9W11aHVtiDVgNWh1bTVodWs1b3VodaA1aHVtg!5e0!3m2!1sen!2s!4v1508779141495" height="450" frameborder="0" style="border:0" allowfullscreen>
    </iframe>

  </section>
</template>

<script>
export default {

};
</script>

<style scoped>
.Location {
  width: 100%;
  padding-bottom: 30%;
  min-height: 350px;
  position: relative;
}

.Map {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events:none;
}

</style>













