const getDefaultState = () => ({
  token: "",
  user: {}
});

export const state = getDefaultState;

export const getters = {
  isLoggedIn: state => {
    try {
      return state.user.uid !== null;
    } catch {
      return false;
    }
  },
  uid: state => {
    return state.user.uid;
  }
};

export const mutations = {
  RESET_USER(state) {
    Object.assign(state, getDefaultState());
  },
  SET_USER(state, user) {
    state.user = {
      uid: user.uid,
      email: user.email
    };
  },
  SET_TOKEN(state, token) {
    state.token = token;
  }
};

export const actions = {
  async createUserWithEmailAndPassword({ commit, dispatch }, form) {
    try {
      await this.$fireAuth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      await dispatch("loginWithEmailAndPassword", form);
    } catch (error) {
      console.log(error);
    }
  },
  async loginWithEmailAndPassword({ commit, dispatch }, data) {
    try {
      await this.$fireAuth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      setTimeout(() => this.$router.push({ path: "/" }), 500);
    } catch (error) {
      throw error;
    }
  },
  async sendPasswordResetEmail({ commit, dispatch }, { email }) {
    try {
      await this.$fireAuth.sendPasswordResetEmail(email);
      setTimeout(() => this.$router.push({ path: "/login" }), 500);
    } catch (error) {
      throw error;
    }
  },
  async logout({ commit, dispatch }) {
    try {
      await this.$fireAuth.signOut();
    } catch (error) {
      throw error;
    } finally {
      this.$router.push("/login");
      commit("RESET_USER");
    }
  },
  async onAuthStateChangedAction({ dispatch, commit }, { authUser }) {
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      try {
        await dispatch("getUserToken");
        commit("SET_USER", authUser);
      } catch (error) {
        throw error;
      }
    }
  },
  async getUserToken({ commit }) {
    try {
      const token = await this.$fireAuth.currentUser.getIdToken();
      commit("SET_TOKEN", token);
    } catch (error) {
      throw error;
    }
  }
};
