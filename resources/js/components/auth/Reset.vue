<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card" v-if="password_reset_form.token">
                    <div class="card-header">Reset Password</div>

                    <div class="card-body">

                        <form>
                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input v-model="password_reset_form.password" id="password" type="password" class="form-control" name="password" required autocomplete="new-password">

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Passwor</label>

                                <div class="col-md-6">
                                    <input v-model="password_reset_form.password_confirmation" id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button @click.prevent="RESET_PASSWORD" type="submit" class="btn btn-primary">
                                        Reset Password
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card" v-else>
                    <div class="card-header">Error</div>

                    <div class="card-body">
                        <h3 class="text-danger text-center"> Error 404</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "Reset",
        computed: {
            password_reset_form: {
                get() {
                    return this.$store.getters.password_reset_form;
                },
                set(value) {
                    return this.$store.commit('set_password_reset_form', value);
                }
            }
        },
        created(){
            this.FIND_RESET_TOKEN(this.$route.params.token)
            // console.log(this.$route.params.token)
        },
        methods: {
            ...mapActions([
                'FIND_RESET_TOKEN',
                'RESET_PASSWORD'
            ])
        }
    }
</script>

<style scoped>

</style>
