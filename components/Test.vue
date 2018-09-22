<template>
  <div class="blah">
    <h1>{{ greeting }}, this is a test</h1>
    <button v-on:click="showAlert">Click me</button>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        greeting: 'Hello'
      }
    },
    methods: {
      showAlert() {
        alert(`${this.greeting}, you clicked!`);
      }
    }
  }
</script>
