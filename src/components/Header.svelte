<script lang="ts">
	import { uiState } from '../store';

	const toggleHireButton = () => {
		uiState.update((prevUI) => ({ ...prevUI, isHireFormOpen: !prevUI.isHireFormOpen }));
		console.log(uiState);
	};
</script>

<header>
	<nav class="flex items-center justify-between  saturate-50 px-4">
		<div class="w-12 h-12  rounded-full">
			<img alt="townbit" class="object-fit w-full h-full" />
		</div>
		<ul class="hidden md:flex list-none m-0  place-center grid-cols-4 gap-4">
			<li class="px-4 py-6">Home</li>
			<li class="px-4 py-6">Services</li>
			<li class="px-4 py-6">Experience</li>
			<li class="px-4 py-6">Social</li>
		</ul>
		<button class="toggle-button" on:click={toggleHireButton}> Hire Me</button>
	</nav>
</header>

<style lang="postcss">
	header {
		@apply fixed top-0 w-full left-0;
	}
	.toggle-button {
		@apply px-8 md:w-[160px] text-center right-4 py-4 shadow-md   inline-grid  rounded-md my-4;
	}
</style>
