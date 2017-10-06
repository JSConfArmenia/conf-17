<template>
  <section class="Schedule" id="Schedule">
    <div class="Container">

      <div class="ScheduleGroup">

        <h2 class="Title">Event Schedules</h2>
        <h3 class="Subtitle">Saturday, 25 November 2017</h3>

        <table>
          <!-- <thead>
            <tr>
              <th>#</th>
              <th width="40%">SESSION</th>
              <th>SPEAKER(S)</th>
              <th>TIME</th>
              <th>VENUE</th>
            </tr>
          </thead> -->
          <tbody>
            <tr>
              <td colspan="5" style="text-align: center;">
                Coming soon
              </td>
            </tr>
            <!-- <tr>
              <td class="tdNum">1</td>
              <td >OPENING REMARKS</td>
              <td class="Speaker Venue">JEFF SEVERIN</td>
              <td>08:45 AM</td>
              <td class="Venue">ROOM A</td>
            </tr>
            <tr>
              <td class="tdNum">2</td>
              <td>INTRODUCTION TO WP</td>
              <td class="Speaker Venue">JAMIE WEN</td>
              <td>09:00 AM</td>
              <td class="Venue">ROOM B</td>
            </tr>
            <tr>
              <td class="tdNum">3</td>
              <td>GETTING STARTED WITH WP</td>
              <td class="Speaker Venue">WILLIAM JOHN</td>
              <td>11:00 AM</td>
              <td class="Venue">ROOM c</td>
            </tr>
            <tr>
              <td class="tdNum">4</td>
              <td>WP THEME DEVELOPMENT</td>
              <td class="Speaker Venue">WILLIAM JOHN</td>
              <td>02:00 PM</td>
              <td class="Venue">ROOM D</td>
            </tr>
            <tr>
              <td class="tdNum">5</td>
              <td>PLUGIN DEVELOPMENT</td>
              <td class="Speaker Venue">RUTH R. SMITH</td>
              <td>03:00 PM</td>
              <td class="Venue">ROOM E</td>
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
  margin-bottom: 60px;
}

h3 {
  font-size: 24px;
  color: #333;
  font-weight: 700;
  margin: 0 0 40px 0;
  line-height: normal;
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
  text-transform: uppercase;
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
  color: #4bb463;
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
