import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { superValidate, setMessage } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import { EMAILJS_KEY } from '$env/static/private';
import { RateLimiter } from 'sveltekit-rate-limiter/server';

const schema = z
	.object({
		name: z.string().min(3),
		email: z.string().email(),
		message: z.string().min(10)
	})
	.required();

export const load: PageServerLoad = async () => {
	const form = await superValidate(schema);
	return { form };
};

const limiter = new RateLimiter({
	IP: [5, 'h'],
	IPUA: [10, 'h']
});

export const actions = {
	default: async (e) => {
		const form = await superValidate(e.request, schema);
		if (!form.valid) return fail(400, { form });
		if (await limiter.isLimited(e)) return setMessage(form, 'Sent to many requests');

		const data = {
			service_id: 'service_m5dhn7u',
			template_id: 'template_0ea3ewq',
			accessToken: EMAILJS_KEY,
			user_id: '9KMOedTUZog1ajUbn',
			template_params: {
				user_name: form.data.name,
				user_email: form.data.email,
				message: form.data.message,
				site: 'webglacier'
			}
		};

		await fetch('https://api.emailjs.com/api/v1.0/email/send', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json'
			}
		}).then(({ ok }) => {
			if (!ok) {
				return setMessage(form, 'Something went wrong. Try again later');
			}
			return setMessage(form, 'Your email was sent successfully!');
		});
	}
} satisfies Actions;
