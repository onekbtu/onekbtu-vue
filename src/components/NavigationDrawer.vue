<template>
  <v-navigation-drawer
    app
    dark
    value="true"
    v-model="drawer"
    stateless>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Clubs and Organizations
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>
    <v-list>
      <v-list-group
        no-action
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Organizations</v-list-tile-title>
        </v-list-tile>

        <v-list-tile
          v-for="(admin, i) in admins"
          :key="i"
        >
          <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
          <v-list-tile-action>
            <v-icon v-text="admin[1]"></v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>

      <v-list-group
        no-action
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Clubs</v-list-tile-title>
        </v-list-tile>

        <v-list-tile
          v-for="(crud, i) in cruds"
          :key="i"
        >
          <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
          <v-list-tile-action>
            <v-icon v-text="crud[1]"></v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
      <v-list-tile :to="{name: 'About'}">
        <v-list-tile-title>About</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data: () => ({
    admins: [
      ['Faces', 'people_outline'],
      ['Big City Lights', 'settings'],
    ],
    cruds: [
      ['ThinkIT', 'add'],
      ['English Club', 'insert_drive_file'],
      ['Anime Club', 'update'],
    ],
    drawer: true,
  }),
  methods: {
    toggleNav() {
      this.drawer = !this.drawer;
    },
  },
  mounted() {
    this.$root.$on('toggleNav', this.toggleNav);
  },
};
</script>

<style scoped>

</style>
