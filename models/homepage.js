var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Homepage = new keystone.List('Homepage', {
	autokey: { from: 'name', path: 'key' }
});

Homepage.add({
	bannerPic:{ type: Types.CloudinaryImage},
	whatweoffertitle:{type: String},
	Analyaticalporttalstring: { type: String, initial: false },
   	Integrationastring: { type: String, initial: false },
	Environmentstring: { type: String, initial: false },
	Analyaticalshortstring: { type: String, initial: false},
	Analyaticallongstring: { type: String, initial: false },
	TibcoSpotfireManaged: { type: String, initial: false },
    SolutionData: { type: String, initial: false},
	CenterHosting: { type: String, initial: false },
	TibcoSpotshortstring: { type: String, initial: false },
	TibcoSpotlongstring: { type: String, initial: false },
	MarketResearch: { type: String, initial: false },
    SocialMedia: { type: String, initial: false },
	Analytics: { type: String, initial: false },
	MarketResearchshortstring: { type: String, initial: false },
	MarketResearchlongstring: { type: String, initial: false },
	TibcoSpotfireCustom: { type: String, initial: false },
    SolutionDevelopment: { type: String, initial: false },
	Operations: { type: String, initial: false },
	TibcoSpotfireCustomshortstring: { type: String, initial: false },
	TibcoSpotfireCustomlongstring: { type: String, initial: false },
	Aboutusstring: { type: String, initial: false },
	Aboutustextarea: { type: Types.Textarea, initial: false },
	NewsAndUpdatetitle:{type: String},
	image:{ type: Types.CloudinaryImage},
	date:{type: Date},
	news1:{type: String},
	image1:{ type: Types.CloudinaryImage},
	date:{type: Date},
	news2:{type: String},
});

/** 
	Registration
	============
*/
//Homepage.addPattern('standard meta');
Homepage.register();