<template>
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
