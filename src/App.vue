<template>
  <div id="wrapper">
    <nav class = "navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class = "navbar-item"><strong> Djacket </strong></router-link>
        <a href="" class="navbar-burger" aria-label= "menu" arira-expanded = "false" data-tagert = "navbar-menu" @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden = "true" ></span>
          <span aria-hidden = "true" ></span>
          <span aria-hidden = "true" ></span>
        </a>
      </div>
      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
        <div class="navbar-start">
          <div class="navbar-item">
            <form method="get" action="/search">
              <div class="field has-addons">
                <input type="text" class="input" placeholder="search for.." name="query"/>
              </div>
              <div class="control">
                <button class="button is-success">
                  <span class="icon">
                    <i class="fas fa-seach" ></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="navbar-end">
          <router-link to="summer" class = "navbar-item">Summer</router-link>
          <router-link to="Winter" class = "navbar-item">Winter</router-link>
            <div class="navbar-item">
              <div class="buttons">
                <router-link to="#"  class = "button is-light">Login</router-link>
                <router-link to="#"  class = "button is-success">
                  <span class="icon"><i class="fa fa-shopping-cart"></i></span>
                  <span>cart ({{cartTotalLength}}) </span>
                </router-link>
              </div>
            </div>
        </div>
      </div>
    </nav>
    <div class="is-loading-bar has-text-centered" :class="{'is-loading':$store.state.isLoading}">
      <div class="lds-dual-ring"></div>
    </div>
    <section class="section">
    <router-view/>
    </section>
    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2021</p>
    </footer>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        showMobileMenu:false,
        cart:{
          items:[]
        }
      }
    },
    mounted(){
      this.cart = this.$store.state.cart
    },
    beforeCreated(){
      this.$store.commit('initializeStore')
    },
    computed:{
      cartTotalLength(){
        let totalLength = 0
        for(let i = 0;i< this.cart.items.length; i++){
          totalLength+=this.cart.items[i].quantity
        }
        return totalLength
      }
    }
  }
</script>
<style lang="scss">
  @import '../node_modules/bulma';

  .lds-dual-ring{
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after{
    content: "";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    background-repeat: 50%;
    bottom: 6px solid #ccc;
    border-color: #ccc transparent #ccc transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  is-loading-bar{
    height: 0;
    overflow: hidden;
    -webkit-transform: all 0.3s;
    transition: all 0.3s;

    &.is-loading{
      height: 80px;
    }
  }
</style>
