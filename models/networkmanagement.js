var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Networkmanagement = new keystone.List('Networkmanagement', {
	autokey: { from: 'name', path: 'key' }
});

Networkmanagement.add({
	image:{type:Types.CloudinaryImage},
	text:{type:String},
	subText1:{ type: String },
	subText2:{ type: String },
	subText3:{ type: String },
	subText4:{ type: String },
	subText5:{ type: String },
	shortString:{ type: Types.Textarea, initial: true },
	shortheading:{ type: String },
	heading:{type:String},
	subText6:{ type: String },
	
});

/** 
	Registration
	============
*/
//Predictivemodeling.addPattern('standard meta');
Networkmanagement.register();