<script lang="ts">
	import { tw } from 'twind';
	function slideBlocks(node: HTMLElement, { duration, delay }) {
		const handleTransition = (t: number) => {
			const isLeft = node.classList.contains('left-pane');
			const currentMovePoint = isLeft ? node.style.left : node.style.right;
			return `${isLeft ? 'left' : 'right'}: ${t * parseInt(currentMovePoint)}; width: ${t * 4}`;
		};

		return {
			duration,
			delay,
			css: handleTransition
		};
	}
	const paneClasses = (isLeft = false) =>
		tw(
			`bg-red-300 fixed ${isLeft ? 'left-0' : 'right-0'}`,
			`${isLeft ? 'left' : 'right'}-pane pane`
		);
</script>

<div class="flex w-full">
	<div transition:slideBlocks={{ delay: 0, duration: 4000 }} class={paneClasses(true)} />
	<div class="w-screen h-screen flex justify-center items-center z-40" />
	<div class="lds-hourglass" />
	<div transition:slideBlocks class={paneClasses()} />
</div>

<style>
	.pane {
		width: 45%;
		height: 100vh;
	}
	.lds-hourglass {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-hourglass:after {
		content: ' ';
		display: block;
		border-radius: 50%;
		width: 0;
		height: 0;
		margin: 8px;
		box-sizing: border-box;
		border: 32px solid #fff;
		border-color: #fff transparent #fff transparent;
		animation: lds-hourglass 1.2s infinite;
	}

	@keyframes lds-hourglass {
		0% {
			transform: rotate(0);
			animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}
		50% {
			transform: rotate(900deg);
			animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}
		100% {
			transform: rotate(1800deg);
		}
	}
</style>
