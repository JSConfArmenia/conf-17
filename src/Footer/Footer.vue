<template>
  <footer class="Footer">
    <a href="#Intro" v-smooth-scroll="{ duration: 600 }"><Logo /></a>
    <p class="Description">
      coded in Vue.js by
      <a href="https://github.com/HenrikhAbajyan" class="CreditLink">Henrikh Abajyan</a>
    </p>

    <div class="SocialLinks">
      <a href="https://github.com/JSConfArmenia/" class="SocialLink">
        <i class="fa fa-github" aria-hidden="true"></i>
      </a>


      <a href="https://twitter.com/jsconf_am/" class="SocialLink">
          <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>

      <a href="https://www.facebook.com/jsconf.am/" class="SocialLink">
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>

      <a href="https://www.instagram.com/jsconf.am/" class="SocialLink">
        <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>

    </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #343d47;
  padding: 50px 0 35px 0;
}

.Logo {
  margin-bottom: 15px;
}

.Description {
  color: #999ea3;
  font-size: 14px;
}

.Description a {
  font-size: inherit;
}

.CreditLink {
  text-decoration: underline;
}

.SocialLinks {

}

.SocialLink {
  font-size: 25px;
  text-decoration: none;
  margin: 0 5px;
}

a {
  color: #999ea3;
  text-decoration: none;
}

a:hover {
  color: #4bb463;
}

</style>
