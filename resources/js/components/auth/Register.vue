<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Register</div>

                    <div class="card-body">
                        <form>
                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                                <div class="col-md-6">
                                    <input v-model="register_form.name" id="name" type="text" class="form-control" name="name" autocomplete="name" autofocus>

                                    <!--<span class="invalid-feedback" role="alert">-->
                                    <!--<strong>error message</strong>-->
                                    <!--</span>-->
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input v-model="register_form.email" id="email" type="email" class="form-control" name="email" autocomplete="email" autofocus>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input v-model="register_form.password" id="password" type="password" class="form-control" name="password"  autocomplete="current-password">

                                    <!--<span class="invalid-feedback" role="alert">-->
                                    <!--<strong>error message</strong>-->
                                    <!--</span>-->
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                <div class="col-md-6">
                                    <input v-model="register_form.password_confirmation" id="password-confirm" type="password" class="form-control" name="password_confirmation"  autocomplete="new-password">

                                    <!--<span class="invalid-feedback" role="alert">-->
                                    <!--<strong>error message</strong>-->
                                    <!--</span>-->
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button @click.prevent="REGISTER" type="submit" class="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "Register",
        computed: {
            // ...mapGetters([
            //     ''
            // ]),
            register_form: {
                get(){
                    return this.$store.getters.register_form
                }
            }
        },
        methods: {
            ...mapActions([
                'REGISTER'
            ])
        }
    }
</script>

<style scoped>

</style>
