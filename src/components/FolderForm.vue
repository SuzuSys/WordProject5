<template>
  <v-card class="mx-auto my-12" max-width="500" variant="outlined">
    <v-card-title>Folders</v-card-title>
    <v-card-actions>
      <v-container class="pa-1">
        <v-row>
          <v-col cols="6">
            <v-btn
              block
              class="mb-2 mx-0"
              variant="outlined"
              v-show="!state.show.form$btn.create_folder"
              @click="state.show.form$btn.create_folder = true"
            >
              Create Folder
            </v-btn>
            <v-btn
              block
              class="mb-2 mx-0"
              variant="contained-text"
              v-show="state.show.form$btn.create_folder"
              @click="state.show.form$btn.create_folder = false"
            >
              Cancel
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              variant="outlined"
              block
              class="mb-2 mx-0"
              v-show="!state.show.btn.edit_folder"
              @click="state.show.btn.edit_folder = true"
            >
              Edit Folder
            </v-btn>
            <v-btn
              block
              variant="contained-text"
              class="mb-2 mx-0"
              v-show="state.show.btn.edit_folder"
              @click="state.show.btn.edit_folder = false"
            >
              Cancel
            </v-btn>
          </v-col>
        </v-row>
        <v-list two-line v-model:selected="state.test.model">
          <v-list-item
            v-for="(folder, i) in folders"
            :key="i"
            :value="state.show.btn.edit_folder ? null : folder"
            prepend-icon="mdi-folder"
            :title="folder.name"
            :subtitle="folder.description"
            active-color="primary"
          >
            <template v-slot:append>
              <v-list-item-avatar right>
                <v-btn
                  variant="text"
                  icon="mdi-pencil"
                  v-show="state.show.btn.edit_folder"
                  class="my-n1"
                ></v-btn>
              </v-list-item-avatar>
              <v-list-item-avatar>
                <v-btn
                  variant="text"
                  icon="mdi-delete"
                  v-show="state.show.btn.edit_folder"
                  class="my-n1"
                ></v-btn>
              </v-list-item-avatar>
            </template>
          </v-list-item>
        </v-list>
        <v-btn @click="lookModel" variant="outlined" block class="my-2 mx-0">
          look value
        </v-btn>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import { API } from "aws-amplify";
import { listFolders } from "@/graphql/queries";

interface State {
  show: {
    form$btn: {
      create_folder: boolean;
    };
    btn: {
      edit_folder: boolean;
    };
  };
  test: {
    model: object[] | undefined;
  };
}

interface Folders {
  id: string;
  name: string;
  description: string;
}

interface ListFoldersResult {
  data: {
    listFolders: {
      items: Folders[];
    };
  };
}

export default defineComponent({
  name: "FolderForm",
  setup() {
    // Translation Setting
    const { t } = useI18n({
      useScope: "global",
      inheritLocale: true,
    });
    // state setting
    const state: State = reactive({
      show: {
        form$btn: {
          create_folder: false,
        },
        btn: {
          edit_folder: false,
        },
      },
      test: {
        model: undefined,
      },
    });
    // folders setting
    const folders = ref<Folders[]>([]);
    callListFolders();
    // graphql method
    function lookModel(): void {
      console.log(state.test.model ? state.test.model[0] : undefined);
    }
    async function callListFolders(): Promise<void> {
      try {
        const result = await (API.graphql({
          query: listFolders,
          authMode: "AMAZON_COGNITO_USER_POOLS",
        }) as Promise<ListFoldersResult>);
        const result_folders = result.data.listFolders.items;
        result_folders.sort((a, b) => (a.name < b.name ? -1 : 1));
        folders.value = result_folders;
      } catch (e) {
        console.error(e);
      }
    }
    //
    return {
      t,
      state,
      folders,
      callListFolders,
      lookModel,
    };
  },
});
</script>
