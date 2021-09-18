<template>
  <div>
    <!-- <v-list flat subheader >
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
    </v-list> -->
    <ListaDeTarefas />  
    <div v-if="!$store.state.tarefas.length" class="mt-16 animate__animated animate__bounceInUp">
      <center>
        <v-icon size="100" color="primary">mdi-check</v-icon>
        <div class="text-h5 primary--text">Nenhuma tarefa</div>
      </center>
    </div>
  </div>
</template>

<script>
import ListaDeTarefas from '../components/tarefas/ListaDeTarefas.vue';

  export default {
    name: 'Home',
    components: {
      ListaDeTarefas
    },
    created() {
      this.$store.commit('buscarTarefas');
    }
  }
</script>
