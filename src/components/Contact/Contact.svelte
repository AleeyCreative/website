<script lang="ts">
	import CategoryPicker from './CategoryPicker.svelte';
	let isOpen: boolean = false;

	let name = '';
	let address = '';
	let category = '';
	let misc = '';
	let description = '';
	const toggleHandler = () => {
		isOpen = !isOpen;
	};

	const handleCategory = (selCategory: string) => {
		category = selCategory;
	};
</script>

<div class={`contact-wrapper ${isOpen ? 'bottom-0' : 'bottom-[100%]'}`}>
	<form class="content">
		<p class="my-8 md:text-3xl text-2xl">
			I am so happy that you want to work on something with me. Once you fill this form, I'll reach
			out to you within a short while and things are gonna take off from there.
		</p>
		<input
			type="text"
			placeholder="What do I call you?"
			class="input input-bordered w-full input-lg"
		/>

		<fieldset>
			<div class="label block">
				<span class=" md:text-2xl text-lg"> What category best describes your use case</span>
			</div>
			<div class="flex justify-between items-center w-full">
				<CategoryPicker label="Landing Page" onChange={handleCategory} selected={category} />
				<CategoryPicker label="E-Commerce" onChange={handleCategory} selected={category} />
				<CategoryPicker label="Marketing Website" onChange={handleCategory} selected={category} />
				<CategoryPicker label="Custom Software" onChange={handleCategory} selected={category} />
				<CategoryPicker label="Bots & Integration" onChange={handleCategory} selected={category} />
			</div>
		</fieldset>

		<input class="input block w-full" placeholder="Contact e.g email, twitter etc" />
		<textarea class="textarea block w-full" />
	</form>

	<button class="toggle-button" on:click={toggleHandler}> Hire Me </button>
</div>

<style windi>
	.contact-wrapper {
		@apply fixed w-screen top-0 z-50 bg-yellow-200 transition-all duration-300;
	}
	.content {
		@apply py-4 md:px-4  md:w-[40em] w-10/12 h-full m-auto grid grid-flow-row gap-4;
	}
	.toggle-button {
		@apply px-8 md:w-[160px] text-center absolute top-[105%] right-4 py-4 text-gray-800 shadow-md   inline-grid  rounded-md my-4;
	}
</style>
