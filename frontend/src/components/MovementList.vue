<template>
  <table>
    <thead>

      <th>Description</th>
      <th>Entry</th>
      <th>Egress</th>
      <th>Quantity</th>

    </thead>

    <tbody>

      <tr v-for="movement in movements" v-bind:key="movement.id">
        <td>
          {{ movement.description}}
        </td>

        <td v-if="movement.type === 'entry'">
          &#10004;
        </td>
        <td v-else>
        </td>

        <td v-if="movement.type === 'egress'">
          &#10004;
        </td>
        <td v-else>
        </td>

        <td>
          {{ movement.quantity }}
        </td>
      </tr>

    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CreateMovement } from '@/types/Movement'

@Component
export default class MovementList extends Vue {
  @Prop() private movements!: CreateMovement[]
}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

table {
  width: 100%;
  height: auto;
  border-spacing: 0;
}

thead {
  background-color: black;
  color: white;
}

th {
  padding-top: 5px;
  padding-bottom: 5px;
}

td {
  height: 35px;
}

tr td {
  border: 1px solid white;
}

tr:hover td {
  color: #42b983;
  border-top: 1px solid #42b983;
  border-bottom: 1px solid #42b983;
}
</style>
