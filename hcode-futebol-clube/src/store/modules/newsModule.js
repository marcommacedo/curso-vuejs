export default {
	state: {
		news: [
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
		]
	},
	getters: {
		getNews(state) {
			return state.news;
		}
	}
};
