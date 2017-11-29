<script>
import TimeScale from './TimeScale';
import TimeTable from './TimeTable';

export default {
  components: {
    TimeScale,
    TimeTable,
  },
};
</script>


<template>
  <section class="Schedule" id="Schedule">
    <div class="Container">

      <div class="ScheduleGroup">

        <h2 class="Title">Event Schedules</h2>
        <p class="Description">
          (subject to change)
        </p>
        <h3 class="Subtitle">Saturday, 9 December 2017</h3>

        <div class="TimeTableHeader">

        </div>
        <div class="TimeTableContainer">
          <TimeScale />
          <TimeTable />
        </div>

      </div>

    </div>
  </section>
</template>



<style scoped>

.Schedule {
  text-align: center;
  padding: 120px 0 140px 0;
  background-color: #fff;
  background-repeat: no-repeat;
  background-image: url(../_assets/color-bg-left-bottom.png), url(../_assets/color-bg-right-bottom.png), url(../_assets/color-bg-right-top.png);
  background-position: 0 100%, 100% 100%, 100% 0;
}

.ScheduleGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Title {
  margin-bottom: 10px;
}

.Description {
  margin-bottom: 40px;
}

h3 {
  font-size: 24px;
  color: #333;
  font-weight: 700;
  margin: 0 0 40px 0;
  line-height: normal;
}

.TimeTableContainer {
  width: 100%;
  display: flex;
  padding-left: 80px;
  position: relative;
  height: 1575px;
}

@media (max-width: 768px) {
  h3 {
  font-size: 15px;
  }
}

</style>
