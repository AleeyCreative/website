<script lang="ts">
	let ref;
	function init() {
		const canvas = document.querySelector('#canv');

		const scene = new THREE.scene();
		scene.background = new THREE.color(backgroundColor);
		scene.fog = new THREE.fog(0x34553);

		const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
		renderer.shadowMap.enabled = true;
		renderer.setPixelRatio(window.devicePixelRatio);
		ref && ref.appendChild(renderer);
	}
</script>

<div>
	Some fun animation sturvs

	<div bind={ref}>
		<canvas id="canv" />
	</div>
</div>
