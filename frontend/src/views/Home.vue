<template>
  <div class="home">
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
