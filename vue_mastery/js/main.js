const app = new Vue({
    el: '#app',
    data: {
        product: `Socks`,
        product_image: './assets/vmSocks-green.jpg',
        product_link: 'https://www.google.com',
        alt_text: 'A pair of socks',
        inventory: 10,
        inStock: true,
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
              variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
            },
            {
              variantId: 2235,
              variantColor: 'blue',
              variantColorHex: '#466383',
              variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
            }
          ],
          cart: 0
        },
        methods: {
          addToCart() {
            this.cart++;
            this.inventory--;
            if(this.inventory === 0) return this.inStock = false;
          },
          removeFromCart(){
            if(this.cart === 0) return;
            this.cart--;
            this.inventory++;
            if(this.inventory > 0) this.inStock = true;
          },
          updateProduct(variantImage) {
            this.product_image = variantImage
          }
        }
});