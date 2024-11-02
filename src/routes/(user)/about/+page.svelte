<script>
    // Initialize formData with default values
    let formData = {
        name: "",
        email: "",
        feedback: ""
    };

    let showThankYou = false; // Controls the display of the thank-you message

    // Handle form submission
    function handleSubmit (event) {
        event.preventDefault();
        console.log("Form Data:", formData);

        // Show thank-you message and reset form data
        showThankYou = true;
        formData = { name: "", email: "", feedback: "" };

        // Hide the thank-you message after 3 seconds
        setTimeout(() => {
            showThankYou = false;
        }, 3000);
    }
</script>

<style>
    form {
        max-width: 600px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-family: Arial, sans-serif;
    }

    label {
        display: block;
        margin-top: 15px;
        font-weight: bold;
    }

    input, textarea {
        color: black;
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
    }

    button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
    }

    button:hover {
        background-color: #45a049;
    }

    .thank-you {
        margin-top: 20px;
        color: #4CAF50;
        font-weight: bold;
        text-align: center;
    }
</style>

<main>
    <!-- Form Structure -->
    <form on:submit={handleSubmit}>
        <h2>Feedback Form</h2>

        <label for="name">Name</label>
        <input
            type="text"
            id="name"
            bind:value={formData.name}
            placeholder="Enter your name"
            required
        />

        <label for="email">Email</label>
        <input
            type="email"
            id="email"
            bind:value={formData.email}
            placeholder="Enter your email"
            required
        />

        <label for="feedback">Feedback</label>
        <textarea
            id="feedback"
            bind:value={formData.feedback}
            rows="5"
            placeholder="Your feedback here"
            required
        ></textarea>

        <button type="submit">Submit</button>
    </form>

    <!-- Thank-You Message -->
    {#if showThankYou}
        <div class="thank-you">Thank you for your feedback!</div>
    {/if}
</main>
