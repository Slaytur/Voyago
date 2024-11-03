  <!-- <ul class="pt-14">
    <li>
      <strong>Email:</strong> {user.email}
    </li>
    <li>
        <strong>Name:</strong> {user.name}
    </li>
    <li>
        <strong>ID: </strong> {user.$id}
    </li>
  </ul>

  <form method="post">
    <button type="submit">Log out</button>
  </form> -->

<script lang="ts">
    export let data;

    const { user, documents } = data;

</script>

<style>
    .sele {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 80px;
    }
</style>
<section class="flex justify-center space-x-6 pt-14 flex-col">

    <a href='/create'>
        create
    </a>

    <h2 class="pt-8">Itineraries: </h2>
    <ul class="my-8 space-y-4">
        {#if documents && documents.length > 0}
            {#each documents as document}
                <li class="pt-2">
                    <a href={`/itineraries/${document.$id}`}><button class="text-white bg-[#A295CB]  focus:ring-4 focus:outline-none  font-medium rounded-full text-sm w-full sm:w-auto px-10 py-2.5 text-center" >{document.Name}</button></a>
                </li>
            {/each}
        {:else}
            <li>No documents found.</li>
        {/if}
    </ul>
</section>
