var root = new Vue ({
    el: '#root',
    data: {
        message: 'Hello World'
    },
    methods: {
        saluta: function () {
            return console.log("Ciao");;
        }
    }

});