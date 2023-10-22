<template>
    <div class="drop-shadow bg-white p-4 md:p-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="flex justify-start items-center gap-3 mb-6 md:mb-0">
                <p class="text-xs md:text-sm font-semibold">Home</p>
                <p class="text-xs md:text-sm font-semibold">></p>
                <p class="text-xs md:text-sm font-semibold">Blog Categories</p>
            </div>
            <div class="">
                <router-link to="/add-blog-category" class="text-sm md:text-base font-medium px-4 md:px-6 py-2 md:py-4 bg-slate-400 text-white rounded-md">+ Add New Category</router-link>
            </div>
        </div>
        <hr class="my-6 md:my-10 border-b-2" />
    </div>
</template>