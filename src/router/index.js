import Vue from 'vue'
import Router from 'vue-router'
import MainPage from "@/page/mainPage.vue"
import codePage from "@/components/codePage/codePage"
import codePage_0 from "@/components/codePage/codePage-0"
import codePage_1 from "@/components/codePage/codePage-1"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: "/",
            name: "codePage",
            component: codePage,
        },
        {
            path: "/MainPage",
            name: "MainPage",
            component: MainPage,
            children: [{
                    path: "codePage_0",
                    name: 'codePage_0',
                    component: codePage_0,
                },
                {
                    path: "codePage_1",
                    name: "codePage_1",
                    component: codePage_1
                }
            ]
        },
    ]
})