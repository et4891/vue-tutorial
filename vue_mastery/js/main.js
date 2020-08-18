const app = new Vue({
    el: '#app',
    data: {
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
              variantQuantity: 0,
            }
          ],
          cart: 0
        },
        methods: {
          addToCart() {
            this.cart++;
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
            }
        }
});