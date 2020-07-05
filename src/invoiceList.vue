<template>
  <div>
      
      <h3>Invoice List</h3>
      <label for="idSearch">Search:</label>
      <input type="number" id="idSearch"  v-on:input="findMatch" ref="searchInput">
      <ul id="listId">
          <div >
            
            <li v-show="pshow" v-for="invoice in this.$store.state.invoiceList"> 
              {{ invoice.getNumber}}. -description: {{ invoice.getDescription}} 
            </li>
          </div>
          <div v-show="!pshow" ref="matchElement">{{val}}</div>
      </ul>
  </div>
  
</template>

<script>
export default {
  data() {
   return{
      // tables:['jjj','vvvv','kkkk']
      pshow: true,
      val:'',
      //timeOutID: 0
   }
  },
  methods:{
    test(){
      console.log("something is in there");
      //console.log(this.$store.state.invoiceList[0].getNumber);
      //console.log(this.$refs.searchInput);
      //console.log(this.pshow);
    },
    findMatch(){
      this.pshow = true;
      this.$store.state.invoiceList.filter((invoice)=>{ 
        //this.pshow = false;
        console.log(this);
        if(invoice.getNumber == this.$refs.searchInput.value){
          this.val = ` ${invoice.getNumber} . -description: ${invoice.getDescription}`;
          this.$refs.matchElement.value = this.val;
          this.pshow = false;
          console.log("match is theree");
          console.log(this);
          console.log(this.$refs.matchElement.value);

        }
      })
    },
    debounce(f){
        let timeOutID;
        if(timeOutID){
          clearTimeout(timeOutID);
        }
        timeOutID = setTimeout(f, 3000);
        return function(){
          
        }
    }
  },
  computed:{
    // findMatch(){
    //   //pshow = false;
    //   this.$store.state.invoiceList.filter((invoice)=>{ /
    //     //this.pshow = false;
    //     console.log(this);
    //     if(invoice.getNumber == this.$refs.searchInput.value){
    //       //this.pshow = true;
    //       console.log("match is theree");

    //     }
    //   })

    // }
  }
}
</script>

<style scoped>
  ul{
    display: block;
    margin-left: 4%;
    height: 300px;
    width: 300px;
    border-style: solid;
  }
  #listId{
    overflow-y:auto;
  }
</style>
