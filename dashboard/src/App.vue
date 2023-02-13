
<template>
    <v-app>
        <APPNavbar v-if="$store.state.isLoggedIn"></APPNavbar>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>
      
<script>
import axios from 'axios'
import APPNavbar from './components/Navbar.vue'

export default {
    components:{
        APPNavbar
    },
    name: 'App',

    data: () => ({
        //
    }),

    mounted() {
        const token = localStorage.getItem('techfest_token')
        if(token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
        }
    }
};
</script>