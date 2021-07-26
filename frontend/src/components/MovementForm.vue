<template>
  <form v-on:submit.prevent="submit">

    <div>
      <label for="description">Description: <strong><abbr title="required" aria-label="required">*</abbr></strong></label>
      <input type="text" name="description" v-model="movement.description" autocomplete="off">
    </div>

    <div>
      <label for="quantity">Quantity: <strong><abbr title="required" aria-label="required">*</abbr></strong></label>
      <input type="number" name="quantity" v-model="movement.quantity" autocomplete="off">
    </div>

    <button type="submit">Save</button>

  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CreateMovement } from '@/types/Movement'

@Component
export default class MovementForm extends Vue {
  @Prop() private movement!: CreateMovement

  private submit (): void {
    if (!this.movement.description) {
      alert('field Description required')
      return
    }
    if (this.movement.quantity < 0) {
      alert('field Quantity cant be less than 0')
      return
    }
    if (this.movement.quantity > 233) {
      alert('field Quantity cant be great than 233')
      return
    }

    this.$emit('create-movement', { ...this.movement })
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

input[type=number] {
  align-self: flex-start;
}

input, button {
  width: 100%;
  height: 25px;
  outline: none;
  cursor: pointer;
  border: 1px solid black;
}

</style>
