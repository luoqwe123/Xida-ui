import type { InjectionKey } from "vue";  // 为依赖注入（provide 和 inject）提供 “类型” 安全支持。 让其value严格按照指定的来写
import type { ButtonGroupContext } from "./type";

export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext> = Symbol(
  "BUTTON_GROUP_CTX_KEY"
);
