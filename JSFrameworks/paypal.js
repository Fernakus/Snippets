// Uses PayPal API to create order through paypal
function createOrder() {
  /*
   * <div id="paypal-button-container"></div>
   * <script src="https://www.paypal.com/sdk/js?client-id= <-- PLACE CLIENT ID FOR ACCOUNT HERE --> &currency=CAD"></script>
   */

  // Variables
  var PAYPAL_CLIENT = 'PAYPAL_LIVE_CLIENT';
  var PAYPAL_SECRET = 'PAYPAL_LIVE_SECRET';
  var PAYPAL_ORDER_API = 'https://api.paypal.com/v2/checkout/orders/';

  paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                  value: '1.00'
                }
            }]
        });
    },

    // Finalize the transaction
   onApprove: function(data, actions) {
       return actions.order.capture().then(function(details) {
           // Show a success message to the buyer
           alert('Transaction completed by ' + details.payer.name.given_name + '!');
       });
   }
  }).render('#paypal-button-container');
}
