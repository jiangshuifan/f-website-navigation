<template>
  <div class="navitem" @click="_handleClick">
    <div
      class="itemtext"
      :style="{
        color: isActive ? textactivecolor : textcolor,
        backgroundColor: isActive ? bgactivecolor : bgcolor,
      }"
    >
      <slot name="itemtext"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navitem',
  props: {
    textcolor: {
      default: '#888888',
    },
    textactivecolor: {
      default: '#2c2c2c',
    },
    bgcolor: {
      default: 'rgba(127, 127, 127, 0)',
    },
    bgactivecolor: {
      default: 'rgba(127, 127, 127, 0.4)',
    },
    value: [String, Number],
    activeValue: [String, Number],
  },
  methods: {
    _handleClick() {
      this.$emit('click')
    },
  },
  computed: {
    isActive() {
      return this.value === this.activeValue ? true : false
    },
  },
}
</script>

<style>
.navitem {
  display: flex;
  justify-content: center;
  align-items: center;
}
.itemtext {
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.itemtext:hover {
  background-color: rgba(127, 127, 127, 0.4);
}
</style>
