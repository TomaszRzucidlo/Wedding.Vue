<template>
  <div>
    <div v-for="(guest,index) of guests" :key="index">
      <p>{{guest.name}}</p>
    </div>
  </div>
</template>

<script>
import { GET_GUESTS } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "Guest",
  components: {},
  data() {
    return {
    };
  },
  methods: {
  },
  mounted: function() {
        this.$store.dispatch(GET_GUESTS);
  },
    computed: {
    ...mapGetters(["currentUser", "guests", "isAuthenticated"])
  },
};
</script>
<style scoped>
</style>