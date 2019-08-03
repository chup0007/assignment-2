<template>
  <div class="home">
    <Dashboard msg="Dashboard" />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "dashboard",
  components: {
    Dashboard
  },
  data() {
    return {
      title: "Dashboard"
    };
  }
};
</script>
