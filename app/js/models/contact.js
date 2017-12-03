ContactManager.Models.Contact = Backbone.Model.extend({
    defaults: {
        originIban: null,
        amount: null,
        counterPartyName: null,
        paymentReference: null,
        bookingDate: null,
        currencyCode: null
    }
});