<template>
    <div>
        <form>
            
            <v-text-field
            v-model="tapioca.recheio"
            :counter="50"            
            label="Recheio"
            required
            ></v-text-field>
          
            <v-text-field
            v-model="tapioca.preco"
            label="Preço"
            required
            ></v-text-field>

            <v-btn fab dark color="teal" :to="{name: 'Tapiocas'}">
              <v-icon dark>arrow_back</v-icon>
            </v-btn>

            <v-btn
              absolute
              dark
              fab              
              right
              color="pink"
              @click="Salvar"
            >
            
              <v-icon>check</v-icon>
            </v-btn>

        </form>

    </div>
</template>

<script>
import Tapioca from "../../domain/tapioca/Tapioca";
import TapiocaService from "../../domain/tapioca/TapiocaService";

  export default {
    data () {
      return {   
        tapioca: new Tapioca()        
      }
    },
    created(){
      
      this.service = new TapiocaService(this.$resource); 
      
      var id = this.$route.params.id;

      if (id) {
        this.service.buscar(id)
          .then(r => this.tapioca = r);                
      }
    },
    methods:{
      Salvar(){
          this.service.salvar(this.tapioca)
            .then(() => this.$router.push({name: 'Tapiocas'}));                  
        }              
      }      
    }  
  

</script>

<style scoped>

</style>


