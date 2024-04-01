<script lang="ts">
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import projectModal from '$lib/projectModal.svelte';

	const modalStore = getModalStore();

	const projects: Project[] = [
		{
			name: 'Portfolio',
			description: 'My personal website',
			body: 'Reworked in SvelteKit, now more modern looking and some neat functionalities, like a form, projects page, a fancy navbar and a timeline. Skeleton-UI, the UI Library really helped out there. My portfolio is similar to this page, but in tendency more up to date.',
			stack: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Superforms'],
			ghLink: 'https://github.com/nevthereal/portfolio',
			webLink: 'https://nevillebrem.com',
			icon: 'fa-solid fa-user'
		},
		{
			name: 'Woffe Bricks',
			description: 'An E-commerce Store',
			body: 'An e-commerce-store powered by Stripe. This is my first full-stack-app. Me and a friend wanted to sell instructions for custom LEGO constructions and I coded this store for this purpose. I used Stripe for checkout. An authentication layer is planned.',
			stack: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Stripe'],
			ghLink: 'https://github.com/nevthereal/wolffebricks',
			webLink: 'https://wolffebricks.store',
			icon: 'fa-brands fa-wolf-pack-battalion'
		},
		{
			name: 'BarMates',
			description: 'A landing page for a nutrition business',
			body: 'This the homepage of my (currently) paused business for protein bars. I think it is, in a frontend aspect, my most beautiful project.',
			stack: ['Astro', 'TypeScript', 'TailwindCSS', 'daisy-ui'],
			ghLink: 'https://github.com/nevthereal/barmates-monorepo',
			webLink: 'https://barmates.ch',
			icon: 'fa-solid fa-cookie-bite'
		},
		{
			name: 'Codoodle',
			description: 'A social media-like web application',
			body: "One of my most complex web applications I've built. It is so to say a social media platform. You can post things on there!",
			stack: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Drizzle ORM', 'Lucia Auth', 'Superforms'],
			ghLink: 'https://github.com/nevthereal/codoodle',
			webLink: 'https://codoodle.netlify.app',
			icon: 'fa-solid fa-comments'
		}
	];

	const triggerModal = (projectInfo: Project): void => {
		const modal: ModalSettings = {
			type: 'component',
			component: { ref: projectModal, props: { projectInfo: projectInfo } }
		};
		modalStore.trigger(modal);
	};
</script>

<svelte:head>
	<title>WebGlacier - Projects</title>
	<meta name="description" content="Showcase of Projects by Neville Brem" />
</svelte:head>

<div class="px-8 md:px-16">
	<div class="text-center my-8">
		<h1 class="h1 text-7xl">Projects</h1>
		<h3 class="h3">Showcase of previous work</h3>
	</div>
	<div class="grid w-full lg:grid-cols-3 gap-4 md:gap-16">
		{#each projects as project}
			<div class="card variant-glass-primary p-8">
				<div class="flex justify-between">
					<h1 class="h1">{project.name}</h1>
					<i class={`${project.icon} text-3xl my-auto`} />
				</div>
				<p>{project.description}</p>
				<button
					class="btn variant-ghost-primary border-b-2 border-b-primary-500 mt-4"
					on:click={() => triggerModal(project)}>See more</button
				>
			</div>
		{/each}
	</div>
	<p class="w-[75%] md:w-[50%] my-8 mx-auto">
		This is a selection of my previous work that went to production. You can see all of my
		experiences and work on <a href="https://github.com/nevthereal" class="anchor" target="_blank"
			>GitHub</a
		>.
	</p>
</div>
