<script lang="ts">
	import emailjs from '@emailjs/browser';

	function sendEmail(e: any) {
		emailjs.sendForm('service_m5dhn7u', 'template_0ea3ewq', e.target, '0tvqgP1sw-5fQmDto').then(
			(result) => {
				console.log('SUCCESS!', result.text);
				e.target.reset();
			},
			(error) => {
				console.log('FAILED...', error.text);
			}
		);
	}
</script>

<div class="px-8 md:px-16">
	<div class="text-center my-8">
		<h1 class="h1 text-7xl">Contact</h1>
		<h3 class="h3">Contact me via Email</h3>
	</div>

	<form on:submit|preventDefault={sendEmail} class="card p-8 md:max-w-[50%] mx-auto">
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
	</form>
</div>
