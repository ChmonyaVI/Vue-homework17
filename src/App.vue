<template>
    <div class="header">
        <div class="header__container">
            <nav>
                <router-link to="/">{{ $t('menu.home') }}</router-link> |
                <router-link :to="{ name: 'products' }">{{ $t('menu.productPage') }}</router-link> |
                <router-link :to="{ name: 'cart' }">{{ $t('menu.cart') }}</router-link>
            </nav>
            <div class="header__current-lang">
                <span class="header__lang">{{ $t('languages.currentLanguage') }}: {{ currentLanguage }}</span>
                <v-btn class="header__button" density="compact" @click="changeLocale('ru')">RUS</v-btn>
                <v-btn class="header__button" density="compact" @click="changeLocale('en')">ENG</v-btn>
            </div>
            <div class="header__auth auth">
                <div v-if="getUser" class="auth__user">
                    <div class="auth__info">
                        <img :src="getUser.photoURL" class="auth__img" />
                        <div class="auth__name">{{ getUser.displayName }}</div>
                    </div>
                    <v-btn class="auth__button" density="compact" @click="onLogout">{{ $t('login.logOut') }}</v-btn>
                </div>
                <v-btn v-else class="auth__button" density="compact" @click="loginWithGoogle">{{
                    $t('login.logIn')
                }}</v-btn>
            </div>
        </div>
    </div>
    <router-view />
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters('auth', ['getUser']),
        currentLanguage() {
            return this.$i18n.locale === 'ru' ? 'Русский' : 'English'
        },
    },
    created() {
        this.$i18n.locale = localStorage.getItem('lastLanguage') ?? process.env.VUE_APP_I18N_LOCAL
        if (localStorage.getItem('lastLanguage') !== this.$i18n.locale) {
            localStorage.setItem('lastLanguage', this.$i18n.locale)
            // window.dispatchEvent(new Event('storage'))
        }
        const self = this
        window.addEventListener('storage', function () {
            if (self.$i18n.locale !== localStorage.getItem('lastLanguage')) {
                self.$i18n.locale = localStorage.getItem('lastLanguage')
                self.$router.go()
            }
        })
    },
    methods: {
        ...mapActions('auth', ['loginWithGoogle', 'logout']),
        changeLocale(lang) {
            this.$i18n.locale = lang
            localStorage.setItem('lastLanguage', lang)
        },
        onLogout() {
            this.logout()
            this.$router.push({
                name: 'home',
            })
        },
    },
}
</script>

<style lang="scss">
.header {
    // .header__container

    &__container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    // .header__current-lang

    &__current-lang {
    }

    // .header__lang

    &__lang {
    }
    // .header__current-lang

    &__current-lang {
        display: flex;
        gap: 20px;
    }

    // .header__lang

    &__lang {
    }

    // .header__button

    &__button {
    }
    // .header__auth

    &__auth {
    }
}

.auth {
    display: flex;

    // .auth__user

    &__user {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    // .auth__info

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    // .auth__img

    &__img {
        width: 50px;
        height: 50px;
        border-radius: 15px;
    }

    // .auth__name

    &__name {
    }

    // .auth__button

    &__button {
    }
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
