<template>
    <!-- <div class="justify-content-center"> -->

   
  
         <form ref="anyName" class="mt-5" style="width: 350px;">
            <div class="mb-3">
                <input type="text" class="form-control border-0 border-bottom" id="nameOfGame"  placeholder="Game" v-model="name"  aria-describedby="nameOfGame">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control border-0 border-bottom" id="publisher" placeholder="Publisher"  v-model='publisher'>
            </div>
            <div class="mb-3">
                <input type="number" class="form-control border-0 border-bottom" id="rating"  placeholder="Rating" v-model="rating">
            </div>
            <button type="submit" class="bg-transparent px-4" style="border-radius: 30px; border-width: 1px;">Submit</button>
        </form>
  
</template>

<script>
export default {

}
</script>

<style>

.right-border th {
    border-right: 1px solid black; 
}
</style>   