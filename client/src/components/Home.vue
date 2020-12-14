<template>
  <v-app style=" background: #EEEEEE">
    <v-main>
      <v-container class="grey lighten-5">
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
              <div v-for="(post) in posts" :key="post.id">
                <v-card class="pa-5 mt-5" outlined>
                  <v-card-title>{{post.title}}</v-card-title>
                    <v-card-text>{{post.headline}}</v-card-text>
                    <v-list-item class="grow">

                      <!-- DATE SUBMITTED -->
                      <v-list-item-content>
                        <v-list-item-content class="caption mt-n4">Date submitted: {{post.date}} hours.</v-list-item-content>
                        
                        <!-- NO. OF COMMENTS -->
                        <v-list-item-content v-if="post.comments" class="overline">
                          <router-link :to="'/story/' + post.id">
                              {{post.comments.length}} comment(s)
                          </router-link>
                        </v-list-item-content>
                      </v-list-item-content>

                      <!-- READ/SUBMIT BUTTON -->
                      <v-row align="center" justify="end">
                        <span class="subheading mr-2">
                          <v-card-actions>
                            <v-btn outlined text>
                              <router-link :to="'/story/' + post.id">
                                Read
                              </router-link>
                            </v-btn>
                          </v-card-actions>
                        </span>
                      </v-row>
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
  name: 'Home',

  data(){
    return {
      posts: [],
    };
  },

  created() {
    this.getPostsData(); 
  },

  methods: {
    async getPostsData() {
      
      EventService.getPosts()
      .then(
        (posts => {
          this.$set(this, "posts", posts);
        }).bind(this)
      );
    }
  },

};
</script>
