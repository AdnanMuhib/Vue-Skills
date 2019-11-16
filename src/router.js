import Vue from "vue"
import Router from "vue-router"
import Skills from "./components/Skills.vue"
import About from "./components/About.vue"

Vue.use(Router)

export default new Router ({
    routes : [
        {
            path:'/Vue-Skills/',
            name:'Skills',
            component:Skills
        },
        {
            path:'/Vue-Skills/about/:name',
            name:'About',
            component:About
        }
    ]
})