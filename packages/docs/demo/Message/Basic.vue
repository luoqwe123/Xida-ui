<template>
    <p>
      <xida-button @click="open1" >Default</xida-button>
      <xida-button @click="open2" type="primary">Primary</xida-button>
      <xida-button @click="open3" type="success">Success</xida-button>
      <xida-button @click="open4" type="info">Info</xida-button>
      <xida-button @click="open5" type="warning">Warning</xida-button>
      <xida-button @click="open6" type="danger">Danger</xida-button>
    </p>
</template>

<script lang="ts" setup>
import { xidaMessage } from 'xida-ui'

const open1 = ()=>{
    xidaMessage({
        content:"Default",
        type:"Default",
        center:true
    })
}  
const open2 = ()=>{
    xidaMessage({
        content:"Primary",
        type:"Primary",
        center:true
    })
}
const open3 = ()=>{
    xidaMessage({
        content:"Success",
        type:"Success",
        center:true
    })
}
const open4 = ()=>{
    xidaMessage({
        content:"info",
        type:"info",
        center:true
    })
}
const open5 = ()=>{
    xidaMessage({
        content:"warning",
        type:"warning",
        center:true
    })
}
const open6 = ()=>{
    xidaMessage({
        content:"Danger",
        type:"Danger",
        center:true
    })
}  

</script>