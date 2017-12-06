<template>
  <section class="Quizz" id="Quizz">
    <div class="Container">

      <div class="ScheduleGroup">

        <h2 class="Title">Quizz</h2>
        <p class="Description">
          Participate in quizzes, win badges, become a true JavaScript Ninja! <br>
          <span>powered by <a href="http://www.itjobs.am/">itjobs.am</a></span>
        </p>
        <!-- <h3 class="Subtitle">Become a true JavaScript Ninja!</h3>
        <p class="Description">
          Powered by itjobs.am
        </p> -->

        <div class="row justify-content-center  Badges">
          <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
            <a href="http://www.itjobs.am/quiz/5a1932d735619ae957438247" target="_blank">
              <div class="Img -javascript"></div>
              <h3 class="Name -javascript">JavaScript</h3>
            </a>
          </div>

          <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
            <a href="http://www.itjobs.am/quiz/5a19626835619ae95743b13f" target="_blank">
              <div class="Img -nodejs" ></div>
              <h3 class="Name -nodejs">NodeJS</h3>
            </a>
          </div>

          <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
            <a href="http://www.itjobs.am/quiz/5a19630b35619ae95743b1cd" target="_blank">
              <div class="Img -react"></div>
              <h3 class="Name -react">React</h3>
            </a>
          </div>

          <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
            <a href="http://www.itjobs.am/quiz/5a27a0bc35619ae95751dda3" target="_blank">
              <div class="Img -angularjs" ></div>
              <h3 class="Name -angularjs">Angular</h3>
            </a>
          </div>
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

.Quizz {
  text-align: center;
  padding: 60px 0 60px 0;
  background-color: #343d47;
  /* background-color: #252e38; */
  /* border-bottom: 1px dashed#999ea3; */
  color: #fff;

  background-image: linear-gradient(to right, #999ea3 55%, rgba(255,255,255,0) 0%);
  background-position: bottom;
  background-size: 10px 1px;
  background-repeat: repeat-x;
}

.Title {
  margin-bottom: 10px;
  color: #fff;
}

.Subtitle {
  margin-bottom: 60px;
}

.Description {
  color: #cecece;
}

.Description span {
  color: #9f9f9f;
  font-size: .9em;
}

.Description a {
  color: inherit;
  text-decoration: underline;
}

.Badges {
  padding-top: 30px;
}

.Badges a {
  text-decoration: none;
  color: #fff;
  opacity: .7;
  display: block;
  transition: opacity .3s ease;
}

.Badges a:hover {
  opacity: 1;
}

.Img {
  background-size: contain;
  background-position: center;
  width: 140px;
  height: 140px;
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-bottom: 20px;
}

.Img.-javascript {
  background-image: url(/static/badges/javascript.png);
}

.Img.-nodejs {
  background-image: url(/static/badges/nodejs.png);
}

.Img.-react {
  background-image: url(/static/badges/react.png);
}

.Img.-angularjs {
  background-image: url(/static/badges/angular.png);
}

.Name {
  text-decoration: none;
  margin-bottom: 20px;
  font-size: .9em;
  display: inline-block;
  padding: 3px 5px;
  border-radius: 3px;
  color: #fff;

}

.Name.-javascript {
  background-color: #f7df1e;
  color: #333;
}

.Name.-nodejs {
  background-color: #81b74a;
}

.Name.-react {
  background-color: #61dafb;
  color: #0f4c5d;
}

.Name.-angularjs {
  background-color: #dd0031;
}

</style>
