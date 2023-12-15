<template>
    <div>
        <div class="product-page__container">
            <h1 class="product-page__title">{{ $t('productPage.mainTitle') }}</h1>
            <div class="product__body">
                <products-filter />
                <products-list />
            </div>
        </div>
    </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue'
// import { mapActions } from 'vuex'
import ProductsFilter from '@/components/ProductsFilter.vue'

export default {
    name: 'ProductView',
    components: { ProductsList, ProductsFilter },

    computed: {},
    // created() {
    //     this.loadList()
    // },
    // methods: {
    //     ...mapActions('products', ['loadList']),
    // },
}
</script>

<style lang="scss" scoped>
.product-page {
    // .product-page__container

    &__container {
    }

    // .product-page__title

    &__title {
    }
}
.product {
    // .product__body

    &__body {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        padding: 0 50px;
    }
}
</style>
