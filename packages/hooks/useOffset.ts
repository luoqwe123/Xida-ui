import  { type Ref,computed, } from "vue"

interface UseOffsetOptions {
    offset:number;
    boxHeight: Ref<number>
    getLastBottomOffset():number;
}

interface UseOffsetResult {
    topOffset : Ref<number>;
    bottomOffset : Ref<number>
}

export function useOffset(opts : UseOffsetOptions) : UseOffsetResult {

    const lastBottomOffset = computed(()=> opts.getLastBottomOffset())
    
    const topOffset = computed(()=> opts.offset + lastBottomOffset.value)
   
    const bottomOffset = computed(()=> topOffset.value + opts.boxHeight.value)
  
    return { 
        topOffset,
        bottomOffset
    }
}

// 0   10 55+10    - btm 65
// 65  10+65 
