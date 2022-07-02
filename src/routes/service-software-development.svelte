<script lang="ts">
	import ServiceLayout from '../layout/ServiceLayout.svelte';
	import MainContent from '../components/MainContent.svelte';
</script>

<MainContent>
	<ServiceLayout title="Custom Software Development">
		<p slot="description">
			Running an organization? With top-notch software automating your processes away, it becomes
			easier to optimize and scale for success
		</p>
		<img
			slot="illustration"
			src="/3d-illustrations/custom-software.png"
			alt="Web development hero image"
		/>
	</ServiceLayout>
</MainContent>
