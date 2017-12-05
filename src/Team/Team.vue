<template>
  <section class="Team" id="Team">
    <div class="Container">

      <h2 class="Title">Core Team</h2>
      <div class="row justify-content-center OrganizersRow">

        <div class="col">
          <div
            class="Img"
            style="background-image: url(https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/14359039_10208688307897817_2190833719349130448_n.jpg?oh=8dbdc5d6efe09076d8c3544fe9ed387d&oe=5A3F4395)">
          </div>
          <h4 class="Name">Alexander Adamyan</h4>
          <h6 class="Role">Organizer</h6>
          <h6 class="Position">Co-Founder at Simply Technologies</h6>
        </div>

        <div class="Breaker"></div>

        <div class="col">
          <div
            class="Img"
            style="background-image: url(https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/22728660_1533338836721765_4869138212284280551_n.jpg?oh=e2d28316634098d5191bf23b2902f432&oe=5A9D3C5B)">
          </div>
          <h4 class="Name">Varser Zakaryan</h4>
          <h6 class="Role">Organizer</h6>
          <h6 class="Position">Project Manager at JavaScript Conference Armenia</h6>
        </div>

        <div class="Breaker"></div>

        <div class="col">
          <div
            class="Img"
            style="background-image: url(https://scontent.fevn1-2.fna.fbcdn.net/v/t31.0-1/c0.104.652.652/244020_1770753748796_2351683_o.jpg?oh=e70743c4aad4af76a83c93e31c846b03&oe=5A5000E7)">
          </div>
          <h4 class="Name">Gevorg Harutyunyan</h4>
          <h6 class="Role">Organizer</h6>
          <h6 class="Position">Front-End Architect at Screenful, Founder of ModularCode</h6>
        </div>

        <div class="Breaker"></div>

        <div class="col">
          <div
            class="Img"
            style="
              background-image: url(https://scontent.fevn1-2.fna.fbcdn.net/v/t31.0-8/15676121_10154515618610141_4163359631088660025_o.jpg?oh=cab2040dfe4a466ebf0a83dec2fd8900&oe=5A80E029)
            ">
          </div>
          <h4 class="Name">Rouben Meschyan</h4>
          <h6 class="Role">Organizer</h6>
          <h6 class="Position">Founding Software Engineer at Cambridge Semantics</h6>
        </div>

        <div class="Breaker"></div>

        <div class="col">
          <div
            class="Img"
            style="background-image: url(https://avatars3.githubusercontent.com/u/2195825?v=4&s=460)">
          </div>
          <h4 class="Name">Edgar Marukyan</h4>
          <h6 class="Role">Organizer</h6>
          <h6 class="Position">CTO at Renderforest</h6>
        </div>
      </div>

      <h2 class="Title -small">Special thanks to</h2>

      <div class="row  justify-content-center VolunteersRow">
        <template
          v-for="(volunteer, index) in volunteers">
          <div
            class="col col-volunteer"
            :key="index">
            <div
              class="Img"
              :style="{ backgroundImage: `url(${volunteer.img})` }">
            </div>
            <h4 class="Name">{{volunteer.name}}</h4>
          </div>
        </template>
      </div>

    </div>
  </section>
</template>

<script>
import volunteers from '@/_services/volunteers';

export default {
  data: () => ({
    volunteers,
  }),
};
</script>

<style scoped>

.Title {
  text-align: center;
  margin-bottom: 25px;
}

.Title.-small {
  font-size: 30px;
  /* margin-bottom: 15px; */
}

.Img {
  /* border-radius: 50%; */
}

.Name,
.Position {
  /* text-align: center; */
}

.Team {
  background-image: url(../_assets/Team.jpg);
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 0 50px 0;
  color: #fff;
  overflow: hidden;
  /* text-align: center; */
}

.OrganizersRow {
  /* margin-right: -20px; */
  /* margin-left: -20px; */
  margin-bottom: 20px;
}

.OrganizersRow .col {
  /* padding: 0 20px; */
}

.VolunteersRow {
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 10px;
}

.Divider {
  width: 100%;
}

.VolunteersRow .col-volunteer {
  padding: 0 15px;
  flex: 0;
  flex-basis: calc(100%/8);
  width: calc(100%/8);
  /* width: percentage(1/8); */
}

.VolunteersRow .Name {
  font-size: .7em;
  /* white-space: nowrap; */
  /* overflow: hidden; */
  width: 100%;
  /* text-overflow: ellipsis; */
  margin-bottom: 15px;
}

.VolunteersRow .Img {
  /* border-radius: 50%; */
}

.Breaker {
  display: none;
  width: 100%;
  height: 1px;
}

.Title {
  color: #fff
}

.Credits {
  text-align: center;
  /* font-size: .9em; */
  margin-bottom: 30px;
}

.Credits a {
  font-weight: bold;
}

.Separator {
  border-bottom: 1px solid #fff;
  margin: 30px 0 30px 0;
}

.Img {
  padding-bottom: 100%;
  margin-bottom: 10px;
  background-size: cover;
  border: 1px solid #ccc;
  background-color: #fff;
}

.Name {
  color: #fff;
}

.Role {
  display: none;
}

a {
  text-decoration: none;
}


@media (min-width: 769px) and (max-width: 980px) {
  .VolunteersRow .col-volunteer {
    /* flex-basis: calc(100%/6); */
    /* width: calc(100%/6); */
  }
}

@media (max-width: 768px) {

  .Img {
    margin-bottom: 10px;
  }

  .OrganizersRow {
    margin-right: -15px;
    margin-left: -15px;
  }

  .OrganizersRow .col {
    padding: 0 15px;
  }

  .Breaker {
    display: block;
  }

  h6 {
    margin-bottom: 40px
  }

  .VolunteersRow .col-volunteer {
    flex-basis: calc(100%/3);
    width: calc(100%/3);
  }

}

</style>
