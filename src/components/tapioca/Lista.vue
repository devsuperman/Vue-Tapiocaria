<template>
    <div>

      <v-btn
        absolute
        dark
        fab
        top
        right
        color="pink"
        :to="{name: 'CriarTapioca'}"        
      >
        <v-icon>add</v-icon>
      </v-btn>

      <v-card>     
        <v-list two-line>
          <template v-for="(tapioca, id) in tapiocas">
            
            <v-list-tile                    
              :key="id"
              avatar
              @click="$router.push({name: 'EditarTapioca', params:{id: tapioca.id}})"
            >
              <v-list-tile-avatar>
                <v-icon>favorite</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                
                <v-list-tile-title >
                  Tapioca de {{tapioca.recheio}}
                </v-list-tile-title>
                
                <v-list-tile-sub-title>
                     R$ {{tapioca.preco}}
                </v-list-tile-sub-title>

              </v-list-tile-content>
              
            </v-list-tile>
          </template>
        </v-list>
      </v-card>

    </div>
</template>

<script>

  import TapiocaService from '../../domain/tapioca/TapiocaService';

  export default {
    data () {
      return {   
        tapiocas: []
      }
    },
    created(){
      this.service = new TapiocaService(this.$resource);      
      this.service.listar().then(res => this.tapiocas = res);
    }   
  }
</script>

<style scoped>

</style>


