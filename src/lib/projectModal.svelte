<script lang="ts">
	export let projectInfo: Project;
</script>

<div class="card max-w-[60%] variant-glass-primary p-12 opacity-100">
	<h1 class="h1 mb-2">{projectInfo.name}</h1>
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
		<a href={projectInfo.webLink} class="btn variant-ghost-primary border-b-2 border-b-primary-500"
			>Website</a
		>
		<a href={projectInfo.ghLink} class="btn variant-ghost-primary border-b-2 border-b-primary-500"
			>GitHub</a
		>
	</div>
</div>
