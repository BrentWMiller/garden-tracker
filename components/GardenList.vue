<template>
  <div>
    <button
      class="button"
      @click="addGarden('GARDEN_NAME', 'GARDEN_DESCRIPTION')"
    >
      Add garden
    </button>

    <ul v-if="gardens">
      <li class="flex" v-for="garden in gardens" :key="garden.cid">
        <p>{{ garden.name }}</p>
        <p>{{ garden.description }}</p>
        <p>{{ garden.count }}</p>
        <p>{{ garden.type }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "GardenList",
  props: {
    gardenId: String
  },
  created() {
    this.load();
  },
  computed: {
    ...mapState("gardens", ["gardens"])
  },
  methods: {
    async load() {
      try {
        const uid = this.$store.getters["user/uid"];
        this.$store.dispatch("gardens/getGardens", uid);
      } catch (error) {
        console.error(error);
      }
    },
    async addGarden(name, description) {
      const uid = this.$store.getters["user/uid"];
      const garden = {
        name: name,
        description: description
      };
      this.$store.dispatch("gardens/addGarden", { uid, garden });
    }
  }
};
</script>

<style scoped></style>
