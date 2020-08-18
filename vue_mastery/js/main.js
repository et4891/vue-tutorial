const app = new Vue({
    el: '#app',
    data: {
        product: `Socks`,
        product_image: './assets/vmSocks-green.jpg',
        product_link: 'https://www.google.com',
        alt_text: 'A pair of socks',
        inventory: 100,
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
              variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
            },
            {
              variantId: 2235,
              variantColor: 'blue',
              variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
            }
          ],
          cart: 0
        },
        methods: {
          addToCart() {
            this.cart += 1
          },
          updateProduct(variantImage) {
            this.product_image = variantImage
          }
        }
});