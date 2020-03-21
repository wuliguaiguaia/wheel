<template>
    <i :class="'z-icon'+name"></i>
</template>

<script>
export default {
	name: 'ZIcon',
	props:{
		name:{
			type: String
		}
	}
};
</script>