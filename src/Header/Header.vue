<template>
  <header class="Header -sticked">
    <div class="Container">

      <Logo />
      <div class="Nav">
        <a href="#About">ABOUT</a>
        <a href="#Schedule">SCHEDULE</a>
        <a href="#Speakers">NINJAS</a>
        <a href="#Sponsors">SPONSORS</a>
        <a href="#Team">TEAM</a>
        <a href="#Location">LOCATION</a>
        <!-- <a href="#">CONTACT</a> -->
      </div>

    </div>
  </header>
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

.Header {
  position: absolute;
  width: 100%;
  z-index: 100;
}

.Header.-sticked {
  position: fixed;
  background-color: rgba(41, 53, 61, 0.9);
}

.Container {
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-items: center;
  height: 66px;
}

.Nav {
  font-size: 14px;
  font-weight: 900;
 }

.Nav a {
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  margin: 0 8px;
}

.Nav a:hover {
  color: #4bb463;
}


</style>
