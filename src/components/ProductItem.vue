<template>
    <div v-if="hasError">...Some Error</div>
    <div v-else-if="isLoading">...is loading</div>
    <template v-else>
        <v-card class="product-item__cart" width="344" hover>
            <a :href="data.link" target="_blank" class="product-item__link">
                <v-img :src="data.image" height="300px" contain theme="dark" class="product-item__img" />
                <v-card-title class="product-item__title">
                    {{ getDataTitle }}
                </v-card-title>
            </a>
            <v-card-subtitle class="product-item__price">
                {{ data.price }} {{ $t('cartPage.cartPrice') }}
            </v-card-subtitle>
            <v-card-actions>
                <div class="product-item__btn">
                    <v-btn variant="text" @click="onAddBtnAction"> {{ $t('actionTitlesBtn.addToCart') }} </v-btn>

                    <div v-if="userPermissions.update" class="product-item__edit">
                        <v-btn class="product-item__main-button" elevation="2" @click="onEditAction">{{
                            $t('actionTitlesBtn.editToCart')
                        }}</v-btn>
                    </div>
                    <div v-if="userPermissions.delete" class="product-item__delete">
                        <v-btn class="product-item__main-button" elevation="2" @click="onDeleteAction">{{
                            $t('actionTitlesBtn.deleteToCart')
                        }}</v-btn>
                    </div>
                </div>
            </v-card-actions>
        </v-card>
    </template>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'ProductItem',
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapGetters('users', ['userPermissions', 'isLoading', 'hasError']),

        getDataTitle() {
            return this.$i18n.locale === 'ru' ? this.data.name.ru : this.data.name.en
        },
    },
    methods: {
        ...mapActions('products', ['deleteProduct', 'updateProduct']),
        ...mapActions('cart', ['addToCart']),
        onEditAction() {
            this.$router.push({
                name: 'products-editor',
                params: {
                    id: this.data.id,
                },
            })
        },
        onDeleteAction() {
            console.log('ok')
            this.deleteProduct(this.data.id)
        },
        onAddBtnAction() {
            this.addToCart(this.data)
        },
    },
}
</script>

<style lang="scss" scoped>
.product-item__price {
    text-align: left;
}
.product-item__btn {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
</style>
