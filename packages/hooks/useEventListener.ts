/**
 * isRef 是一个工具函数，用于判断一个值是否是 Vue 的 ref 对象。
 * unref 是一个工具函数，用于“解包”一个值。如果传入的是 ref，返回其内部的 .value 。如果传入的不是 ref，直接返回原值
 * MaybeRef<T> 是一个 TypeScript 类型别名，表示一个值可能是普通值（T）或者 Ref<T>。是一个类型工具
 */

import  { onMounted,onBeforeUnmount,watchEffect,isRef,unref ,type MaybeRef } from "vue"

export function useEventListener(
    target: MaybeRef<EventTarget | HTMLElement | void>,
    event: string,
    handler: (e:Event) => any
){
    if(isRef(target)){
        watchEffect(()=>{
            target.value?.removeEventListener(event,handler)
            target.value?.addEventListener(event,handler)
        })
    }else{
        onMounted(()=> target?.addEventListener(event,handler))
    }
    onBeforeUnmount(() => unref(target)?.removeEventListener(event, handler));
}