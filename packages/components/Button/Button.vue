<template>
  <component 
    :is="props.tag" 
    ref='_ref' 
    class="xida-button" 
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0" 
    :class="{
      [`xida-button--${type}`]: type,
      [`xida-button--${size}`]: size,
      'is-plain': plain,
      'is-loading': loading,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-round': round
    }"
    @click="(e:MouseEvent)=>useThrotle?handleClickThrottle:handleClick"
    >
      <slot></slot>
    </component>
</template>

<script setup lang="ts">
/**
 * Button.vue
 * Button.test.tsx  测试
 * types.ts 类型定义
 * style.css 
 * constants.ts
 */


import { ref, withDefaults } from 'vue';
import type { ButtonProps,ButtonEmits,ButtonIstance } from './type';
import { throttle } from 'lodash-es';

defineOptions({
  name: "xida-Button",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: "button",
  useThrotle: true,
  throttleDuration: 500

})

const _ref = ref<HTMLButtonElement|null>(null)
const  slots = defineSlots()

const  emits = defineEmits<ButtonEmits>()

const handleClick = (e:MouseEvent) => emits("click",e)
const handleClickThrottle = throttle(handleClick,props.throttleDuration)


</script>

<style scoped>
@import "./style.css";

</style>
