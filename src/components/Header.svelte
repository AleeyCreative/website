<script lang="ts">
	import { tw } from 'twind';
</script>

<header>
	<nav class={tw`flex items-center justify-between text-blue-200 bg-gray-900 saturate-50 px-4`}>
		<div class={tw`w-12 h-12  rounded-full`}>
			<img alt="townbit" class="object-fit w-full h-full" />
		</div>
		<ul class={tw`list-none m-0 inline-grid place-center grid-cols-4 gap-4`}>
			<li class="px-4 py-6">Home</li>
			<li class="px-4 py-6">Services</li>
			<li class="px-4 py-6">Experience</li>
			<li class="px-4 py-6">Social</li>
		</ul>

		<a
			href=""
			class={tw`px-8 md:w-[160px] text-center py-4 bg-blue-900 inline-grid place-center rounded-md my-4`}
		>
			Hire Me
		</a>
	</nav>

	<section
		class={tw`h-screen text-lg bg-gray-800 text-blue-200 grid text-center place-content-center mb-[400px] `}
	>
		<div class={tw`text-6xl text-blue-400 mb-8 grid gap-4`}>
			<h3>Welcome</h3>
			<h3>I am Baba Ali</h3>
		</div>
		<p>I am creative developer who solves problem</p>
	</section>
</header>
