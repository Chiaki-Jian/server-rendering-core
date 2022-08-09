<template>
  <div id="app">
    <p v-if="switch">hello SSR</p>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switch: false
    }
  },
  methods: {
    handleClick() {
      this.switch = !this.switch
    }
  }

}
</script>

<style>
#app {
  width: 100%;
  text-align: center;
  background-color: antiquewhite;
}
</style>