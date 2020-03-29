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
        <modal @ok="updateUser" @cancel="closeEditModal" :show="modal.edit" title="Create User">
            <form>
                <h3>Basic Data</h3>
                <input v-model="form.name" type="text" placeholder="Name" />
                <input v-model="form.username" type="text" placeholder="Username" />
                <input v-model="form.website" type="text" placeholder="Website" />
            </form>
        </modal>

        <!-- confirm delete modal -->
        <modal @ok="destroyUser" @cancel="closeDeleteModal" :show="modal.delete" title="Are you sure?">
            <p>Are you sure you want to delete the user?</p>
        </modal>

        <!-- actions user buttons -->
        <div class="box">
            <button @click="editUser" class="btn bg-blue txt-white">Edit</button>
            <button @click="deleteUser" class="btn bg-red txt-white">Delete</button>
        </div>

    </div>
</template>

<script>
    import Modal from '@/components/Modal';

    export default {


        components: {
            Modal,
        },


        mounted() {
            this.$store.dispatch('users/fetchUser', this.id);
        },


        data() {
            return {

                modal: {
                    edit: false,
                    delete: false,
                },

                form: {
                    name: '',
                    username: '',
                    website: '',
                },
            }
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
            editUser() {
                this.form = this.user;
                this.openEditModal();
            },



            deleteUser() {
                this.openDeleteModal();
            },



            openEditModal() {
                this.modal.edit = true;
            },
            closeEditModal() {
                this.modal.edit = false;
            },



            openDeleteModal() {
                this.modal.delete = true;
            },
            closeDeleteModal() {
                this.modal.delete = false;
            },



        },


    }
</script>
