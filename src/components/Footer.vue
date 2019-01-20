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
            &copy;2018 — <strong>Default Inc</strong>
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

</style>
