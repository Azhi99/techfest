
<template>
    <div>
        <v-container>
        <v-layout row wrap mt-4>
            <v-flex xs12>
            <h1>Slaw Gian</h1> (Hello in kurdish)
            <p>This is your <span class="primary--text">Techfest</span> project generated with <a href="http://bardabar.baxtiar.com/"
                target="_blank" rel="noopener noreferrer">Bardabar</a></p>
            </v-flex>
            <v-flex xs12>
            <h1 class="mt-4">Project Info</h1>
            <v-divider></v-divider>
            vue version 2 <br>
    
            installed <a href="https://router.vuejs.org/" target="_blank">vue-router</a> and <a
                href="https://vuex.vuejs.org/" target="_blank">vuex</a> for routing and state management
            <br>
            <a href="https://vuetifyjs.com/en/" target="_blank" rel="noopener noreferrer">vuetify</a> for styling
            <br>
            <a href="https://axios-http.com/" target="_blank" rel="noopener noreferrer">axios</a> for http requests
            </v-flex>
            <v-flex xs12>
            <h1 class="mt-4">Project structure</h1>
            <v-divider></v-divider>
            <ul>
                <li>
                /src
                <ul>
                    <li>/views
                    <ul>
                        <li v-for="(item, index) in navigation_links" :key="index">
                        /<router-link :to="item.path">{{item.title}}</router-link>
                        <ul>
                            <li>List.vue</li>
                            <li>Edit.vue</li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li>/components
                    <ul>
                        <li>Navbar.vue</li>
                    </ul>
                    </li>
                    <li>
                    /requests
                    <ul>
                        <li v-for="(item, index) in navigation_links" :key="index">
                        {{item.title}}.request.js
                        </li>
                    </ul>
                    </li>
                    <li>/store
                    <ul>
                        <li>index.js</li>
                        <li>languages.json (all labels in your app in this file, if you want to add another language just
                        duplicate first object and change values)</li>
                    </ul>
                    </li>
                    <li>/router
                    <ul>
                        <li>index.js</li>
                    </ul>
                    </li>
                    <li>/assets</li>
                    <li>main.js</li>
                    <li>App.vue</li>
                </ul>
                </li>
            </ul>
            </v-flex>
        </v-layout>
        </v-container>
    </div>
</template>
<script>
  export default {
    computed: {
      navigation_links() {
          return [
            
                {
                    path : '/users-list',
                    title : 'users',
                },
        
                {
                    path : '/visitors-list',
                    title : 'visitors',
                },
        
                {
                    path : '/visitor_check_in-list',
                    title : 'visitor_check_in',
                },
        
        ]
      },
    },
  }
</script>