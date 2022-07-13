<script lang="ts">
  import { uiState } from '../../store';
  import CategoryPicker from './CategoryPicker.svelte';
  import { hireFormAction } from '../../api';
  import { MSG_SENT, ERR_MSG } from '../../constants';

  // Icons
  import Shop from '../../assets/iconsax/shop.svg';
  import Station from '../../assets/iconsax/devices-1.svg';
  import Logic from '../../assets/iconsax/hierarchy-square-3.svg';
  import Tools from '../../assets/iconsax/shapes.svg';
  import IconX from '../../assets/iconsax/close-circle.svg';
  const ERROR_DURATION = 4000;

  let name = '';
  let contactInfo = '';
  let category = '';
  let misc = '';
  let description = '';

  let isOpen: boolean;
  let errorMsg: null | string;
  let successMsg: null | string;

  uiState.subscribe((ui) => {
    isOpen = ui.isHireFormOpen;
  });

  const close = () => uiState.update((ui) => ({ ...ui, isHireFormOpen: !ui.isHireFormOpen }));

  const handleSubmit = async (evt) => {
    const form = new FormData(evt.target);
    let reqBody = {};
    //@ts-ignore
    for (let [key, val] of form) {
      reqBody[key] = val;
    }

    try {
      const resp = await hireFormAction(reqBody);
      successMsg = MSG_SENT;
    } catch (err) {
      errorMsg = ERR_MSG;
    }
  };

  const handleCategory = (selCategory: string) => {
    category = selCategory;
  };

  $: if (errorMsg) {
    setTimeout(() => (errorMsg = null), ERROR_DURATION);
  }
</script>

<div class={`hm-wrapper ${isOpen ? 'block top-0 h-screen' : ' top-[-400%]'}`}>
  <form class="content" on:submit|preventDefault={handleSubmit}>
    <p class="my-8 md:text-2xl text-xl">
      I am so happy that you want to work on something with me. Once you fill this form, I'll reach
      out to you within a short while and things are gonna take off from there.
    </p>

    {#if errorMsg}
      <div class="text-red-400 my-4">{errorMsg}</div>
    {/if}
    <div class="form-control mb-4">
      <label for="description" class="input-group">
        <span class="label-text"> Name</span>
        <input
          name="description"
          bind:value={name}
          type="text"
          placeholder="What do I call you?"
          class="input input-bordered w-full input-lg"
        />
      </label>
    </div>

    <div class="form-control block w-full mb-4">
      <span class=" md:text-2xl text-lg"> What category best describes your use case</span>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 mb-4 items-center w-full">
      <CategoryPicker
        Icon={Shop}
        label="E-Commerce"
        onChange={handleCategory}
        selected={category}
      />
      <CategoryPicker
        Icon={Station}
        label="Marketing Website"
        onChange={handleCategory}
        selected={category}
      />
      <CategoryPicker
        Icon={Logic}
        label="Custom Software"
        onChange={handleCategory}
        selected={category}
      />
      <CategoryPicker
        Icon={Tools}
        label="Bots & Integration"
        onChange={handleCategory}
        selected={category}
      />
    </div>

    <div class="mb-4 form-control">
      <label for="contactInfo" class="input-group">
        <span class="label-text"> Contact Info </span>
        <input
          name="contactInfo"
          bind:value={contactInfo}
          class="input block w-full input-lg"
          placeholder="e.g email, twitter etc"
        />
      </label>
    </div>

    <div class="form-control">
      <textarea
        placeholder="Any other info you would like to tell me?"
        bind:value={description}
        class="textarea block w-full input-bg"
      />
    </div>
    <div class="mb-4" />
    <div class="flex justify-center w-full">
      {#if successMsg}
        <div>{successMsg}</div>
      {:else}
        <button type="submit" class="btn btn-large"> Okay, I'm done </button>
      {/if}
    </div>
  </form>
  <div class="mb-[10em]" />
  <button class="close-button" on:click={close}> <IconX /></button>
</div>

<style lang="postcss">
  .hm-wrapper {
    @apply fixed w-screen text-gray-800  bg-yellow-200 transition-all duration-300 z-[10000];
  }
  .content {
    @apply py-4 md:px-4  w-10/12 md:w-[40em]  h-full mx-auto   gap-4;
  }
  .close-button {
    @apply w-16 h-16 absolute inline-grid place-items-center  bg-red-400 shadow-md rounded-full right-8 bottom-1 md:bottom-8;
  }
</style>
