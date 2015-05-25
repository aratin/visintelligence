var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Differentiator = new keystone.List('Differentiator', {
	autokey: { from: 'name', path: 'key' }
});

Differentiator.add({
	image: {type:Types.CloudinaryImage},
	text: {type: Types.Textarea, initial: true },
	subText: {type:String },
	shortText: {type: Types.Textarea, initial: true },
	image1: {type:Types.CloudinaryImage},
	shortStringText: {type:String },
	longStringText: {type: Types.Textarea, initial: true },
	image2: {type:Types.CloudinaryImage},
	textLong: {type:String },
	textShort: {type: Types.Textarea, initial: true },
	image3: {type:Types.CloudinaryImage},
	textString: {type:String },
	textShortString: {type: Types.Textarea, initial: true },
	heading:{type:String},
});

/** 
	Registration
	============
*/
//Differentiator.addPattern('standard meta');
Differentiator.register();
