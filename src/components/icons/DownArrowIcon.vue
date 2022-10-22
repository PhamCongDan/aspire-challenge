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
      <path fill="#325baf" style="fill: var(--color1, #325baf)" opacity="0.15" d="M11.999 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12v0c0-6.627-5.373-12-12-12v0zM17.413 10.531l-4.483 4.483c-0.045 0.071-0.095 0.134-0.15 0.19l0-0c-0.207 0.209-0.494 0.339-0.812 0.339-0.403 0-0.757-0.209-0.96-0.524l-0.003-0.005-4.502-4.502c-0.203-0.203-0.328-0.483-0.328-0.792 0-0.619 0.501-1.12 1.12-1.12 0.309 0 0.589 0.125 0.792 0.328l3.882 3.881 3.86-3.862c0.201-0.192 0.473-0.31 0.774-0.31 0.619 0 1.121 0.502 1.121 1.121 0 0.3-0.118 0.572-0.31 0.774l0-0z"></path>
    </g>
	</svg>
</template>