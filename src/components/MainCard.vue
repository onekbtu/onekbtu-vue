<template>
  <v-card style="margin-top: 32px;">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">The development has started</h3>
        <span class="grey--text">ThinkIT club</span><br>
      </div>
      <span style="margin-top: 8px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur delectus deserunt, est et facere hic iusto labore neque odit quidem ratione reiciendis voluptatum. Ab molestias nesciunt officiis perferendis porro.</span>
    </v-card-title>

    <v-card-actions>
      <v-btn flat>Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show" style="margin-right: 16px">
        <v-badge
          small
          color="orange"
        >
          <span slot="badge">3</span>
          <v-icon>{{ show ? 'comment' : 'comment' }}</v-icon>
        </v-badge>
      </v-btn>
    </v-card-actions>

    <v-slide-y-transition>
      <v-card-text v-show="show">
        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time
        for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!
        Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  name: 'MainCard',
};
</script>

<style scoped>

</style>
