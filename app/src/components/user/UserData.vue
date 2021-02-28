<template>
  <section class="user-data">
    <div class="user-info">
      <div>
        <base-button icon bottom-left-rounded color="light">
          <base-icon icon="sign-out-alt" />
        </base-button>
      </div>
      <div>
        <h1>Ignacio</h1>
      </div>
    </div>
    <div class="user-buttons">
      <base-confirm-dialog
        title="Refresh with Google Drive songs"
        type="tiny"
        :open="isRefreshDialogOpen"
        @confirm="refreshUserDriveSongs"
        @cancel="closeRefreshDialog"
        :is-loading="refreshingDriveSongs"
      >
        <div>
          <p>
            Are you sure to refresh songs with google drive? <br />
            The information will be synchronized with google drive. If any song
            was deleted or hidden, all metadata of your user songs will be
            deleted from the application. If new songs were added they will
            appear.
          </p>
        </div>
      </base-confirm-dialog>
      <base-button mini color="warning" @click="openRefreshDialog">
        <base-icon icon="redo" /> Refresh Drive
      </base-button>
      <base-dialog
        :open="isChangeRootDriveKeyOpen"
        @close="closeChangeRootDriveKeyDialog"
      >
        <change-root-drive-key
          @changedRootDriveKey="closeChangeRootDialogAndRefresh"
        />
        <div class="alert-danger">This action reload the page</div>
      </base-dialog>
      <base-button mini @click="openChangeRootDriveKeyDialog">
        <base-icon icon="edit" /> Change Drive Root
      </base-button>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ChangeRootDriveKey from "./ChangeRootDriveKey.vue";

export default {
  components: {
    ChangeRootDriveKey,
  },
  data() {
    return {
      isRefreshDialogOpen: false,
      isChangeRootDriveKeyOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      refreshingDriveSongs: "user/refreshingDriveSongs",
    }),
  },
  watch: {
    refreshingDriveSongs(newVal) {
      if (!newVal) {
        this.closeRefreshDialog();
      }
    },
  },
  methods: {
    ...mapActions({
      refreshDriveSongs: "user/refreshDriveSongs",
    }),
    openRefreshDialog() {
      this.isRefreshDialogOpen = true;
    },
    closeRefreshDialog() {
      this.isRefreshDialogOpen = false;
    },
    openChangeRootDriveKeyDialog() {
      this.isChangeRootDriveKeyOpen = true;
    },
    closeChangeRootDriveKeyDialog() {
      this.isChangeRootDriveKeyOpen = false;
    },
    closeChangeRootDialogAndRefresh() {
      this.closeChangeRootDriveKeyDialog();
      location.reload();
    },
    refreshUserDriveSongs() {
      this.refreshDriveSongs();
    },
  },
};
</script>
<style scoped>
.user-data {
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: 1;
  grid-template-areas: "data button";
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  padding-bottom: 1rem;
}

.user-info {
  grid-area: data;
}

.user-info h1 {
  color: var(--app-primary-contrast-color);
  font-size: 2rem;
}

.user-info div:last-child {
  padding: 0.5rem;
}

.user-buttons {
  grid-area: button;
  text-align: end;
  padding-top: 1rem;
  padding-right: 0.5rem;
}

.alert-danger {
  background-color: var(--app-danger-color);
  color: var(--app-danger-contrast-color);
  text-align: center;
  border-radius: 0.5rem;
  height: 2.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
