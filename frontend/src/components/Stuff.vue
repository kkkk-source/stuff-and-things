<template>
  <div>
    <StuffForm v-on:add-and-reset-stuff="addAndResetStuff" v-bind:stuff="stuff" />
    <StuffList v-on:delete-stuff="deleteStuff" v-on:select-stuff="stuffSelected" v-bind:stuffs="stuffs" />
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
  private stuff: CreateStuff = { name: '', state: 'new', quantity: 0 }
  private stuffs: CreateStuff[] = []

  stuffSelected (stuff: CreateStuff): void {
    this.stuff = stuff
  }

  addAndResetStuff (): void {
    this.stuffs.push({ ...this.stuff })
    this.stuff = { name: '', state: 'new', quantity: 0 }
  }

  deleteStuff ({ id, index }): void {
    StuffDataService.delete(id)
      .then((response) => {
        this.stuffs.splice(index, 1)
        console.log(response)
      })
      .catch((e) => {
        console.log('could not delete ' + id)
        console.log(e)
      })
  }

  created (): void {
    StuffDataService.getAll()
      .then((response) => {
        this.stuffs = response.data
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>

<style scoped lang="scss">
</style>
