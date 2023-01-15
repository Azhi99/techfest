<template>
   
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                     <form ref="form" @submit.prevent="login()">
                            <v-text-field v-model="username" name="username" label="Username" type="text" placeholder="username" required></v-text-field>
                           
                            <v-text-field v-model="password" name="password" label="Password" type="password" placeholder="password" required></v-text-field>
                           <v-btn type="submit" class="mt-4" color="primary" value="log in">Login</v-btn>
                      </form>
                     </v-card-text>
                  </v-card>
                
               </v-flex>
            </v-layout>
         </v-container>
      
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios.post('users/login', {
        user_name: this.username,
        password: this.password
      }).then(r => {
        localStorage.setItem('techfest_token', r.data.token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + r.data.token;
        this.$store.state.isLoggedIn = true;
        this.$router.push('/');
      })
    },
  },
};
</script>