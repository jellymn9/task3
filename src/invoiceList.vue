<template>
  <div>
      
      <h3>Invoice List</h3>
      <label for="idSearch">Search:</label>
      <input type="number" id="idSearch" >
      <ul id="listId">
        
          <li v-for="invoice in this.$store.state.invoiceList" > 
            {{ invoice.getNumber}}. -description: {{ invoice.getDescription}} 
          </li>
        
      </ul>
  </div>
  
</template>

<script>
export default {
  data() {
   return{
      // tables:['jjj','vvvv','kkkk']
   }
  },
  methods:{
    // test(){
    //   console.log(this.$store.state.invoiceList[0].getNumber);
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
