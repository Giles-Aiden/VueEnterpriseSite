<template>
    <div class="center">
        <div>
            <h1> Contact Information </h1>
        </div>
        <div class="icons">
            <h1>Social Media </h1>
            <vs-button icon color="facebook">
                <i class="fa fa-facebook-square"></i>
            </vs-button>

            <vs-button icon color="twitter">
                <i class='fa fa-twitter-square'></i>
            </vs-button>

            <vs-button icon color="linkedin">
                <i class='fa fa-linkedin-square'></i>
            </vs-button>

            <vs-button icon color="google-plus">
                <i class='fa fa-google-plus-square'></i>
            </vs-button>

            <vs-button icon color="pinterest">
                <i class='fa fa-pinterest-square'></i>
            </vs-button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    ul {
        background: red;
    }
    .center {
        display: flex;
        justify-content: space-evenly;
    }
    .icons {
        display: flex;
        float: right;
    }
</style>
    