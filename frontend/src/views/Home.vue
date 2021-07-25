<template>
  <div class="home">
    <StuffForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StuffForm from '@/components/StuffForm.vue' // @ is an alias to /src

@Component({
  components: {
    StuffForm
  }
})
export default class Home extends Vue {}
</script>
