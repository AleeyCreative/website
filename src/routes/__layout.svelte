<script>
	import '../app.css';
	import HireMe from '../components/HireMe/HireMe.svelte';
	import Header from '../components/Header.svelte';
	import LicenseInfo from '../components/LicenseInfo.svelte';
	import Loading from '../components/Loading.svelte';
	import ThreeDeeInteractions from '../components/ThreeDeeInteractions.svelte';
	import FloatingFooter from '../components/FloatingFooter.svelte';
	import MainContent from '../components/MainContent.svelte';
</script>

<HireMe />
<Header />
<MainContent>
	<slot />
</MainContent>
<LicenseInfo />
<FloatingFooter />
