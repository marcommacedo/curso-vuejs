<template>
	<section>
		<div class="container">
			<app-section-news-individual
				v-for="notice in news"
				:key="notice.id"
				:img-name="notice.img"
				:img-info="notice.imgInfo"
				:news-date="notice.date"
			>
				<template #title>
					<h2>{{ notice.title }}</h2>
				</template>
				<p>{{ notice.content | truncate(200) }}</p>
			</app-section-news-individual>
		</div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
import AppSectionNewsIndividual from "./AppSectionsNewsIndividual.vue";

export default {
	components: {
		AppSectionNewsIndividual
	},
	data() {
		return {};
	},
	computed: {
		...mapGetters({
			news: "getNews"
		})
	}
};
</script>

<style scoped>
section {
	padding: 50px 0;
	margin-top: 50px;
	background: #f37520;
}
</style>
