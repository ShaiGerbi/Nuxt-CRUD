<template>

    <div class="parent">
        <div class="modal">

            <div v-if="title" class="header">
                <h4>{{ title }}</h4>
            </div>

            <div class="content">
                <slot></slot>
            </div>

            <div class="footer">
                <button @click="cancel" class="btn bg-red txt-white">Cancel</button>
                <button @click="ok" class="btn bg-blue txt-white">OK</button>
            </div>

        </div>
    </div>

</template>

<script>
    export default {

        props: {
            title: String,
        },

        methods: {
            ok() {
                this.$emit('ok');
            },

            cancel() {
                this.$emit('cancel');
            },
        }

    }
</script>

<style lang="scss" scoped>

    .parent {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;

        max-width: 80%;
        max-height: 80%;

        position: fixed;
        top: 10%;

        background-color: #e3e3e3;
        box-shadow: 5px 5px 5px #bcbcbc;
        border-radius: 3px;
    }

    .header {
        padding: 10px;
        border-radius: 3px 3px 0 0;
        background-color: #d9d9d9;
    }

    .content {
        padding: 10px;
        overflow-y: auto;
    }

    .footer {
        display: flex;
        justify-content: flex-end;

        padding: 10px;
        border-radius: 0 0 3px 3px;

        .btn {
            margin-left: 10px;
        }
    }

</style>
