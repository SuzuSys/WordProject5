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
      <v-alert
        variant="outlined"
        density="compact"
        type="error"
        v-show="state.show.alert.error.load_user_info"
      >
        {{ t("AppChild.error.load_user_info") }}
        <v-btn
          size="small"
          variant="contained"
          @click="asyncLoadUser"
          :disabled="state.disabled.btn.reload_user_info"
        >
          {{ t("AppChild.method.load_user_info") }}
        </v-btn>
      </v-alert>
      <router-view
        v-show="state.show.router_view.loaded_user_info"
      ></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { Auth } from "aws-amplify";
import { useI18n } from "vue-i18n";
import { list_languages } from "@/i18n";
import { RouterView, useRouter, useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";

interface State {
  model: {
    drawer: {
      show_drawer: boolean;
    };
    menu: {
      show_languages_list: boolean;
    };
  };
  show: {
    alert: {
      error: {
        load_user_info: boolean;
      };
    };
    router_view: {
      loaded_user_info: boolean;
    };
  };
  disabled: {
    btn: {
      reload_user_info: boolean;
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
      show: {
        alert: {
          error: {
            load_user_info: false,
          },
        },
        router_view: {
          loaded_user_info: true,
        },
      },
      disabled: {
        btn: {
          reload_user_info: false,
        },
      },
    });
    // UserStore setting
    const user_store = useUserStore();
    asyncLoadUser();
    // Method Setting
    function changeLanguage(v: string): void {
      locale.value = v;
      state.model.menu.show_languages_list = false;
    }
    async function asyncLoadUser(): Promise<void> {
      state.disabled.btn.reload_user_info = true;
      try {
        const user = await Auth.currentUserInfo();
        user_store.init(
          user.attributes.email,
          user.attributes.email_verified,
          user.attributes.name,
          user.attributes["custom:language"]
        );
        locale.value = user_store.language;
        state.show.alert.error.load_user_info = false;
        state.show.router_view.loaded_user_info = true;
      } catch (e) {
        console.error(e);
        state.show.router_view.loaded_user_info = false;
        state.show.alert.error.load_user_info = true;
      } finally {
        state.disabled.btn.reload_user_info = false;
      }
    }
    // Router Method Setting
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
      asyncLoadUser,
      goAccount,
      goDashboard,
    };
  },
});
</script>
