<template>
  <div>
    <button class="button" @click="addPlant('PLANT_NAME', 'PLANT_DESCRIPTION')">
      Add plant
    </button>

    <ul v-if="plants">
      <li class="flex" v-for="plant in plants" :key="plant.cid">
        <p>{{ plant.name }}</p>
        <p>{{ plant.description }}</p>
        <p>{{ plant.count }}</p>
        <p>{{ plant.type }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PlantList",
  props: {
    plantId: String
  },
  created() {
    this.load();
  },
  computed: {
    ...mapState("plants", ["plants"])
  },
  methods: {
    async load() {
      try {
        const uid = this.$store.getters["user/uid"];
        this.$store.dispatch("plants/getPlants", uid);
      } catch (error) {
        console.error(error);
      }
    },
    async addPlant(name, description) {
      const uid = this.$store.getters["user/uid"];
      const plant = {
        name: name,
        description: description
      };
      this.$store.dispatch("plants/addPlant", { uid, plant });
    }
  }
};
</script>

<style scoped></style>
