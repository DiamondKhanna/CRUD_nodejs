var serviceProviderModel=require('../models/serviceProviderModel');

function createServiceProvider(data,done)
	{
		var serviceProvider=new serviceProviderModel(
		{
			serviceProviderName : data.serviceProviderName,
			joiningDate : new Date(),
			primaryContactName : data.primaryContactName,
			primaryContactNumber : data.primaryContactNumber,
			primaryContactEmail : data.primaryContactEmail,
			primaryContactAddress : data.primaryContactAddress,
			validFrom : new Date(),
			validTill : new Date(),
			status : data.status,
			createdBy : data.createdBy
		});

		serviceProvider.save(function(err,response)
		{
			if(err)
			{
				return done(err,response);
			}
			else
			{
				console.log(response,err);
				return done(undefined,response)
			}
		})
	};


module.exports={createServiceProvider};