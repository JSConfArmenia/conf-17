<template>
  <header class="Header -sticked">
    <div class="Container">

      <Logo />
      <a class="NavBtn" v-on:click="toggle">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
      <nav class="Nav" :class="{ '-open': isOpen }">
        <a href="#About">ABOUT</a>
        <a href="#Schedule">SCHEDULE</a>
        <a href="#Speakers">NINJAS</a>
        <a href="#Sponsors">SPONSORS</a>
        <a href="#Team">TEAM</a>
        <a href="#Location">LOCATION</a>
        <!-- <div class="InviteBtn"> -->
        <!-- </div> -->
        <!-- <a href="#">CONTACT</a> -->
      </nav>

      <a
        class="InviteBtn"
        href="https://goo.gl/forms/QWQzhSb7HqNn2Hem2">
        <i class="fa fa-envelope-open-o Icon" aria-hidden="true"></i>
        Request an invite
      </a>

    </div>
  </header>
</template>



<script>
import Logo from '../_common/Logo';

export default {
  components: {
    Logo,
  },
  data: () => ({
    isOpen: false,
  }),
  methods: {
    toggle: function toggle(event) {
      event.preventDefault();

      this.isOpen = !this.isOpen;
    },
  },
};

</script>



<style scoped>

.Header {
  position: absolute;
  width: 100%;
  z-index: 100;
}

.Header.-sticked {
  position: fixed;
  background-color: rgba(41, 53, 61, 0.9);
}

.Container {
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-items: center;
  height: 66px;
}

.Nav {
  font-size: 14px;
  font-weight: 900;
  margin-left: auto;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  margin: 0 8px;
}

.Nav a:hover {
  color: #4bb463;
}

.NavBtn {
  display: none;
  font-size: 25px;
  padding-right: 15px;
}

.InviteBtn {
  padding: 7px 15px;
  background-color: rgb(255, 138, 0);
  border-radius: 4px;
  transition: all .25s ease;
  text-transform: uppercase;
  font-size: .8em;
  font-weight: bold;
}

.InviteBtn .Icon {
  margin-right: 5px;
}

.InviteBtn:hover {
  color: #fff;
  background-color: #D67400;
}


@media (max-width: 768px) {
  .Logo {
    order: 1;
    font-size: 22px;
    position: relative;
    top: -2px;
  }

  .Nav  {
    display: flex;
    position: absolute;
    top: 100%;
    width: 300px;
    right: -300px;
    flex-direction: column;
    background-color: rgba(41, 53, 61, 0.9);
    text-align: left;
    margin-top: 5px;
    transition: left 0.3s ease;
  }

  .Nav.-open {
    right: 0;
  }

  .Nav a {
    display: block;
    font-size: 20px;
    padding: 5px;
  }

  .Nav a:hover {
    background-color: rgba(41, 53, 61, 1);
  }

  .NavBtn {
    display: flex;
    order: 3;
  }

  .InviteBtn {
    order: 2;
    white-space: nowrap;
    padding: 6px 10px;
  }

  .InviteBtn .Icon {
    display: none;
  }

}
</style>
