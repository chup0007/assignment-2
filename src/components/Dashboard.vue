<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <h2>Hello {{ name }}</h2>
    <h2>{{ email }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "dashboard",
  // initial values
  data() {
    return {
      name: "",
      email: "",
      title: "Dashboard"
    };
  },
  // updating the value on the dashboard page
  created() {
    this.email = this.getInfo.info.email;
    this.name = this.getInfo.info.name;
  },
  computed: mapGetters(["getInfo"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
