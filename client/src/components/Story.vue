<template>
  <v-app>
    <v-main>
      <v-container>

        <!-- NAVIGATION BAR -->
        <v-app-bar dense dark>
          <v-toolbar-title><router-link to='/' style="text-decoration: none"><v-icon x-large>mdi-blogger</v-icon></router-link></v-toolbar-title>
          <v-spacer></v-spacer>
            <router-link to='/new' style="text-decoration: none"><v-btn>New Post</v-btn></router-link>
        </v-app-bar>
        <v-row no-gutters>
          
          <!-- SPACER COLUMN -->
          <v-col cols="12" sm="1"></v-col>

          <!-- MAIN COLUMN -->
            <v-col cols="12" sm="10">

                <!-- DISPLAY POST -->
                <v-card class="pa-5 mt-5 grey lighten-3" outlined>
                  <v-card-title>{{post.title}}</v-card-title>
                  <v-card-text>{{post.body}}</v-card-text>
                </v-card>

                <!-- COMMENT INPUT/SUBMISSION -->
                <v-card flat class="mt-6">
                    <v-text-field v-model="comment.name" outlined flat placeholder="Add your name..."></v-text-field>
                    <v-textarea v-model="comment.content" outlined flat placeholder="Make a reply..." height="50"></v-textarea>
                    <v-btn depressed outlined class="mt-n3" v-on:click="submitCommentData">
                        Submit
                    </v-btn>
                </v-card>

                <!-- DISPLAY COMMENTS -->
                <div v-for="(item, index) in post.comments" :key="index">
                    <v-card class="mt-5" outlined>
                        <v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline">
                                {{item.user}}
                            </div>
                            <v-list-item-title class=" mb-4">
                               {{item.comment}} 
                            </v-list-item-title>
                            <v-list-item-subtitle>Date submitted: {{item.date}} hours.</v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </div>

            </v-col>

          <!-- SPACER COLUMN -->  
          <v-col cols="12" sm="1"></v-col>
        </v-row>
      </v-container>  
    </v-main>
  </v-app>
</template>

<script>
import EventService from '@/services/eventservice.js';

export default {
  name: 'Story',

  data(){
    return {
      post: {},
      posts:[],
      comment:{
        name: "",
        content: "",
        date:""
      },
    };
  },

  created() {
    this.getPostData(); 
  },

  methods: {
    async getPostData() {
      EventService.getPostSingle(this.$route.params.id)
      .then(
        (post => {
          this.$set(this, "post", post);
        }).bind(this)
      );
    },

    submitCommentData(){
      let d = new Date();
      let date = d.getDate();
      let month = d.getMonth() + 1;
      let year = d.getFullYear();
      let hours = d.getHours(); 
      let mins = d.getMinutes();
      let time = hours + ":" + mins;
      this.comment.date = date + "/" + month + "/" + year + " @ " + time;
      EventService.postComment(this.$route.params.id, this.comment);
      this.getPostData();
    }
  }

};
</script>