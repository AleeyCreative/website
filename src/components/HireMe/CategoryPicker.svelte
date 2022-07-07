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
    {icon ? icon : ''}
  </div>
  <div class="category-label">{label}</div>
</div>

<style lang="postcss">
  .category-wrapper {
    @apply flex flex-col items-center text-center cursor-pointer;
  }
  .is-active .category-icon-wrapper {
    @apply bg-blue-300;
  }

  .category-icon-wrapper {
    @apply w-10 h-10 md:w-16 md:h-16 bg-red-500 rounded-full mb-2;
  }
  .category-label {
    @apply text-gray-600 text-sm;
  }
</style>
