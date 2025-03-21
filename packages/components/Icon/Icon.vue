<template>
    <i class="xida-icon" :class="[`xi-icon--${props.type}`]" :style="customStyles" v-bind="$attrs">
        <font-awesome-icon v-bind="filterProps"></font-awesome-icon>
    </i>
</template>

<script setup lang='ts'> 

import type { IconProps } from './type';
import { defineOptions,computed } from 'vue';
import { omit } from 'lodash-es';
import  {FontAwesomeIcon}  from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

defineOptions({
    name: 'xida-icon',
    inheriAttrs: false
})

const props = defineProps<IconProps>()
const filterProps = computed(() => omit(props, ["type", "color"]));
const customStyles = computed(() => ({ color: props.color ?? void 0 }));

</script>

<style scoped>
@import "./style.css";
</style>