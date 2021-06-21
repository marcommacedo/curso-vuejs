<template>
	<section class="section-news">
		<div class="container">
			<app-section-news-individual
				v-for="notice in news"
				:key="notice.id"
				:img-name="notice.img"
				:img-info="notice.imgInfo"
				:news-date="notice.date"
			>
				<template #title>
					<router-link
						tag="h2"
						:to="{ name: 'notice', params: { id: notice.id } }"
						>{{ notice.title }}</router-link
					>
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
	},
	methods: {
		goToPage(page) {
			this.$router.push(page);
		}
	}
};
</script>

<style>
.section-news {
	padding: 50px 0;
	margin-top: 50px;
	background: #f37520;
}
</style>
