<template>
  <section class="Sponsors" id="Sponsors">
    <div class="Container">

      <h1 class="Title">Sponsors and friends</h1>
      <div class="row">

        <!-- Sponsor 1 -->
        <a href="https://www.simplytechnologies.net/"><div class="col">
          <div
            class="Img"
            style="background-image: url(https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/10407244_810068769065474_484284539248915848_n.png?oh=b8c7ca57d379b75ae320e4a8ae14d064&oe=5A7A916E)">
          </div>
          <h5>Simply Technologies</h5>
        </div></a>

        <!-- Sponsor 2 -->
        <a href="http://istc.am/en/"><div class="col">
          <div
            class="Img"
            style="background-image: url(https://scontent.fevn1-2.fna.fbcdn.net/v/t31.0-8/21731750_1736095493088418_8372728911051007100_o.jpg?oh=a8f84a82b7ac16c17efd0a2fb30f5141&oe=5A876DAA)">
          </div>
          <h5>Innovative Solutions and<br />Technologies Center</h5>
        </div></a>

        <!-- Sponsor 3 -->
        <a href="http://iteratehackerspace.com/"><div class="col">
          <div
            class="Img"
            style="background-image: url(http://iteratehackerspace.com/static/images/logo.png)">
          </div>
          <h5>Iterate Hackerspace</h5>
        </div></a>

        <!-- Sponsor 4 -->
        <a href="https://github.com/modularcode"><div class="col">
          <div
            class="Img"
            style="background-image: url(https://raw.githubusercontent.com/modularcode/modularcode.github.io/master/images/logo.png)">
          </div>
          <h5>ModularCode</h5>
        </div></a>

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
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(http://demo.themeum.com/wordpress/eventum/wp-content/uploads/2015/09/home-sponsors-bg.jpg?id=152);
}

.Img {
  background-size: contain;
  background-position: center;
  width: 150px;
  height: 120px;
  background-repeat: no-repeat;
  margin: 0 auto;
}

h1 {
  color: #92278f;
  text-align: center;
  padding: 45px 0 45px 0;
}

h5 {
  color: #666;
  text-align: center;
  margin-bottom: 60px;
  padding-top: 10PX;
}

.col:hover * {
  color: #4bb463;
}

a {
  text-decoration: none;
}
</style>

