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
                  this.$store.commit('addGame', {name: e.target[0].value, publisher: e.target[1].value, rating: e.target[2].value})
                  this.$refs.anyName.reset();
                } else {
                    alert("Form failed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                }
           
            }
        }
    }
</script>
<template>
<form @submit="submitForm" ref="anyName" >
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
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>