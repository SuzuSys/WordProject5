<template>
  <authenticator>
    <app-child></app-child>
  </authenticator>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-vue";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
import AppChild from "./AppChild.vue";
import "@aws-amplify/ui-vue/styles.css";

export default defineComponent({
  name: "App",
  components: {
    Authenticator,
    AppChild,
  },
});
</script>
