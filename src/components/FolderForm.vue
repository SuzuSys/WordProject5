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
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

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

export default defineComponent({
  name: "FolderForm",
  setup() {
    // state setting
    const state: State = reactive<State>({
      show: {
        form$btn: {
          create_folder: false,
        },
        btn: {
          edit_folder: false,
        },
      },
    });
    //
    return {
      state,
    };
  },
});
</script>
