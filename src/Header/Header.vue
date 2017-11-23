<template>
  <header class="Header -sticked">
    <div class="Container">

      <a href="#Intro" class="LogoLink" v-smooth-scroll="{ duration: 600 }"><Logo /></a>
      <a class="NavBtn" v-on:click="toggle">
        <i class="fa" v-bind:class="{ 'fa-bars': !isOpen , 'fa-times': isOpen}" aria-hidden="true"></i>
      </a>
      <nav class="Nav" :class="{ '-open': isOpen }">
        <a href="#About" class="NavLink" v-smooth-scroll="navConfig" v-on:click="close">ABOUT</a>
        <a href="#Schedule" class="NavLink" v-smooth-scroll="navConfig" v-on:click="close">SCHEDULE</a>
        <a href="#Speakers" class="NavLink" v-smooth-scroll="navConfig" v-on:click="close">NINJAS</a>
        <a href="#Sponsors" class="NavLink" v-smooth-scroll="navConfig" v-on:click="close">SPONSORS</a>
        <a href="#Team" class="NavLink" v-smooth-scroll="navConfig" v-on:click="close">TEAM</a>
        <a href="#Location" class="NavLink" v-smooth-scroll="navConfig" v-on:click="close">LOCATION</a>
        <a href="#Faq" class="NavLink" v-smooth-scroll="navConfig" v-on:click="close">FAQ</a>
        <a
          class="InviteBtn"
          href="https://goo.gl/forms/QWQzhSb7HqNn2Hem2" target="_blank">
          Request an invite
        </a>
        <!-- <a href="#">CONTACT</a> -->
      </nav>



    </div>
  </header>
</template>



<script scoped>
import Logo from '../_common/Logo';

export default {
  components: {
    Logo,
  },
  data: () => ({
    isOpen: false,
    navConfig: {
      duration: 1000,
      offset: -66,
    },
  }),
  methods: {
    toggle: function toggle(event) {
      event.preventDefault();

      this.isOpen = !this.isOpen;
    },
    close: function close() {
      this.isOpen = false;
    },
  },
};

</script>

<style>
  @media (max-width: 768px) {
    .Header .Logo .LogoImg {
      width: 42px;
      height: 42px;
    }
  }
</style>



<style scoped>

.Header {
  position: absolute;
  width: 100%;
  z-index: 100;
}

.Header.-sticked {
  position: fixed;
  background-color: rgba(41, 53, 61, 0.92);
}

.Container {
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-items: center;
  height: 66px;
  position: static;
}

.Header.-sticked .Container:before {
  display: none;
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.Nav {
  font-size: .8em;
  font-weight: 900;
  margin-left: auto;
  z-index: 1;
}

.NavLink {
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  margin: 0 8px;
}

.Nav a:not(.InviteBtn):hover  {
  color: #4bb463;
}

.NavBtn {
  display: none;
  font-size: 25px;
  z-index: 3;
  position: relative;
  text-align: center;
  justify-content: center;
  padding: 8px 12px;
  margin: 0;
}

.InviteBtn {
  padding: 7px 15px;
  background-color: rgb(255, 138, 0);
  border-radius: 4px;
  transition: all .25s ease;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  margin-left: 8px;
}

.InviteBtn .Icon {
  margin-right: 5px;
}

.InviteBtn:hover {
  background-color: #D67400;
}

.LogoLink {
  text-decoration: none;
}
@media (min-width: 768px) and (max-width: 960px) {
  .Logo {
    font-size: 24px !important;
  }

  .NavLink {
    font-size: .85em;
    margin: 0 3px;
  }

  .InviteBtn {
    padding: 7px 12px;
    font-size: .85em;
  }
}

@media (max-width: 768px) {

  .Header.-sticked {
    background-color: none;
  }

  .Header.-sticked .Container:before {
    z-index: 1;
    display: block;
    background-color: rgba(41, 53, 61, .97);
  }

  .Logo {
    order: 1;
    font-size: 22px;
    position: relative;
    z-index: 2;
  }

  .Nav  {
    display: flex;
    position: absolute;
    top: -500px;
    width: 100%;
    z-index: 0;
    left: 0;
    flex-direction: column;
    background-color: rgba(41, 53, 61, .97);
    text-align: left;
    transition: top 0.3s ease;
    padding: 5px 7px 20px 7px;
  }

  .Nav.-open {
    left: 0;
    top: 100%;
  }

  .Nav a {
    display: block;
    font-size: 20px;
    padding: 5px;
  }

  .NavBtn {
    display: flex;
    order: 3;
  }

  .InviteBtn {
    text-align: center;
    margin-top: 10px;
    margin-left: 0;
  }

}
</style>
