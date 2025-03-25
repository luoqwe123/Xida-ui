<template>
    <Transition :name=props.transitionName 
        @enter="boxHeight = messageRef!.getBoundingClientRect().height"
        @after-leave="!visible && props.onClose()"
    >
        <div class="xida-message" 
        ref="messageRef"
        :class="{
          [`xida-message--${props.type.toLowerCase()}`]:props.type  ,
          'is-close' : showClose,
          'text-center' : center
        }"
        :style = customStyle
        v-show="visible"
        role="alert"
        @mouseenter.prevent="clearTimer"
        @mouseleave.prevent="startTimer"
        >
        <xida-icon class="xida-message__icon" :icon="iconName"></xida-icon>
        <div class="xida-message__content" >
            <slot>
                <render-vnode v-if="props.content" :vNode="props.content"></render-vnode>
            </slot>
        </div>
        <div class="xida-message__close" v-if="showClose">
            <xida-icon icon="xmark" @click.stop="close"></xida-icon>
        </div>
        </div>
    </Transition>
</template>

<script setup lang='ts'>
import  XidaIcon  from '../Icon/Icon.vue';
import { defineOptions ,withDefaults,ref, computed, watchEffect,onMounted  } from 'vue';
import type { MessageCompInstance, MessageProps } from './type';
import { delay,bind, } from "lodash-es"
import { typeIconName,RenderVnode } from '@xida-ui/utils';
import { useEventListener,useOffset } from '@xida-ui/hooks';
import { getLastBottomOffset } from "./method";

defineOptions({
    name:"xidaMessage"
})
const props = withDefaults(defineProps<MessageProps>(),{
    type: "info",
    content: "this is info",
    zIndex: 99,
    transitionName: "fade-up",
    duration: 3000,
    offset: 10,
    showClose:false,
    center:true
})

const visible = ref(false)

const messageRef = ref<HTMLDivElement | null>(null)

const boxHeight = ref(0)

const { bottomOffset ,topOffset } = useOffset({
    getLastBottomOffset: bind(getLastBottomOffset, props),
    boxHeight,
    offset: props.offset
})

// ***** 如果鼠标进入该消息，则消息一直存在，鼠标出去了，过了duration时间后，消息消失，如果 duration 为0 则一直存在
let timer : number;
function startTimer(){
  
    if(props.duration === 0 ) return;
    timer = delay(close,props.duration)
}
function clearTimer(){
    
    clearTimeout(timer)
}

const iconName  = computed(()=>{
    return  typeIconName.get(props.type.toLowerCase()) ?? "circle-info"
})

const customStyle =  computed(()=>{
    return {
        'top' : topOffset.value + 'px',
        'zIndex' : props.zIndex 
    }
})


function close (){
    visible.value = false
  
}

watchEffect(()=>{
   // 一个消息close时，将其高度去除，使其后面的消息上来
    if(!visible.value) boxHeight.value = 0 // -props.offset
    // console.log("watch",boxHeight.value,visible.value)
})

useEventListener(document,"keydown",(e: Event)=>{
    if((e as KeyboardEvent).code === "Escape"){
        close()
    }
})

onMounted(() => {
  visible.value = true;
  startTimer();
});
// console.log("bottom",bottomOffset.value)
defineExpose<MessageCompInstance>({
    bottomOffset,
    close
})
</script>

<style scoped>

@import "./style.css";

</style >