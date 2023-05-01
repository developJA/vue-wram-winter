<template>
	<header>
		<button class="btn-back" @click="$router.go(-1)">뒤로</button>
        <h2>따뜻한겨울</h2>
	</header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header{
	width:100%;
	position:fixed;
	height: 65px;
	z-index: 999;
	border-bottom: 1px solid #c3c3c3;
	text-align: center;
	color : #39a6ee;
	background-color: #fff;
}

</style>
