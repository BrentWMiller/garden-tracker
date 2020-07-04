import { cloneDeep } from "lodash";

const getDefaultState = () => ({
  token: "",
  plants: [],
  plant: {}
});

export const state = getDefaultState;

export const getters = {};

export const mutations = {
  SET_PLANTS(state, plants) {
    state.plants = cloneDeep(plants);
  },
  SET_PLANT(state, plant) {
    state.plant = cloneDeep(plant);
  },

  ADD_PLANT(state, plant) {
    state.plants.push(cloneDeep(plant));
  }
};

export const actions = {
  async getPlants({ commit }, uid) {
    try {
      const snapshot = await this.$fireStore
        .collection("users")
        .doc(uid)
        .collection("plants")
        .get();
      commit(
        "SET_PLANTS",
        snapshot.docs.map(doc => doc.data())
      );
    } catch (error) {
      console.log(error);
    }
  },
  async getPlant({ commit }, data) {
    try {
      const snapshot = await this.$fireStore
        .collection("users")
        .doc(data.uid)
        .collection("plants")
        .doc(data.cid)
        .get();
      commit("SET_STOP", snapshot.data());
    } catch (error) {
      console.log(error);
    }
  },
  async addPlant({ commit }, data) {
    try {
      await this.$fireStore
        .collection("users")
        .doc(data.uid)
        .collection("plants")
        .add(data.plant);

      commit("ADD_PLANT", data.plant);
    } catch (error) {
      console.log(error);
    }
  }
};
