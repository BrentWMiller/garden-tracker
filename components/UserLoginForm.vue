<template>
  <div>
    <div v-if="loginError" class="text-red-500">{{ loginError }}</div>
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        autocomplete="username"
        v-model.trim="$v.form.email.$model"
      />

      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        autocomplete="password"
        v-model="$v.form.password.$model"
      />

      <button type="submit" :disabled="$v.form.$invalid || loading">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "UserLoginForm",
  data() {
    return {
      loading: false,
      loginError: null,
      form: {
        email: "",
        password: ""
      }
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    async login() {
      this.loading = true;
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }
      try {
        await this.$store.dispatch("user/loginWithEmailAndPassword", this.form);
      } catch (error) {
        this.loginError = error
          ? error.message
          : "An unexpected error has occurred. Please try again later.";
      }
      this.loading = false;
    }
  }
};
</script>

<style scoped></style>
