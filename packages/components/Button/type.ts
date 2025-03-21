import type { Component, ComputedRef, Ref } from "vue";



export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export type NativeType = 'button' | 'reset' | 'submit'

export type ButtonSize = 'large' | 'small' | 'default'

export interface ButtonProps {
    tag?: string | Component
    type?: ButtonType
    size?: ButtonSize
    nativeType?: NativeType
    disabled?: boolean
    loading?: boolean
    icon?: string
    circle?: boolean
    plain?: boolean
    round?: boolean
    loadingIcon?: string
    autofocus?: boolean
    useThrotle?: boolean
    throttleDuration?: number
}

export interface ButtonEmits {
    (e: "click", val: MouseEvent): void
}
export interface ButtonIstance {
    ref: Ref<HTMLButtonElement | void>;
    disabled: ComputedRef<boolean>;
    size: ComputedRef<ButtonSize | "">;
    type: ComputedRef<ButtonType | "">;
}
/**
 * @group Button
 */
export interface ButtonGroupProps {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}
export interface ButtonGroupContext {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}