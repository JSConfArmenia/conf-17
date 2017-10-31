<template>
  <section class="Speakers" id="Speakers">
    <div class="Container">

      <h1 class="Title">WHO ARE THE NINJAS?</h1>
      <div class="row justify-content-center">

        <div class="col-sm-6 col-md-4 col-lg-3" v-for="speaker in speakers">
          <div
            class="Img"
            v-bind:style="{ backgroundImage: `url(${speaker.img})` }">
          </div>
          <h3 class="Name">{{speaker.name}}</h3>
          <h5 class="Position">{{speaker.position}}</h5>
        </div>

        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="Img -Tigran"></div>
          <h3 class="Name">Tigran Bayburtsyan</h3>
          <h5 class="Position">Founder at TreeScale.com</h5>
        </div>

        <div class="col-sm-6 col-md-4 col-lg-3">
          <a href="mailto:jsconf.am@gmail.com">
            <div class="Img -blank"></div>
            <h3 class="Name">Your Name</h3>
            <h5 class="Position">Become a Ninja!</h5>
          </a>
        </div>


      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {

      speakers: [
        {
          img: 'https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/1378305_10151882202425141_1136904594_n.jpg?oh=91b44015f24ac89d157aeca9381c6b85&oe=5A4A0516',
          name: 'Rouben Meschian',
          position: 'Founding Software Engineer at Cambridge Semantics',
        },
        {
          img: 'https://scontent.fevn1-2.fna.fbcdn.net/v/t31.0-8/20645318_1266773110112416_7159871016971569042_o.jpg?oh=dfdccd6643765989ac9c3d290d4809f1&oe=5A44BD29',
          name: 'Shahen Hovhannisyan',
          position: 'Software Engineer at Simply Technologies',
        },
        {
          img: 'https://avatars3.githubusercontent.com/u/2195825?v=4&s=460',
          name: 'Edgar Marukyan',
          position: 'CTO at RenderForest',
        },
        {
          img: 'https://1424647379.rsc.cdn77.org/jsconf/gnun.jpg',
          name: 'Gnun Ulikhanyan',
          position: 'Software Engineer at Simply Technologies',
        },
        {
          img: 'https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/15940642_1441783919165636_8135663993243465387_n.jpg?oh=98881a5007b98b15e032529b17bb53e5&oe=5A3B6E0D',
          name: 'Michael Manukyan',
          position: 'Software Engineer at Teamable',
        },
        {
          img: 'https://1424647379.rsc.cdn77.org/jsconf/slavik.jpg',
          name: 'Slavik Manukyan',
          position: 'Software Engineer at Simply Technologies',
        },
        {
          img: 'https://media-exp1.licdn.com/media/AAEAAQAAAAAAAAzVAAAAJGUwZTBkOGM4LTA0NjAtNDRmMS1hZGUyLTdiMTk5NjM4N2VjMQ.jpg',
          name: 'Michael Petrosyan',
          position: 'JavaScript Engineer at BetConstruct',
        },
        {
          img: 'https://media-exp1.licdn.com/media/AAEAAQAAAAAAAAjoAAAAJDM4ZjFhNzMzLWU5NzMtNDFkNi1hOWI2LWJjYTQ0MDhkZmJhYQ.jpg',
          name: 'Vardan Grigoryan',
          position: 'Backend Engineer at Helpin',
        },
      ],

    };
  },
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

.Img.-Tigran {
  background-image: url(../_assets/TigranBayburtsyan.jpg);
}

</style>
