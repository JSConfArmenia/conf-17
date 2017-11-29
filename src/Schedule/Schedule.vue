<script>
import topics from './topics';
import TimeScale from './TimeScale';

export default {
  data: () => ({
    topicsByRooms: topics,
  }),
  components: {
    TimeScale,
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

        <div class="TimeTable">
          <TimeScale />
          <div class="Venue">

          </div>
          <div class="Venue">

          </div>
          <div class="Venue">

          </div>
        </div>

        <!-- <table>
          <thead>
            <tr>
              <th width="40%">TOPIC</th>
              <th>SPEAKER</th>
              <th>LANG</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="(topic, index) in topics" :key="index">
              <td class="Name">{{topic.name}}</td>
              <td class="Speaker">{{topic.speaker}}</td>
              <td class="Lang">
                <span class="LangBadge" :class="topic.lang" >{{topic.lang}}</span>
              </td>
              <td class="Venue">{{topic.venue}}</td>
            </tr>

            <tr>
              <td colspan="4" style="text-align: center;">
                More topics are coming soon
              </td>
            </tr>

          </tbody>
        </table> -->

      </div>

    </div>
  </section>
</template>



<style >

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

.TimeTable {
  width: 100%;
  display: flex;
  padding-left: 100px;
  position: relative;
  height: 1000px;
}



th, td {
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  border-collapse: collapse;
  text-align: left;
  font-size: 14px;
  padding: 15px 30px;
}

table {
  /*text-transform: uppercase;*/
  width: 80%;
  border-collapse: collapse;
}

.Table {
  display: flex;
}

th {
  background-color: #f0f0f0;
  font-weight: bold;
}

td {
  background-color: #f9f9f9;
  font-weight: 500;
}

tr:hover td {
  background-color: #f0f0f0;
}

.Speaker:hover {
  /*color: #4bb463;*/
}

.LangBadge {
  background-color: #eaeaea;
  padding: 3px 0;
  text-align: center;
  width: 30px;
  display: inline-block;
  font-size: .9em;
}

.LangBadge.en {
  color: #0088c2;
}

.LangBadge.am {
  color: #f07e31;
}

.Venue {
  color: #707070;
}

@media (max-width: 768px) {

  table, thead, tbody, th, td, tr {
    display: block;
    text-align: center;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  .tdNum {
    font-size: 19px;
    background-color: #f0f0f0;
    font-weight: bold;
  }

  h3 {
  font-size: 15px;
  }

}

</style>
