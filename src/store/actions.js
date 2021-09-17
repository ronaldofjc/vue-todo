import db from '../services/localbase.js'

export default {
  async adicionaTarefa({commit}, titulo) {
		await commit('adicionaTarefa', titulo)
		await commit('buscarTarefas')
	},
	atualizaTarefa({commit}, novaTarefa) {
		db.collection('tarefas').doc({ id: novaTarefa.id }).update({
			titulo: novaTarefa.titulo
		}).then(() => {
			commit('buscarTarefas')
		})
	},
	concluiTarefa({commit}, novaTarefa) {
		db.collection('tarefas').doc({ id: novaTarefa.id }).update({
			concluido: !novaTarefa.concluido
		}).then(() => {
			commit('buscarTarefas')
		})
	},
	removeTarefa({commit}, id) {
		db.collection('tarefas').doc({ id }).delete().then(() => {
			commit('buscarTarefas')
		})
	}
}