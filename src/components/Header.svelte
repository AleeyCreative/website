<script lang="ts">
	import Contact from './Contact/Contact.svelte';
</script>

<header>
	<Contact />
	<nav class="flex items-center justify-between  saturate-50 px-4">
		<div class="w-12 h-12  rounded-full">
			<img alt="townbit" class="object-fit w-full h-full" />
		</div>
		<ul class="hidden md:flex list-none m-0  place-center grid-cols-4 gap-4">
			<li class="px-4 py-6">Home</li>
			<li class="px-4 py-6">Services</li>
			<li class="px-4 py-6">Experience</li>
			<li class="px-4 py-6">Social</li>
		</ul>
	</nav>

	<section class="h-screen relative text-lg   grid text-center place-content-center ">
		<div class=" text-3xl md:text-6xl animate-pulse  mb-8 grid gap-4">
			<h3>Welcome</h3>
			<h3>I am Baba Ali</h3>
		</div>
		<p>I am creative developer who solves problem</p>

		<span class="isax isax-activity"> Active</span>
		<div id="simple-wave" class="absolute w-60 h-80 bottom-0 text-green" />
	</section>
</header>

<style>
	#simple-wave {
		background-image: url(handz-illustration/Black/Jumper/simple-wave.png);
	}
</style>
