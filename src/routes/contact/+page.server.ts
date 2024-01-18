import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { superValidate, setMessage } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const { EMAILJS_KEY } = import.meta.env;

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

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		if (!form.valid) return fail(400, { form });

		const data = {
			service_id: 'service_m5dhn7u',
			template_id: 'template_0ea3ewq',
			accessToken: EMAILJS_KEY,
			user_id: '9KMOedTUZog1ajUbn',
			template_params: {
				user_name: form.data.name,
				user_email: form.data.email,
				message: form.data.message
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
				setMessage(form, 'Something went wrong. Try again later');
			}
			setMessage(form, 'Your email was sent successfully!');
		});

		return { form };
	}
} satisfies Actions;
