<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	const routes = [
		{
			route: '/projects',
			name: 'Projects'
		},
		{
			route: '/pricing',
			name: 'Pricing'
		},
		{
			route: '/contact',
			name: 'Contact'
		}
	];
</script>

<div>
	<nav class="h-[10dvh] p-6 flex justify-between font-bold">
		<a class="btn" href="/">LOGO HERE</a>
		<div class="my-auto flex gap-4">
			{#each routes as route}
				<a
					class={`rounded-xl p-2 ${$page.url.pathname === route.route && `bg-primary-500`}`}
					href={route.route}>{route.name}</a
				>
			{/each}
		</div>
		<LightSwitch />
	</nav>
	<slot />
	<footer class="w-full grid grid-cols-3 p-6">
		<div class="flex">
			<p class="m-auto">logo here</p>
		</div>
		<div>
			<h3 class="h3">Links</h3>
			<ul class="list-disc list-inside">
				<li>
					<a class="anchor" target="_blank" href="https://github.com/nevthereal/webglacier"
						>Repository</a
					>
				</li>
			</ul>
		</div>
		<div>
			<h3 class="h3">Links</h3>
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
