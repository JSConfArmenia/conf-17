<template>
  <header class="Header -sticked">
    <div class="Container">

      <div class="Logo">
        <span class="Brace">{</span>
        <span class="JS">js</span><span class="Conf">conf</span><span class="Domain">.am</span>
        <span class="Brace">}</span>
      </div>

      <div class="Nav">
        <a href="#">SCHEDULE</a>
        <a href="#">SPEAKERS</a>
        <a href="#">SPONSERS</a>
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
  position: absolute;
  width: 100%;
  /*padding-top: 5px;*/
  /*padding-bottom: 5px;*/
}

.Header.-sticked {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  /*padding-top: 0;*/
  /*padding-bottom: 0;*/
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
  /*color: #8dc63f;*/
}

.Domain {

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
