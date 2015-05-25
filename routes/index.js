/**
 * This file is where you define your application routes and controllers.
 * 
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 * 
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 * 
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 * 
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 * 
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.index);
	// app.get('/blog/:category?', routes.views.blog);
	// app.get('/blog/post/:post', routes.views.post);
	// app.get('/gallery', routes.views.gallery);
	app.all('/contact', routes.views.contact);
	app.all('/contactform', routes.views.contactform);
	app.all('/company-profile', routes.views.companyprofile);
	app.get('/companyinfolistmenu',routes.views.companyinfolistmenu);
	app.all('/mangementteam', routes.views.mangementteam);
	app.all('/differentiator', routes.views.differentiator);
	app.all('/career', routes.views.career);
	app.all('/partner', routes.views.partner);
	app.get('/softwareproduct', routes.views.softwareproduct);
	app.get('/listingmenu',routes.views.listingmenu);
	app.get('/consultingservice', routes.views.consultingservice);
	app.get('/msp',routes.views.msp);
	app.get('/specializedanalyse',routes.views.specializedanalyse);
	app.all('/offering', routes.views.offering);
	app.all('/technologyresale', routes.views.technologyresale);
	app.all('/analyticalportal', routes.views.analyticalportal);
	app.all('/tibcospotfire', routes.views.tibcospotfire);
	app.all('/marketresearch', routes.views.marketresearch);
	app.all('/tibcospotfirecustom', routes.views.tibcospotfirecustom);
	app.all('/readmore', routes.views.readmore);
	app.all('/healthcareinsurer', routes.views.healthcareinsurer);
	app.all('/healthcareprovider', routes.views.healthcareprovider);
	app.all('/employer', routes.views.employer);
	app.all('/pharmaceutical', routes.views.pharmaceutical);
	app.all('/researchinstitute', routes.views.researchinstitute);
	app.all('/lifestyleindustry', routes.views.lifestyleindustry);
	app.all('/crm', routes.views.crm);
	app.all('/lawenforcement', routes.views.lawenforcement);
	app.all('/data-warehouse', routes.views.datawarehouse);
	app.all('/visualbusinessintelligence', routes.views.visualbusinessintelligence);
	app.all('/predictive-modeling', routes.views.predictivemodeling);
	app.all('/business-process-strategy', routes.views.businessprocessstrategy);
	app.all('/comparative-benchmarking', routes.views.comparativebenchmarking);
	app.all('/ecommerce-portal', routes.views.ecommerceportal);
	app.all('/geo-spatial-analytic', routes.views.geospatialanalytic);
	app.all('/information-reporting-strategy', routes.views.informationreportingstrategy);
	app.all('/social-media-analysis', routes.views.socialmediaanalyse);
	app.all('/footermenunavigation', routes.views.footermenunavigation);
	app.all('/allnewes', routes.views.allnewes);
	app.all('/contact', routes.views.contact);	
	app.all('/pdfFile', routes.views.pdfFile);
	app.all('/news1', routes.views.news1);
	app.all('/news2', routes.views.news2);
	app.all('/news3', routes.views.news3);
	app.all('/news4', routes.views.news4);
	app.all('/whatweoffersnavigation', routes.views.whatweoffersnavigation);
	
	
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	
};
