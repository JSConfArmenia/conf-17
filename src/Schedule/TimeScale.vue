<script>
import moment from 'moment';

export default {
  data: () => ({
    start: moment('2017-12-09 10:00:00'),
    timeScale: Array.from(Array(35)).map((item, index) => (index * 15)),
  }),
  methods: {
    getTime: function getTime(minutesPassed) {
      return moment(this.start).add(minutesPassed, 'm').format('H:mm');
    },
  },
};
</script>

<template>
  <div class="TimeScale">
    <div
      v-for="(minutesPassed, index) in timeScale"
      :key="index"
      class="Item">
      <div class="Label">
        {{ getTime(minutesPassed) }}
      </div>
      <div class="Ruller"></div>
    </div>
  </div>
</template>

<style scoped>
  .TimeScale {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .Item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 45px;
  }

  .Label {
    flex: 0;
    padding-right: 10px;
    padding-left: 10px;
    text-align: right;
    font-size: .9em;
    position: relative;
    top: -11px;
  }

  .Ruller {
    flex: 1;
    height: 1px;
    background-color: #ccc;
  }

  .Item:nth-child(odd) .Ruller {
    /* background-color: #e23f72; */
  }
</style>
