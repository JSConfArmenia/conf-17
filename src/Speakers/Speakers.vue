<template>
  <section class="Speakers" id="Speakers">
    <div class="Container">

      <h1 class="Title">WHO ARE THE NINJAS?</h1>
      <div class="row">

        <!-- NINJA 1  -->
        <div class="col-md-3">
          <div
            class="Img"
            style="background-image: url(https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/1378305_10151882202425141_1136904594_n.jpg?oh=91b44015f24ac89d157aeca9381c6b85&oe=5A4A0516)">
          </div>
          <a href=""><h3 class="Name">Rouben Meschian</h3></a>
          <h5 class="Position">Founding Software Engineer at Cambridge Semantics</h5>
        </div>

        <!-- NINJA 2 -->
        <div class="col-md-3">
          <div
            class="Img"
            style="background-image: url(https://scontent.fevn1-2.fna.fbcdn.net/v/t31.0-8/20645318_1266773110112416_7159871016971569042_o.jpg?oh=dfdccd6643765989ac9c3d290d4809f1&oe=5A44BD29)">
          </div>
          <a href=""><h3 class="Name">Shahen Hovhannisyan</h3></a>
          <h5 class="Position">Software Engineer at Simply Technologies</h5>
        </div>

         <!-- NINJA-3  -->
        <div class="col-md-3">
          <div
            class="Img"
            style="background-image: url(https://avatars3.githubusercontent.com/u/2195825?v=4&s=460)"></div>
          <a href=""><h3 class="Name">Edgar Marukyan</h3></a>
          <h5 class="Position">CTO at RenderForest</h5>
        </div>
        <!-- NINJA-4  -->
        <div class="col-md-3">
          <div
            class="Img"
            style="background-image: url(https://1424647379.rsc.cdn77.org/jsconf/gnun.jpg)">
          </div>
          <a href=""><h3 class="Name">Gnun Ulikhanyan</h3></a>
          <h5 class="Position">Software Engineer at Simply Technologies</h5>
        </div>


      </div>
      <div class="row">

        <!-- NINJA 5  -->
        <div class="col-md-3">
          <div
            class="Img"
            style="background-image: url(https://1424647379.rsc.cdn77.org/jsconf/narek.jpg)">
          </div>
          <a href=""><h3 class="Name">Narek Harutyunyan</h3></a>
          <h5 class="Position">Software Engineer at Simply Technologies</h5>
        </div>

        <!-- NINJA 6 -->
        <div class="col-md-3">
          <div
            class="Img"
            style="background-image: url(https://1424647379.rsc.cdn77.org/jsconf/slavik.jpg)">
          </div>
          <a href=""><h3 class="Name">Slavik Manukyan</h3></a>
          <h5 class="Position">Software Engineer at Simply Technologies</h5>
        </div>

         <!-- NINJA-7  -->
        <div class="col-md-3">
          <div class="Img -blank"></div>
          <a href=""><h3 class="Name">Your Name</h3></a>
          <h5 class="Position">Become a Ninja!</h5>
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

.Title {
  color: #fff;
  text-align: center;
  margin-bottom: 45px;
}

.Name {
  color: #fff;
}

a {
  text-decoration: none;
}

h3:hover {
  color: #4bb463;
}

.Position {
  color: #fff;
  margin-bottom: 20px;
}

.Speakers {
  background-image: url(../_assets/who-is-speaking-2.png);
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 0 50px 0;
}

.Img {
  padding-bottom: 100%;
  margin-bottom: 10px;
  background-size: cover;
  border: 1px solid #ccc;
  background-color: #fff;
}

.Img.-blank {
  background-image: url(../_assets/NINJA1.png);
}
</style>
