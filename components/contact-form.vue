<script lang="ts" setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import {send} from "~/services/SendEmail";


const schema = yup.object({
  email: yup.string().required('Valid email address is required').email('Provide a valid email address'),
  firstName: yup.string().required('First name is required').max(65, 'First name must be less than 65 characters'),
  lastName: yup.string().required('Lastname is required').max(65, 'Last name must be less than 65 characters'),
  phoneNumber: yup.string().required('Phone number is required').max(18, 'Phone number must be less than 18 characters'),
  message: yup.string().required('Provide a brief message').max(1500, 'Message must be less than 1500 characters'),
});


const {meta, errors, handleSubmit,validate,  defineInputBinds, values, resetForm } = useForm<Contact>({
  validationSchema: schema,
});

const email = defineInputBinds('email');
const firstName = defineInputBinds('firstName', {validateOnInput: true});
const lastName = defineInputBinds('lastName', {validateOnInput: true});
const phoneNumber = defineInputBinds('phoneNumber', {validateOnInput: true});
const message = defineInputBinds('message', { validateOnInput: true});


async function onSubmit() {
  if ((await validate()).valid) {

    let result = await send(values);
    if (result) {
       resetForm();
    }

  }
}
</script>

<template>
  <form @submit="handleSubmit" @submit.prevent="default"   class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
    <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="firstName" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
          <div class="mt-2.5">
            <input type="text"
                   v-bind="firstName"
                   name="firstName" id="firstName"
                   autocomplete="given-name"
            />
            <span class="text-red-500 text-xs">{{errors.firstName}}</span>
          </div>
        </div>
        <div>
          <label for="lastName" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
          <div class="mt-2.5">
            <input type="text" v-bind="lastName"  name="lastName" id="last_name" autocomplete="family-name" />
            <span class="text-red-500 text-xs">{{errors.lastName}}</span>          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <input type="email" v-bind="email" name="email" id="email"
                   autocomplete="email" />
            <span class="text-red-500 text-xs">{{errors.email}}</span>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phoneNumber" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
          <div class="mt-2.5">
            <input type="tel" v-bind="phoneNumber"  name="phoneNumber" id="phone_number" autocomplete="tel" />
            <span class="text-red-500 text-xs ">{{errors.phoneNumber}}</span>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
          <div class="mt-2.5">
            <textarea name="message" v-bind="message" id="message" rows=4 class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
            <span class="text-red-500 text-xs">{{errors.message}}</span>
          </div>
        </div>
      </div>
      <div class="mt-8 flex justify-end">
        <button type="submit" @click="onSubmit" :disabled="!meta.touched" class="rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >Send message</button>
      </div>
    </div>
  </form>

</template>


