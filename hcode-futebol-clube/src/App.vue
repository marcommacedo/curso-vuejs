<template>
	<div id="app">
		<AppHeader
			@select-championship="changeChampionship"
			@change-component="changeComponent"
		/>
		<AppSection :current-component="currentSectionComponent" />
		<AppFooter />
	</div>
</template>

<script>
import { mapActions } from "vuex";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppSection from "./components/AppSection.vue";

export default {
	name: "App",
	components: {
		AppHeader,
		AppFooter,
		AppSection
	},
	data() {
		return {
			currentSectionComponent: "AppSectionBanner"
		};
	},
	methods: {
		...mapActions(["changeChampionship"]),
		changeComponent(value) {
			let component;

			switch (value) {
				case "home":
				default:
					component = "AppSectionBanner";
					break;
				case "news":
					component = "AppSectionNews";
					break;
			}

			this.currentSectionComponent = component;
		}
	}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rajdhani&display=swap");
</style>
