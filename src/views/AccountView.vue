<template>
  <edit-account-form></edit-account-form>
  <edit-profile-form></edit-profile-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditAccountForm from "@/components/EditAccountForm.vue";
import EditProfileForm from "@/components/EditProfileForm.vue";

export default defineComponent({
  name: "AccountView",
  components: {
    EditAccountForm,
    EditProfileForm,
  },
});
</script>
