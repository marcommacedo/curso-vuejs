<template>
	<div id="app">
		<AppHeader @select-championship="changeChampionship" />
		<AppSection />
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
		return {};
	},
	methods: {
		...mapActions(["changeChampionship"])
	}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rajdhani&display=swap");
</style>
