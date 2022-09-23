<script>
  import Navbar from './components/Navbar.vue'


  export default {
    data() {
      
        return {
            currentPath: window.location.hash
        };
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || "/"] || NotFound;
        }
    },
    mounted() {
        window.addEventListener("hashchange", () => {
            this.currentPath = window.location.hash;
        });
    },
    components: { Navbar }
}

</script>

<template>
    <Navbar/>
</template>

<!--  -->