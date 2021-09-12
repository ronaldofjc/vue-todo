<template>
  <div>
    <v-list flat subheader >
      <v-list-item-group multiple active-class="">

      <div v-for="tarefa, index in $store.state.tarefas" :key="index">
        <Tarefa :tarefa="tarefa" />
      </div>
      <div v-if="!$store.state.tarefas.length" class="mt-16 animate__animated animate__bounceInUp">
        <center>
          <v-icon size="100" color="primary">mdi-check</v-icon>
          <div class="text-h5 primary--text">Nenhuma tarefa</div>
        </center>
      </div>
      
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
  import Tarefa from '../components/tarefas/Tarefa.vue'

  export default {
    name: 'Home',
    components: {
      Tarefa
    },
    created() {
      this.$store.commit('buscarTarefas');
    }
  }
</script>
