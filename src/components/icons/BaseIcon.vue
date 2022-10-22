<script setup lang="ts">
defineProps({
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 24,
  },
  viewBox: {
    type: [String],
    default: '0 0 24 24'
  },
  iconColor: {
    type: String,
    default: 'currentColor'
  }
})
</script>
<template>
	<svg
		:height="height"
		:width="width"
		xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    role="presentation"
	>
    <g :fill="iconColor">
      <slot />
    </g>
	</svg>
</template>