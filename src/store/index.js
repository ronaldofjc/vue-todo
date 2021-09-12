import Vue from 'vue'
import Vuex from 'vuex'

import Localbase from 'localbase'

let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: []
  },
  mutations: {
    buscarTarefas(state) {
      db.collection('tarefas').get().then(tarefasDB => {
        state.tarefas = tarefasDB
      })
    },
    adicionaTarefa(state, titulo) {
      db.collection('tarefas').add({
        id: new Date().getTime(),
        titulo,
        concluido: false
      })
    }
  },
  actions: {
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
    removeTarefa({commit}, id) {
      db.collection('tarefas').doc({ id }).delete().then(() => {
        commit('buscarTarefas')
      })
    }
  },
  modules: {
  }
})
