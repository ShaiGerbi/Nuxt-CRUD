<template>
    <div class="container">

        <!-- user basic data -->
        <div class="box">
            <h3>Basic Data</h3>
            <p>Name: {{ user.name }}</p>
            <p>Username: {{ user.username }}</p>
            <p>Website: <a :href="user.website">{{ user.website }}</a></p>
        </div>

        <!-- user communication data-->
        <div class="box">
            <h3>Communication</h3>
            <p>Email: <a :href="`mailto:${user.email}`">{{ user.email }}</a></p>
            <p>Phone: <a :href="`tel:${user.phone}`">{{ user.phone }}</a></p>
        </div>

        <!-- user edit modal -->
        <!-- confirm delete modal -->
        <!-- actions user buttons -->
    </div>
</template>

<script>
    export default {

        mounted() {
            this.$store.dispatch('users/fetchUser', this.id);
        },

        computed: {
            user() {
                return this.$store.getters['users/getUser'];
            }
        },

        data() {
            return {
                id: this.$route.params.id,
            }
        },

    }
</script>
