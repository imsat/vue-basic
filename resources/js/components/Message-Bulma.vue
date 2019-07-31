<template>
    <div>
        <article class="message container" v-show="isVisible">
            <div class="message-header">
                <p>{{title}}</p>
                <button @click="isVisible = false" class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">{{body}}</div>
        </article>
    </div>
</template>

<script>

    export default {
        name: "Message-Bulma",
        props: ['title', 'body'],
        data(){
            return {
                isVisible: true
            }
        },
        methods: {
            // close(){
            //     this.isVisible = false;
            // }
        }
    }
</script>

<style scoped>

</style>
