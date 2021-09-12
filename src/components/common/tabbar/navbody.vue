<template>
    <div class="tb">
      <slot></slot>
    </div>
</template> 

<script>
export default {
    name:'navbody',

}
</script>

<style>
  .tb{
    width: 100%;
    display: flex;
    height: 49px;
    align-items: center;
    justify-content: space-around;
    /* box-shadow: 0 -1px 2px rgba(54,54,54,0.4); */
  }
</style>