<template>
  <div class="movements">
    <h2>Movements of Stuff {{ this.$route.params.id }}</h2>
    <Movement v-bind:id="id" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Movement from '@/components/Movement.vue'

@Component({
  components: {
    Movement
  }
})
export default class Movements extends Vue {
  private id = 0

  created (): void {
    this.id = +this.$route.params.id
  }
}
</script>

<style scoped lang="scss">
.movements {
  min-width: 650px;
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

span {
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  color: white;
  background-color: black;
}
</style>
