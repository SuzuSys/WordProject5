<template>
  <v-toolbar>
    <v-btn icon>
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title>Title</v-toolbar-title>
  </v-toolbar>
  <folder-form @get-folder-data="getFolder"></folder-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FolderForm from "@/components/FolderForm.vue";

export default defineComponent({
  name: "AccountView",
  setup() {
    function getFolder(message: object) {
      console.log(message);
    }
    return {
      getFolder,
    };
  },
  components: {
    FolderForm,
  },
});
</script>
