<template>
  <section class="Quizz" id="Quizz">
    <div class="Container">

      <div class="ScheduleGroup">

        <h2 class="Title">Quizz</h2>
        <p class="Description">
          Participate in quizzes, win badges, become a true JavaScript champion! <br>
          <span>powered by <a href="http://www.itjobs.am/">itjobs.am</a></span>
        </p>
        <!-- <h3 class="Subtitle">Become a true JavaScript Ninja!</h3>
        <p class="Description">
          Powered by itjobs.am
        </p> -->

        <div class="row justify-content-center justify-content-xl-between Badges">
          <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
            <a href="" target="_blank">
              <div class="Img -javascript" ></div>
              <h3 class="Name -javascript">JavaScript</h3>
            </a>
          </div>

          <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
            <a href="" target="_blank">
              <div class="Img -nodejs" ></div>
              <h3 class="Name -nodejs">NodeJS</h3>
            </a>
          </div>

          <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
            <a href="" target="_blank">
              <div class="Img -react" ></div>
              <h3 class="Name -react">React</h3>
            </a>
          </div>

          <div class="col-6 col-sm-4 col-md-4 col-lg-3  col-xl-2">
            <a href="" target="_blank">
              <div class="Img -angular" ></div>
              <h3 class="Name -angular">Angular</h3>
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
  /* background-color: #343d47; */
  background-color: #252e38;
  /* border-bottom: 1px dashed#999ea3; */
  color: #fff;
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
  color: #4bb463;
}

.Description a:hover {
  /* text-decoration: underline; */
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

.Img.-angular {
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

.Name.-angular {
  background-color: #dd0031;
}

</style>
