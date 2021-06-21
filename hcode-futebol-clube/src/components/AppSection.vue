<template>
	<div>
		<div class="container">
			<div class="row mt-5">
				<h3>Você está vendo as notícias do {{ championship }}</h3>
			</div>
		</div>

		<!-- <component :is="currentComponent"></component> -->
		<transition name="fade-view" mode="out-in">
			<router-view></router-view>
		</transition>

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
import AppInput from "./AppInput.vue";

export default {
	components: {
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

<style scoped>
.fade-view-enter,
.fade-view-leave-to {
	opacity: 0;
}

.fade-view-enter-active,
.fade-view-leave-active {
	transition: opacity 0.5s ease-in-out;
}
</style>
