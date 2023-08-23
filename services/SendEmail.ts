import emailjs from '@emailjs/browser';

export async function send(values :any)  : Promise<Boolean> {
    const config = useRuntimeConfig();


    let result =  await emailjs.send(config.public.emailjs_api_service_id, config.public.emailjs_api_template_id, values, config.public.emailjs_api_public_key);
    return result.status === 200;
}