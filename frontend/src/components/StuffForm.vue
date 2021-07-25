<template>
  <form v-on:submit.prevent="submit">

    <div>
      <label for="name">Name: <strong><abbr title="required" aria-label="required">*</abbr></strong></label>
      <input type="text" name="name" autocomplete="off" v-model="stuff.name">
    </div>

    <div>
      <label for="state">State: <strong><abbr title="required" aria-label="required">*</abbr></strong></label>
      <select name="state" v-model="stuff.state">
        <option value="new" selected>New</option>
        <option value="used">Used</option>
        <option value="broken">Broken</option>
      </select>
    </div>

    <button type="submit">Save</button>

  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import StuffDataService from '@/services/StuffDataService'
import { CreateStuff } from '@/types/Stuff'

@Component
export default class StuffForm extends Vue {
  @Prop() private stuff!: CreateStuff

  private submit (): void {
    if (!this.stuff.name) {
      alert('field Name required')
      return
    }
    if (!this.stuff.state) {
      alert('field State required')
      return
    }
    StuffDataService.create(this.stuff)
      .then((response) => {
        console.log(response.data)
        this.$emit('add-and-reset-stuff')
      }).catch((e) => {
        console.log(e)
      })
  }
}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

form {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-gap: 10px;
  margin-bottom: 15px;
}

div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

button {
  align-self: flex-end;
  font-weight: bold;
  background-color: black;
  color: white;
}

input, select, button {
  width: 100%;
  height: 25px;
  outline: none;
  cursor: pointer;
  border: 1px solid black;
}

</style>
