var root = new Vue (
    {
        el: '#root',
        data: {
            message: 'Hello World',
            nome: '',
            cognome: '',
            myClass: 'red',
            Image: 'img/images.jpg'
        },
        methods: {
            saluta: function () {
                console.log("Ciao");
                this.myClass ="blue";
            }
        }

    }
);