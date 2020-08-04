<template>
<div class="login">
  <div class="login-triangle"></div>
  <h2 class="login-header">Log in</h2>

  <form class="login-container" @submit.prevent="login">
    <p><input type="email" placeholder="Email" name="email" v-model="email"></p>
    <p><input type="password" placeholder="Password" name="password" v-model="password"></p>
    <p><input type="submit" value="Log in"></p>
  </form>
</div>

</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      this.$store
        .dispatch('LOGIN', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'Profile' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>