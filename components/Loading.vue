<template>

    <div class="loading"></div>

</template>

<style lang="scss" scoped>

    .loading {
        height: 50px;
        width: 50px;
        border: #35495e dotted 5px;
        border-radius: 50%;

        animation-name: roll;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes roll {
        0% {
            transform: rotate(0);
            border-color: #64b5f6;
        }

        100% {
            transform: rotate(360deg);
            border-color: #ff7043 ;
        }
    }

</style>
