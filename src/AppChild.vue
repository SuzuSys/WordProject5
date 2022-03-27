<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="state.drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Word Project</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu v-model="state.menu_languages" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
          <v-btn dark icon v-bind="props">
            <v-icon icon="mdi-web"></v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-subheader>Translaion</v-list-subheader>
            <v-list-item
              v-for="(item, i) in list_languages"
              :key="i"
              :value="item"
              :color="locale === item.value ? 'primary' : 'default'"
              variant="contained"
              @click="changeLanguage(item.value)"
            >
              <v-list-item-title v-text="item.label"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-btn @click="goAccount" icon>
        <v-icon icon="mdi-account" />
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="state.drawer" bottom temporary>
      <v-list nav density="compact">
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
          @click="goDashboard"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useAuthenticator } from "@aws-amplify/ui-vue";
import { useI18n } from "vue-i18n";
import { list_languages } from "./i18n";
import { RouterView, useRouter } from "vue-router";

interface State {
  drawer: boolean;
  menu_languages: boolean;
}

export default defineComponent({
  name: "AppChild",
  components: {
    RouterView,
  },
  setup() {
    const { t, locale } = useI18n({
      useScope: "global",
      inheritLocale: true,
    });
    const { user, signOut } = useAuthenticator();
    const user_language = user.attributes["custom:language"];
    if (typeof user_language === "string") {
      locale.value = user_language;
    }
    const state: State = reactive({
      drawer: false,
      menu_languages: false,
    });
    const changeLanguage: (v: string) => void = (v) => {
      locale.value = v;
    };
    const router = useRouter();
    const goAccount: () => void = () => router.push({ path: "./account" });
    const goDashboard: () => void = () => router.push({ path: "./dashboard" });
    return {
      t,
      locale,
      changeLanguage,
      state,
      goAccount,
      signOut,
      list_languages,
      goDashboard,
    };
  },
});
</script>
