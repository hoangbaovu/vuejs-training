new Vue({
    el: "#app",
    data: {
      products: [
        {
          image: "https://via.placeholder.com/200x150",
          name: "PRODUCT ITEM NUMBER 1",
          description: "Description for product item number 3232",
          price: 5.99,
          quantity: 2
        },
        {
          image: "https://via.placeholder.com/200x150",
          name: "PRODUCT ITEM NUMBER 2",
          description: "Description for product item number 1",
          price: 19.99,
          quantity: 1
        }
      ],
      tax: 10,
      promotions: [
        {
            code: '29xgbuHa4O',
          discount: '50%'
        },
        {
            code: 'mUxSnhywT1',
          discount: '40%'
        },
        {
            code: 'nDdViZL4l3',
          discount: '30%'
        }
      ]
    },
    computed: {
        subTotal: function () {
          var subTotal = 0;

        for ( var i = 0; i < this.products.length; i++) {
            subTotal += this.products[i].quantity * this.products[i].price;

          return subTotal;
        }
      }
    },
    methods: {
        removeItem: function (index) {
          this.products.splice(index, 1);
      }
    }
});
