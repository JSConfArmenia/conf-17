<template>
  <section class="About" id="About">
    <div class="Container">
      <div class="row">

        <div class="col-md-4">
          <div class="Splash">
            <div class="Logo">
              <!-- <span class="Brace">{</span> -->
              <!-- <span class="JS">js</span> -->
              <!-- <span class="Brace">}</span> -->
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <h3 class="Title">
            What is JavaScript Conference 2017 Yerevan?
          </h3>
          <h4 class="Subtitle">
            Where JavaScript developers meet!
          </h4>
          <p class="Description">
            JavaScript Conference provides a platform for developers to share their ideas, experiences and knowledge.
            Come and learn about the modern development ecosystem by attending talks and workshops.
            Network with other developers who love what they do.
          </p>
          <div class="Actions">
            <a href="https://goo.gl/forms/QWQzhSb7HqNn2Hem2" class="Button -purple">
              <i class="fa fa-envelope-open-o Icon" aria-hidden="true"></i>
              Request an invite
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Logo from '../_common/Logo';

export default {
  components: {
    Logo,
  },
};
</script>

<style scoped>
.About {
  padding: 100px 0;
  background-color: #f5f5f5;
}

.Splash {
  width: 100%;
  padding-bottom: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.Splash:before {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 10%;
  top: 25%;
  display: block;
  content: " ";
  background-repeat: no-repeat;
  background-image:
    url(../_assets/color-bg-right-top.png),
    url(../_assets/color-bg-left-bottom.png);
  /*background-position: 0 100%, 100% 100%, 100% 0;*/
  background-size: 40%;
  transform: rotate(45deg);
  opacity: .5;
}

.Logo {
  display: block;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 50px;

  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(https://www.yld.io/images/svgs/js_logo.svg);
  /*color: #8dc63f;*/
  /*font-weight: bold;*/
  /*color: #fff;*/
  /*background-color: #*/
}

.Brace {
  color: #666;
}

.Title {
  font-weight: 700;
  font-size: 36px;
  line-height: normal;
  color: #92278f;
  margin-bottom: 10px;
}

.Subtitle {
  font-size: 24px;
  font-weight: 600;
  color: #0a0a0a;
  margin-bottom: 30px;
}

.Description {
  margin-bottom: 30px;
}

.Icon {
  margin-right: 7px;
}
</style>
