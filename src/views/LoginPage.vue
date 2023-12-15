<template>
    <div class="login-page__container">
        <div class="login-page__title"></div>
        <v-btn class="auth__button" density="compact" @click="onLogin">{{ $t('login.logIn') }}</v-btn>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'LoginPage',
    methods: {
        ...mapActions('auth', ['loginWithGoogle']),
        async onLogin() {
            try {
                await this.loginWithGoogle()
                this.$router.push({
                    name: 'home',
                })
            } catch (error) {
                alert(error.message)
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>
