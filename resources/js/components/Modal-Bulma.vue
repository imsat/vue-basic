<template>
    <div>
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <header>
                        <slot name="header"></slot>
                    </header>
                    <main>
                        <slot></slot>
                    </main>
                    <footer>
                        <slot name="footer"></slot>
                    </footer>
                </div>
            </div>
            <button @click="$emit('close')" class="modal-close is-large" aria-label="close"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal-Bulma",
        // props: ['body'],
        data(){
            return {
            }
        }
    }
</script>

<style scoped>

</style>
