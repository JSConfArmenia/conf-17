<template>
  <section class="Schedule" id="Schedule">
    <div class="Container">

      <div class="ScheduleGroup">

        <h2 class="Title">Event Schedules</h2>
        <p class="Description">
          (subject to change)
        </p>
        <h3 class="Subtitle">Saturday, 25 November 2017</h3>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th width="40%">TOPIC</th>
              <th>SPEAKER</th>
              <th>TIME</th>
              <th>VENUE</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td class="tdNum">#</td>
              <td >Functional Programming in JavaScript</td>
              <td class="Speaker">Rouben Meschian</td>
              <td>-</td>
              <td class="Venue">-</td>
            </tr>


            <tr>
              <td class="tdNum">#</td>
              <td >React-Native: The Dark Art of Native APIs</td>
              <td class="Speaker">Shahen Hovhannisyan</td>
              <td>-</td>
              <td class="Venue">-</td>
            </tr>

            <tr>
              <td class="tdNum">#</td>
              <td >Static Type Checking with FlowType</td>
              <td class="Speaker">Edgar Marukyan</td>
              <td>-</td>
              <td class="Venue">-</td>
            </tr>

            <tr>
              <td class="tdNum">#</td>
              <td >Creating a Webpack Config for Production from scratch</td>
              <td class="Speaker">Michael Manukyan</td>
              <td>-</td>
              <td class="Venue">-</td>
            </tr>

            <tr>
              <td class="tdNum">#</td>
              <td >Security Issues in Modern JS Frameworks and Libs</td>
              <td class="Speaker">Narek Harutyunyan</td>
              <td>-</td>
              <td class="Venue">-</td>
            </tr>
            <tr>
              <td class="tdNum">#</td>
              <td> Universal React with Next.js</td>
              <td class="Speaker">Gnun Ulikhanyan</td>
              <td>-</td>
              <td class="Venue">-</td>
            </tr>

            <tr>
              <td class="tdNum">#</td>
              <td >V8 engine, JavaScript Code Interpretation and Execution</td>
              <td class="Speaker">Shahen Hovhannisyan</td>
              <td>-</td>
              <td class="Venue">-</td>
            </tr>

            <tr>
              <td class="tdNum">#</td>
              <td >Node.js: diving deeper into libuv</td>
              <td class="Speaker">Vardan Grigoryan</td>
              <td>-</td>
              <td class="Venue">-</td>
            </tr>

            <tr>
              <td colspan="5" style="text-align: center;">
                More topics are coming soon
              </td>
            </tr>

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
