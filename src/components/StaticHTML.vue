<template>
    <div class="d-flex justify-content-center">
        <div class="mt-3 border d-flex justify-content-between flex-column" style="width: 723px; height: 531px; max-width: 80vw;">
                <div>
                    <table class="table">
                        <thead>
                        <tr class="right-border text-center">
                            <th scope="col">Name <span>↑ ↓</span></th><!-- TODO add arrow icons -->
                            <th scope="col">Publisher <span>↑ ↓</span></th><!-- TODO add arrow icons -->
                            <th scope="col">Rating <span>↑ ↓</span></th><!-- TODO add arrow icons -->
                            <th scope="col">Actions</th>
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