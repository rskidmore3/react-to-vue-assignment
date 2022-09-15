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
            submitForm(state){
                this.v$.$validate()
                // if(!this.v$.$error){
                //     alert('Form success')
                // } else {
                //     alert("Form failed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                // }
                // Enter new thing into form 
                this.$store.commit('addGame', 'hey dude the empire is pretty chill')

                // console.log(this.$store.state.games)
            
            }
        }
    }
</script>
<template>
<form>
    <div class="mb-3">
        <label for="name" class="form-label">Name*</label>
        <input type="text" class="form-control" id="nameOfGame" v-model="name" aria-describedby="nameOfGame">
    </div>
    
    <div class="mb-3">
        <label for="publisher" class="form-label">Publisher*</label>
        <input type="text" class="form-control" id="publisher" v-model='publisher'>
    </div>

    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Rating*</label>
        <input type="number" class="form-control" id="rating" v-model="rating">
    </div>


    
    <button type="submit" @click="submitForm"  class="btn btn-primary">Submit</button>
</form>
</template>