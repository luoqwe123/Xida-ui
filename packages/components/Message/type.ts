import type { Ref, VNode, ComponentInternalInstance } from "vue";

export type MessageType = "primary" | "success" | "warning" | "danger" | "info"


export interface MessageProps {
    id: string;
    type?: MessageType;
    content?: string;
    zIndex?: number;
    showClose?: boolean;
    offset?: number;  // 顶部偏移量
    onClose(): void; // 关闭回调
    duration?: number; // 持续时间
    transitionName?: string,
    center?: boolean
}

export interface MessageHandler {
    close(): void;
}

export type CreateMessageProps = Omit<    // Omit从一个类型中移除指定的属性，生成新类型  
    MessageProps,
    "onClose" | "id" | "zIndex"
>;

export interface MessageInstance {
    id: string;
    vnode: VNode;
    props: MessageProps;
    vm: ComponentInternalInstance;
    handler: MessageHandler;
}


export interface MessageCompInstance {
    close(): void;
    bottomOffset: Ref<number>;
}
export type MessageOptions = Partial<Omit<MessageProps, "id">>;
export type MessageParams = string | VNode | MessageOptions;