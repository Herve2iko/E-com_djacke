import { createStore } from 'vuex'

export default createStore({
    state: {
        cart:{
            items:[]
        },
        isAuthenticated:false,
        token:'',
        isLoading:false
    },
    mutations: {
        initializeStore(state){
            if(localStorage.getItem('cart')){
                state.cart = JSON.parse(localStorage.getItem('cart'))
            } else{
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        addTocart(state,item){
            const exits = state.cart.items.filter(i => i.product.id == item.product.id)
            if(exits.length){
                exits[0].quanitity = parseInt(exits[0].quanitity) + parseInt(item.quanitity)
            } else{
                state.cart.items.push(item)
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        setIsLoading(state, status){
            state.isLoading = status
        }
    },
    actions: {

    },
    modules: {

    }
})