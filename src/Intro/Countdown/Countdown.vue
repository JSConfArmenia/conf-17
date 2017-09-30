<template>

  <div class="Timer">
    <div class="block">
        <p class="digit Digit1">{{ days | two_digits }}</p>
        <p class="text">DAYS</p>
    </div>
    <div class="block">
        <p class="digit Digit2">{{ hours | two_digits }}</p>
        <p class="text">HOURS</p>
    </div>
    <div class="block">
        <p class="digit Digit3">{{ minutes | two_digits }}</p>
        <p class="text">MINUTES</p>
    </div>
    <div class="block">
        <p class="digit Digit4">{{ seconds | two_digits }}</p>
        <p class="text">SECONDS</p>
    </div>
  </div>

</template>


<script>
export default {
  mounted() {
    // eslint-disable-next-line
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000);

      // eslint-disable-next-line
      console.log(this.now);
    }, 1000);
  },
  props: {
    date: {
      coerce: str => Math.trunc(Date.parse(str) / 1000),
    },
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
    };
  },
  computed: {
    seconds() {
      return (this.date - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.date - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.date - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.date - this.now) / 60 / 60 / 24);
    },
  },
  filters: {
    two_digits: (value) => {
      if (value.toString().length <= 1) {
        return `0${value.toString()}`;
      }
      return value.toString();
    },
  },
};
</script>


<style>

.Timer {
  display: flex;
}

.text {
  color: #fff;
  font-size: 22px;
  font-weight: 700;
}

.digit {
  font-size: 62px;
  font-weight: 900;
  margin-right: 67px;
  margin-bottom: -10px;
}

.Digit1 {
  color: #fff200;
}

.Digit2 {
  color: #ff8a00;
}

.Digit3 {
  color: #00b9ff;
}

.Digit4 {
  color: #8dc63f;
}

</style>
