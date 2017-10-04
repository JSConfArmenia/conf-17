<template>
  <section class="Sponsors" id="Sponsors">
    <div class="Container">

      <h3 class="Title">Sponsors and friends</h3>
      <div class="row">

        <!-- Sponsor 1 -->
        <div class="col">
          <a href="https://www.simplytechnologies.net/">
            <div
              class="Img"
              style="background-image: url(https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/10407244_810068769065474_484284539248915848_n.png?oh=b8c7ca57d379b75ae320e4a8ae14d064&oe=5A7A916E)">
            </div>
            <h5 class="OrgName">Simply Technologies</h5>
          </a>
        </div>

        <!-- Sponsor 2 -->
        <div class="col">
          <a href="http://istc.am/en/">
            <div
              class="Img"
              style="background-image: url(https://scontent.fevn1-2.fna.fbcdn.net/v/t31.0-8/21731750_1736095493088418_8372728911051007100_o.jpg?oh=a8f84a82b7ac16c17efd0a2fb30f5141&oe=5A876DAA)">
            </div>
            <h5 class="OrgName">Innovative Solutions and<br />Technologies Center</h5>
          </a>
        </div>
        <!-- Sponsor 3 -->
        <div class="col">
          <a href="https://www.renderforest.com/">
            <div
              class="Img"
              style="background-image: url(https://static.renderforest.com/renderforest/images/v1/logo_dark.svg)">
            </div>
            <h5 class="OrgName">Renderforest</h5>
          </a>
        </div>
        <!-- Sponsor 4 -->
        <!-- <div class="col">
          <a href="http://iteratehackerspace.com/">
            <div
              class="Img"
              style="background-image: url(http://iteratehackerspace.com/static/images/logo.png)">
            </div>
            <h5 class="OrgName">Iterate Hackerspace</h5>
          </a>
        </div> -->

        <!-- Sponsor 5 -->
        <div class="col">
          <a href="https://github.com/modularcode">
            <div
              class="Img"
              style="background-image: url(https://raw.githubusercontent.com/modularcode/modularcode.github.io/master/images/logo.png)">
            </div>
            <h5 class="OrgName">ModularCode</h5>
          </a>
        </div>

    </div>
    </div>
  </section>
</template>

<script>

export default {

};
</script>

<style scoped>

.Sponsors {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(http://demo.themeum.com/wordpress/eventum/wp-content/uploads/2015/09/home-sponsors-bg.jpg?id=152);
  padding: 50px 0 50px;
}

.Img {
  background-size: contain;
  background-position: center;
  width: 150px;
  height: 120px;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.Title {
  color: #92278f;
  text-align: center;
  padding-bottom: 30px;
}

.OrgName {
  color: #666;
  text-align: center;
  margin-bottom:20px;
  padding-top: 10PX;
}

.col:hover * {
  color: #4bb463;
}

a {
  text-decoration: none;
}
</style>

