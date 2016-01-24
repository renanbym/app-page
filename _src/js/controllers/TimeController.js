angular.module('overtime')
  .controller('TimeController', function($resource, $scope){

  $scope.filtro = '';
  $scope.horarios = [];
  $scope.horas_extras = 0;

  var Horario = $resource('/time/:id');

  function buscaHorarios(){
    Horario.query(function(horarios){
      $scope.horarios = horarios;
    },function(erro){
      console.log('Não foi possivel obter a lista');
      console.log( erro );
    });


  }

  buscaHorarios();

  $scope.remove = function( time ){
    Horario.delete({id: time._id}),
    buscaHorarios,
    function(erro){
      console.log('Não foir possivel remover');
      console.log( erro );
    };

  }

  $scope.novo = function(){

  };



});
