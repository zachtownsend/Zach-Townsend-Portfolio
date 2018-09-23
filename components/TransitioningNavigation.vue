<template>
  <nav class="transitioning-navigation">
    <ul>
      <li><navigation-link to="/projects">Projects</navigation-link></li>
      <li><navigation-link to="/blog">Blog</navigation-link></li>
      <li><navigation-link to="/workshop">Workshop</navigation-link></li>
      <li><navigation-link to="/contact">Contact</navigation-link></li>
    </ul>
  </nav>
</template>

<script type="text/javascript">
  import NavigationLink from '~/components/NavigationLink';

  export default {
    components: {
      NavigationLink
    }
  }
</script>
