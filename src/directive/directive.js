import Vue from  "vue";

const directive = Vue.directive('title', {
    inserted: function (el, binding) {
        document.title = el.dataset.title
    }
});

export {directive}
