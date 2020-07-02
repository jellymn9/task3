<template>
  <div id="app">
    <div id="addInvoiceForm">
      <label for="idInvoiceNumber">Invoice number:</label>
      <input type="number" id="idInvoiceNumber" ref="numberf">
      <label for="idDescription">Description:</label>
      <input type="text" id="idDescription" ref="descriptionf">
      <label for="idDate">Date:</label>
      <input type="date" id="idDate" ref="datef">
      <label for="idAmount">Amount:</label>
      <input type="number" id="idAmount" ref="amountf">
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
  get getNumber(){
    return this.invoiceNum;
  }
  get getDescription(){
    return this.description;
  }
  get getDate(){
    return this.date;
  }
  get getAmount(){
    return this.amount;
  }
  //consider to add methodes for deleting and copy items..
}

export default {
  //name: 'App',
  data: function(){
     return{
    //   iE: document.getElementById("idInvoiceNumber"),
    //   inputEls: document.getElementsByTagName("input")
     
     }
  },
  computed:{
    
  },
  methods:{
    //some function iside ---this.$store.commit('reducePrice')
    makeList(){
      //console.log(this.$refs.numberf.value);
      this.$store.state.invoiceList.push(new listClass(this.$refs.numberf.value,this.$refs.descriptionf.value,this.$refs.datef.value,this.$refs.amountf.value));
      console.log(this.$store.state.invoiceList[0].getNumber);
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
