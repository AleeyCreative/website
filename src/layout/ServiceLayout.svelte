<script lang="ts">
	export let title: string = '';
</script>

<section>
	<div class="content">
		<h3 class="content-title">{title}</h3>

		<div class="content-body">
			<slot name="description" />
		</div>
	</div>

	<div class="illustration-wrapper">
		<slot name="illustration" />
	</div>
</section>

<style lang="postcss">
	section {
		@apply flex justify-between py-8 md:p-16;
	}
	.content {
		@apply w-1/2;
	}
	.content-title {
		@apply text-3xl md:text-5xl my-4;
	}
	.content-body {
		@apply text-lg md:text-2xl;
	}
	.illustration-wrapper {
		@apply w-[21em] md:w-[42em] h-[25em] md:h-[31em];
	}
	.illustration-wrapper img {
		@apply h-full w-full relative bottom-[10.25em];
	}
</style>
