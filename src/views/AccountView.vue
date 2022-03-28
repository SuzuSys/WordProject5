<template>
  <h1>Account</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthenticator } from "@aws-amplify/ui-vue";
import { Auth } from "aws-amplify";

export default defineComponent({
  name: "AccountView",
  setup() {
    const { user } = useAuthenticator();
    console.log(user.attributes);
    (async () => {
      const auth = await Auth.currentAuthenticatedUser();
      console.log("In the case of currentAuthenticatedUser");
      console.log(auth.attributes);
      const auth_userinfo = await Auth.currentUserInfo();
      console.log("In the case of currentUserInfo");
      console.log(auth_userinfo);
    })();
  },
});
</script>
