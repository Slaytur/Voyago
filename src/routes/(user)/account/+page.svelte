<script>
    export let data;

    const { user } = data;
</script>
<article class="card card-body tw-container tw-mt-20 tw-mb-5">
    <div class="tw-flex tw-justify-center tw-flex-col tw-items-center tw-space-y-4 tw-p-2">
        <ul class="tw-text-3xl">
            <li>
                <strong>Name:</strong> {user.name}
            </li>
            <li>
                <strong>Email:</strong> {user.email}
            </li>
            <li>
                <strong>ID: </strong> {user.$id}
            </li>
        </ul>
            
        <form method="POST" action="?/logout" class="tw-flex tw-flex-row tw-justify-center tw-space-x-4 tw-items-center"> 
            <a href="changepassword" class="btn tw-bg-accent tw-text-white hover:tw-bg-accentForeground hover:tw-text-white tw-font-bold">Change Password</a>
            <button type="submit" class="btn btn-lg tw-bg-accent tw-text-white hover:tw-bg-accentForeground hover:tw-text-white tw-font-bold">Log out</button>
        </form>
    </div>
</article>

