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
        <v-list two-line @click:select="getModel">
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
      nextToken: string | null;
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
    });
    // folders setting
    const folders = ref<Folders[]>([]);
    callListFolders();
    // graphql method
    async function callListFolders(): Promise<void> {
      try {
        const result = await (API.graphql({
          query: listFolders,
          authMode: "AMAZON_COGNITO_USER_POOLS",
        }) as Promise<ListFoldersResult>);
        let result_folders = result.data.listFolders.items;
        let nextToken: string | null = result.data.listFolders.nextToken;
        while (nextToken) {
          const r = await (API.graphql({
            query: listFolders,
            variables: {
              nextToken,
            },
            authMode: "AMAZON_COGNITO_USER_POOLS",
          }) as Promise<ListFoldersResult>);
          result_folders = result_folders.concat(r.data.listFolders.items);
          nextToken = r.data.listFolders.nextToken;
          console.log(nextToken);
        }
        result_folders.sort((a, b) => (a.name < b.name ? -1 : 1));
        folders.value = result_folders;
      } catch (e) {
        console.error(e);
      }
    }
    function getModel(value: { id: string }) {
      console.log(value.id);
    }
    //
    return {
      t,
      state,
      folders,
      callListFolders,
      getModel,
    };
  },
});
</script>
