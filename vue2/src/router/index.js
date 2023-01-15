
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./../views/Home.vue'),
        meta:{
            auth : false,
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
]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
        