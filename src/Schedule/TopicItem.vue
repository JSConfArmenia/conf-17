<script>
export default {
  props: ['topic'],
};
</script>

<template>
  <div
    class="TopicContainer"
    :style="{ height: 3 * topic.duration + 'px' }">
    <div
      class="Topic"
      :class="{ '-empty': !topic.name }">
      <h5 class="Name">
        {{ topic.name }}
      </h5>
      <h6 class="Speaker">
        {{ topic.speaker }}
      </h6>
    </div>
  </div>
</template>


<style scoped>
  .TopicContainer {
    display: flex;
    width: 100%;
    align-items: stretch;
    padding: 5px;
  }

  .Topic:not(.-empty) {
    background-color: rgba(246, 246, 246, 0.9);
    padding: 5px 10px;
    border-radius: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
</style>
