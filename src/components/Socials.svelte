<script lang="ts">
</script>

<div class="socials-wrapper">
	<a href="mailto:babaali196@gmail.com" class="social" />
	<a href="https://github.com/AleeyCreative" class="social" />
	<a href="tel:08024711182" class="social" />
	<a href="" class="social" />
</div>

<style lang="postcss">
	.socials-wrapper {
		@apply flex justify-between text-clip w-[300px] fixed right-36 bottom-12 z-40;
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
