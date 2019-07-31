<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Reset Password</div>

                    <div class="card-body">

                        <form>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input v-model="password_reset_email.email" id="email" type="email" class="form-control" name="email"  required autocomplete="email" autofocus>

                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button @click.prevent="CREATE_RESET_PASSWORD" type="submit" class="btn btn-primary">
                                        Send Password Reset Link
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
        name: "Forgot",
        computed: {
            password_reset_email: {
                get() {
                    return this.$store.getters.password_reset_email
                },
                set(value) {
                    return this.$store.commit('set_password_reset_email', value)
                }
            }
        },
        methods: {
            ...mapActions([
                'CREATE_RESET_PASSWORD'
            ])
        }
    }
</script>

<style scoped>

</style>
