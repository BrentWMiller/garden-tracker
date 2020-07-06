import { cloneDeep } from "lodash";

const getDefaultState = () => ({
  token: "",
  journals: [],
  journal: {}
});

export const state = getDefaultState;

export const getters = {};

export const mutations = {
  SET_JOURNALS(state, journals) {
    state.journals = cloneDeep(journals);
  },
  SET_JOURNAL(state, journal) {
    state.journal = cloneDeep(journal);
  },

  ADD_JOURNAL(state, journal) {
    state.journals.push(cloneDeep(journal));
  }
};

export const actions = {
  async getJournals({ commit }, uid) {
    try {
      const snapshot = await this.$fireStore
        .collection("users")
        .doc(uid)
        .collection("journals")
        .get();
      commit(
        "SET_JOURNALS",
        snapshot.docs.map(doc => doc.data())
      );
    } catch (error) {
      console.log(error);
    }
  },
  async getJournal({ commit }, data) {
    try {
      const snapshot = await this.$fireStore
        .collection("users")
        .doc(data.uid)
        .collection("journals")
        .doc(data.cid)
        .get();
      commit("SET_JOURNAL", snapshot.data());
    } catch (error) {
      console.log(error);
    }
  },
  async addJournal({ commit }, data) {
    try {
      await this.$fireStore
        .collection("users")
        .doc(data.uid)
        .collection("journals")
        .add(data.journal);

      commit("ADD_JOURNAL", data.journal);
    } catch (error) {
      console.log(error);
    }
  }
};
