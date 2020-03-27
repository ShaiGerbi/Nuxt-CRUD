<template>
    <div class="modal" :class="{hide: !show}">

        <div v-if="title" class="header">
            <h4>{{ title }}</h4>
        </div>

        <div class="content">
            <slot></slot>
        </div>

        <div class="footer">
            <button @click="ok" class="btn bg-blue txt-white">OK</button>
            <button @click="cancel" class="btn bg-red txt-white">Cancel</button>
        </div>

    </div>
</template>

<script>
    export default {

        props: {
            title: String,
            show: Boolean,
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

<style scoped>
    .modal {
        background-color: #f5f5f5;
        border-radius: 3px;
        box-shadow: #7F828B 5px 5px 10px;

        height: 300px;
        width: 500px;
        max-height: 80%;
        max-width: 80%;

        position: fixed;
        top: 20%;
        left: 50%;
        transform: translate(-50%,-20%);
    }

    .header {
        background-color: #78909c;
        width: 100%;
        padding: 10px;
        border-radius: 3px 3px 0 0;
    }

    .content {
        overflow-y: auto;
        padding: 10px;
    }

    .footer {
        width: 100%;
        padding: 10px;
        position: absolute;
        bottom: 0;
        border-radius: 0 0 3px 3px;
    }

    .hide {
        display: none;
    }
</style>
