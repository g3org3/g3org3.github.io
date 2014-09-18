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
  $scope.p1 = $db.getParcial($scope.clase, '1');
  $scope.p2 = $db.getParcial($scope.clase, '2');
  $scope.sizep2 = $db.getsize($scope.p2);
  $scope.sizep1 = $db.getsize($scope.p1);
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
  this.getParcial = function(clase, idp){
    items = [];
    angular.forEach(clase.files, function(item){
      if(item.p==idp)
        items.push(item);
    });

  this.getsize = function(files){
    size = 0;
    angular.forEach(files, function(item){
      if(item.p>0)
        size++;
    });
    return size;
  };

    return items;
  }
})

//
var classes = [
  {
    name: 'info4',
    title: 'Informatica IV',
    prefix: 'info4/ht',
    files: [
          {src:  '1.pdf', p:'1', title: 'Fuentes discretas'},
          {src:  '2.pdf', p:'1', title: 'Propiedades de entropia'},
          {src:  '3.pdf', p:'1', title: 'Extensiones de una fuente'},
          {src:  '4.pdf', p:'1', title: 'Fuentes de Markov 1'},
          {src:  '5.pdf', p:'1', title: 'Fuentes de Markov 2'},
          {src:  '6.pdf', p:'1', title: 'Variables Discretas'},
          {src:  '7.pdf', p:'2', title: 'Propiedades de Codigos'},
          {src:  '8.pdf', p:'2', title: 'Sintesis de Codigos1'},
          {src:  '9.pdf', p:'2', title: 'Sintesis de Codigos2'},
          {src: '10.pdf', p:'2', title: 'Codigos de Redundancia Minima'},
          {src: '11.pdf', p:'2', title: 'Articulo Huffman'},
      ]
  },
  {
    name: 'microlab',
    title: 'Micro Lab',
    prefix: 'files/micro_lab',
    files: [
      {src: '0.pdf', p:'1', title: 'Analizador Logico'},
      {src: '1.pdf', p:'1', title: 'Analizador de Tiempos'},
      {src: '2.pdf', p:'1', title: 'Analizador de Estados'},
      {src: '3.pdf', p:'1', title: 'Tarjetas LPCXpresso'},
      {src: '4.pdf', p:'2', title: 'Puertos Paralelos'},
      {src: '5.pdf', p:'2', title: 'PP en Ensamblador'}
    ]
  },
  {
    name: 'micro',
    title: 'Micro',
    prefix: 'files/micro_p',
    files: [
      {src: '1.pdf', p:'1', title: 'Historia de los Micros'},
      {src: '2.pdf', p:'1', title: 'Componentes de un Micro'},
      {src: '3.pdf', p:'1', title: 'CISC vs RISK'},
      {src: '4.pdf', p:'1', title: 'Aceleracion de una Tarea'},
      {src: '5.pdf', p:'1', title: 'Tecnologias de Memoria'},
      {src: '6.pdf', p:'1', title: 'Jerarquia de Memoria'}
    ]
  },
  {
    name: 'cc6',
    title: 'Ciencias de la Computacion VI',
    prefix: 'cc6/Tema',
    files: [
      {src: '13-2007.pdf', p:'1', title: 'Ordenamiento Externo'},
      {src: '14-2007.pdf', p:'1', title: 'Evaluacion de Operaciones Relacionales'},
      {src: '15-2007.pdf', p:'1', title: 'Introduccion a Opt de Consultas'},
      {src: '16-2007.pdf', p:'1', title: 'Refinamiento de Esquema y FN'},
      {src: '17-2007.pdf', p:'1', title: 'Seguridad'}
    ]
  },
  {
    name: 'mate',
    title: 'Matematica VI',
    prefix: 'files/mate_notes',
    img: '',
    files: [
      {src: '1.pdf', p:'1', title: '2014-07-15-Note-20-29'},
      {src: '2.pdf', p:'1', title: '2014-07-16-Note-19-18'},
      {src: '3.pdf', p:'1', title: '2014-07-21-Note-19-43'}
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