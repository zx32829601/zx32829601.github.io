<template>
  <div class="app"> 
    <TheSiderbar/>
    <router-view></router-view>
  </div>
    

</template>

<script setup>
import TheSiderbar from './components/TheSidebar.vue'
</script>


<style lang="scss">
:root{
	--primary: #ffd901;
	--grey: #64748b;
	--secondbackground: #4e2a15;
	--dark-alt: #38170d;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}

</style>
