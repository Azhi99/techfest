
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import languages from './languages.json'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        languages: languages,
        language: languages[0],
        
        users_list: [],
        
        visitors_list: [],
        
        visitor_check_in_list: [],
        isLoggedIn: false,
        
    },
    getters: {
        language: state => state.language,
        languages: state => state.languages,
        
        users_list: state => state.users_list,
        
        visitors_list: state => state.visitors_list,
        
        visitor_check_in_list: state => state.visitor_check_in_list,
        
    },
    mutations: {
        setLanguage(state, language) {
            state.language = language
        },
        
        setUsersList(state, users_list) {
            state.users_list = users_list
        },
        
        setVisitorsList(state, visitors_list) {
            state.visitors_list = visitors_list
        },
        
        setVisitorCheckInList(state, visitor_check_in_list) {
            state.visitor_check_in_list = visitor_check_in_list
        },
        
    },
    actions: {
        
    },
})
        