import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      { id: 1, titulo: "Ir ao mercado", concluido: false },
      { id: 2, titulo: "Comprar ração", concluido: false }        
    ]
  },
  mutations: {
    adicionaTarefa(state, titulo) {
      if (titulo) {
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false
        })
      }
    },
    removeTarefa(state, id) {
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    },
    atualizaTarefa(state, novaTarefa) {
      let tarefa = state.tarefas.filter(tarefa => tarefa.id == novaTarefa.id)[0]
      tarefa.titulo = novaTarefa.titulo
    }
  },
  actions: {
  },
  modules: {
  }
})
