<script lang="ts">
    import { Label } from "bits-ui";
    let formData = {
        name: "",
        email: "",
        feedback: ""
    };

    let showThankYou = false;

    // Handle form submission
    function handleSubmit (event) {
        event.preventDefault();
        console.log("Form Data:", formData);

        // Show thank-you message and reset form data
        showThankYou = true;
        formData = { name: "", email: "", feedback: "" };

        setTimeout(() => {
            showThankYou = false;
        }, 3000);
    }
</script>

<style>
    .thank-you {
        margin-top: 20px;
        color: #4CAF50;
        font-weight: bold;
        text-align: center;
    }

    article {
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        padding: 10px;
        width: initial;
        padding-bottom: 7rem;
    }
</style>

<article>
    <form class= "tw-w-1/3 tw-mx-auto tw-mt-20 tw-p-8 tw-bg-secondary tw-rounded-lg" on:submit={handleSubmit}>
        <Label.Root for="name" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Name</Label.Root>
        <input class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
            type="text"
            id="name"
            bind:value={formData.name}
            placeholder="Enter your name"
            required
        />
        <br>
        <Label.Root for="email" class="block mb-2 text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Email</Label.Root>
        <input class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
            type="email"
            id="email"
            bind:value={formData.email}
            placeholder="Enter your email"
            required
        />
        <br>
        <Label.Root for="feedback" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Feedback</Label.Root>
        <textarea class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
            id="feedback"
            bind:value={formData.feedback}
            rows="5"
            placeholder="Your feedback here"
            required
        ></textarea>
        <br>
        <button class="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-w-full sm:tw-w-auto tw-px-5 tw-py-2.5 tw-text-center dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 dark:focus:tw-ring-blue-800">
            Submit
        </button>
    </form>

    {#if showThankYou}
        <div class="thank-you">Thank you for your feedback!</div>
    {/if}
</article>
