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

        <div>
            <h2>Reviews</h2>
            <p v-if='!reviews.length'>There are no reviews yet</p>
            <ul>
                <li v-for='review in reviews'>
                    <p>{{ review.name }}</p>
                    <p>Rating: {{ review.rating }}</p>
                    <p>{{ review.review }}</p>
                    <p>Recommended:{{ review.recommendation }}</p>
                </li>
            </ul>
        </div>

        <product-review @review-submitted='addReview'></product-review>

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
            reviews: [],
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
        },
        addReview(productReview) {
            this.reviews.push(productReview);
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

Vue.component('product-review', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">

            <p v-if='errors.length'>
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for='error of errors'>{{ error }}</li>
                </ul>
            </p>
            
            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name" placeholder="name">
            </p>
            
            <p>
                <label for="review">Review:</label>      
                <textarea id="review" v-model="review"></textarea>
            </p>
            
            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </p>

            <p>
                <h5>Would you recommaned this product?<h5>      
                <label for="recommendation-yes">Yes</label>
                <input type="radio" id="recommendation-yes" value=true v-model="recommendation">
                <br>
                <label for="recommendation-no">No</label>
                <input type="radio" id="recommendation-no" value=false v-model="recommendation">
            </p>
                
            <p>
                <input type="submit" value="Submit">  
            </p>    
    
        </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            recommendation: null,
            errors: [],
        }
    },
    methods: {
        onSubmit(){
            this.errors = [];
            if(this.name && this.review && this.rating && this.recommendation){
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommendation: this.recommendation,
                }
                this.$emit('review-submitted', productReview);
                this.name = null;
                this.review = null;
                this.rating = null;
                this.recommendation = null;
            } else {
                if(!this.name) this.errors.push('Name required.');
                if(!this.review) this.errors.push('Review required.');
                if(!this.rating) this.errors.push('Rating required.');
                if(!this.recommendation) this.errors.push('Recommendation required.');
            }
        }
    },
    computed: {},
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