<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	export let data: PageData;

	const { form, enhance, errors, message } = superForm(data.form, {
		resetForm: true
	});
</script>

<svelte:head>
	<title>WebGlacier - Contact</title>
	<meta name="description" content="Contact Webglacier Via Email" />
</svelte:head>

<div class="px-8 md:px-16">
	<div class="text-center my-8">
		<h1 class="h1 text-7xl">Contact</h1>
		<h3 class="h3">Hit me up</h3>
	</div>
	<div class="md:max-w-[50%] mx-auto">
		<div class="my-8">
			<h2 class="h2 my-2">Find me here</h2>
			<div class="grid md:grid-cols-2 gap-4 my-2">
				<div class="card p-4">
					<h1 class="h1">Fiverr</h1>
					<p>
						Hire me on Fiverr: <a href="https://fiverr.com/nevthereal" class="anchor">@nevthereal</a
						>
					</p>
				</div>
				<div class="card p-4">
					<h1 class="h1">𝕏</h1>
					<p>
						See my posts on X (formerly twitter): <a href="https://x.com/BremNeville" class="anchor"
							>@BremNeville</a
						>
					</p>
				</div>
				<div class="card p-4">
					<h1 class="h1">GitHub</h1>
					<p>
						Find me on GitHub: <a href="https://github.com/nevthereal" class="anchor">nevthereal</a>
					</p>
				</div>
				<div class="card p-4">
					<h1 class="h1">Instagram</h1>
					<p>
						Write me a DM on Instagram: <a href="https://instagram.com/nevillebrem" class="anchor"
							>@nevillebrem</a
						>
					</p>
				</div>
			</div>
		</div>
	</div>
	<form method="POST" use:enhance class="xl:w-[50%] mx-auto flex flex-col gap-4">
		<div class="flex flex-col gap-2">
			<label for="name">Name</label>
			<input bind:value={$form.name} class="input" type="text" name="name" />
			{#if $errors.name}
				<span class="text-error-500">{$errors.name}</span>
			{/if}
		</div>
		<div class="flex flex-col gap-2">
			<label for="email">Email</label>
			<input bind:value={$form.email} class="input" type="email" name="email" />
			{#if $errors.email}
				<span class="text-error-500">{$errors.email}</span>
			{/if}
		</div>
		<div class="flex flex-col gap-2">
			<label for="message">Message</label>
			<textarea bind:value={$form.message} class="textarea resize-none" name="message" />
			{#if $errors.message}
				<span class="text-error-500">{$errors.message}</span>
			{/if}
		</div>
		<div class="flex flex-col gap-2">
			<button class="btn variant-ghost-primary border-b-2 border-b-primary-500 mx-auto"
				>Send!</button
			>
			{#if $message}
				<span class="text-warning-500">{$message}</span>
			{/if}
		</div>
	</form>
</div>
