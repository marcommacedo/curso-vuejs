<template>
	<input
		type="text"
		:value="clubName"
		@keyup="changeClubName($event.target.value)"
		class="form-control"
		placeholder="Digite seu clube"
	/>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	methods: mapActions(["changeClubName"]),
	computed: mapGetters({ clubName: "getClubName" })
};
</script>

<style scoped></style>
