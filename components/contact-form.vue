<script lang="ts" setup>
import * as Yup from "yup";
import {configure} from "vee-validate";
import {send } from "~/services/SendEmail";
import TextInput from "./TextInput.vue";

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true,
});

const schema = Yup.object({
  email: Yup.string().required().email('enter a valid e-mail').max(255).label("Email Address"),
  phoneNumber: Yup.string().required('a phone number is required').max(255).label("Phone Number"),
  firstName: Yup.string().required('Firstname is required').max(75).label("Firstname"),
  lastName: Yup.string().required('Lastname is required').max(75).label("Lastname"),
  message: Yup.string().required('a message is required').max(1500).label("a message")
});
const sendEmail = (values, actions) => {
  console.log(values);
  send(values).then(() => {
    actions.resetForm();
  })
}
const initialValues = {email: "", firstName: "", lastName: "", message: "" , phoneNumber:""};
</script>

<template>
  <Form ref="contact"  class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        :validation-schema="schema"
        :initial-values="initialValues"
        v-slot="{ meta: formMeta, errors: formErrors }"
        @submit="sendEmail"
  >
    <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
          <div class="mt-2.5">
            <TextInput type="text"
                   name="firstName" id="first_name"
                   autocomplete="given-name"
            />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
          <div class="mt-2.5">
            <TextInput type="text"  name="lastName" id="last_name" autocomplete="family-name" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <TextInput type="email" name="email" id="email"
                   autocomplete="email"

            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
          <div class="mt-2.5">
            <TextInput type="tel"  name="phoneNumber" id="phone_number" autocomplete="tel"  />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
          <div class="mt-2.5">
            <TextArea name="message" id="message" rows=4 class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div class="mt-8 flex justify-end">
        <button type="submit" class="rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                :class="{ 'text-green-600 dark:text-green-500': formMeta.valid }"
                :disabled="!formMeta.valid"
        >Send message</button>
      </div>

      <template v-if="Object.keys(formErrors).length">
        <p class="text-red-600 dark:text-red-500">
          Please correct the following errors:
        </p>
        <div class="clear">
          <ul>
            <li
                v-for="(message, field) in formErrors"
                :key="field"
                class="text-red-600 dark:text-red-500"
            >
              {{ message }}
            </li>
          </ul>
        </div>

      </template>
    </div>
  </Form>
</template>

<style scoped></style>
