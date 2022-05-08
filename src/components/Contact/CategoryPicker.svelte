<script lang="ts">
	export let label: string = 'Website';
	export let onChange: Function;
	export let selected: any;

	export let icon: any;

	$: isActive = selected === label;

	const handleClick = () => onChange && onChange(label);
</script>

<div class={`category-wrapper ${isActive ? 'is-active' : ''}`} role="radio" on:click={handleClick}>
	<div class="category-icon-wrapper">
		{icon}
	</div>
	<div class="category-label">{label}</div>
</div>

<style windi>
	.category-wrapper {
		@apply flex flex-col items-center cursor-pointer;
	}
	.is-active .category-icon-wrapper {
		@apply bg-blue-300;
	}

	.category-icon-wrapper {
		@apply w-16 h-16 bg-red-500 rounded-full mb-2;
	}
	.category-label {
		@apply text-gray-600;
	}
</style>
