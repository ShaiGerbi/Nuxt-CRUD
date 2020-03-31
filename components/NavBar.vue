<template>

    <nav>
        <h1>
            <slot></slot>
        </h1>
    </nav>

</template>

<style lang="scss" scoped>

    nav {
        background-color: #2196f3;
        box-shadow: 0 5px 5px #bdbdbd;
        width: 100%;
        color: white;
        padding: 10px;
        position: fixed;
        top: 0;
    }

</style>
