function mainCtrl($firebase) {
	this.items = {
		a: {id: 0,title: 'afuera', status: 'LOW'},
		b: {id: 1,title: 'sala izquierda', status: 'LOW'},
		c: {id: 2,title: 'sala derecha', status: 'LOW'},
		d: {id: 3,title: 'chimenea'}
	};
	this.show = [false, false, false, false];
	//var ref = new Firebase('https://burning-fire-1892.firebaseio.com/users');
	//var sync = $firebase(ref);
	//this.users = sync.$asObject();

	this.changeState = function(){
		angular.forEach(this.users, function(user){
		});
		angular.forEach(this.items, function(item){
			if(item.title=='afuera')
				item.status='WAIT'
		});
	}

	this.showOptions =  function(id){
		this.show[id] = true;
	};
	this.hideOptions = function(id){
		this.show[id] = false;
	}
}