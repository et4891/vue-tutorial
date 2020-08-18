Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: `
        <div class="product">

        <div class="product-image">
            <img :src="product_image" :alt="alt_text" />
        </div>

        <div class="product-info">
            <h1>{{ title }}</h1>
            <p>Shipping: {{ shipping }}</p>
            <p v-if="inStock">In Stock</p>
            <p v-else :class="{ outOfStock : !inStock }">Out of Stock</p>
            <img v-show="onSaleShow" class='on-sale-image' :src="onSaleImage" alt="alt.onSale">

            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div v-for="(variant, index) in variants"
                @mouseover="updateProduct(index)"
                :key="variant.variantId"
                :style="{ backgroundColor: variant.variantColorHex }"
                class="color-box"
            >
            </div>
            

            <button
                @click="addToCart"
                :disabled="!inStock"
                :class="{ disabledButton: !inStock }"
            >Add to Cart</button>

            <button
                @click="removeFromCart"
            >-</button>

        </div>

    </div>
    `,
    data() {
        return {
            brand: 'Vue Mastery',
            product: `Socks`,
            selectedVariant: 0,
            product_link: 'https://www.google.com',
            alt_text: 'A pair of socks',
            onSaleShow: false,
            onSaleImage: './assets/on-sale.png',
            details: [
                '80% cotton',
                '20% polyester',
                'Gener-neutral',
            ],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantColorHex: '#39a741',
                    variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
                    variantQuantity: 10,
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantColorHex: '#466383',
                    variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 5,
                }
            ],
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.current_variant.variantId);
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.current_variant.variantId);
        },
        updateProduct(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        current_variant(){
            return this.variants[this.selectedVariant];
        },
        title() {
            return `${this.brand} ${this.product}`;
        },
        product_image() {
            return this.current_variant.variantImage;
        },
        inStock(){
            return this.current_variant.variantQuantity;
        },
        shipping(){
            return (this.premium) ? 'Free' : '$2.99';
        }
    }
});

const app = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: [],
    },
    methods: {
        updateCart(id){
            this.cart.push(id);
        },
        removeItemFromCart(id){
            const index = this.cart.indexOf(id);
            (index > -1 ) ? this.cart.splice(index, 1) : null;
        },
    }
});