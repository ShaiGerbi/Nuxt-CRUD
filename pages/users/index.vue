<template>
    <div class="container">

        <!-- error when users variable is empty -->
        <div v-if="users.length === 0" class="box bg-yellow">
            <p>No users exist</p>
        </div>

        <!-- users loop -->
        <div v-if="users.length !== 0" class="box">
            <ol>
                <li v-for="user of users" :key="user.id">
                    <nuxt-link :to="{ name: 'users-id', params: { id: user.id, }, }">{{ user.username }}</nuxt-link>
                </li>
            </ol>
        </div>

        <!-- user create modal -->
        <!-- create user button -->
    </div>
</template>

<script>
    export default {

        mounted() {
            this.$store.dispatch('users/fetchUsers');
        },

        computed: {
            users() {
                return this.$store.getters['users/getUsers'];
            }
        },

    }
</script>
