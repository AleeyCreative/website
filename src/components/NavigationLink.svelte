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
		class="nav-button"
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
		@apply fixed bottom-12 flex justify-between px-8  md:text-4xl;
	}

	.nav-button {
		@apply relative shadow-lg rounded-md  inline-grid place-content-center w-16 h-16;
	}
</style>
