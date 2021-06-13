<template>
	<div id="app">
		<AppHeader
			@select-championship="changeChampionship"
			@change-component="changeComponent"
		/>
		<AppSection
			:championship="championship"
			:current-component="currentSectionComponent"
		/>
		<AppFooter />
	</div>
</template>

<script>
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
			championship: "Campeonato Brasileiro",
			currentSectionComponent: "AppSectionBanner"
		};
	},
	methods: {
		changeChampionship(value) {
			this.championship = value;
		},
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
