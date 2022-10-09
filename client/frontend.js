import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.esm.browser.js';

new Vue({
    el: '#app',
    data() {
        return {
            form: {
                name: '',
                value: ''
            },
            contacts: [
                {id: 1, name: 'Rostyslav', value: '+420774233299', marked: false}
            ]
        }
    },
    computed: {
        canCreate() {
            return this.form.value.trim() && this.form.name.trim();
        }
    },
    methods: {
        createContact() {
            const {...contact} = this.form;

            this.contacts.push({...contact, id: Date.now(), marked: false});

            this.form.name = this.form.value = '';
        },
        markContact(id) {
            const contact = this.contacts.find(contact => contact.id === id);
            contact.marked = true;
        },
        removeContact(id) {
            this.contacts = this.contacts.filter(contact => contact.id !== id);
        }
    }
})