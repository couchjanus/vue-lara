<template>
<div class="login">
  <div class="login-triangle"></div>
  <h2 class="login-header">Register</h2>

  <form class="login-container" @submit.prevent="register">
    <p><input type="text" placeholder="Name" name="name" v-model="name"></p>
    <span class="text-danger" v-if="errors.name">
            {{ errors.name[0] }}
    </span>
    <p><input type="email" placeholder="Email" name="email" v-model="email"></p>
    <span class="text-danger" v-if="errors.email">
            {{ errors.email[0] }}
    </span>
    <p><input type="password" placeholder="Password" name="password" v-model="password"></p>
          <span class="text-danger" v-if="errors.password">
            {{ errors.password[0] }}
          </span>
    <p><input type="password" placeholder="Password confirmation" name="password_confirmation" v-model="password_confirmation"></p>
    <span class="text-danger" v-if="errors.password_confirmation">
            {{ errors.password_confirmation[0] }}
    </span>

    <p><input type="submit" value="Register"></p>
  </form>
</div>

</template>

<script>

export default {
  data() {
    return {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        errors: []
    };
  },

  methods: {
    register () {
      this.$store
        .dispatch('REGISTER', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
        .catch(err => {
          if (error.response.status === 422) {
            console.log("ERRRR:: ", error.response.data);
            // this.errors = error.response.data.errors;
          }
        })
    }
  }
};
</script>
