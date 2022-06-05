<script lang="ts">
	import { links } from '../utils';
	import ArrowLeft from '../assets/iconsax/arrow-left.svg';
	import ArrowRight from '../assets/iconsax/arrow-right-1.svg';

	let nextLinkIndex = 0;

	const handleNavigate = ({ isForward }) => {
		alert('clicke');
		if (isForward && nextLinkIndex < links.length - 1) {
			nextLinkIndex++;
		}
		if (!isForward && nextLinkIndex > 0) {
			nextLinkIndex--;
		}
		console.log('Next link', links[nextLinkIndex]);
		location.replace(links[nextLinkIndex]);
	};
</script>

<nav>
	<div
		class="m-4 nav-button"
		title={nextLinkIndex > 0 ? links[nextLinkIndex - 1] : ''}
		on:click={() => handleNavigate({ isForward: false })}
	>
		<ArrowLeft />
	</div>
	<div
		class="nav-button"
		title={nextLinkIndex < links.length - 1 ? links[nextLinkIndex + 1] : ''}
		on:click={() => handleNavigate({ isForward: true })}
	>
		<ArrowRight />
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply flex justify-between  md:text-4xl;
	}

	.nav-button {
		@apply relative px-4 bg-white shadow-lg rounded-md cursor-pointer  inline-grid place-content-center w-16 h-16;
	}
</style>
