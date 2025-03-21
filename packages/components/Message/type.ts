import type { Ref, VNode, ComponentInternalInstance } from "vue"; //VNode: 表示虚拟节点，支持 Vue 的高效渲染。ComponentInternalInstance: 表示组件的内部状态，主要用于 Vue 的内部机制，不常用于用户代码。

export const messageTypes = [
  "info",
  "success",
  "warning",
  "danger",
  "error",
] as const;
export type MessageType = (typeof messageTypes)[number];

export interface MessageHandler {
  close(): void;
}

export type MessageFn = {
  (props: MessageParams): MessageHandler;
  closeAll(type?: MessageType): void;
};

export type MessageTypeFn = (props: MessageParams) => MessageHandler;

export interface Message extends MessageFn {
  success: MessageTypeFn;
  warning: MessageTypeFn;
  info: MessageTypeFn;
  danger: MessageTypeFn;
  error: MessageTypeFn;
}

export interface MessageProps {
  id: string;
  message?: string | VNode | (() => VNode);
  duration?: number;
  showClose?: boolean;
  center?: boolean;
  type?: MessageType;
  offset?: number;
  zIndex: number;
  transitionName?: string;
  onDestory(): void;
}

export type MessageOptions = Partial<Omit<MessageProps, "id">>;
export type MessageParams = string | VNode | MessageOptions;

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

export type CreateMessageProps = Omit<
  MessageProps,
  "onDestory" | "id" | "zIndex"
>;
