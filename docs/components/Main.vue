<template>
    <div>
        <input class="border p-2 block" placeholder="Search Icons" type="search" v-model="query"/><br/>
        <div class="border p-3 m-1 inline-block text-center" v-for="icon in icons">
            <Bi :size="2" :icon="icon"></Bi>
            {{ icon }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";
import {Bi} from "../../src/index";
import names_list from "./../../src/assets/names_list"

const query = ref(null);
const icons = computed(() => {
    if (query.value) {
        return names_list.filter(i => i.toLowerCase().search(query.value.toLowerCase()) > -1);
    }
    return names_list;
})
</script>
<style>
@import url('./../tailwind.min.css');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
</style>
