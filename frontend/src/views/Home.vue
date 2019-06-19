<template>
  <div class="home">
    <div class="card" style="width: 18rem;" v-for="item in size">
      <img class="card-img-top" src="http://i.dailymail.co.uk/i/pix/2015/09/01/18/2BE1E88B00000578-3218613-image-m-5_1441127035222.jpg" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <hr>
      <br>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
   data(){
      return {
        size:12


      }
   },
  components: {
    HelloWorld
  }
}
</script>
