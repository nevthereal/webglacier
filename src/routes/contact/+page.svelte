<script lang="ts">
	import emailjs from '@emailjs/browser';

	interface SubmitMessage {
		message: string;
		color: 'red' | 'green';
	}

	let submitMsg: SubmitMessage;

	function sendEmail(e: any) {
		emailjs.sendForm('service_m5dhn7u', 'template_0ea3ewq', e.target, '0tvqgP1sw-5fQmDto').then(
			(result) => {
				console.log('SUCCESS!', result.text);
				submitMsg = { message: 'Your Email Was successfully sent', color: 'green' };
				e.target.reset();
			},
			(error) => {
				submitMsg = {
					message: `Something went wrong with your submission... (Error: ${error})`,
					color: 'red'
				};
			}
		);
	}
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
		<div class="my-8">
			<h2 class="h2">Contact me via Email</h2>
			<form on:submit|preventDefault={sendEmail} class="card p-8 my-2">
				<label class="label py-2">
					<span>Name</span>
					<input class="input" type="text" name="user_name" />
				</label>
				<label class="label py-2">
					<span>Email</span>
					<input class="input" type="email" name="user_email" />
				</label>
				<label class="label py-2">
					<span>Message</span>
					<textarea class="textarea resize-none" name="message" />
				</label>
				<input type="submit" value="Send" class="btn variant-ghost-primary" />
				{#if submitMsg}
					<p class={`text-${submitMsg.color}-500`}>{submitMsg.message}</p>
				{/if}
			</form>
		</div>
	</div>
</div>
