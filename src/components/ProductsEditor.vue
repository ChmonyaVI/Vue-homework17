<template>
    <div class="product-editor__wrapper">
        <v-text-field v-model="productData.image" :label="$t('actionTitles.image')" variant="outlined" />
        <v-text-field v-model="productData.name.en" :label="$t('actionTitles.titleEN')" variant="outlined" />
        <v-text-field v-model="productData.name.ru" :label="$t('actionTitles.titleRU')" variant="outlined" />
        <v-text-field v-model="productData.brand" :label="$t('actionTitles.brand')" variant="outlined" />
        <v-text-field v-model="productData.price" :label="$t('actionTitles.price')" variant="outlined" />
        <v-text-field v-model="productData.seller" :label="$t('actionTitles.seller')" variant="outlined" />
        <div class="btns-container">
            <v-btn variant="outlined" @click="onBtnAction">{{ btnText }}</v-btn>
            <v-btn variant="outlined" @click="onCancelAction">{{ $t('actionTitles.cancel') }}</v-btn>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'ProductsEditor',

    data() {
        return {
            productData: {
                image: null,
                name: {
                    en: null,
                    ru: null,
                },
                brand: null,
                price: null,
                seller: null,
            },
        }
    },
    computed: {
        ...mapGetters('products', ['getProductById']),
        getParams() {
            return this.$route.params.id
        },
        getLocale() {
            return this.$i18n.locale
        },

        btnText() {
            if (this.getParams && this.$i18n.locale === 'en') return 'Save'
            else if (this.getParams && this.$i18n.locale === 'ru') return 'Сохранить'
            else if (!this.getParams && this.$i18n.locale === 'en') return 'Create'
            else return 'Создать'
        },
    },

    created() {
        if (this.getParams) this.productData = { ...this.getProductById(this.$route.params.id) }
    },

    methods: {
        ...mapActions('products', ['addProduct', 'updateProduct']),
        onCancelAction() {
            this.$router.push({
                name: 'products',
            })
        },
        onBtnAction() {
            if (!this.getParams) this.addProduct(this.productData)
            else this.updateProduct({ itemId: this.productData.id, data: this.productData })
            this.$router.push({
                name: 'products',
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
