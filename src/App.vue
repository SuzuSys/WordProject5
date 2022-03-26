<template>
  <authenticator>
    <v-app></v-app>
  </authenticator>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { Amplify } from "aws-amplify";
import awsconfig from "aws-exports";
Amplify.configure(awsconfig);

export default defineComponent({
  name: "App",
  components: {
    Authenticator,
  },
});
</script>
