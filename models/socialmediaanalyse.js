var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Socialmediaanalyse = new keystone.List('Socialmediaanalyse', {
	autokey: { from: 'name', path: 'key' }
});

Socialmediaanalyse.add({
	image:{ type: Types.CloudinaryImage},
	headingtext:{type:String},
	text:{type:String},
	headingtext1:{type:String}, 
	subText:{type:String}, 
	shortString:{type:String},
	longString:{type:String},
	subString:{type:String},
	subStringText:{type:String},
	heading:{type:String},
	
});

/** 
	Registration
	============
*/
//Socialmediaanalyse.addPattern('standard meta');
Socialmediaanalyse.register();
