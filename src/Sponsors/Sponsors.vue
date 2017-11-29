<template>
  <section class="Sponsors" id="Sponsors">
    <div class="Container">

      <h3 class="Title">Sponsors</h3>


      <div class="row justify-content-center SponsorsGold">
        <div class="col-12 col-sm-6">
          <a href="https://www.betconstruct.com/" target="_blank">
            <div
              class="Img -gold -betconstruct">
            </div>
            <h2 class="OrgName">BetConstruct</h2>
          </a>
        </div>
      </div>

      <div class="row justify-content-center SponsorsSilver">


        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-3">
          <a href="https://www.renderforest.com/" target="_blank">
            <div
              class="Img -silver -renderforest">
            </div>
            <h3 class="OrgName">RenderForest</h3>
          </a>
        </div>

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-3">
          <a href="https://sflpro.com/" target="_blank">
            <div
              class="Img -silver -sfl">
            </div>
            <h3 class="OrgName">SFL</h3>
          </a>
        </div>

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-3">
          <a href="https://workfront.com/" target="_blank">
            <div
              class="Img -silver -workfront"
              >
            </div>
            <h3 class="OrgName">Workfront</h3>
          </a>
        </div>

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-3">
          <a href="https://www.benivo.com/" target="_blank">
            <div
              class="Img -silver -benivo"
              >
            </div>
            <h3 class="OrgName">Benivo</h3>
          </a>
        </div>

        <!-- <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-3">

        </div> -->

      </div>

      <div class="row justify-content-center SponsorsStarter">

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-3">
          <a href="https://aua.am/" target="_blank">
            <div
              class="Img -starter -aua"
              >
            </div>
            <h4 class="OrgName">American University <br>of Armenia</h4>
          </a>
        </div>

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-3">
          <a href="http://armsoft.am/" target="_blank">
            <div class="Img -starter -armsoft"></div>
            <h4 class="OrgName">ArmSoft</h4>
          </a>
        </div>
      </div>
      <!-- <div class="CallToAction">
        <a href="https://goo.gl/875gvc" class="Button -green" target="_blank">
          Become a sponsor
        </a>
      </div> -->

      <div class="Divider">
      </div>

      <h1 class="Title -secondary">Partners and friends</h1>

      <div class="row justify-content-center justify-content-xl-between">

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
          <a href="https://www.simplytechnologies.net/" target="_blank">
            <div
              class="Img"
              style="background-image: url(https://static1.squarespace.com/static/58d20c79725e25b221549193/t/58d26aa9b8a79b902b394c88/1504784019330/?format=1500w)">
            </div>
            <h5 class="OrgName">Simply Technologies</h5>
          </a>
        </div>

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
          <a href="http://www.itjobs.am" target="_blank">
            <div
              class="Img"
              style="background-image: url(https://1424647379.rsc.cdn77.org/jsconf/itjobs-logo.svg);background-size: 70%;">
            </div>
            <h5 class="OrgName">itjobs.am</h5>
          </a>
        </div>

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
          <a href="https://github.com/modularcode" target="_blank">
            <div
              class="Img"
              style="background-image: url(https://raw.githubusercontent.com/modularcode/modularcode.github.io/master/images/logo.png)">
            </div>
            <h5 class="OrgName">ModularCode</h5>
          </a>
        </div>

        <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
          <a href="http://coworking.istc.am/" target="_blank">
            <div
              class="Img"
              style="background-image: url(https://scontent.fevn1-2.fna.fbcdn.net/v/t31.0-8/21731750_1736095493088418_8372728911051007100_o.jpg?oh=a8f84a82b7ac16c17efd0a2fb30f5141&oe=5A876DAA)">
            </div>
            <h5 class="OrgName">ISTC Coworking Space</h5>
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

.Title {
  margin-bottom: 40px;
}

.CallToAction {
  text-align: center;
  padding-bottom: 40px;
}

.Img {
  background-size: contain;
  background-position: center;
  width: 120px;
  height: 100px;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.SponsorsGold {
  margin-bottom: 45px;
}

.SponsorsSilver {
  margin-bottom: 50px;
}

.SponsorsStarter {
  margin-bottom: 25px;
}

.Img.-starter {
  width: 130px;
  height: 90px;
}

.Img.-silver {
  width: 170px;
  height: 120px;
}

.Img.-gold {
  width: 300px;
  height: 100px;
}

.Img.-armsoft {
  background-image: url(../_assets/armsoft-logo.svg);
  background-size: 100% !important;
}

.Img.-sfl {
  background-image: url(../_assets/sfl-logo.svg);
  background-size: 120% !important;
}

.Img.-aua {
  background-image: url(../_assets/aua-logo.png);
  background-size: 70% !important;
}

.Img.-workfront {
  background-image: url(../_assets/workfront-logo.png);
  background-size: 125% !important;
}

.Img.-renderforest {
  background-image: url('https://static.rfstat.com/renderforest/static/images/Logo1024x1024-01.png');
  background-size: 55% !important;
}

.Img.-benivo {
  background-image: url(../_assets/benivo-logo.svg);
  background-size: 100% !important;
}

.Img.-betconstruct {
  background-image: url(../_assets/betconstruct-logo.svg);
  background-size: 100% !important;
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

  .Img {
    width: 100px;
    height: 80px;
  }

  .Img.-starter {
    width: 100px;
    height: 70px;
  }

  .Img.-silver {
    width: 130px;
    height: 100px;
  }

  .Img.-gold {
    width: 100%;
    padding-bottom: 30%;
  }

  .OrgName {
    font-size: 1em;
  }

}

</style>

