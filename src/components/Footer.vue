<template>
  <div>
      <div style="height: 72px"></div>
      <v-footer
        style="margin-top: 16px; position: absolute;width:100%;bottom:0;padding-right:300px;"
        height="auto"
      >
        <v-card
          class="flex"
          flat
          tile
        >
          <v-card-actions class="grey darken-3 justify-center">
            &copy;2019 — &nbsp;<strong>Default Inc</strong>
            <v-icon class="wrapper" color="red">favorite</v-icon>
          </v-card-actions>
        </v-card>
      </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.wrapper {
  animation: heartbeat 0.8s linear infinite;
}

@keyframes heartbeat {
  0%{transform: scale(0.8, 0.8)}
  50%{transform: scale(0.6, 0.6)}
  100%{transform: scale(0.8, 0.8)}
}
</style>
