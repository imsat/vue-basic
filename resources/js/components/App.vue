<template>
    <div>
        <navbar></navbar>
        <div class="py-4">
            <div class="container">

                <tabs>
                    <tab name="About Us" :selected="true">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                    </tab>
                    <tab name="About Our Culture">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                    </tab>
                    <tab name="About Our Vision">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                    </tab>
                </tabs>
                <!--<ul id="tabs">-->
                    <!--<li><a href="#about">About</a></li>-->
                    <!--<li><a href="#about-us">About Us</a></li>-->
                    <!--<li><a href="#about-culture">About Our Culture</a></li>-->
                <!--</ul>-->
                <!--<div class="tab-panel">-->

                <!--</div>-->
                
                
                <!--<button @click="showModal = true" class="button is-danger text-center">Show Modal</button>-->
                <!--<modal-bulma-->
                    <!--v-if="showModal"-->
                    <!--@close="showModal = false"-->
                <!--&gt;-->
                    <!--<template v-slot:header>-->
                        <!--<h1>Slot Header</h1>-->
                    <!--</template>-->

                    <!--<template v-slot:default>-->
                        <!--<p>A paragraph for the main content.</p>-->
                        <!--<p>And another one.</p>-->
                    <!--</template>-->

                    <!--<template v-slot:footer>-->
                        <!--<p>Here's some contact info</p>-->
                    <!--</template> -->

                    <!--<modal-bulma v-if="showModal" @close="showModal = false" >-->
                        <!--<header>-->
                            <!--<h1>Here might be a page title</h1>-->
                        <!--</header>-->
                        <!--<main>-->
                            <!--<p>A paragraph for the main content.</p>-->
                            <!--<p>And another one.</p>-->
                        <!--</main>-->
                        <!--<footer>-->
                            <!--<p>Here's some contact info</p>-->
                        <!--</footer>-->
                    <!--</modal-bulma>-->


            </div>
            <!--<message-bulma title="Hello World"-->
                <!--body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi architecto-->
                <!--aspernatur consequuntur, cupiditate dolorum eius et eveniet fugiat impedit iure non numquam-->
                <!--pariatur quos voluptas. Corporis itaque modi repudiandae."-->
            <!--&gt;</message-bulma>-->

            <!--<task>Go to the store</task>-->
            <!--<task>Go to the bank</task>-->
            <!--<task>Go to the bike</task>-->
            <!--<task>Go to the car</task>-->

            <!--<task-list></task-list>-->


        <router-view></router-view>


        </div>
    </div>

</template>

<script>

    import Navbar from './Navbar'
    import MessageBulma from './Message-Bulma'
    import ModalBulma from './Modal-Bulma'
    export default {
        name: "App",
        components: {
            Navbar,
            MessageBulma,
            ModalBulma,
        },
        data(){
            return {
                showModal: false
            }
        },

    }
</script>
