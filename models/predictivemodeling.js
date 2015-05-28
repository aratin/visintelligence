var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Predictivemodeling = new keystone.List('Predictivemodeling', {
	autokey: { from: 'name', path: 'key' }
});

Predictivemodeling.add({
	image:{type:Types.CloudinaryImage},
	text:{type:String},
	subText1:{ type: String },
	subText2:{ type: String },
	subText3:{ type: String },
	subText4:{ type: String },
	subText5:{ type: String },
	subText6:{ type: String },
	subText7:{ type: String },
	subText8:{ type: String },
	subText9:{ type: String },
	subText10:{ type: String },
	shortString:{ type: Types.Textarea, initial: true },
	heading:{type:String},
	
});

/** 
	Registration
	============
*/
//Predictivemodeling.addPattern('standard meta');
Predictivemodeling.register();