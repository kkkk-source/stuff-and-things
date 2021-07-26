<template>
  <div>
    <StuffForm v-on:reset-stuff="resetStuff" v-on:add-and-reset-stuff="addAndResetStuff" v-bind:stuff="stuff" v-bind:index="index" />
    <StuffList v-on:delete-stuff="deleteStuff" v-on:select-stuff="selectStuff" v-bind:stuffs="stuffs" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StuffDataService from '@/services/StuffDataService'
import StuffForm from '@/components/StuffForm.vue'
import StuffList from '@/components/StuffList.vue'
import { CreateStuff } from '@/types/Stuff'

@Component({
  components: {
    StuffForm,
    StuffList
  }
})
export default class Home extends Vue {
  private index = -1
  private stuff: CreateStuff = { name: '', state: 'new', quantity: 0 }
  private stuffs: CreateStuff[] = []

  selectStuff ({ stuff, index }: { stuff: CreateStuff, index: number }): void {
    this.stuff = { ...stuff }
    this.index = index
  }

  resetStuff (): void {
    this.stuff = { name: '', state: 'new', quantity: 0 }
    this.index = -1
  }

  addAndResetStuff (stuff: CreateStuff): void {
    // the current stuff already exists, so we are editing it
    if (this.index >= 0) {
      this.$set(this.stuffs, this.index, stuff)
      this.stuff = { name: '', state: 'new', quantity: 0 }
      this.index = -1
      return
    }

    this.stuffs.push({ ...stuff })
    this.stuff = { name: '', state: 'new', quantity: 0 }
  }

  deleteStuff ({ id, index }:{ id: number, index: number }): void {
    StuffDataService.delete(id)
      .then(() => {
        this.stuffs.splice(index, 1)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  created (): void {
    StuffDataService.getAll()
      .then((response) => {
        this.stuffs = response.data
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>

<style scoped lang="scss">
div {
  width: 100%;
}
</style>
