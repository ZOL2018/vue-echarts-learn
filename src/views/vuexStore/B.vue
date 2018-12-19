<template>
  <div>
    <button @click="change"></button>
    <div>{{increment}}</div>
  </div>
</template>

<script>
export default {
  name: 'B',
  data () {
    return {
      // count: 0
    }
  },
  computed: {
    increment () {
      return this.$store.state.mod.count
    }
  },
  methods: {
    change () {
      // this.$store.commit('increment')
      this.$store.dispatch('increment', 2)
      // this.count = this.$store.state.mod.count
    }
  }
}
</script>

<style scoped>

</style>
