<template>
    <p>
      
      <xida-button @click="open2" type="primary">Primary</xida-button>
      <xida-button @click="open3" type="success">Success</xida-button>
      <xida-button @click="open4" type="info">Info</xida-button>
      <xida-button @click="open5" type="warning">Warning</xida-button>
      <xida-button @click="open1" type="danger">Danger</xida-button>
    </p>
</template>

<script lang="ts" setup>
import { xidaMessage } from 'xida-ui'

 
const open2 = ()=>{
    xidaMessage({
        content:"Primary",
        type:"Primary",
      
        showClose:true
    })
}
const open3 = ()=>{
    xidaMessage({
        content:"Success",
        type:"Success",
        center:true,
        showClose:true
    })
}
const open4 = ()=>{
    xidaMessage({
        content:"info",
        type:"info",
      
        showClose:true
    })
}
const open5 = ()=>{
    xidaMessage({
        content:"warning",
        type:"warning",
       
        showClose:true
    })
}
const open1 = ()=>{
    xidaMessage({
        content:"Danger",
        type:"Danger",
        
        showClose:true
    })
}  

</script>