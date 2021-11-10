var root = new Vue (
    {
        el: '#root',
        data: {
            message: 'Hello World',
            nome: '',
            cognome: '',
            myClass: 'red',
        },
        methods: {
            saluta: function () {
                console.log("Ciao");
                this.myClass ="blue";
            }
        }

    }
);