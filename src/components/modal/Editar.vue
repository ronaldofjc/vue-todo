<template>
	<div>
		<v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Editar Tarefa
        </v-card-title>
				<v-divider></v-divider>
				<v-card-text class="mt-2">Informe o novo título</v-card-text>
				<v-text-field
					class="px-3"
					label="Título"
					placeholder="Novo Título"
					outlined
          v-model="titulo"
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="$emit('closeModal')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="editarTarefa()"
          >
            Alterar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
	</div>
</template>

<script>
  export default {
    props:['tarefa'],
    data () {
      return {
        dialog: true,
        titulo: null
      }
    },
    created() {
      this.titulo = this.tarefa.titulo
    },
    methods: {
      editarTarefa() {
        let novaTarefa = {
          id: this.tarefa.id,
          titulo: this.titulo
        }
        this.$store.dispatch('atualizaTarefa', novaTarefa)
        this.$emit('closeModal');
      }
    }
  }
</script>