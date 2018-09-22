<template>
  <section class="home container">
    <header>
      <nav>
      </nav>
    </header>

    <div class="page-title">
      <h1 class="title">
        <span class="hide-wrapper">
          <span class="target">
            <animated-letters
              text="Zach Townsend"
              :duration="0.2"
              :stagger="0.07"
              :from="{ y: '-100%' }"
              :to="{ y: '0%' }"
            />
          </span>
        </span>
      </h1>
      <p class="sub-title">
        <animated-letters
          text="Freelance Web Developer"
          :duration="0.2"
          :stagger="0.07"
        />
        <br />
        <animated-letters
          text="based in "
          :duration="0.2"
          :stagger="0.07"
          :delay="1.68"
        />
        <span class="highlight">
          <animated-letters
            text="Berlin"
            :duration="0.2"
            :stagger="0.2"
            :delay="2.38"
          />
        </span>
      </p>
    </div>
  </section>
</template>

<script>
  // import '../assets/scripts/app.js';
  import { TweenMax } from 'gsap';
  import AnimatedLetters from '~/components/AnimatedLetters.vue';

  if (process.browser) {
    // console.log($('.target', 'h1.title'));
    // TweenMax.fromTo($('.target', 'h1.title'), 0.8, { y: -parseInt($('h1.title').outerHeight(), 10) }, { y: 0 });
  }

  export default {
    components: {
      AnimatedLetters
    }
  }
</script>

<style lang="scss">
  @import 'assets/scss/application.scss';
  .container {
    .page-title {
      max-width: 33%;
      text-align: right;
      align-self: center;
      padding: 20px;
      h1.title {
        .hide-wrapper {
          overflow:hidden;
          display: block;
          white-space: nowrap;
          .target {
            display: block;
          }
        }
        color: #fff;
        font-size: 64px;
        font-family: 'Roboto';
        font-weight: 100;
        line-height: 1.166;
        margin-bottom: 0;
        // opacity: 0;
      }
      p.sub-title {
        font-size: 36px;
        color: #9C9C9B;
        font-weight: 100;
        line-height: 1.166;
        .highlight {
          color: #DA071F;
        }
      }
    }
  }
</style>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  background: url('/assets/images/desktop-large_home-bg.jpg') no-repeat center center;
  background-size: cover;
}
/*h1 {
  font-family: 'Roboto';
  font-weight: 300;
  color: #fff;
}*/
</style>

