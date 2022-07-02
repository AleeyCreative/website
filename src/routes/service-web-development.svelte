<script lang="ts">
	import ServiceLayout from '../layout/ServiceLayout.svelte';
	import MainContent from '../components/MainContent.svelte';
</script>

<MainContent>
	<ServiceLayout title="Website Development">
		<p slot="description">
			With the continual influx of individuals and businesses into the digital space, having a
			website that stands out can be quite important in keeping you ahead of the competiton and
			giving you an edge over your competitors
		</p>
		<img
			slot="illustration"
			src="/3d-illustrations/web-development.png"
			alt="Web development hero image"
		/>
	</ServiceLayout>
</MainContent>
