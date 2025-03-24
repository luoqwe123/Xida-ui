/**
 *  
 *  h 是一个辅助函数，全称是 createVNode，用于创建虚拟 DOM 节点(生成一个轻量级的 VNode 对象)，包含 type、props、children 等字段，渲染器（renderer）会将 VNode 转换为真实 DOM，或通过 diff 算法更新现有 DOM
 *  createApp 是 Vue 3 的顶级 API，用于创建 Vue 应用实例。它是整个 Vue 应用的入口点，负责初始化应用并将其挂载到 DOM 上
 * 
 * 
 *  findIndex ： 从数组中查找指定对象，如果找到一样的，返回其索引
 * 
 * ! 是 TypeScript 的非空断言操作符，告诉编译器“此处的值一定不是 null 或 undefined”
*/

import { isVNode, render, h, shallowReactive,watchEffect } from "vue";
import type { MessageProps, MessageInstance, CreateMessageProps, MessageHandler,MessageType,MessageParams } from "./type";
import { findIndex, get, each,isString } from "lodash-es";
import { useId, useZIndex } from "@xida-ui/hooks";
import MessageConstructor from "./Message.vue";



const instances: MessageInstance[] = shallowReactive([])

const { nextZIndex } = useZIndex();
export const messageDefaults = {
    type: "info",
    duration: 3000,
    offset: 10,
    transitionName: "fade-up",
};

// 如果opts是一个虚拟节点或者字符串，非引用类型，将其放到对象中，如果是引用类型(对象，数组，函数) ，返回原值
const normalizedOptions = (opts: MessageParams): CreateMessageProps => {
    const result =
        !opts || isVNode(opts) || isString(opts)
            ? {
                message: opts,
            }
            : opts;
    return { ...messageDefaults, ...result } as CreateMessageProps;
};


/**
 * 创建 message实例 ，并将其放入数组
 * @param props 
 * @returns message 实例
 */


// handle 有点问题
export function createMessage(props: CreateMessageProps): MessageInstance {
    const id = useId().value
    const container = document.createElement("div")
    const close = () => {
       
        const idx = findIndex(instances, { id })
        if (idx === -1) return;
        instances.splice(idx, 1)
        render(null, container)
    }

    const _props: MessageProps = {
        ...props,
        id,
        zIndex: nextZIndex(),
        onClose: close
    }
    const vnode = h(MessageConstructor, _props)
    render(vnode, container)

    document.body.appendChild(container.firstElementChild!)  // 挂载到页面
    const vm = vnode.component!; // 当 vnode 表示一个组件时，Vue 在渲染过程中会为其创建一个组件实例，并将实例存储在 vnode.component 属性中。这个实例是一个代理对象
  
    const handler: MessageHandler = {
        close: vm.exposed!.close
        
    }
    const instance: MessageInstance = {  // 实例
        props: _props,
        id,
        vm,
        vnode,
        handler
    }
    instances.push(instance)
    return instance
}

export function getLastBottomOffset(this: MessageProps) {
    const idx = findIndex(instances, { id: this.id });
    if (idx <= 0) return 0;
    return get(instances, [idx - 1, "vm", "exposed", "bottomOffset", "value"]);
}

export function message(options: {}) {
    const normalized = normalizedOptions(options)
    const instance = createMessage(normalized)
    return instance.handler;  // 关闭消息
}

export function closeAll(type?: MessageType) {
    each(instances, (instance) => {
        if (type) {
            instance.props.type === type && instance.handler.close();
            return;
        }
        instance.handler.close();
    });
}
message.closeAll = closeAll;



export const Message = message

