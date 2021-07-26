<template>
  <div>
    <h3>Quantity {{ stuff.quantity }}</h3>
    <MovementForm v-on:create-movement="createMovement" v-bind:movement="movement" />
    <MovementList v-bind:movements="movements" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CreateMovement } from '@/types/Movement'
import { CreateStuff } from '@/types/Stuff'
import MovementForm from '@/components/MovementForm.vue'
import MovementList from '@/components/MovementList.vue'
import StuffDataService from '@/services/StuffDataService'
import MovementDataService from '@/services/MovementDataService'

@Component({
  components: {
    MovementForm,
    MovementList
  }
})
export default class Movement extends Vue {
  @Prop() id!: number
  private stuff: CreateStuff = { quantity: 0 } as CreateStuff
  private movement: CreateMovement = { type: 'entry', description: '', quantity: 0 }
  private movements: CreateMovement[] = []

  createMovement (movement: CreateMovement): void {
    this.stuff.quantity = movement.quantity
    if (this.movements.length === 0 && movement.quantity === 0) {
      return
    }

    if (this.movements.length !== 0 && movement.quantity === this.movements[this.movements.length - 1].quantity) {
      return
    }

    if (this.movements.length !== 0 && +movement.quantity >= +this.movements[this.movements.length - 1].quantity) {
      movement.type = 'entry'
    } else {
      movement.type = 'egress'
    }
    MovementDataService.create(this.id, movement)
      .then((response) => {
        this.movements.push(response.data)
        this.movement = { type: 'entry', description: '', quantity: this.movement.quantity }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  created (): void {
    this.movement = { type: 'entry', description: '', quantity: this.movement.quantity }
    StuffDataService.get(this.id)
      .then((response) => {
        this.stuff = response.data
        this.movement.quantity = this.stuff.quantity
      })
      .catch((e) => {
        console.log(e)
        this.$router.push('/')
      })
    MovementDataService.getAll(this.id)
      .then((response) => {
        this.movements = response.data
        if (this.movements.length) {
          this.stuff.quantity = this.movements[this.movements.length - 1].quantity
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>

<style scoped lang="scss">
div {
  min-width: 650px;
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
