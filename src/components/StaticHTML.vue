<template>
    <div class="justify-content-center">

   
    <div>
        <div class="mt-3 border d-flex justify-content-between flex-column" style="width: 723px; height: 531px; max-width: 80vw;">
                <div>
                    <table class="table">
                        <thead>
                        <tr class="right-border text-center">
                            <th scope="col">Name <span>↑ ↓</span></th>
                            <th scope="col">Publisher <span>↑ ↓</span></th> 
                            <th scope="col">Rating <span>↑ ↓</span></th> 
                            <th scope="col"><div>Actions</div><div> TODO add arrow icons</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center">
                            <td>Game1</td>
                            <td>Publisher1</td>
                            <td>5</td>
                            <td class="d-flex justify-content-center">
                                <div class="d-flex w-50 gap-3">
                                    <button  class='border-0 p-y-1 rounded' style="height: 30px; background-color: #F06C9B; " >Delete</button>
                                    <button  class='border-0 p-y-1 rounded' style="height: 30px; background-color: #96C9DC; " >Edit</button>
                                </div>
                            </td>
                        </tr>
                        <tr class="text-center">
                            <td>Game2</td>
                            <td>Publisher2</td>
                            <td>5</td>
                            <td class="d-flex justify-content-center">
                                <div class="d-flex w-50 gap-3">
                                    <button  class='border-0 p-y-1 rounded' style="height: 30px; background-color: #F06C9B; " >Delete</button>
                                    <button  class='border-0 p-y-1 rounded' style="height: 30px; background-color: #96C9DC; " >Edit</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>{{ '<< < 12345678 > >> '}}</div>
        </div>
    </div>

    <div>
        <form ref="anyName" style="width: 300px;">
            <div class="mb-3">
                <input type="text" class="form-control border-0 border-bottom" id="nameOfGame"  placeholder="Name" v-model="name"  aria-describedby="nameOfGame">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control border-0 border-bottom" id="publisher" placeholder="Publisher"  v-model='publisher'>
            </div>
            <div class="mb-3">
                <input type="number" class="form-control border-0 border-bottom" id="rating"  placeholder="Rating" v-model="rating">
            </div>
            <button type="submit" class="bg-transparent px-4" style="border-radius: 30px; border-width: 1px;">Submit</button>
        </form>
    </div>
    </div>

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