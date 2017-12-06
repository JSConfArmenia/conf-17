<template>
  <footer class="Footer">

    <a class="LogoLink" href="#Intro" v-smooth-scroll="{ duration: 600 }"><Logo /></a>


    <div class="SocialLinks">
      <a href="https://github.com/JSConfArmenia/" target="_blank" class="SocialLink">
        <i class="fa fa-github" aria-hidden="true"></i>
      </a>


      <a href="https://twitter.com/jsconf_am/" target="_blank" class="SocialLink">
          <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>

      <a href="https://www.facebook.com/jsconf.am/" target="_blank" class="SocialLink">
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>

      <a href="https://www.instagram.com/jsconf.am/" target="_blank" class="SocialLink">
        <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
    </div>

    <div class="Supplementary">
      Press Release <a href="https://goo.gl/pAqssi" target="_blank">En</a> | <a href="https://goo.gl/jfmjh5" target="_blank">Am</a>
    </div>

    <p class="Credits">
      Design and branding assitance by <a href="https://www.behance.net/Davidtiger" target="_blank"  class="CreditLink">Davit Tigranyan</a>,
      coded in Vue.js by
      <a href="https://github.com/HenrikhAbajyan" target="_blank" class="CreditLink">Henrikh Abajyan</a> &
      <a href="https://github.com/JSConfArmenia/conf-17/graphs/contributors" target="_blank" class="CreditLink">Others</a>.
    </p>

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

a {
  transition: all .3s ease;
}

a {
  color: #999ea3;
  /* text-decoration: none; */
}

a:hover {
  color: #fff;
}

.LogoLink {
  text-decoration: none;
}


.Footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #343d47;
  padding: 45px 0 15px 0;
}

.Logo {
  margin-bottom: 20px;
}

.Credits {
  color: #999ea3;
  font-size: 14px;
}

.Credits a {
  font-size: inherit;
}

.CreditLink {
  text-decoration: underline;
}

.SocialLinks {
  margin-bottom: 15px;
}

.SocialLink {
  font-size: 25px;
  text-decoration: none;
  margin: 0 5px;

}

.SocialLink:hover {
  color: #fff;
}

.Supplementary {
  margin-bottom: 30px;
  color: #999ea3;
}

.Supplementary a {
  font-weight: bold;
  color: #4bb463;
  text-decoration: underline;
}

.Supplementary a:hover {
  color: #fff;
}


</style>
