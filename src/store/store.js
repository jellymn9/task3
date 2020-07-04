import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        //there i can put some data 
        invoiceList:[],
        

    },
    getters:{
        //for instance changing store.somedata
        // debounce(f, delay){
        //     let timeoutID;
        //     return (...args)=>{
        //         if(timeoutID){
        //             clearTimeout(timeoutID);
        //         }
        //         timeoutID = setTimeout( () =>{
        //             f(...args);
        //         }, delay);
        //     };
        // }
        findM(state){
            //console.log(this.$refs.numberf.value); ne moze da cita refs 
            console.log(state.invoiceList.length); //pokrece se samo cudno, i prije klika u app.vue
        }

    },
    mutations:{ //for better debugging istead of using getters...
        //function for instance reducePrice
        
    }
})