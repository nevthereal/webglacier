<script lang="ts">
	import emailjs from '@emailjs/browser';
	import { z } from 'zod';

	const formSchema = z.object({
		name: z.string().min(3, 'Must be 3 or more characters long'),
		email: z.string().email('Please provide a real email'),
		message: z.string().min(3, 'Your message is too short')
	});

	function sendEmail(e) {
		emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY').then(
			(result) => {
				console.log('SUCCESS!', result.text);
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

	<form on:submit|preventDefault={sendEmail}>
		<label class="label">
			<span>Name</span>
			<input class="input" type="text" name="user_name" />
		</label>
		<label class="label">
			<span>Email</span>
			<input class="input" type="email" name="user_email" />
		</label>
		<label class="label">
			<span>Message</span>
			<textarea class="textarea resize-none" name="message" />
		</label>
		<input type="submit" value="Send" />
	</form>
</div>
