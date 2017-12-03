ContactManager.Models.Contact = Backbone.Model.extend({
    defaults: {
        title: null,
        content: null,
        language: null,
        url: null,
        tag: null,
        avatar: null,
        date: null,
        favorite: false
    }
});