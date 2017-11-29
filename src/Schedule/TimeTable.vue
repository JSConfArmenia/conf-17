<script>
import topics from './topics';

import TopicItem from './TopicItem';

export default {
  data: () => ({
    topicsByRooms: topics,
  }),
  components: {
    TopicItem,
  },
};
</script>

<template>
  <div class="TimeTable">
    <div class="row">

      <div class="col">
        <div class="Venue">

          <TopicItem
            v-for="(topic, index) in topicsByRooms[0]"
            :key="index"
            :topic="topic" />

        </div>
      </div>
      <div class="col">
        <div class="Venue">

          <TopicItem
            v-for="(topic, index) in topicsByRooms[1]"
            :key="index"
            :topic="topic" />

        </div>
      </div>
      <div class="col">
        <div class="Venue">

          <TopicItem
            v-for="(topic, index) in topicsByRooms[2]"
            :key="index"
            :topic="topic" />

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .TimeTable {
    width: 100%;
    height: 100%;
    left: 0;
  }

  .row {
    height: 100%;
  }

  .Venue {
    height: 100%;
    flex: 1;
  }


</style>
