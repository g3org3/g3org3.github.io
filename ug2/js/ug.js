
angular.module('app', ['g3org3', 'ngRoute'])
.controller('ClassCtrl', ClassCtrl)
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: Ctrl,
		controllerAs: 'C'
	})
	.when('/:className', {
		templateUrl: 'views/class.html',
		controller: ClassCtrl,
		controllerAs: 'C'
	})
	.otherwise({
		redirectTo: '/'
	})
})


var fi = [];

function ClassCtrl($routeParams, $location){
	this.name 	= $routeParams.className;
	this.title 	= "Unknown";
	this.prefix = "";
	this.files 	= [];
	
	pos = getPos($routeParams.className);
	
	if(pos!=-1){
		this.prefix = classes[pos].prefix;
		this.title 	= classes[pos].title;
		this.files 	= classes[pos].files;
	} else {

		//document.location.href='#/';
	}
}
function getPos(name){
	if(name=='mate')
		return 0;
	if(name=='micro')
		return 2;
	if(name=='microlab')
		return 1;
	if(name=='info4')
		return 3;
	if(name=='cc6')
		return 4;
	else
		return -1;
}
function Ctrl(){
	this.files = classes;
}
var classes = [
	{
		name: 'mate',
		title: 'Matematica VI',
		prefix: 'ug/files/mate_notes',
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
		prefix: 'ug/files/micro_lab',
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
		prefix: 'ug/files/micro_p',
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
		name: '',
		title: 'Instalaciones Estructuradas'
	},
	{
		name: '',
		title: 'Ingenieria de Software'
	}
];





