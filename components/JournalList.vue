<template>
  <div>
    <button
      class="button"
      @click="addJournal('JOURNAL_NAME', 'JOURNAL_DESCRIPTION')"
    >
      Add journal
    </button>

    <ul v-if="journals">
      <li class="flex" v-for="journal in journals" :key="journal.cid">
        <p>{{ journal.name }}</p>
        <p>{{ journal.description }}</p>
        <p>{{ journal.count }}</p>
        <p>{{ journal.type }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "JournalList",
  props: {
    journalId: String
  },
  created() {
    this.load();
  },
  computed: {
    ...mapState("journals", ["journals"])
  },
  methods: {
    async load() {
      try {
        const uid = this.$store.getters["user/uid"];
        this.$store.dispatch("journals/getJournals", uid);
      } catch (error) {
        console.error(error);
      }
    },
    async addJournal(name, description) {
      const uid = this.$store.getters["user/uid"];
      const journal = {
        name: name,
        description: description
      };
      this.$store.dispatch("journals/addJournal", { uid, journal });
    }
  }
};
</script>

<style scoped></style>
