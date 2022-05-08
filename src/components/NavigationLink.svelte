<script lang="ts">
	import { tw } from 'twind';
	import ArrowLeft from '../assets/iconsax/arrow-left.svg';
	import ArrowRight from '../assets/iconsax/arrow-right-1.svg';
</script>

<nav>
	<div
		class="px-4 py-6 relative hover:(left-2 top-2)  shadow-lg rounded-md  inline-grid place-content-center w-20 h-20"
	>
		<ArrowLeft />
	</div>
	<div
		class="px-4 py-6  relative hover:(left-2 top-2) shadow-lg inline-grid place-content-center rounded-md w-20 h-20"
	>
		<ArrowRight />
	</div>
</nav>

<style langt="postcss">
	nav {
		@apply fixed bottom-12 flex justify-between px-8  md:text-4xl;
	}
</style>
