<script lang="ts">
	import ArrowLeft from '../assets/iconsax/arrow-left.svg';
	import ArrowRight from '../assets/iconsax/arrow-right-1.svg';
</script>

<footer>
	<!-- Navigation Links -->
	<nav>
		<div class="nav-button">
			<ArrowLeft />
		</div>
		<div class="nav-button">
			<ArrowRight />
		</div>
	</nav>

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
		@apply fixed bottom-12 flex md:px-8 items-center justify-between w-screen;
	}

	nav {
		@apply flex justify-between   md:text-4xl;
	}

	.nav-button {
		@apply relative px-4 bg-white shadow-lg rounded-md cursor-pointer  inline-grid place-content-center w-16 h-16;
	}

	.socials-wrapper {
		@apply flex justify-between text-clip;
	}
	.social {
		@apply w-16 h-16 relative  shadow-md rounded-full bg-white hover:before:w-full hover:before:h-full;
	}
	.social::before {
		content: '';
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		@apply w-0 h-0 absolute bg-gray-400 rounded-full transition-all duration-[1200];
	}
</style>
