<template>
  <div>
    <button @click="change"></button>
    <div>{{count}}</div>
  </div>
</template>

<script>
export default {
  name: 'B',
  data () {
    return {
      count: 0
    }
  },
  computed: {
  },
  methods: {
    change () {
      this.$store.commit('increment')
      this.count = this.$store.state.mod.count
      console.log(this.count)
    }
  }
}
</script>

<style scoped>

</style>
