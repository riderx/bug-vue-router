<template>
  <div>
    <h6>About</h6>
    <VueTelInput v-model="phone" mode="international"></VueTelInput>
  </div>
</template>
<script>
import { ref } from "vue";
import { VueTelInput } from "vue-tel-input";
// import "vue-tel-input/dist/vue-tel-input.css";

export default {
  name: "goodbye",
  components: {
    VueTelInput,
  },
  setup() {
    const phone = ref(null);

    return {
      phone,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>