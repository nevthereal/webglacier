<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<div>
	<nav class="h-[12dvh] md:h-[10dvh] p-2 md:p-6 flex justify-between font-bold">
		<a class="btn" href="/"><img src="/img/favicon.png" alt="logo" class="w-16 md:w-20" /></a>
		<div class="my-auto flex gap-4">
			<a class="btn p-2" href="/projects">Projects</a>
			<a class="btn p-2" href="/contact">Contact</a>
		</div>
		<span class="my-auto">
			<LightSwitch />
		</span>
	</nav>
	<slot />
	<footer class="w-full md:grid md:grid-cols-3 p-6">
		<div class="mx-auto">
			<img src="/img/favicon.png" alt="logo" class="w-36 mx-auto hidden md:block" />
			<p class="font-serif italic font-bold text-center md:text-left mb-4 md:mb-0">
				© WebGlacier 2023
			</p>
		</div>
		<div class="my-2 md:my-0">
			<h3 class="h3">Links</h3>
			<ul class="list-disc list-inside">
				<li>
					<a class="anchor" target="_blank" href="https://github.com/nevthereal/webglacier"
						>Repository</a
					>
				</li>
			</ul>
		</div>
		<div class="my-2 md:my-0">
			<h3 class="h3">Find me</h3>
			<ul class="list-disc list-inside">
				<li>
					<a class="anchor" target="_blank" href="https://github.com/nevthereal">GitHub</a>
				</li>
				<li>
					<a class="anchor" target="_blank" href="https://x.com/BremNeville">Twitter</a>
				</li>
				<li><a class="anchor" target="_blank" href="mailto:">Contact</a></li>
			</ul>
		</div>
	</footer>
</div>
