<template>
  <div>
      
      <h3>Invoice List</h3>
      <label for="idSearch">Search:</label>
      <input type="number" id="idSearch">
      <ul>
          <li v-for="t in tables" > {{t}} </li>

      </ul>
  </div>
  
</template>

<script>
export default {
  data() {
   return{
       tables:['jjj','vvvv','kkkk']
   }
  }
}
</script>

<style>
  
</style>
