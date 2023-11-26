<script lang="ts">
	import {
		Modal,
		getModalStore,
		initializeStores,
		type ModalSettings
	} from '@skeletonlabs/skeleton';
	import { _projects } from './+page';
	import projectModal from '$lib/projectModal.svelte';

	initializeStores();
	const modalStore = getModalStore();

	const triggerModal = (projectInfo: Project): void => {
		const modal: ModalSettings = {
			type: 'component',
			component: { ref: projectModal, props: { projectInfo: projectInfo } }
		};
		modalStore.trigger(modal);
	};
</script>

<title>WebGlacier - Projects</title>
<Modal />
<div class="px-16">
	<div class="text-center my-8">
		<h1 class="h1 text-7xl">Projects</h1>
		<h3 class="h3">Showcase of previous work</h3>
	</div>
	<p class="w-[50%] mb-8 mx-auto">
		This is a selection of my previous work that went to production. You can see more of my
		experiences and work on <a href="https://github.com/nevthereal" class="anchor" target="_blank"
			>GitHub</a
		>.
	</p>
	<div class="grid w-full grid-cols-3 gap-16">
		{#each _projects as project}
			<div class="card variant-glass-primary p-8">
				<div class="flex justify-between">
					<h1 class="h1">{project.name}</h1>
					<i class={`${project.icon} text-3xl my-auto`} />
				</div>
				<p>{project.description.substring(0, 30)}...</p>
				<button
					class="btn variant-ghost-primary border-b-2 border-b-primary-500 mt-4"
					on:click={() => triggerModal(project)}>See more</button
				>
			</div>
		{/each}
	</div>
</div>
