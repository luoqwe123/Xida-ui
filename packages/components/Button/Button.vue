<template>
  <component :is="props.tag" ref='_ref' class="xida-button" :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0" :class="{
      [`xida-button--${type}`]: type,
      [`xida-button--${size}`]: size,
      'is-plain': plain,
      'is-loading': loading,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-round': round
    }" @click="() => useThrotle ? handleClickThrottle : handleClick">
    <template v-if="loading">
      <slot name="loading" class="loading-icon" :icon="loadingIcon ?? 'spinner'" :style="iconStyle" size="1x" spin>
      </slot>
    </template>
    <xida-icon v-if="icon && !loading" :icon="icon" :style="iconStyle" size="1x"></xida-icon>
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
import xidaIcon from '../Icon/Icon.vue';
import { ref, withDefaults, inject, computed } from 'vue';
import type { ButtonProps, ButtonEmits, } from './type';
import { throttle } from 'lodash-es';
import { BUTTON_GROUP_CTX_KEY } from './contants';


defineOptions({
  name: "xida-button",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: "button",
  useThrotle: true,
  throttleDuration: 500

});
const _ref = ref<HTMLButtonElement | null>(null);
const slots = defineSlots();
const emits = defineEmits<ButtonEmits>();
const handleClick = (e: MouseEvent) => emits("click", e);
const handleClickThrottle = throttle(handleClick, props.throttleDuration);
const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0)
const size = computed(() => ctx?.size ?? props?.size ?? "");
const type = computed(() => ctx?.type ?? props?.type ?? "");
const disabled = computed(() => ctx?.disabled || props?.disabled || false);
const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px",
}));


</script>

<style scoped>
@import "./style.css";
</style>
