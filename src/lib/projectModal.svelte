<script lang="ts">
	export let projectInfo: Project;
</script>

<div class="w-[50%] variant-ghost-primary p-6">
	<h1 class="h1">{projectInfo.name}</h1>
	<p>{projectInfo.description}</p>
	<div class="flex gap-2 mt-2">
		<a href={projectInfo.webLink} class="btn variant-ghost-primary border-b-2 border-b-primary-500"
			>Website</a
		>
		<a href={projectInfo.ghLink} class="btn variant-ghost-primary border-b-2 border-b-primary-500"
			>GitHub</a
		>
	</div>
	<ul>
		{#each projectInfo.stack as skill}
			<li>{skill}</li>
		{/each}
	</ul>
</div>
