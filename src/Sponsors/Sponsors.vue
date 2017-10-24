<template>
  <section class="Sponsors" id="Sponsors">
    <div class="Container">

      <h3 class="Title">Sponsors</h3>

      <div class="CallToAction">
        <a href="mailto:jsconf.am@gmail.com" class="Button -green">
          Become a sponsor
        </a>
      </div>

      <div class="Divider">
      </div>

      <h1 class="Title -secondary">Partners and friends</h1>

      <div class="row justify-content-center justify-content-xl-between">

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
          <a href="https://www.simplytechnologies.net/">
            <div
              class="Img"
              style="background-image: url(https://static1.squarespace.com/static/58d20c79725e25b221549193/t/58d26aa9b8a79b902b394c88/1504784019330/?format=1500w)">
            </div>
            <h5 class="OrgName">Simply Technologies</h5>
          </a>
        </div>

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
          <a href="http://istc.am/en/">
            <div
              class="Img"
              style="background-image: url(https://scontent.fevn1-2.fna.fbcdn.net/v/t31.0-8/21731750_1736095493088418_8372728911051007100_o.jpg?oh=a8f84a82b7ac16c17efd0a2fb30f5141&oe=5A876DAA)">
            </div>
            <h5 class="OrgName">Innovative Solutions and<br />Technologies Center</h5>
          </a>
        </div>

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
          <a href="https://www.renderforest.com/">
            <div
              class="Img"
              style="background-image: url('https://static.renderforest.com/renderforest/images/v1/logo_dark.svg')">
            </div>
            <h5 class="OrgName">Renderforest</h5>
          </a>
        </div>

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
          <a href="https://github.com/modularcode">
            <div
              class="Img"
              style="background-image: url(https://raw.githubusercontent.com/modularcode/modularcode.github.io/master/images/logo.png)">
            </div>
            <h5 class="OrgName">ModularCode</h5>
          </a>
        </div>

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
          <a href="http://www.itjobs.am">
            <div
              class="Img"
              style="background-image: url(https://1424647379.rsc.cdn77.org/jsconf/itjobs-logo.svg);background-size: 70%;">
            </div>
            <h5 class="OrgName">itjobs.am</h5>
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
  /*background-image: url(../_assets/home-sponsors-bg.jpg);*/
  padding: 50px 0 50px;
}

.CallToAction {
  text-align: center;
  padding-bottom: 40px;
}

.Img {
  background-size: contain;
  background-position: center;
  width: 150px;
  height: 120px;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.Divider {
  border-bottom: 1px solid rgba(141, 198, 63, 0.5);
  margin-bottom: 20px;
}

.Title {
  color: #92278f;
  text-align: center;
}

.-secondary {
  font-size: 26px;
  font-weight: 600;
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

@media (max-width: 768px) {

  .Img {
    width: 120px;
    height: 100px;
  }

}

</style>

