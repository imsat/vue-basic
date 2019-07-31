<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">

                        <form method="POST">
                            <span class="text-danger text-center" v-if="isLoading">Loading...</span>
                            <div class="alert alert-danger text-center" role="alert" v-if="errors[0]">
                                {{errors}}
                                <!--<button type="button" class="close" data-dismiss="alert" aria-label="Close">-->
                                <!--<span aria-hidden="true">&times;</span>-->
                                <!--</button>-->
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input id="email" v-model="login_form.email" type="email" class="form-control" name="email" autocomplete="email" autofocus>

                                    <!--<span class="invalid-feedback" role="alert">-->
                                    <!--<strong>error message</strong>-->
                                    <!--</span>-->
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input id="password" v-model="login_form.password" type="password" class="form-control" name="password"  autocomplete="current-password">
                                    <!--<span class="invalid-feedback" role="alert">-->
                                    <!--<strong>error message</strong>-->
                                    <!--</span>-->
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                        <label class="form-check-label" for="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button  @click.prevent="LOGIN" type="submit" class="btn btn-primary">
                                        Login
                                    </button>

                                    <router-link to="/forgot" class="btn btn-link" >
                                        Forgot Your Password?
                                    </router-link>
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

        name: "Login",
        data() {
            return {
                type: 'password'
            }
        },
        computed: {
            ...mapGetters([
                'errors',
                'isLoading',
            ]),
            login_form: {
                get(){
                    return this.$store.getters.login_form
                },
                set(value){
                    this.$store.commit('update_login_form', value)
                }
            }
        },
        methods: {
            ...mapActions([
                'LOGIN'
            ]),
            seePassword(){
                if(this.type === 'password'){
                    this.type = 'text'
                }else{
                    this.type = 'password'
                }
            },
        }

    }
</script>

<style scoped>

</style>
