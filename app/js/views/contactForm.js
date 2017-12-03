ContactManager.Views.ContactForm = Marionette.ItemView.extend({
    template: '#tpl-new-contact',

    ui: {
        originIbanInput: '.contact-originIban-input',
        amountInput: '.contact-amount-input',
        counterPartyNameInput: '.contact-counterPartyName-input',
        paymentReferenceInput: '.contact-paymentReference-input',
        bookingDate: '.contact-bookingDate-input',
        imgInput: '.contact-img-input',
        currencyCodeInput: '.contact-currencyCode-input'
    },

    events: {
        'submit .contact-form': 'onFormSubmit'
    },

    triggers: {
        'click .form-cancel-btn': 'form:canceled'
    },

    serializeData: function() {
        return _.extend(this.model.toJSON(), {
            isNew: this.model.isNew()
        });
    },

    onFormSubmit: function(e) {
        e.preventDefault();

        this.trigger('form:submitted', {
            origin: this.ui.originInput.val(),
            amount: this.ui.amountInput.val(),
            counterPartyName: this.ui.counterPartyNameInput.val(),
            paymentReference: this.ui.paymentReferenceInput.val(),
            bookingDate: this.ui.bookingDateInput.val(),
            img: this.ui.imgInput.val(),
            currencyCode: this.ui.currencyCodeInput.val()
        });
    }
});