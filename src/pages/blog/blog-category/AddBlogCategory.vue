<template>
    <div class="drop-shadow bg-white p-4 md:p-6">
        <div class="flex justify-start items-center gap-3 mb-8">
            <p class="text-xs md:text-sm font-semibold">Home</p>
            <p class="text-xs md:text-sm font-semibold">></p>
            <p class="text-xs md:text-sm font-semibold">Blog Categories</p>
            <p class="text-xs md:text-sm font-semibold">></p>
            <p class="text-xs md:text-sm font-semibold">Add Category</p>
        </div>
        <form @submit.prevent="postData" class="border rounded-md p-4">
            <div class="mb-3 md:mb-6">
                <p class="mb-2">Category Name: <span class="text-red-600">*</span></p>
                <input v-model="formData.name" type="text" class="outline-none border w-full p-2 rounded-md"/>
            </div>
            <button type="submit" class="bg-slate-400 text-white p-2 w-full rounded-md mt-6">Add Category</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { inject } from 'vue';
import { usePost } from "../../../composables/api/use-api";

const api = inject('api');
const serverURL = inject('serverURL');
const url = serverURL + api.blog.categoryUrl;

const formData = ref({
    name: ''
});

const postData = async () => {
    try {
        const { loading, error, responseData } = await usePost(url, formData.value);
        console.log("Response: ", responseData.value);
        console.log("Response error: ", error.value);
    } catch (error) {
        console.log("Error: ", error);
    }
}
</script>