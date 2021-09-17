<template>
     <div class="colomn is-3">
      <div class="box">
        <figure class="image mb-4">
          <img :src="product.get_thumbnail" height="320" width="320">
        </figure>
        <h3 class="is-size-4">{{product.nom}}</h3>
        <p class="is-size-6 has-text-grey"> pp{{ product.prix }}</p>
        <router-link :to="product.get_absolute_url" class="button is-dark mt-4">View Detail</router-link> 
      </div>
    </div>
</template>
<script>
export default {
    name:'productBox',
    props:{
        product:Object
    }
}
</script>
<style scoped>
.image{
    margin-top: -1.25rem ;
    margin-left: -1.25rem ;
    margin-right: -1.25rem ;

}
</style>