<template>
    <div>
        <navbar></navbar>
        <div class="py-4">
        <router-view></router-view>
        </div>
    </div>

</template>

<script>

    import Navbar from './Navbar'
    export default {
        name: "App",
        components: {
            Navbar
        }

    }
</script>
