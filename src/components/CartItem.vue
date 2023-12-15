<template>
    <div class="cart__wrapper">
        <div class="cart__container">
            <div class="cart__block">
                <div class="cart__image">
                    <img :src="item.image" class="cart__img" />
                </div>
                <div class="cart__info">
                    <div class="cart__item-title">{{ item.name.en }}</div>
                    <div class="cart__item-counter">{{ $t('actionTitles.quantity') }}: {{ item.count }}</div>
                    <div class="cart__item-price">
                        {{ $t('actionTitles.total') }}: {{ item.price * item.count }} UAH
                    </div>
                    <v-btn class="cart__btn-delete" variant="outlined" @click="removeItemFromCart">{{
                        $t('actionTitlesBtn.deleteToCart')
                    }}</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'CartItem',
    props: {
        item: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        ...mapActions('cart', ['removeFromCart']),
        removeItemFromCart() {
            this.removeFromCart(this.item.id)
        },
    },
}
</script>

<style lang="scss" scoped>
.cart {
    // .cart__wrapper

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 30px;
    }

    // .cart__container

    &__container {
        border: 2px solid black;
        border-radius: 20px;
        padding: 15px;
        margin: 0 auto;
    }

    // .cart__block

    &__block {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
    }

    // .cart__image

    &__image {
    }

    // .cart__img

    &__img {
        width: 250px;
        height: 150px;
    }

    // .cart__info

    &__info {
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    // .cart__item-title

    &__item-title {
        width: 400px;
    }

    // .cart__item-counter

    &__item-counter {
    }

    // .cart__item-price

    &__item-price {
    }
    // .cart__btn-delete
    &__btn-delete {
        width: 150px;
        transition: all 0.3s ease 0s;
        &:hover {
            transition: all 0.3s ease 0s;
            background-color: rgb(255, 74, 74);
            color: white;
        }
    }
}
</style>
