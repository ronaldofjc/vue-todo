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
			<Editar />
    </div>
</template>

<script>
	import Editar from '../modal/Editar.vue';
  
	export default {
  components: { Editar },
    data: () => ({
      items: [
        {
					icon: 'mdi-pencil', 
					title: 'Editar', 
					operation() { 
						console.log('editar');
					} 
				},
				{ 
					icon: 'mdi-trash-can', 
					title: 'Excluir',
					operation() { 
						console.log('excluir');
					} 
				},
      ],
    }),
  }
</script>

<style>

</style>