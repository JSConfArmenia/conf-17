<script>
import topics from '@/_services/topics';
import speakers from '@/_services/speakers';

import TimeScale from './TimeScale';
import TopicItem from './TopicItem';
import ScheduleBot from './ScheduleBot';

export default {
  data: () => ({
    topics,
    speakers,
  }),
  methods: {
    getSpeaker: function getSpeaker(speakerId) {
      return this.speakers[speakerId];
    },
  },
  components: {
    ScheduleBot,
    TimeScale,
    TopicItem,
  },
};
</script>


<template>
  <section class="Schedule" id="Schedule">
    <div class="Container">


      <h2 class="Title">Event Schedules</h2>
      <h3 class="Subtitle">Saturday, 9 December 2017</h3>

      <ScheduleBot />

      <div class="TimeTable">
        <div class="TimeTableSection">
          <TimeScale
            :start="'10:00'" />
          <div class="TimeTableContent">
            <div class="TimeTableContentHeader">
              <div class="row">
                <div class="col">
                  <label class="Label">
                    Entry
                  </label>
                </div>
              </div>
            </div>
            <div class="TimeTableTopics">
              <TopicItem
                :topic="topics[0]" />
            </div>
          </div>
        </div>

        <div class="TimeTableSection">
          <TimeScale
            :start="'10:30'" />
          <!-- Scrollable content -->
          <div class="TimeTableContent -scrollable">
            <div class="TimeTableContentHeader">
              <div class="row">
                <div class="col col-4">
                  <label class="Label">
                    Manoogyan Hall
                  </label>
                </div>
                <div class="col col-4">
                  <label class="Label">
                    408E
                  </label>
                </div>
                <div class="col col-4">
                  <label class="Label">
                    308E
                  </label>
                </div>
              </div>
            </div>
            <div class="TimeTableTopics">
              <div class="row">
                <div class="col col-4">
                  <TopicItem
                    v-for="(topic, index) in topics[1]"
                    :key="index"
                    :topic="topic"
                    :speaker="getSpeaker(topic.speakerId)" />
                </div>
                <div class="col col-4">
                  <TopicItem
                    v-for="(topic, index) in topics[2]"
                    :key="index"
                    :topic="topic"
                    :speaker="getSpeaker(topic.speakerId)" />
                </div>
                <div class="col col-4">
                  <TopicItem
                    v-for="(topic, index) in topics[3]"
                    :key="index"
                    :topic="topic"
                    :speaker="getSpeaker(topic.speakerId)" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>

  .TimeTable {
    /* width: 100%; */
    position: relative;
    margin-right: -15px;
  }

  .TimeTable .row {
    margin-left: 0;
    margin-right: 0;
  }

  .TimeTable .col {
    padding-left: 0;
    padding-right: 0;
  }

  .TimeTable .Label {
    margin: 0;
    font-weight: bold;
  }

  .TimeTableSection {
    width: 100%;
    position: relative;
    padding-left: 70px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, .7);
    border-radius: 5px;
    border-radius: 5px 0 0 5px;
    padding-bottom: 20px;
  }

  .TimeTableContent {
    position: relative;
    /* overflow-x: scroll; */
    /* overflow-y: visible; */
    overflow: auto;
    padding-left: 4px;
    padding-right: 4px;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: none;

    background-color: rgba(255, 255, 255, .6);
    /* border-right: 1px solid rgba(0, 0, 0, 0.3); */
    /* border-right: 1px solid rgba(0, 0, 0, 0.3); */
  }

  .TimeScale {
    top: 40px;
  }

  .TimeTableContent.-scrollable .TimeTableTopics,
  .TimeTableContent.-scrollable .TimeTableContentHeader {
    min-width: 900px;
  }

  .TimeTableTopics,
  .TimeTableContentHeader {
    overflow: hidden;
  }

  .TimeTableContentHeader {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .TimeTableContentHeader .row {
    flex: 1;
  }

  @media (max-width: 1200px) {
    .TimeTable {
      margin-right: -15px;
    }

    .TimeTableSection {
      border-radius: 5px 0 0 0;
    }

    .TimeTableContent {
      border-right: 0;
    }
  }

  @media (max-width: 768px) {
    .TimeTable {
      margin-left: -15px;
    }

    .TimeTableSection {
      padding-left: 60px;
    }
  }

</style>



<style scoped>

.Schedule {
  text-align: center;
  padding: 60px 0 80px 0;
  background-color: #fff;
  background-repeat: no-repeat;
  background-image: url(../_assets/color-bg-left-bottom.png), url(../_assets/color-bg-right-bottom.png), url(../_assets/color-bg-right-top.png);
  background-position: 0 100%, 100% 100%, 100% 0;
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


@media (min-width: 769px) and (max-width: 1200px) {
  .Schedule {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}


@media (max-width: 768px) {
  .Schedule {
    padding-top: 40px;
    padding-bottom: 0;
  }


  h3 {
    font-size: 15px;
  }
}

</style>
