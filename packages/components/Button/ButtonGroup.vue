<template>
    <div class="xida-button-group">
        <slot></slot>
    </div>
</template>

<script setup lang='ts'>

import { provide, reactive, toRef } from 'vue';
import type { ButtonGroupProps } from './type';
import { BUTTON_GROUP_CTX_KEY } from './contants';
defineOptions({
    name:'xida-button-group'
})
const props = defineProps<ButtonGroupProps>();
provide(
    BUTTON_GROUP_CTX_KEY,
    reactive({
        size: toRef(props, "size"),
        type: toRef(props, "type"),
        disabled: toRef(props, "disabled"),
    })
)

</script>

<style scoped>
@import "./style.css";

</style>