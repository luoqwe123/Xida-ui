<template>
  <xida-button size="small" type="primary" :round="true" @click="abc" >你好</xida-button>
  <xida-button-group>
    <xida-button size="small" type="danger" :round="true">你好</xida-button>
    <xida-button size="small" type="success" :round="true">你好</xida-button>
    <xida-button size="small" type="warning" :round="true">Upload<xida-icon color="black" icon="upload" style="margin-left: 8px" /></xida-button>
  </xida-button-group>
  <button @click="openMessage">nihao</button>
</template>

<script setup lang="ts">

// import { XidaButton } from 'xida-ui';
import  XidaButton  from "../../components/Button/Button.vue";
import xidaButtonGroup from "../../components/Button/ButtonGroup.vue"
import  xidaIcon  from "../../components/Icon/Icon.vue";
import  { xidaMessage }from "../../components/Message"


const openMessage = ()=>{
 
  xidaMessage({
    content: 'ok',
    type: "Success"
  })
}

function abc(){
  console.log(111)
}

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
