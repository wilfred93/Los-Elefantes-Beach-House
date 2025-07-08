<template>
  <section
    class="bg-[url('/public/images/palm-trees-bg.png')] bg-cover bg-center py-6 md:py-15"
  >
    <div class="mx-auto max-w-7xl p-4 lg:px-8">
      <h1 class="primary--title my-0">Contact</h1>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center text-center"
      >
        <div class="bg-elefantes-green text-elefantes-yellow rounded-lg p-4">
          <h2 class="secondary--title">Email</h2>
          <p>wilfred.lazaro@gmail.com</p>
        </div>
        <div class="bg-elefantes-green text-elefantes-yellow rounded-lg p-4">
          <h2 class="secondary--title">Email</h2>
          <p>wilfred.lazaro@gmail.com</p>
        </div>
        <div class="bg-elefantes-green text-elefantes-yellow rounded-lg p-4">
          <h2 class="secondary--title">Email</h2>
          <p>wilfred.lazaro@gmail.com</p>
        </div>
      </div>
      <div
        class="mx-auto max-w-xl grid grid-cols-1 bg-elefantes-green gap-x-8 gap-y-1 sm:grid-cols-2 p-4 rounded-lg mt-12 text-elefantes-yellow"
      >
        <div class="min-h-[98px]">
          <label
            for="first-name"
            class="block text-sm/6 font-semibold text-elefantes-yellow"
            >First name *</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              required
              v-model="inputName"
              @input="validateField('name', $event)"
              @blur="validateField('name', $event)"
              :class="[
                'block w-full rounded-md bg-white px-3.5 py-2 text-base text-elefantes-green outline outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2',
                validation.name.isValid
                  ? 'outline-gray-300 focus:outline-indigo-600'
                  : 'outline-red-500 focus:outline-red-500',
              ]"
            />
          </div>
          <div
            v-if="!validation.name.isValid && validation.name.message"
            class="mt-1 text-sm text-red-300"
          >
            {{ validation.name.message }}
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm/6 font-semibold text-elefantes-yellow"
            >Email *</label
          >
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              required
              v-model="inputEmail"
              @input="validateField('email', $event)"
              @blur="validateField('email', $event)"
              :class="[
                'text-elefantes-green block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2',
                validation.email.isValid
                  ? 'outline-gray-300 focus:outline-indigo-600'
                  : 'outline-red-500 focus:outline-red-500',
              ]"
            />
          </div>
          <div
            v-if="!validation.email.isValid && validation.email.message"
            class="mt-1 text-sm text-red-300"
          >
            {{ validation.email.message }}
          </div>
        </div>

        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm/6 font-semibold text-elefantes-yellow"
            >Message *</label
          >
          <div class="mt-2.5">
            <textarea
              required
              name="message"
              id="message"
              rows="4"
              v-model="inputMessage"
              @input="validateField('message', $event)"
              @blur="validateField('message', $event)"
              :class="[
                'block w-full rounded-md bg-white px-3.5 py-2 text-base text-elefantes-green outline outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2',
                validation.message.isValid
                  ? 'outline-gray-300 focus:outline-indigo-600'
                  : 'outline-red-500 focus:outline-red-500',
              ]"
            ></textarea>
          </div>
          <div
            v-if="!validation.message.isValid && validation.message.message"
            class="mt-1 text-sm text-red-300"
          >
            {{ validation.message.message }}
          </div>
        </div>
        <div class="my-4 sm:col-span-2">
          <button
            @click="onSubmitContactForm"
            :disabled="!isFormValid || isSubmitting"
            :class="[
              'block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
              isFormValid && !isSubmitting
                ? 'bg-indigo-600 hover:bg-indigo-500'
                : 'bg-gray-400 cursor-not-allowed',
            ]"
          >
            <span v-if="isSubmitting">Sending...</span>
            <span v-else>Let's talk</span>
          </button>
        </div>

        <!-- Success/Error Messages -->
        <div v-if="submitMessage" class="sm:col-span-2">
          <div
            :class="[
              'p-4 rounded-md text-sm text-center',
              submitStatus === 'success'
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-red-100 text-red-800 border border-red-200',
            ]"
          >
            {{ submitMessage }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead } from "#imports";
import { sendContactMessage } from "~/api/apiFunctions";

definePageMeta({
  headerTheme: "dark",
  mainClass: "py-0",
});
useHead({
  title: "Contact - Los Elefantes", // Consider localizing this too if needed
  bodyAttrs: {
    class: "bg-elefantes-yellow",
  },
});

const inputName = ref("");
const inputEmail = ref("");
const inputMessage = ref("");

// Submission state
const isSubmitting = ref(false);
const submitStatus = ref<"idle" | "success" | "error">("idle");
const submitMessage = ref("");

// Validation state
const validation = reactive({
  name: {
    isValid: true,
    message: "",
  },
  email: {
    isValid: true,
    message: "",
  },
  message: {
    isValid: true,
    message: "",
  },
});

// Check if form is valid
const isFormValid = computed(() => {
  return (
    validation.name.isValid &&
    validation.email.isValid &&
    validation.message.isValid &&
    inputName.value.trim() !== "" &&
    inputEmail.value.trim() !== "" &&
    inputMessage.value.trim() !== ""
  );
});

// Validation function
const validateField = (fieldName: string, event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  const value = target.value.trim();

  switch (fieldName) {
    case "name":
      if (value === "") {
        validation.name.isValid = false;
        validation.name.message = "First name is required";
      } else if (value.length < 3) {
        validation.name.isValid = false;
        validation.name.message = "Must be at least 3 letters";
      } else {
        validation.name.isValid = true;
        validation.name.message = "";
      }
      break;

    case "email":
      if (value === "") {
        validation.email.isValid = false;
        validation.email.message = "Email is required";
      } else if (!target.validity.valid) {
        validation.email.isValid = false;
        validation.email.message = "Please enter a valid email address";
      } else {
        validation.email.isValid = true;
        validation.email.message = "";
      }
      break;

    case "message":
      if (value === "") {
        validation.message.isValid = false;
        validation.message.message = "Message is required";
      } else {
        validation.message.isValid = true;
        validation.message.message = "";
      }
      break;
  }
};

const onSubmitContactForm = async () => {
  // Validate all fields before submission
  const nameEvent = {
    target: {
      value: inputName.value,
      validity: { valid: inputName.value.trim() !== "" },
    },
  };
  const emailEvent = {
    target: {
      value: inputEmail.value,
      validity: { valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value) },
    },
  };
  const messageEvent = {
    target: {
      value: inputMessage.value,
      validity: { valid: inputMessage.value.trim() !== "" },
    },
  };

  validateField("name", nameEvent as any);
  validateField("email", emailEvent as any);
  validateField("message", messageEvent as any);

  if (!isFormValid.value) {
    return;
  }

  // Reset submission state
  isSubmitting.value = true;
  submitStatus.value = "idle";
  submitMessage.value = "";

  try {
    const response = await sendContactMessage({
      name: inputName.value,
      email: inputEmail.value,
      message: inputMessage.value,
    });

    // Success
    submitStatus.value = "success";
    submitMessage.value = "Thank you! Your message has been sent successfully.";

    // Reset form
    inputName.value = "";
    inputEmail.value = "";
    inputMessage.value = "";
  } catch (error) {
    // Error handling
    submitStatus.value = "error";
    submitMessage.value =
      "Sorry, there was an error sending your message. Please try again.";
    console.error("Contact form submission error:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
