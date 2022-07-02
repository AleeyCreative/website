<script lang="ts">
	import NavigationLinks from './NavigationLinks.svelte';

	import ArrowLeft from '../assets/iconsax/arrow-left.svg';
	import ArrowRight from '../assets/iconsax/arrow-right-1.svg';
</script>

<footer>
	<!-- Navigation Links -->
	<NavigationLinks />

	<!-- Socials -->
	<ul class="socials-wrapper avatar-group -space-x-4">
		<li class="avatar">
			<a href="mailto:babaali196@gmail.com" class="social" />
		</li>
		<li class="avatar"><a href="https://github.com/AleeyCreative" class="social" /></li>
		<li class="avatar"><a href="tel:08024711182" class="social" /></li>
		<li class="avatar">
			<a href="" class="social" />
		</li>
	</ul>
</footer>

<style lang="postcss">
	footer {
		@apply fixed bottom-12 flex md:px-8 px-2 items-center justify-between w-screen;
	}

	.socials-wrapper {
		@apply flex justify-between text-clip;
	}
	.social {
		@apply w-8 md:w-16 h-8 md:h-16 relative  shadow-md rounded-full bg-white hover:before:w-full hover:before:h-full;
	}
	.social::before {
		content: '';
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		@apply w-0 h-0 absolute bg-gray-400 rounded-full transition-all duration-[1200];
	}
</style>
