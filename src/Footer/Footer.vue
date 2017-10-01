<template>
  <footer class="Footer">
    <Logo />
    <h6>2017 YEREVAN</h6>
    <a href=""><i class="fa fa-github" aria-hidden="true"></i></a>
  </footer>
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
.Footer {
  text-align: center;
  background-color: #343d47;
  padding: 100px 0;
}

.Logo {
  font-size: 50px;
}

h6 {
  color: #999ea3;
  font-size: 25px;
  margin: 30px 0 20px 0;
}

a {
  color: #999ea3;
  font-size: 25px;
}

/*a:hover {
  color: #4bb463;
}*/


</style>
