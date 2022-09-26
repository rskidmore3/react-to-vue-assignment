<script>
    import useValidate from '@vuelidate/core'
    import { required } from '@vuelidate/validators'
     export default {
        data(){
            return { 
                v$: useValidate(), 
                name: '', 
                publisher: '', 
                rating: 0
            }
        }, 
        validations(){
            return {
                name: { required }, 
                publisher: { required }, 
                rating: { required }
            }            
        },
        methods: {
            submitForm(e, state) {
                e.preventDefault()
                this.v$.$validate()
                if(!this.v$.$error){
                  this.$store.dispatch('setGameInitial', {name: e.target[0].value, publisher: e.target[1].value, rating: e.target[2].value})
                  this.$refs.anyName.reset();
                } else {
                    alert("All fields are required, friend.")
                }   
        
        }, 
    }
}
</script>
<template>
    <form @submit="submitForm" ref="anyName" class="mt-5"  style="width: 350px;">
        <div class="mb-3">
            <!-- <label for="name" class="form-label">Name*</label>
            <input type="text" class="form-control" id="nameOfGame" v-model="name" aria-describedby="nameOfGame"> -->
            <input type="text" class="form-control border-0 border-bottom" id="nameOfGame"  placeholder="Game" v-model="name"  aria-describedby="nameOfGame">
        </div>
        <div class="mb-3">
            <!-- <label for="publisher" class="form-label">Publisher*</label>
            <input type="text" class="form-control" id="publisher" v-model='publisher'> -->
            <input type="text" class="form-control border-0 border-bottom" id="publisher" placeholder="Publisher"  v-model='publisher'>

        </div>
        <div class="mb-3">
            <!-- <label for="exampleInputPassword1" class="form-label">Rating*</label>
            <input type="number" class="form-control" id="rating" v-model="rating"> -->
            <input type="number" class="form-control border-0 border-bottom" id="rating"  placeholder="Rating" v-model="rating">

        </div>
        <button type="submit" class="bg-transparent px-4" style="border-radius: 30px; border-width: 1px;">Submit</button>
    </form>
</template>