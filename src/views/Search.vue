<template>
    <div class="page-search">
        <div class="colomns is-multiline" >
            <div class="colomn is-12">
                <h1 class="title">Search</h1>
                <h2 class="is-size-5 has-text-grey">seaech term.. "{{query}}" </h2>
            </div>
              <productBox 
                v-for = "product in proroducts"
                :key="product.id"
                :product=product>   
    </productBox>
        </div>
    </div>
</template>
<script>
import productBox from '@/components/productBox.vue'
import axios from 'axios'
export default {
    name:'search',
    data(){
        return{
            produits:[],
            query:''
        }
    },
    components:{
        productBox
    },
    mounted(){
        document.title ='search | djacket'
        let uri = window.location.search.substring(1)
        let params = new URLSearchParams(uri)
        if(params.get('query')){
            this.query = params.get('query')
            this.performSearch()
        }
    },
    methods:{
        performSearch(){
            let api_url = '/api/article/';
            if(this.search_term!==''||this.search_term!==null) {
            api_url = `http://127.0.0.1:8000/api/v1/rondera/?search=${this.search_term}`}
            axios.get(api_url)
            .then((response) =>{
              console.log(response.data)
              this.produits = response.data
            })
            .catch(error =>{
              console.log(error)
            } )
        }
    }
}
</script>