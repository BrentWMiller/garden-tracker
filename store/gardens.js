import { cloneDeep } from "lodash";

const getDefaultState = () => ({
  token: "",
  gardens: [],
  garden: {}
});

export const state = getDefaultState;

export const getters = {};

export const mutations = {
  SET_GARDENS(state, gardens) {
    state.gardens = cloneDeep(gardens);
  },
  SET_GARDEN(state, garden) {
    state.garden = cloneDeep(garden);
  },

  ADD_GARDEN(state, garden) {
    state.gardens.push(cloneDeep(garden));
  }
};

export const actions = {
  async getGardens({ commit }, uid) {
    try {
      const snapshot = await this.$fireStore
        .collection("users")
        .doc(uid)
        .collection("gardens")
        .get();
      commit(
        "SET_GARDENS",
        snapshot.docs.map(doc => doc.data())
      );
    } catch (error) {
      console.log(error);
    }
  },
  async getGarden({ commit }, data) {
    try {
      const snapshot = await this.$fireStore
        .collection("users")
        .doc(data.uid)
        .collection("gardens")
        .doc(data.cid)
        .get();
      commit("SET_GARDEN", snapshot.data());
    } catch (error) {
      console.log(error);
    }
  },
  async addGarden({ commit }, data) {
    try {
      await this.$fireStore
        .collection("users")
        .doc(data.uid)
        .collection("gardens")
        .add(data.garden);

      commit("ADD_GARDEN", data.garden);
    } catch (error) {
      console.log(error);
    }
  }
};
