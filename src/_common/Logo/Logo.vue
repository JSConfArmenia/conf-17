<template>
  <div class="Logo">

    <div class="LogoImg"></div>
    <!-- <span class="Brace">{</span> -->
    <span class="JS">js</span><span class="Conf">conf</span><span class="Domain">.am</span>
    <!-- <span class="Brace">}</span> -->

  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

.Logo {
  display: flex;
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  white-space: nowrap;
  text-decoration: none;
  align-items: center;
}

.LogoImg {
  height: 45px;
  width: 45px;
  background-color: #fff200;
  margin-right: 15px;
  background-image: url(../../_assets/LogoImg.svg);
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: right 1px bottom 2px;
}

.Conf {
  color: #fff200;
}

</style>
