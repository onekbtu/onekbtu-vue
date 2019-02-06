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
                        :imageClick="null"
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
            @click="likeClicked"
            medium
            v-bind:class="{
                'vote_btn_default': !likeHover && !liked,
                'pink--text': likeHover || liked,
            }"
            style="cursor: pointer"
            v-on:mouseover="likeHover = !likeHover"
            v-on:mouseleave="likeHover = !likeHover"
          >arrow_upward</v-icon>
          <p class="font-weight-bold mb-0 ml-3 mr-3"> {{ post.rating }} </p>
          <v-icon
            @click="dislikeClicked"
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
    <v-snackbar
      v-model="snackbar"
      color="info"
      :timeout="5000"
    >
      Please login to vote :)
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-flex>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Post from '../store/modules/posts/model';
import { POSTS_DISLIKE, POSTS_LIKE } from '../store/actions/posts';

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
      snackbar: false,
      liked: false,
      likeHover: false,
      disliked: false,
      dislikeHover: false,
    };
  },
  computed: {
    ...mapGetters('user', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('posts', {
      like: POSTS_LIKE,
      dislike: POSTS_DISLIKE,
    }),
    ...mapMutations('posts', ['updateRating']),
    likeClicked() {
      if (!this.isAuthenticated) {
        this.snackbar = true;
        return;
      }
      this.like(this.post.id).then(() => {
        this.liked = true;
        this.disliked = false;
      });
    },
    dislikeClicked() {
      if (!this.isAuthenticated) {
        this.snackbar = true;
        return;
      }
      this.dislike(this.post.id).then(() => {
        this.disliked = true;
        this.liked = false;
      });
    },
  },
  mounted() {
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
