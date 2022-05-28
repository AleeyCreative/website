<script lang="ts">
	import { uiState } from '../../store';
	import CategoryPicker from './CategoryPicker.svelte';
	import { hireFormAction } from '../../api';
	import { MSG_SENT, ERR_MSG } from '../../constants';

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

<div class={`hm-wrapper ${isOpen ? 'block top-0 h-screen' : ' top-[-100%]'}`}>
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

		<div class="flex justify-between mb-4 items-center w-full">
			<CategoryPicker label="Landing Page" onChange={handleCategory} selected={category} />
			<CategoryPicker label="E-Commerce" onChange={handleCategory} selected={category} />
			<CategoryPicker label="Marketing Website" onChange={handleCategory} selected={category} />
			<CategoryPicker label="Custom Software" onChange={handleCategory} selected={category} />
			<CategoryPicker label="Bots & Integration" onChange={handleCategory} selected={category} />
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
	<button class="close-button" on:click={close}> X</button>
</div>

<style lang="postcss">
	.hm-wrapper {
		@apply fixed w-screen text-gray-800  bg-yellow-200 transition-all duration-300 z-[10000];
	}
	.content {
		@apply py-4 md:px-4  md:w-[40em] w-10/12 h-full m-auto  gap-4;
	}
	.close-button {
		@apply w-16 h-16 absolute  bg-red-400 shadow-md rounded-full right-8 bottom-8  hover:before:w-full hover:before:h-full;
	}
</style>
