<template>
  <div>{{increment}}</div>
</template>

<script>
export default {
  name: 'A',
  data () {
    return {
    }
  },
  computed: {
    increment () {
      return this.$store.state.mod.count
    }
  }
}
</script>

<style scoped>

</style>
