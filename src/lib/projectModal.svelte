<script lang="ts">
	export let projectInfo: Project;
</script>

<div class="card max-w-[60%] variant-glass-primary p-12 opacity-100">
	<div class="flex justify-between mb-2">
		<h1 class="h1">{projectInfo.name}</h1>
		<i class="fa-solid fa-xmark text-2xl btn-icon cursor-pointer hidden md:block" />
	</div>
	<div class="mb-2">
		<h3 class="h3">About this project</h3>
		<p>{projectInfo.description}</p>
	</div>
	<div class="mb-2">
		<h3 class="h3">Tech Stack</h3>
		<ul class="list-disc list-inside">
			{#each projectInfo.stack as skill}
				<li>{skill}</li>
			{/each}
		</ul>
	</div>
	<div class="flex gap-2 mt-4">
		<a
			href={projectInfo.webLink}
			target="_blank"
			class="btn variant-ghost-primary border-b-2 border-b-primary-500">Website</a
		>
		<a
			href={projectInfo.ghLink}
			target="_blank"
			class="btn variant-ghost-primary border-b-2 border-b-primary-500">GitHub</a
		>
	</div>
</div>
