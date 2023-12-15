<template>
    <div class="cart-view__container">
        <!-- <template v-if="getUser"> -->
        <div class="cart-view__block">
            <h1 class="cart-view__title-main">{{ $t('cart.cartTitle') }}</h1>
            <cart-item v-for="item in getCart" :key="item.id" :item="item" />
        </div>
        <div class="total">{{ $t('cart.total') }}: {{ getTotalCartPrice }} UAH</div>
        <!-- </template> -->
        <div v-if="getCart.length == 0" class="empty-container">{{ $t('cart.empty') }}</div>
        <div class="cart-btn">
            <v-btn variant="outlined" @click="onBackBtnAction">{{ $t('cart.back') }}</v-btn>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from '@/components/CartItem.vue'

export default {
    name: 'CartView',
    components: {
        CartItem,
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters('cart', ['getCart', 'getTotalCartPrice']),
    },
    methods: {
        onBackBtnAction() {
            this.$router.push({
                name: 'products',
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
