import Vue from "vue";
import VueRouter from "vue-router";

import AppSectionBanner from "@/components/AppSectionBanner";
import AppSectionNews from "@/components/AppSectionNews";
import AppSectionNewsNotice from "@/components/AppSectionNewsNotice";
import App404 from "@/components/App404";

Vue.use(VueRouter);

export default new VueRouter({
	linkExactActiveClass: "link-active",
	routes: [
		{
			path: "/",
			component: AppSectionBanner
		},
		{
			path: "/news",
			alias: "/notices",
			component: AppSectionNews
		},
		{
			name: "notice", //apelido
			path: "/news/:id",
			component: AppSectionNewsNotice,
			beforeEnter: (to, from, next) => {
				next();
			}
		},
		{
			path: "/admin",
			redirect: "/"
		},
		{
			path: "*",
			component: App404
		}
	]
});
