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

                <!-- COMMENT INPUT/SUBMISSION -->
                <v-card flat class="mt-6">
                    <v-text-field v-model="story.title" outlined flat placeholder="What's your story title?"></v-text-field>
                    <v-text-field v-model="story.headline" outlined flat placeholder="Give your story a headline."></v-text-field>
                    <v-textarea v-model="story.body" outlined flat placeholder="Let's see what you have to say..." height="200"></v-textarea>
                    <router-link to='/'><v-btn depressed outlined class="mt-n3" v-on:click="submitStory">
                        Submit
                    </v-btn></router-link>
                </v-card>

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
      story:{
        title: "",
        headline: "",
        body: "",
        date: "",
      },
    };
  },

  methods: {
    submitStory(){
      let d = new Date();
      let date = d.getDate();
      let month = d.getMonth() + 1;
      let year = d.getFullYear();
      let hours = d.getHours(); 
      let mins = d.getMinutes();
      let time = hours + ":" + mins;
      this.story.date = date + "/" + month + "/" + year + " @ " + time;
      EventService.postStory(this.story);
    }
  }

};
</script>