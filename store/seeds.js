import { cloneDeep } from "lodash";

const getDefaultState = () => ({
  token: "",
  seeds: [],
  seed: {}
});

export const state = getDefaultState;

export const getters = {};

export const mutations = {
  SET_SEEDS(state, seeds) {
    state.seeds = cloneDeep(seeds);
  },
  SET_SEED(state, seed) {
    state.seed = cloneDeep(seed);
  }
};

export const actions = {
  async getSeeds({ commit }, uid) {
    try {
      const snapshot = await this.$fireStore
        .collection("users")
        .doc(uid)
        .collection("seeds")
        .get();
      commit(
        "SET_SEEDS",
        snapshot.docs.map(doc => doc.data())
      );
    } catch (error) {
      console.log(error);
    }
  },
  async getSeed({ commit }, uid, cid) {
    try {
      const snapshot = await this.$fireStore
        .collection("users")
        .doc(uid)
        .collection("seeds")
        .doc(cid)
        .get();
      commit("SET_STOP", snapshot.data());
    } catch (error) {
      console.log(error);
    }
  }
};
