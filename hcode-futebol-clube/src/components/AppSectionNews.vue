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
import AppSectionNewsIndividual from "./AppSectionsNewsIndividual.vue";

export default {
	components: {
		AppSectionNewsIndividual
	},
	data() {
		return {
			news: []
		};
	},
	created() {
		this.news = [
			{
				id: 1,
				title: "Começam os treinos para a nova temporada",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quos eligendi, ex quis nisi ipsa error qui ipsam corrupti ullam non nostrum, earum laboriosam dignissimos. Nemo ex vel labore vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium atque quis recusandae hic aut deserunt fuga dolor expedita doloribus? Praesentium necessitatibus perferendis, esse ipsam sed tenetur saepe! Itaque, dolores obcaecati!",
				date: "2021-01-01",
				img: "news1.jpg",
				imgInfo: "Notícia 1"
			},
			{
				id: 2,
				title: "Jogo de quarta-feira termina empatado",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quos eligendi, ex quis nisi ipsa error qui ipsam corrupti ullam non nostrum, earum laboriosam dignissimos. Nemo ex vel labore vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium atque quis recusandae hic aut deserunt fuga dolor expedita doloribus? Praesentium necessitatibus perferendis, esse ipsam sed tenetur saepe! Itaque, dolores obcaecati!",
				date: "2021-01-07",
				img: "news2.jpg",
				imgInfo: "Notícia 2"
			},
			{
				id: 3,
				title: "A inauguração do novo estádio será na semana que vem",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quos eligendi, ex quis nisi ipsa error qui ipsam corrupti ullam non nostrum, earum laboriosam dignissimos. Nemo ex vel labore vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium atque quis recusandae hic aut deserunt fuga dolor expedita doloribus? Praesentium necessitatibus perferendis, esse ipsam sed tenetur saepe! Itaque, dolores obcaecati!",
				date: "2021-01-20",
				img: "news3.jpg",
				imgInfo: "Notícia 3"
			}
		];
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
