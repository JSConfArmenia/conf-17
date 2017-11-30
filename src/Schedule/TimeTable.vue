<script>
import topics from './topics';

import TopicItem from './TopicItem';

export default {
  data: () => ({
    topics,
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
            :topic="topics[0]" />
        </div>
      </div>
    </div>
    <div class="row">

      <div class="col">
        <div class="Venue">

          <TopicItem
            v-for="(topic, index) in topics[1]"
            :key="index"
            :topic="topic" />

        </div>
      </div>
      <div class="col">
        <div class="Venue">

          <TopicItem
            v-for="(topic, index) in topics[2]"
            :key="index"
            :topic="topic" />

        </div>
      </div>
      <div class="col">
        <div class="Venue">

          <TopicItem
            v-for="(topic, index) in topics[3]"
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
    /* height: 100%; */
  }

  .Venue {
    /* height: 100%; */
    flex: 1;
  }


</style>
