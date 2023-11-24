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

<div>
	{#each _projects as project}
		<button on:click={() => triggerModal(project)}>{project.name}</button>
	{/each}
</div>
