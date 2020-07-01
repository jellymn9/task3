import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        //there i can put some data 
        invoiceList:[]

    },
    getters:{
        //for instance changing store.somedata
    },
    mutations:{ //for better debugging istead of using getters...
        //function for instance reducePrice
    }
})