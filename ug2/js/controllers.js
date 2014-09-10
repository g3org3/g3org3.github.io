angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.menuItems = classes;

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('claseCtrl', function($db, $scope, $stateParams){
  $scope.clase = $db.getClass($stateParams.id);
})
.service('$db', function(){
  this.getClass = function(name){
    found = {name: '-1', title:'-1'};
    angular.forEach(classes, function(item){
      if(item.name==name)
        found = item;
    });
    return found;
  };
})

//
var classes = [
  {
    name: 'mate',
    title: 'Matematica VI',
    prefix: 'files/mate_notes',
    img: '',
    files: [
      {src: '1.pdf', title: '2014-07-15-Note-20-29'},
      {src: '2.pdf', title: '2014-07-16-Note-19-18'},
      {src: '3.pdf', title: '2014-07-21-Note-19-43'}
      ]
  },
  {
    name: 'microlab',
    title: 'Micro Lab',
    prefix: 'files/micro_lab',
    files: [
      {src: '0.pdf', title: 'Analizador Logico'},
      {src: '1.pdf', title: 'Analizador de Tiempos'},
      {src: '2.pdf', title: 'Analizador de Estados'},
      {src: '3.pdf', title: 'Tarjetas LPCXpresso'},
      {src: '4.pdf', title: 'Puertos Paralelos'},
      {src: '5.pdf', title: 'PP en Ensamblador'}
    ]
  },
  {
    name: 'micro',
    title: 'Micro',
    prefix: 'files/micro_p',
    files: [
      {src: '1.pdf', title: 'Historia de los Micros'},
      {src: '2.pdf', title: 'Componentes de un Micro'},
      {src: '3.pdf', title: 'CISC vs RISK'},
      {src: '4.pdf', title: 'Aceleracion de una Tarea'},
      {src: '5.pdf', title: 'Tecnologias de Memoria'},
      {src: '6.pdf', title: 'Jerarquia de Memoria'}
    ]
  },
  {
    name: 'info4',
    title: 'Informatica IV',
    prefix: 'info4/ht',
    files: [
          {src: '1.pdf', title: 'Fuentes discretas'},
          {src: '2.pdf', title: 'Propiedades de entropia'},
          {src: '3.pdf', title: 'Extensiones de una fuente'},
          {src: '4.pdf', title: 'Fuentes de Markov 1'},
          {src: '5.pdf', title: 'Fuentes de Markov 2'},
          {src: '6.pdf', title: 'Variables Discretas'},
          {src: '7.pdf', title: 'Propiedades de Codigos'},
          {src: '8.pdf', title: 'Sintesis de Codigos1'},
          {src: '9.pdf', title: 'Sintesis de Codigos2'}
      ]
  },
  {
    name: 'cc6',
    title: 'Ciencias de la Computacion VI',
    prefix: 'cc6/Tema',
    files: [
      {src: '13-2007.pdf', title: 'Ordenamiento Externo'},
          {src: '14-2007.pdf', title: 'Evaluacion de Operaciones Relacionales'},
          {src: '15-2007.pdf', title: 'Introduccion a Opt de Consultas'},
          {src: '16-2007.pdf', title: 'Refinamiento de Esquema y FN'},
          {src: '17-2007.pdf', title: 'Seguridad'}
    ]
  },
  {
    name: 'redes',
    title: 'Instalaciones Estructuradas'
  },
  {
    name: 'is',
    title: 'Ingenieria de Software'
  }
];