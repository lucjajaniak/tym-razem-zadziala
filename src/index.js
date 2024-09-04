import fajnyButton from "./components/fajnyButton.vue";

export default {
    install: (app, options) => {
        app.component('fajnyButton', fajnyButton);
    },
};