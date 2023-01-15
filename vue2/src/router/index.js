import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from '../store/index'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./../views/Home.vue'),
        meta:{
            auth : true,
            title : 'Home'
        }
    },
    
    {
        path: '/users-list',
        name: 'ListUsers',
        component: () => import('./../views/Users/List.vue'),
        meta:{
            auth : true,
            title : 'Users List'
        }
    },
        {
        path: '/users-list/:id',
        name: 'ViewUsers',
        component: () => import('./../views/Users/Edit.vue'),
        meta:{
            auth : true,
            title : 'Users Edit'
        }
    },
    {
        path: '/visitors-list',
        name: 'ListVisitors',
        component: () => import('./../views/Visitors/List.vue'),
        meta:{
            auth : true,
            title : 'Visitors List'
        }
    },
        {
        path: '/visitors-list/:id',
        name: 'ViewVisitors',
        component: () => import('./../views/Visitors/Edit.vue'),
        meta:{
            auth : true,
            title : 'Visitors Edit'
        }
    },
    {
        path: '/visitor_check_in-list',
        name: 'ListVisitor_check_in',
        component: () => import('./../views/Visitor_check_in/List.vue'),
        meta:{
            auth : true,
            title : 'Visitor_check_in List'
        }
    },
        {
        path: '/visitor_check_in-list/:id',
        name: 'ViewVisitor_check_in',
        component: () => import('./../views/Visitor_check_in/Edit.vue'),
        meta:{
            auth : true,
            title : 'Visitor_check_in Edit'
        }
    },
    {
        path: '/visitor_list',
        name: 'ViewVisitor list',
        component: () => import('./../views/Visitors/Visitors List.vue'),
        meta:{
            auth : true,
            title : 'Visitor list'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./../views/login.vue'),
        meta:{
            auth : false,
            title : 'Login'
        }
    },
]
const router = new VueRouter({
    routes,
    mode:'history'
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.auth)){
        const token = localStorage.getItem('techfest_token')
        if(!token) {
            router.push('/login')
        } else {
            axios.post('/verifyToken', {
                token
            }).then(r => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                localStorage.setItem('techfest_token', token)
                store.state.isLoggedIn = true
                next()
            }).catch(e => {
                router.push('/login')
            })
        }
    } else {
        next()
    }

})

export default router
        