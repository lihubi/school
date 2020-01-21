// 路由

import Vue from "vue/dist/vue.esm.js";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import home from "../views/home/home"
import user from "../views/user/user"
import news from "../components/news/news";
import publish from "../views/publish/publish";
import information from "../views/information/information";
import mail from "../views/mail/mail";
import mailList from "../views/mailList/mailList";
import chat from "../views/chat/chat";
const routes = [
    {
        path: '/',
        redirect: '/home',
        component: home
    },
    {
        path:"/home",
        name: "home",
        component: home
    },{
        path:"/user",
        name: "user",
        component: user
    },{
        path:"/publish",
        name: "publish",
        component: publish
    },{
        path:"/information",
        redirect: '/information/mail',
        name: "information",
        component: information,
        children: [
            {
                path: 'mailList',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
                name: 'mailList',
                component:mailList
            },
            {
                path: 'mail',
                name: 'mail',
                component: mail
            }
        ]
    },{
        path:"/home/news",
        name: "news",
        component: news
    },{
        path:"/information/chat",
        name: "chat",
        component: chat
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    linkActiveClass:'mui-active' //修改默认高亮的类（router-link-active）
});

export default router;