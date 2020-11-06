var app = angular.module("MyApp", []);
app.controller("FirstController", ["$scope", function(m){
    m.nombre;
    m.edad;
    m.altura;
    m.nuevoComentario={};

    m.comentarios = [
        {
            comentario: "Eres grande",
            username: "La hormiguita"
        },
        {
            comentario: "Eres chiquita",
            username: "El elefante"
        }
    ];

    m.agregarComentario = function(){
        m.comentarios.push (m.nuevoComentario);
        m.nuevoComentario={};
    }



}] );

