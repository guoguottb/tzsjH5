<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	body {
		margin: 0;
		padding: 0 ;
		padding-right: 0 !important;
	}
/* 弹出确认框 */
	.el-message-box {
		width: 100% !important;
		margin-top: 50%;
	}
	.el-checkbox__label{
		font-size: 40px !important;
	}
	.el-checkbox__inner {
		width: 40px !important;
		height: 40px !important;
	}
	.el-checkbox__inner::after {
		height: 20px !important;
		left: 12px !important;
	}
</style>
