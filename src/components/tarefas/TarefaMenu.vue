<template>
  <div>
		<v-menu offset-y>
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					v-bind="attrs"
					v-on="on"
					icon
				>
					<v-icon>
						mdi-dots-vertical
					</v-icon>
				</v-btn>
			</template>
			<v-list>
				<v-list-item
					v-for="(item, index) in items"
					:key="index"
					@click="item.operation()"
				>
					<v-icon left>{{ item.icon }}</v-icon>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
		<Editar v-if="items[0].modal" @closeModal="items[0].modal = false" :tarefa="tarefa" />
		<Remover v-if="items[1].modal" @closeModal="items[1].modal = false" :tarefa="tarefa" />
  </div>
</template>

<script>
import Editar from '../modal/Editar.vue';
import Remover from '../modal/Remover.vue';
  
export default {
	props:['tarefa'],
  components: { Editar, Remover },
    data: () => ({
      items: [
        {
					icon: 'mdi-pencil', 
					title: 'Editar', 
					modal: false,
					operation() { 
						this.modal = true
					} 
				},
				{ 
					icon: 'mdi-trash-can', 
					title: 'Excluir',
					modal: false,
					operation() { 
						this.modal = true
					} 
				},
      ],
    }),
		methods: {
			
		}
  }
</script>

<style>

</style>