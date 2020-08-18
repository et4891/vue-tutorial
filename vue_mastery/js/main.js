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
    }
});