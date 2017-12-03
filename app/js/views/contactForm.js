ContactManager.Views.ContactForm = Marionette.ItemView.extend({
    template: '#tpl-new-contact',

    ui: {
        titleInput: '.contact-title-input',
        contentInput: '.contact-content-input',
        languageInput: '.contact-language-input',
        urlInput: '.contact-url-input',
        tagInput: '.contact-tag-input',
        avatarInput: '.contact-avatar-input',
        dateInput: '.contact-date-input'
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
            title: this.ui.titleInput.val(),
            content: this.ui.contentInput.val(),
            language: this.ui.languageInput.val(),
            url: this.ui.urlInput.val(),
            tag: this.ui.tagInput.val(),
            avatar: this.ui.avatarInput.val(),
            date: this.ui.dateInput.val()
        });
    }
});