<template>
  <nuxt-link :to="to" class="nav-link">
    <slot/>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
      }
    }
  }
</script>

<style type="scss">
  a.nav-link {
    font-family: 'Roboto';
    font-size: 26px;
    text-decoration: none;
    color: #fff;
    font-weight: 100;
    padding-right: 50px;
    position: relative;
    transition: color 0.6s ease-out;
    &:after {
      content: "";
      width: 30px;
      height: 2px;
      background: #fff;
      position: absolute;
      right: 0;
      top: calc(50% - 1px);
      transform: translateX(0);
      transition: background-color 0.6s ease-out, transform 0.6s ease-out;
    }
    &:hover {
      color: #DA071F;
      &:after {
        background-color: #DA071F;
        transform: translateX(5px);
      }

    }
  }
</style>
