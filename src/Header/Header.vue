<template>
  <header class="Header -sticked">
    <div class="Container">

      <Logo />
      <div class="Nav">
        <a href="#">SCHEDULE</a>
        <a href="#">SPEAKERS</a>
        <a href="#">SPONSERS</a>
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
}

.Header.-sticked {
  position: fixed;
  background-color: rgba(38, 42, 48, 0.8);
}

.Container {
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-items: center;
  height: 66px;
}

.Logo {
  font-size: 32px;
  color: #fff;
  font-weight: bold;
}

.Brace {
  color: rgba(255, 255, 255, 0.5);
}

.JS {
}

.Conf {
  color: #8dc63f;
}

.Nav {
  word-spacing: 15px;
  font-size: 14px;
  font-weight: 900;
 }

.Nav a {
  text-decoration: none;
  cursor: pointer;
  color: #fff
}

</style>
