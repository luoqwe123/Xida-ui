<template>
  <div>
    <xida-button type="primary" loading>Loading</xida-button>
    <xida-button type="primary" loading-icon="circle-notch" loading>
      Loading
    </xida-button>
    <xida-button type="primary" loading>
      <template #loading>
        <xida-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </xida-button>
  </div>
</template>