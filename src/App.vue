<template>
  <div id="app">
    <div id="addInvoiceForm">
      <label for="idInvoiceNumber">Invoice number:</label>
      <input type="number" id="idInvoiceNumber">
      <label for="idDescription">Description:</label>
      <input type="text" id="idDescription">
      <label for="idDate">Date:</label>
      <input type="date" id="idDate">
      <label for="idAmount">Amount:</label>
      <input type="number" id="idAmount">
      <button id="idAddInvoiceBtn" v-on:click="makeList">Add Invoice</button>
      <list></list>
    </div>
  </div>
</template>

<script>

class listClass {
  constructor(invoiceNum, description, date, amount) {
    this.invoiceNum = invoiceNum;
    this.description = description;
    this.date = date;
    this.amount = amount;
  }
  //consider to add methodes for deleting and copy items..
}

export default {
  name: 'App',
  data(){
    return{
      iE: document.getElementById("idInvoiceNumber"),
      inputEls: document.getElementsByTagName("input")
     
    }
  },
  computed:{
    
  },
  methods:{
    //some function iside ---this.$store.commit('reducePrice')
    makeList(){
      console.log(iE);
      this.$store.state.invoiceList.push(new listClass(inputEls[0].value,inputEls[1].value,inputEls[2].value,inputEls[3].value));
      console.log(this.$store.state.invoiceList);
    }
  }
}
</script>

<style>
  #addInvoiceForm{
    margin-left: 20%;
    height: 300px;
    width: 300px;
    border-style: solid;
    
  }
  #addInvoiceForm label, input, button{
    margin-top: 10px;
    margin-left: 5px;
    display: block;

  }
  #idAddInvoiceBtn{
    width: 60px;
    height: 35px;
  }
</style>
