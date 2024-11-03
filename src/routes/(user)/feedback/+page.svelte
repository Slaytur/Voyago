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
    <form class= "w-1/3 mx-auto mt-20 p-8 bg-secondary rounded-lg" on:submit={handleSubmit}>
        <Label.Root for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</Label.Root>
        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id="name"
            bind:value={formData.name}
            placeholder="Enter your name"
            required
        />
        <br>
        <Label.Root for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</Label.Root>
        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="email"
            id="email"
            bind:value={formData.email}
            placeholder="Enter your email"
            required
        />
        <br>
        <Label.Root for="feedback" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Feedback</Label.Root>
        <textarea class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="feedback"
            bind:value={formData.feedback}
            rows="5"
            placeholder="Your feedback here"
            required
        ></textarea>
        <br>
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
        </button>
    </form>

    {#if showThankYou}
        <div class="thank-you">Thank you for your feedback!</div>
    {/if}
</article>
