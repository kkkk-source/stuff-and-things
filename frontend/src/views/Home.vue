<template>
  <div class="home">
    <h2>Stuffs</h2>
    <Stuff />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Stuff from '@/components/Stuff.vue'

@Component({
  components: {
    Stuff
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  min-width: 650px;
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
