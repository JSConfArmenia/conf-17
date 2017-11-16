<template>
  <section class="Schedule" id="Schedule">
    <div class="Container">

      <div class="ScheduleGroup">

        <h2 class="Title">Event Schedules</h2>
        <p class="Description">
          (subject to change)
        </p>
        <h3 class="Subtitle">Saturday, 9 December 2017</h3>

        <table>
          <thead>
            <tr>
              <th width="40%">TOPIC</th>
              <th>SPEAKER</th>
              <th>LANG</th>
              <th>TIME</th>
              <th>VENUE</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="(topic, index) in topics" :key="index">
              <td class="Name">{{topic.name}}</td>
              <td class="Speaker">{{topic.speaker}}</td>
              <td class="Lang">{{topic.lang}}</td>
              <td class="Time">{{topic.time}}</td>
              <td class="Venue">{{topic.venue}}</td>
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
  data() {
    return {
      topics: [
        {
          name: 'Functional Programming in JavaScript',
          speaker: 'Rouben Meschian',
          lang: '-',
          time: '-',
          venue: '-',
        },
        {
          name: 'React Native: The Dark Art of Native APIs',
          speaker: 'Shahen Hovhannisyan',
          lang: '-',
          time: '-',
          venue: '-',
        },
        {
          name: 'React Native app development via Expo SDK',
          speaker: 'Edgar Aroutiounian',
          lang: '-',
          time: '-',
          venue: '-',
        },
        {
          name: 'Static Type Checking with FlowType',
          speaker: 'Edgar Marukyan',
          lang: '-',
          time: '-',
          venue: '-',
        },
        {
          name: 'Angular 5 vs React vs Vue',
          speaker: 'Michael Petrosyan',
          lang: '-',
          time: '-',
          venue: '-',
        },
        {
          name: 'Creating a Webpack Config for Production from scratch',
          speaker: 'Michael Manukyan',
          lang: '-',
          time: '-',
          venue: '-',
        },
        {
          name: 'Universal React with Next.js',
          speaker: 'Gnun Ulikhanyan',
          lang: '-',
          time: '-',
          venue: '-',
        },
        {
          name: 'V8 engine, JavaScript Code Interpretation and Execution',
          speaker: 'Shahen Hovhannisyan',
          lang: '-',
          time: '-',
          venue: '-',
        },
        {
          name: 'Real time applications with Firebase and React',
          speaker: 'Slavik Manukyan',
          lang: '-',
          time: '-',
          venue: '-',
        },
        {
          name: 'Why to choose Node.js for IOT',
          speaker: 'Tigran Bayburtsyan',
          lang: '-',
          time: '-',
          venue: '-',
        },
        {
          name: 'Node.js: diving deeper into libuv',
          speaker: 'Vardan Grigoryan',
          lang: '-',
          time: '-',
          venue: '-',
        },
        {
          name: 'Reactive Extensions for JavaScript - RxJS',
          speaker: 'Varuzhan Harutyunyan',
          lang: '-',
          time: '-',
          venue: '-',
        },
        {
          name: 'The true nature and the super power of WebAssembly',
          speaker: 'Armen Mshetsyan',
          lang: '-',
          time: '-',
          venue: '-',
        },
      ],
    };
  },
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
