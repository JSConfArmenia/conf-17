<template>

  <header class="Header">
    <div class="Container">

      <div class="HeaderGroup">
        <div class="Logo">
          <img src=""> {jsconf.am}
        </div>
        <div class="Nav">
          <nav class="Nav">
            <a href="#">HOME</a>
            <a href="#">SPEAKERS</a>
            <a href="#">SCHEDULE</a>
            <a href="#">SPONSERS</a>
            <a href="#">SHORTCODES</a>
          </nav>
        </div>

      </div>

    </div>
  </header>

</template>



<script>
export default {

};
</script>



<style>

.Header {
  display: flex;
  height: 64px;
  background-color: black;
  justify-content: center;
  align-items: center;
}

.Header .HeaderGroup {
  display: flex;
  height: 64px;
  width: 1170px;
  background-color: rgba(255, 255, 255, 0.8);
  justify-content: center;
  justify-content: space-around;
  align-items: center;

}

.Nav a {
  color: #ccc;
}

.Logo {
  color: #ccc;
}

</style>
