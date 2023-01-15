
<template>
    <div>
        <v-app-bar app class="navbar">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-btn icon="" to="/">
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-app-bar-title>{{$store.getters.language.app_name}}</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn color="error" icon @click="logout()"> <v-icon> mdi-logout </v-icon> </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app :right="$store.getters.language.rtl">
            <template v-slot:prepend>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="text-center">{{$store.getters.language.app_name}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
            <v-divider class="mt-3"></v-divider>
            <v-list shaped>
                <v-list-item v-for="(item , index) in navigation_links" :key="index" :to="item.path">
                <v-list-item-content>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data: function () {
        return {
            drawer: null,
        }
    },
    computed: {
        languages() {
            return this.$store.getters.languages
        },
        navigation_links() {
            return [
                
                    {
                        path : '/users-list',
                        title : 'Users',
                    },
            
                    {
                        path : '/visitors-list',
                        title : 'Visitors',
                    },
            
                    {
                        path : '/visitor_check_in-list',
                        title : 'Visitor Check In',
                    },
                    {
                        path : '/visitor_list',
                        title : 'Visitor List',
                    },
            
            ]
        },
    },
    methods: {
        logout() {
            localStorage.removeItem('techfest_token')
            axios.defaults.headers.common['Authorization'] = null
            this.$store.state.isLoggedIn = false
            this.$router.push('/login')
        },
    },
}
</script>
        