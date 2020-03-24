<template>
    <div class="container">

        <div v-if="users.length === 0" class="box bg-yellow">
            <p>No users exist</p>
        </div>

        <div v-if="users.length !== 0" class="box">
            <ol>
                <li v-for="user of users" :key="user.id">
                    <nuxt-link :to="{ name: 'users-id', params: { id: user.id, }, }">{{ user.username }}</nuxt-link>
                </li>
            </ol>
        </div>

    </div>
</template>

<script>
    export default {

    }
</script>
