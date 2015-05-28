var keystone = require('keystone');
var Networkmanagement = keystone.list('Networkmanagement');
var Footermenunavigation = keystone.list('Footermenunavigation');
var Navbar = keystone.list('Navbar');
var MenuList = keystone.list('Menu');
var FooterList = keystone.list('Footer');
//var Message = keystone.list('Message');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	// Init locals
		locals.section = 'networkmanagement';
		locals.data = [];

	// Load the current Networkmanagement
	view.on('init', function(next) {
		var q = Networkmanagement.model.find();
		q.exec(function(err, results) {
			locals.data.networkmanagements = results;
			next(err);
		});
	});

	// Load the current Navbar
	view.on('init', function(next) {
		var q = Navbar.model.find();
		q.exec(function(err, results) {
			locals.data.navbars = results;
			next(err);
		});
	});

	// Load the current MenuList
	view.on('init', function(next) {
		var q = MenuList.model.find();
		q.exec(function(err, results) {
   			locals.data.menus = results;
			next(err);
		});
	});

	// Load the current FooterList
	view.on('init', function(next) {
		var q = FooterList.model.find();
		q.exec(function(err, results) {
   			locals.data.footers = results;
			next(err);
		});
	});

	// Load Current Footermenunavigation
	view.on('init', function(next) {
		var q = Footermenunavigation.model.find();
		q.exec(function(err, results) {
			locals.data.footermenunavigations = results;
			next(err);
		});
	});

	// Render the view
	view.render('networkmanagement');
}