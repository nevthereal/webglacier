<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { LightSwitch, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div>
	<nav class="m-6 flex justify-between">
		<a class="btn" href="/"><p class="font-[Fredoka] font-semibold h2">WG</p></a>
		<div class="my-auto flex gap-4" />
		<LightSwitch />
	</nav>
	<slot />
	<footer class="" />
</div>
