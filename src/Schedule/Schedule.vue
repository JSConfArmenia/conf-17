<template>
  <section class="Schedule">
    <div class="Container">

      <div class="ScheduleGroup">

        <h1>Event Schedules</h1>
        <h2>Saturday, 25 November 2017</h2>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>SESSION</th>
              <th>SPEAKER(S)</th>
              <th>TIME</th>
              <th>VENUE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coming soon</td>
              <td>Coming soon</td>
              <td class="Speaker">Coming soon</td>
              <td>Coming soon</td>
              <td>Coming soon</td>
            </tr>
            <!-- <tr>
              <td>1</td>
              <td>OPENING REMARKS</td>
              <td class="Speaker">JEFF SEVERIN</td>
              <td>08:45 AM</td>
              <td>ROOM A</td>
            </tr>
            <tr>
              <td>2</td>
              <td>INTRODUCTION TO WP</td>
              <td class="Speaker">JAMIE WEN</td>
              <td>09:00 AM</td>
              <td>ROOM B</td>
            </tr>
            <tr>
              <td>3</td>
              <td>GETTING STARTED WITH WP</td>
              <td class="Speaker">WILLIAM JOHN</td>
              <td>11:00 AM</td>
              <td>ROOM c</td>
            </tr>
            <tr>
              <td>4</td>
              <td>WP THEME DEVELOPMENT</td>
              <td class="Speaker">WILLIAM JOHN</td>
              <td>02:00 PM</td>
              <td>ROOM D</td>
            </tr>
            <tr>
              <td>5</td>
              <td>PLUGIN DEVELOPMENT</td>
              <td class="Speaker">RUTH R. SMITH</td>
              <td>03:00 PM</td>
              <td>ROOM E</td>
            </tr> -->
          </tbody>
        </table>

      </div>

    </div>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped>

.Schedule {
  text-align: center;
  min-height: 500px;
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

h1 {
  font-size: 36px;
  color: #333;
  font-weight: 900;
  margin: 0 0 60px 0;
  line-height: normal;
}

h2 {
  font-size: 24px;
  color: #333;
  font-weight: 700;
  margin: 0 0 40px 0;
  line-height: normal;
}

table {
  width: 1140px;
}

th, td {
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  border-collapse: collapse;
  text-align: left;
  font-size: 14px;
  padding: 15px 30px;
}

th {
  background-color: #f0f0f0;
  width: 30px;
}

td {
  background-color: #fefefe;
}

tr:hover td {
  background-color: #f0f0f0;
}

.Speaker:hover {
  color: #4bb463;
}

</style>
