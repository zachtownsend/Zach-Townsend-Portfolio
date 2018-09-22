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
        default: () => ({ opacity: 1 })
      }
    },
    computed: {
      splitText: function() {
        const splitText = this.text.split('').map((character) => {
          return character === ' ' ? '&nbsp;' : character;
        }).join('</span><span>');
        return `<span>${splitText}</span>`;
      },
      toVar: function() {
        const { to } = this;

        if (this.delay) {
          to.delay = this.delay;
        }

        return to;
      }
    },
    methods: {
      showAlert() {
        alert(`${this.greeting}, you clicked!`);
      }
    },
    mounted: function() {
      const letters = this.$el.querySelectorAll('span');
      console.dir(letters);
      TweenMax.staggerFromTo(letters, this.duration, this.from, this.toVar, this.stagger);
    }
  }
</script>

<style>
  .slide-in-text__wrapper > span {
    display: inline-block;
  }
</style>
