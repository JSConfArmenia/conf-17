<template>

  <header class="Header">
    <div class="Container">

      <div class="HeaderGroup">

        <img src="..//_common/Assets/logo.png">
        <div class="Nav">
          <a href="#">HOME<i class="fa fa-chevron-down" aria-hidden="true"></i></a>
          <a href="#">SPEAKERS<i class="fa fa-chevron-down" aria-hidden="true"></i></a>
          <a href="#">SCHEDULE<i class="fa fa-chevron-down" aria-hidden="true"></i></a>
          <a href="#">SPONSERS<i class="fa fa-chevron-down" aria-hidden="true"></i></a>
          <a href="#">SHORTCODES<i class="fa fa-chevron-down" aria-hidden="true"></i></a>
        </div>

      </div>

    </div>
  </header>

</template>



<script>
export default {

};

</script>



<style scoped>

.Header {
  display: flex;
  position: fixed;
  height: 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.HeaderGroup {
  display: flex;
  height: 64px;
  width: 1170px;
  margin-top: 80px;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  color: #fff;
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

.Nav a:hover {
  color: #4bb463;
}

</style>
