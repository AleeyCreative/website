<script lang="ts">
	import { tw } from 'twind';
	import ArrowLeft from '../assets/iconsax/arrow-left.svg';
	import ArrowRight from '../assets/iconsax/arrow-right-1.svg';
</script>

<nav>
	<div class="nav-button">
		<ArrowLeft />
	</div>
	<div class="nav-button">
		<ArrowRight />
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply fixed bottom-12 flex justify-between px-8  md:text-4xl;
	}

	.nav-button {
		@apply relative shadow-lg rounded-md  inline-grid place-content-center w-16 h-16;
	}
</style>
