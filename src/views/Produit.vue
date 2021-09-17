<template>
    <div class="page-produit">
        <div class="columns is-multiline">
            <div class="column is-9">
                <figure class="image mb-5">
                    <img :src="product.get_thumbnail" alt="">
                </figure>
                <h1 class="title">{{product.nom}}</h1>
                <p> {{product.description}} </p>
            </div>
            <div class="column is-3">
                <h2 class="subtitle">informations</h2>
                <p> <strong>Prix : </strong>{{product.prix}}</p>
                <div class="field has-addons mt-6">
                    <div class="control">
                        <input type="number" min="1" id="" class="input" v-model="quantity">
                    </div>
                    <div class="control">
                        <a href="#" class="button is-dark" @click="addTocart" > Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {toast} from 'bulma-toast'
export default {
    name:'produit',
    data(){
        return{
            product:{},
            quantity:1
        };
    },
    mounted(){
        this.getProduct()
    },
    methods:{
        async getProduct(){
            this.$store.commit('setIsLoading', true)
            const product_slug = this.$route.params.product_slug
            console.log(product_slug);
            await axios.get('http://192.168.43.83:8000/api/v1/produit/'+product_slug+'/')
                .then((response) =>{
                console.log(response.data)
                this.product = response.data
                document.title = this.product.nom + ' | Djackets'
                })
                .catch(error =>{
                    console.log(error)
                })
            this.$store.commit('setIsLoading', false)
    },
    addTocart(){
        if(isNaN(this.quantity) || this.quantity<1){
            this.quantity = 1
        }
        const item = {
            product:this.product,
            quantity:this.quantity
        }
        this.$store.commit('addTocart', item)
        toast({
            message:'produit ajouter avec succes',
            type:'is-success',
            dismissible:true,
            pauseOnHover:true,
            duration:2000,
            position:'center',
        })
    }
        }
    }
</script>