<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon
        @click="state.model.drawer.show_drawer = true"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Word Project</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
        v-model="state.model.menu.show_languages_list"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon icon="mdi-web"></v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-list density="compact">
            <v-list-subheader>{{
              t("AppChild.sentence.translation")
            }}</v-list-subheader>
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
    <v-navigation-drawer v-model="state.model.drawer.show_drawer" temporary>
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
import { list_languages } from "@/i18n";
import { RouterView, useRouter, useRoute } from "vue-router";

interface State {
  model: {
    drawer: {
      show_drawer: boolean;
    };
    menu: {
      show_languages_list: boolean;
    };
  };
}

export default defineComponent({
  name: "AppChild",
  components: {
    RouterView,
  },
  setup() {
    // Translation Setting
    const { t, locale } = useI18n({
      useScope: "global",
      inheritLocale: true,
    });
    const { user } = useAuthenticator();
    const user_language = user.attributes["custom:language"];
    if (typeof user_language === "string") {
      locale.value = user_language;
    }
    // State Setting
    const state: State = reactive<State>({
      model: {
        drawer: {
          show_drawer: false,
        },
        menu: {
          show_languages_list: false,
        },
      },
    });
    // Method Setting
    function changeLanguage(v: string): void {
      locale.value = v;
      state.model.menu.show_languages_list = false;
    }
    // GoLink Method Setting
    const router = useRouter();
    const route = useRoute();
    function goAccount(): void {
      if (route.path !== "/account") {
        router.push({ path: "/account" });
      }
    }
    function goDashboard(): void {
      if (route.path !== "/dashboard") {
        router.push({ path: "/dashboard" });
      } else {
        state.model.drawer.show_drawer = false;
      }
    }
    //
    return {
      t,
      locale,
      state,
      list_languages,
      changeLanguage,
      goAccount,
      goDashboard,
    };
  },
});
</script>
