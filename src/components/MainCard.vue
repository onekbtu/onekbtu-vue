<template>
  <v-flex sm11 md5>
    <v-card style="margin-top: 32px;">
      <v-card-title primary-title>
        <div style="width: 100%">
          <h3 class="headline mb-0"> {{ post.title }}</h3>
          <span class="grey--text">ThinkIT club</span>
        </div>
        <span style="margin-top: 8px; width: 100%;">
          <mavon-editor language='ru'
                        :toolbarsFlag="false"
                        :subfield="false"
                        defaultOpen="preview"
                        style="z-index: 1;min-height: 120px;"
                        v-model='post.content'>
          </mavon-editor>
        </span>
      </v-card-title>

      <v-card-actions>
        <v-layout fluid align-center justify-start fill-height>
          <v-icon
            medium
            v-bind:class="{
                'vote_btn_default': !likeHover && !liked,
                'pink--text': likeHover || liked,
            }"
            style="cursor: pointer"
            v-on:mouseover="likeHover = !likeHover"
            v-on:mouseleave="likeHover = !likeHover"
          >arrow_upward</v-icon>
          <p class="font-weight-bold mb-0 ml-3 mr-3"> 2 </p>
          <v-icon
            medium
            v-bind:class="{
                'vote_btn_default': !dislikeHover && !disliked,
                'blue--text': dislikeHover || disliked,
            }"
            style="cursor: pointer"
            v-on:mouseover="dislikeHover = !dislikeHover"
            v-on:mouseleave="dislikeHover= !dislikeHover"
          >arrow_downward</v-icon>
        </v-layout>
        <v-spacer></v-spacer>
        <v-btn flat>Share</v-btn>
        <v-btn flat color="deep-orange lighten-1">Comments</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import Post from '../store/modules/posts/model';

export default {
  name: 'MainCard',
  props: {
    post: {
      type: Post,
      required: true,
    },
  },
  data() {
    return {
      liked: false,
      likeHover: false,
      disliked: false,
      dislikeHover: false,
    };
  },
  mounted() {
    console.log(this.$el.getElementsByClassName('v-show-content'));
    this.$el.getElementsByClassName('v-show-content')[0].classList.add('preview_markdown');
    this.$el.getElementsByClassName('v-note-panel')[0].classList.add('preview_markdown');
  },
};
</script>

<style>
  .vote_btn_default {
    opacity: 0.54;
    color: white;
  }
  .preview_markdown {
    background: #424242 !important;
    box-shadow: none !important;
    padding-left: 4px !important;
    padding-right: 4px !important;
    color: white;
    width: 100%;
    font-family: Roboto,sans-serif !important;
  }

</style>
