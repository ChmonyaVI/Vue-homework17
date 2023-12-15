<template>
    <div class="product-filter__container">
        <div class="filters-container">
            <h2>{{ $t('filters.title') }}</h2>
            <div class="seller-container">
                <h4>
                    {{ $t('filters.seller') }} <span>{{ getProductsSellers.size }}</span>
                </h4>
                <label v-for="seller in getProductsSellers" :key="seller" class="seller"
                    >{{ seller }}
                    <input v-model="filterObj.seller" type="checkbox" :value="seller" />
                </label>
            </div>
            <div class="search">
                <v-text-field
                    v-model="filterObj.search"
                    :label="$t('filters.searchPlaceholder')"
                    variant="underlined"
                    :placeholder="$t('filters.searchPlaceholder')"
                />
            </div>
            <div class="brand-container">
                <h4>
                    {{ $t('filters.brand') }} <span>{{ getProductsBrands.length }}</span>
                </h4>
                <label v-for="brand in getProductsBrands" :key="brand" class="brand"
                    >{{ brand }}
                    <input v-model="filterObj.brand" type="checkbox" :value="brand" />
                </label>
            </div>
            <v-btn variant="outlined" class="clear-btn" @click="clearFilters">{{ $t('filters.dropFilters') }}</v-btn>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ProductsFilter',

    data() {
        return {
            filterObj: {
                seller: [],
                search: null,
                brand: [],
            },
        }
    },
    computed: {
        ...mapGetters('products', ['getProductsBrands', 'getProductsSellers', 'getFilterObj']),
    },
    watch: {
        filterObj: {
            handler(newValue) {
                this.setFilterObj(newValue)
            },
            deep: true,
        },
    },

    methods: {
        ...mapActions('products', ['setFilterObj']),
        clearFilters() {
            this.filterObj = {
                seller: [],
                search: null,
                brand: [],
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.product-filter {
    // .product-filter__container

    &__container {
    }
}
.filters-container {
}
.seller-container {
}
.seller {
    display: flex;
    gap: 20px;
    justify-content: center;
}
.search {
}
.brand-container {
}
.brand {
    display: flex;
    gap: 20px;
    justify-content: center;
}
.clear-btn {
    margin-top: 10px;
}
</style>
