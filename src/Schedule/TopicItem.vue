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
      if (!this.topic || !this.topic.levels || !this.topic.levels.length) {
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
            <span class="Badge LevelBadge" :class="getTopicLevelClassname()"></span>
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
    /* border: 1px solid; */
  }

  .Topic:not(.-empty):hover {
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
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
    width: 22px;
    padding: 0 4px;
    /* background-color: #e6e6e6; */
    background-color: #fff;
    border-radius: 4px;
    font-size: .8em;
    margin-right: 2px;
    vertical-align: top;
    opacity: .6;
    transition: all .3s ease;
    cursor: default;
  }

  .Badge:hover {
    opacity: 1;
  }

  .LevelBadge {
    border: 6px solid;
    background-color: #fff;
  }

  .Topic.-level-all,
  .LevelBadge.-level-all {
    border-color: #00b9ff;
    border-left-color: #00b9ff;
    border-top-color: #9fc718;
    border-right-color: #f38e1d;
    border-bottom-color: #de3574;
  }

  .Topic.-level-beginner,
  .LevelBadge.-level-beginner {
    border-color: #9fc718;
  }

  .Topic.-level-beginner-intermadiate,
  .LevelBadge.-level-beginner-intermadiate {
    border-top-color: #9fc718;
    border-left-color: #9fc718;
    border-right-color: #f38e1d;
    border-bottom-color: #f38e1d;
  }

  .Topic.-level-intermadiate,
  .LevelBadge.-level-intermediate {
    border-color: #f38e1d;
  }

  .Topic.-level-intermadiate-advanced,
  .LevelBadge.-level-intermadiate-advanced {
    border-color: #f38e1d;

    border-top-color: #f38e1d;
    border-left-color: #f38e1d;
    border-right-color: #de3574;
    border-bottom-color: #de3574;
  }

  .Topic.-level-advanced,
  .LevelBadge.-level-advanced {
    border-color: #de3574;
  }


  /* .LangBadge {
    background-color: #eaeaea;
    padding: 3px 0;
    text-align: center;
    width: 30px;
    display: inline-block;
    font-size: .9em;
  } */

  .LangBadge {
    border: 1px solid;
  }

  .LangBadge.-en {
    color: #0088c2;
    border-color: #0088c2;
  }

  .LangBadge.-am {
    color: #f07e31;
    border-color: #f07e31;
  }

  .Speaker {
    font-size: .82em;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #999;
    text-align: right;
    /* opacity: .7; */
    transition: all .3s ease;
    cursor: default;
  }

  .Speaker:hover .Avatar {
    opacity: 1;
  }

  .Avatar {
    width: 24px;
    height: 24px;
    display: inline-block;
    border-radius: 4px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin-left: 4px;
    border: 1px solid #0075bf;
    transition: all .3s ease;
    opacity: .7;
  }



</style>
