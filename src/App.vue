<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-img dark src="./assets/bg.jpg" gradient="to top right, rgba(19,84,122,.5), rgba(20,108,199,.8)" class="pt-5 text-center">
        <v-avatar size="100">
          <v-icon size="60">mdi-calendar-check</v-icon>          
        </v-avatar>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Vue.js
            </v-list-item-title>
            <v-list-item-subtitle>
              Lista de Tarefas
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to='item.to' link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      prominent
      height="212"
      color="#fcb69f"
      dark      
      src="./assets/bg.jpg" 
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(20,108,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <center>
        <v-toolbar-title class="mt-16">
          <InputTarefa />
        </v-toolbar-title>
      </center>
      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import InputTarefa from './components/InputTarefa.vue'
  export default {
  components: { InputTarefa },
    data: () => ({ 
      drawer: false,
      items: [
          { title: 'Tarefas', icon: 'mdi-view-dashboard', to:'/' },          
          { title: 'Sobre', icon: 'mdi-help-box', to:'/sobre' },
        ],
    }),
  }
</script>

<style>
  center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
</style>