import Vue from 'vue';
import database from './database';
import VueClipboard from 'vue-clipboard2';

Vue.use(VueClipboard)

class ToDo {
    constructor(text) {
        this.text = text;
        this.strike = false;
    }
}

var app = new Vue ({
    el: "#app",
    mixins: [database],
    data: {
        todos: []
    },
    methods: {
        addToDoItem: function (event) {
            this.todos.push(new ToDo(event.target.value))
            event.target.value = ''
        },
        toggleStrike: function (index) {
            this.todos[index].strike = !this.todos[index].strike;
        },
        getClass: function (index) {
            if (this.todos[index].strike) {
                return 'strikethrough';
            }
        },
        openLink: function(link) {
            this.$copyText(link.copyText);
            window.open(link.url);
        }
    }
})