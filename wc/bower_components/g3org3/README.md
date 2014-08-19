#ng-plugin v1.0.4

##Angular plugin

```html
<script src='ng-plugin.js'></script>
<script>
	var app = angular.module.('myApp', ['g3org3']);
</script>
```
##Directives
```html
<navbar title='My Title' theme='default' type='static' href='#' ng-theme='variable'>
	<menu>
		<li><a href="">item</a></li>
		<dropdown title='mydropdown' href='#'>
			<li><a href="">item</a></li>
		</dropdown>
	</menu>
</navbar>
<container></container>
<view></view>
```