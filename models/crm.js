var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Crm = new keystone.List('Crm', {
	autokey: { from: 'name', path: 'key' }
});

Crm.add({
	//consultingService:{type:String},
	image:{ type: Types.CloudinaryImage},
	headingText:{type:String},
	text: { type: Types.Html },
	headingText1:{type:String},
	subText: { type: Types.Html },
	headingText2:{type:String},
	shortString: { type: Types.Html },
	headingText3:{type:String},
	shortText: { type: Types.Html },
	heading:{type:String},
});

/** 
	Registration
	============
*/
//Crm.addPattern('standard meta');
Crm.register();


