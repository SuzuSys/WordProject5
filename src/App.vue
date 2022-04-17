<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
import AppChild from "@/AppChild.vue";
import "@aws-amplify/ui-vue/styles.css";
import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";
Amplify.configure(awsconfig);
</script>

<template>
  <authenticator>
    <app-child></app-child>
  </authenticator>
</template>
