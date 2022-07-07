<script lang="ts">
  import { onMount } from 'svelte';

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
    @apply flex flex-col-reverse items-center md:flex-row justify-center md:justify-between md:py-8 md:p-16;
  }
  .content {
    @apply md:w-1/2 w-10/12;
  }
  .content-title {
    @apply text-3xl md:text-5xl my-4 text-center md:text-left;
  }
  .content-body {
    @apply text-lg md:text-2xl;
  }
  .illustration-wrapper {
    @apply w-[21em] md:w-[42em] md:h-[31em] order-1 md:mb-0 mb-4;
  }
  .illustration-wrapper img {
    @apply h-full w-full relative bottom-[10.25em];
  }
</style>
