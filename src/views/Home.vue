<template>
  <div class="home">
  <section class = "hero is-medium is-dark mb-6">
    <div class="hero-body has-text-centered">
      <p class="title mb-6">
        The Krewz Shop
      </p>
      <p class="subtitle">
        welcom to our shop
      </p>
    </div>
  </section>
  <div class="column is-multiline">
    <div class="colomn is-12">
      <h2 class="is-size-2  has-text-centered">Latest products</h2>
    </div>
    <productBox 
        v-for = "product in latestProducts"
        :key="product.id"
        :product=product
    >   
    </productBox>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import productBox from '@/components/productBox.vue'
import axios from 'axios'
export default {
  name: 'Home',
  data(){
    return {
      latestProducts:[]
    }
  },
  components: {
    HelloWorld,
    productBox,
  },
  mounted(){
    this.getLatestProducts()
    document.title = 'Home | Djackets'

  },
  methods:{
    async getLatestProducts(){
        this.$store.commit('setIsLoading', true)
        await axios
            .get('http://192.168.43.83:8000/api/v1/zavuba/')
            .then((response) =>{
              console.log(response.data)
              this.latestProducts = response.data
            })
            .catch(error =>{
              console.log(error)
            } )
        this.$store.commit('setIsLoading', false)
    }
  }
}
</script>
