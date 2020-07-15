<script>
export default {

};
</script>

<template>
  <div class="ScheduleBot">


    <div class="Body">
      <h4 class="Title">Plan your schedule via our EventBot!</h4>
      <div class="Credits">powered by <a href="https://www.chatbotkitchen.com/eventbot" target="_blank">EventBot</a></div>
    </div>
    <a
      href="https://m.me/jsconf.am"
      class="Button -blue ChatButton"
      target="_blank">
      <div class="Splash"></div>
      Start Planning
    </a>

  </div>
</template>


<style scoped>
  .ScheduleBot {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Title {
    font-size: 18px;
    margin-bottom: 0;
    color: #666;
  }

  .Body {
    margin-right: 15px;
  }

  .col-splash {
    display: flex;
    justify-content: flex-end;
  }


  .Body {
    text-align: right;
  }

  .SplashLink {
    position: relative;
    top: 2px;
  }

  .Splash {
    width: 60px;
    height: 60px;
    background-image: url(/static/facebook-messenger.svg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .Credits {
    font-size: .7em;
    color: #999;
  }

  .Credits a {
    color: inherit;
    text-decoration: underline;
  }

  .Credits a:hover {

  }

  .ChatButton {
    padding: 13px 25px;
    font-size: 15px;
    background: transparent;
    display: inline-flex;
    align-items: center;
    padding: 10px 17px 10px 10px;
    color: #fff;
    background-color: #009fff;
    font-weight: bold;
    border-radius: 25px;
  }

  .ChatButton .Splash {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
</style>
