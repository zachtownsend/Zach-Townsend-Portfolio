<template>
  <section class="home container">
    <h1>ZT Portfolio</h1>
  </section>
</template>

<script>
  export default {
    name: 'Test',
    created() {
      if (process.browser) {
        window.addEventListener('ready', () => {
          alert('test');
        });
      }
    }
  }
  import '../assets/scripts/app.js';
</script>

<style lang="scss">
  @import 'assets/scss/application.scss';
</style>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('/assets/images/desktop-large_home-bg.jpg') no-repeat center center;
  background-size: cover;
}
h1 {
  font-family: 'Roboto';
  font-weight: 300;
  color: #fff;
}
</style>

