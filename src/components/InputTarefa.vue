<template>
	<div>
		<v-col cols="12">
			<v-text-field
				v-model="novaTarefa"
				label="Criar nova tarefa"
				outlined
				clearable
				@keyup.enter="adicionarTarefa"
			></v-text-field>
		</v-col>
	</div>
</template>

<script>
export default {
	data() {
		return {
			novaTarefa: null        
		}
	},
	methods: {
		adicionarTarefa() {        
			this.$store.dispatch('adicionaTarefa', this.novaTarefa)
			this.novaTarefa = null
		}
	}
}
</script>