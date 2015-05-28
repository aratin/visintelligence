var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Providercontracting = new keystone.List('Providercontracting', {
	autokey: { from: 'name', path: 'key' }
});

Providercontracting.add({
	//consultingService:{type:String},
	image:{ type: Types.CloudinaryImage},
	headingText:{type:String},
	text: { type: Types.Html },
	headingText1:{type:String},
	subText: { type: Types.Html },
	headingText2:{type:String},
	shortString: { type: Types.Html },
	headingText3:{type:String},
	shortText: { type: String},
	heading:{type:String},
});

/** 
	Registration
	============
*/
//Crm.addPattern('standard meta');
Providercontracting.register();


