<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import {required, email, maxLength} from '@vuelidate/validators';

import  {send} from '~/services/SendContactForm';
const formData = reactive({
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  message: ''
});


const rules = computed(() => {
  return {
    email: { required, email },
    lastName: { required, maxLength: maxLength(60) },
    firstName: { required, maxLength: maxLength(60) },
    message: { required, maxLength: maxLength(1500) },
    phoneNumber: { required, maxLength: maxLength(20) }
  };
});

const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
  await v$.value.$validate();
  if (!v$.value.$error) {
    console.log('form is valid');
    await send(formData);
  }
};
</script>

<template>
  <form ref="contact"  @submit.prevent="submitForm" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"

  >
    <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
          <div class="mt-2.5">
            <input type="text" v-model="formData.firstName"
                   name="firstName" id="first_name"
                   autocomplete="given-name"
                   class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
          <div class="mt-2.5">
            <input type="text" v-model="formData.lastName" name="lastName" id="last_name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <input type="email" v-model="formData.email" name="email" id="email"
                   autocomplete="email"
                   class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                   :class="{
    'border-red-500 focus:border-red-500': v$.email.$error,
    'border-[#42d392] ': !v$.email.$invalid,
  }"
                   @change="v$.email.$touch"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
          <div class="mt-2.5">
            <input type="tel" v-model="formData.phoneNumber" name="phoneNumber" id="phone_number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
          <div class="mt-2.5">
            <textarea name="message" v-model="formData.message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div class="mt-8 flex justify-end">
        <button type="submit" class="rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Send message</button>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
