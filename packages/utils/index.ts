import { isFunction } from "lodash-es";
import { defineComponent } from "vue"; // defineComponent 是一个从 vue 模块导入的工具函数 ,在ts项目中能给你做类型推导


export const typeIconName = new Map([
    ["info", "circle-info"],
    ["success", "check-circle"],
    ["warning", "circle-exclamation"],
    ["danger", "circle-xmark"],
    ["error", "circle-xmark"],
])

export const RenderVnode = defineComponent({
    props: {
        vNode: {
            type: [String, Object, Function],
            required: true
        },

    },
    setup(props) {  // 在 Vue 中，渲染函数的返回值会被视为虚拟节点（Virtual Node，简称 VNode）。当渲染函数返回一个字符串（而不是对象或函数）时，Vue 会自动将其视为文本节点的描述。
        return () => (isFunction(props.vNode) ? props.vNode() : props.vNode)
    }
})


export * from "./install";
export * from "./test"
