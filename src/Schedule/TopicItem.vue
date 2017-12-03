<script>
export default {
  props: {
    topic: {
      default: () => ({

      }),
    },
    speaker: {
      default: () => ({

      }),
    },
  },
  methods: {
    getTopicLevelClassname: function getTopicLevelClassname() {
      if (!this.topic || !this.topic.level || !this.topic.level.length) {
        return '-level-all';
      }

      const levels = this.topic.levels.join('-')
        .replace('0', 'beginner')
        .replace('1', 'intermadiate')
        .replace('2', 'advanced');

      return `-level-${levels}`;
    },
  },
  // ['topic', 'speaker'],
};
</script>

<template>
  <div
    class="TopicContainer"
    :style="{ height: 3 * topic.duration + 'px' }">
    <div
      class="Topic"
      :class="[getTopicLevelClassname(), {
        '-empty': !topic.name,
        '-small': topic.duration < 45,
        '-not-available': topic.name === 'N/A',
        '-no-speaker': !speaker.name,
        '-has-speaker': speaker.name,
      }]">
      <div
        class="Name"
        :class="{

        }">
        {{ topic.name }}
      </div>
      <div class="Body" v-if="speaker.name">
        <div class="row">
          <div class="col-4">
            <span class="Badge TopicBadge" :class="getTopicLevelClassname()"></span>
            <span class="Badge LangBadge" :class="`-${topic.lang}`">
              {{ topic.lang }}
            </span>
          </div>
          <div class="col-8">
            <div class="Speaker">
              {{ speaker.name }}
              <div
                class="Avatar"
                v-if="speaker.img"
                :style="{ backgroundImage: `url(${speaker.img})` }" ></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .TopicContainer {
    display: flex;
    width: 100%;
    align-items: stretch;
    padding: 8px 6px;
    text-align: left;
  }

  .Topic:not(.-empty) {
    background-color: rgba(248, 248, 248, 0.95);
    /* background-color: #fff; */
    padding: 5px 10px;
    border-radius: 3px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.0);
    transition: all .3s ease;
  }

  .Topic:not(.-empty):hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .Topic.-small:not(.-no-speaker) .Name {
    font-size: .7em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 5px;
  }

  .Topic.-has-speaker .Name {
    /* border-bottom: 1px solid #d4d4d4; */
    border-bottom: 1px solid #fbe0f4;
  }

   .Topic.-no-speaker .Name {
     margin: 0;
   }

   .Topic.-not-available .Name {
     color: #ccc;
   }

  .Name {
    width: 100%;
    font-size: .9em;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-weight: bold;
    text-align: center;
  }

  .Body {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: .8em;
  }

  .Body > .row {
    flex: 1;
  }

  .Badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    min-width: 22px;
    padding: 0 4px;
    background-color: #e6e6e6;
    border-radius: 2px;
    font-size: .8em;
    margin-right: 2px;
    vertical-align: middle;
  }

  /* .LangBadge {
    background-color: #eaeaea;
    padding: 3px 0;
    text-align: center;
    width: 30px;
    display: inline-block;
    font-size: .9em;
  } */

  .LangBadge.-en {
    color: #0088c2;
  }

  .LangBadge.-am {
    color: #f07e31;
  }

  .Speaker {
    font-size: .82em;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #999;
    text-align: right;
  }

  .Avatar {
    width: 26px;
    height: 26px;
    display: inline-block;
    border-radius: 4px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin-left: 4px;
    border: 1px solid #0075bf;
  }



</style>
