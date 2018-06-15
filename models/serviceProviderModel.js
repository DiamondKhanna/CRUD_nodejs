var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var serviceProviderSchema= new Schema(
	{
		serviceProviderName:String,
		joiningDate:Date,
		primaryContactName:String,
		primaryContactNumber:Number,
		primaryContactEmail:String,
		primaryContactAddress:String,
		validFrom:Date,
		validTill:Date,
		status:Boolean,
		createdBy:String

	});

var serviceProviderModel=mongoose.model('serviceProviderModel',serviceProviderSchema);

module.exports=serviceProviderModel;
