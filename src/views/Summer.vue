<template>
    <div class="category-page">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h2 class="is-size-2 has-text-centered">SUMMER</h2>
            </div>
        </div>
         <productBox 
        class="colomn is-3"
        v-for = "product in produits"
        :key="product.id"
        :product=product
            >   
    </productBox>
    </div>
</template>
<script>
import axios from 'axios'
import productBox from '@/components/productBox.vue'
export default {
    name:'category',
    data(){
        return{
            produits:[]
        }
    },
    components:{
        productBox
    },
    mounted(){
        this.getCategorie()
    },
    methods:{
        async getCategorie(){
            this.$store.commit('setIsLoading', true)
            await axios.get('http://127.0.0.1:8000/api/v1/categorie/2/')
                .then((response) =>{
                console.log(response.data)
                this.produits = response.data
                document.title = this.categorie.nom + ' | Djackets'
                })
                .catch(error =>{
                    console.log(error)
                })
            this.$store.commit('setIsLoading', false)
            }
    }
}
</script>