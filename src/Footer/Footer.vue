<template>
  <footer class="Footer">
    <a href="#Intro" v-smooth-scroll="{ duration: 600 }"><Logo /></a>
    <p class="description">2017 Yerevan</p>
    <a href="https://github.com/JSConfArmenia"><i class="fa fa-github" aria-hidden="true"></i></a>
  </footer>
</template>

<script>
import Logo from '../_common/Logo';

export default {
  components: {
    Logo,
  },
};

</script>

<style scoped>
.Footer {
  text-align: center;
  background-color: #343d47;
  padding: 50px 0 35px 0;
}

.Logo {
  margin-bottom: 15px;
}

.description {
  color: #999ea3;
  font-size: 18px;
}

a {
  color: #999ea3;
  font-size: 25px;
  text-decoration: none;
}

/*a:hover {
  color: #4bb463;
}*/


</style>
