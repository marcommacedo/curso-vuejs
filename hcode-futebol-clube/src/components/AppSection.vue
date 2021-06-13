<template>
	<div>
		<div class="container">
			<div class="row mt-5">
				<h3>Você está vendo as notícias do {{ championship }}</h3>
			</div>
		</div>

		<component :is="currentComponent"></component>

		<div class="container">
			<div class="row my-club mt-5">
				<div class="col-6">
					<h2>Seu clube é: {{ myClub }}</h2>
				</div>
				<div class="col-6"><app-input /></div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import AppSectionBanner from "./AppSectionBanner.vue";
import AppInput from "./AppInput.vue";

export default {
	components: {
		AppSectionBanner,
		AppSectionNews: () => import("./AppSectionNews.vue"),
		AppInput
	},
	props: {
		currentComponent: String
	},
	data() {
		return {};
	},
	computed: {
		// ...mapState(["championship"]),
		// ...mapState({ myClub: "clubName" })
		// championship() {
		// 	return this.$store.getters.championship;
		// }

		...mapGetters({
			championship: "getChampionship",
			myClub: "getClubName"
		})
	}
};
</script>

<style scoped></style>
