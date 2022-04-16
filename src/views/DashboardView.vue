<template>
  <v-toolbar>
    <v-btn icon>
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title>Title</v-toolbar-title>
  </v-toolbar>
  <folder-form></folder-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FolderForm from "@/components/FolderForm.vue";

export default defineComponent({
  name: "AccountView",
  components: {
    FolderForm,
  },
});
</script>
