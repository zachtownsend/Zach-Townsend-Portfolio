<template>
  <span class="slide-in-text__wrapper" v-html="splitText">
    {{ splitText }}
  </span>
</template>

<script>
  import { TweenMax } from 'gsap';

  export default {
    props: {
      text: {
        type: String,
      },
      duration: {
        type: Number,
        default: 0.8,
      },
      stagger: {
        type: Number,
        default: 0.2
      },
      delay: {
        type: Number,
        default: 0.2
      },
      from: {
        type: Object,
        default: () => ({ opacity: 0 })
      },
      to: {
        type: Object,
        default: () => ({})
      },
      ease: {
        type: String,
        default: () => (''),
      },
    },
    computed: {
      splitText: function() {
        const splitText = this.text.split('').map((character) => {
          return character === ' ' ? '&nbsp;' : character;
        }).join('</span><span>');
        return `<span>${splitText}</span>`;
      },
      fromVar: function() {
        const {
          to,
          from,
          delay,
          ease,
        } = this;

        if (_.isEmpty(to)) {
          if (delay) {
            from.delay = delay;
          }
        }

        if (!_.isEmpty(ease)) {
          const easeObject = ease.split('.');
          console.dir(ease);
          from.ease = window[easeObject[0]][easeObject[1]];
          if (_.isFunction(from.ease) && easeObject[2] !== undefined) {
            from.ease = from.ease(easeObject[2]);
          }
        }

        return from;
      },
      toVar: function() {
        const {
          to,
          delay
        } = this;

        if (delay) {
          to.delay = delay;
        }

        return to;
      }
    },
    mounted: function() {
      const {
        $el,
        duration,
        from,
        to,
        fromVar,
        toVar,
        stagger,
      } = this;

      const letters = $el.querySelectorAll('span');

      if (_.isEmpty(to)) {
        TweenMax.staggerFromTo(letters, duration, fromVar, toVar, stagger);
      } else {
        TweenMax.staggerFrom(letters, duration, fromVar, stagger);
      }
    }
  }
</script>

<style>
  .slide-in-text__wrapper > span {
    display: inline-block;
  }
</style>
