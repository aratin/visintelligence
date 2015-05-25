var keystone = require('keystone'),
	Types = keystone.Field.Types;


/**
 * Users
 * =====
 */

var Contactlist = new keystone.List('Contactlist', {
	// use nodelete to prevent people from deleting the demo admin user
	nocreate: true,
	noedit: true
});

Contactlist.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now }
});

Contactlist.schema.pre('save', function(next) {
	this.wasNew = this.isNew;
	next();
});

Contactlist.schema.post('save', function() {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Contactlist.schema.methods.sendNotificationEmail = function(callback) {
	
	if ('function' !== typeof callback) {
		callback = function() {};
	}
	
	var enquiry = this;
	
	keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {
		
		if (err) return callback(err);
		
		new keystone.Email('enquiry-notification').send({
			to: admins,
			from: {
				name: 'visualintelligence',
				email: 'contact@visualintelligence.com'
			},
			subject: 'New Enquiry for visualintelligence',
			enquiry: enquiry
		}, callback);
		
	});
	
};

Contactlist.defaultSort = '-createdAt';
Contactlist.defaultColumns = 'name, email, enquiryType, createdAt';
Contactlist.register();