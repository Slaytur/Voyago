<script>
    export let data;

    const { user } = data;
</script>

<ul class="tw-pt-14">
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

<form method="POST">
    <button type="submit">Log out</button>
</form>
