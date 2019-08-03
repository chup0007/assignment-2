<template>
  <div>
    <!-- form -->
    <h1>Sign Up</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="name">Name</label>
        <input type="text" v-model="name" id="name" requried />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" requried />
      </div>
      <div>
        <label for="pass">Password</label>
        <input type="password" v-model="pass" id="pass" requried />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
// form inputs
export default {
  data() {
    return {
      name: "",
      email: "",
      pass: ""
    };
  },
  methods: {
    // getting the information from the form inputs
    ...mapActions(["getInfo"]),
    onSubmit() {
      const formData = {
        name: this.name,
        email: this.email,
        password: ""
      };

      this.getInfo(formData);
    }
  }
};
</script>

<style>
form {
  padding: 40px;
  background: #b2c9cf;
  max-width: 400px;
  margin: 0 auto;
}
label {
  display: block;
}
input,
button {
  padding: 7px 30px;
  margin: 10px 0;
}
</style>
