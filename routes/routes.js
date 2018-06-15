var benDataModel=require('../models/beneficiaryDataModel');
var serviceProviderModel=require('../models/serviceProviderModel');

// var serviceproviderService=require('../services/serviceproviderService');

var appRouter=function(app)
{
    app.get('/',function(req,res)
        {
            res.status(200).send('welcome to our restful apis');
        });

    // app.get('/tables/:number',function(req,res)
    //     {
    //         let table_array=[];
    //         let number=req.params.number;

    //         if(number>0)
    //         {
    //             for(let i=1;i<=10;i++)
    //             {
    //                 table_array.push(number*i);
    //             }
    //             res.status(200).send(table_array);
    //         }
    //         else
    //           {
    //             res.status(200).send('Enter a positive integer');
    //           }
    //         });

    app.post('/user/saveUser',function(req,res)
    {
        let data=req.body;

        var beneficiary=new benDataModel(
        {
            _id:data._id,
            name:data.name,
            age:data.age,
            place:data.place

        })

        beneficiary.save(function(err,response)
        {
            if(err)
            {
                res.status(402).send(JSON.stringify('Error encountered'));
            }
            res.status(200).send(JSON.stringify("success"+req.body));
        })
    });

}

var serviceProviderRouter=function(app)
{
    app.post('/serviceProvider/create',function(req,res,next)
    {
        let data=req.body;
       
            var serviceProvider=new serviceProviderModel(
            {
                serviceProviderName : data.serviceProviderName,
               
                primaryContactName : data.primaryContactName,
                primaryContactNumber : data.primaryContactNumber,
                primaryContactEmail : data.primaryContactEmail,
                primaryContactAddress : data.primaryContactAddress,
               
                status : data.status,
                createdBy : data.createdBy
            });

           serviceProvider.save(function(err,response)
            {
                if(err)
                {
                    res.status(402).send(JSON.stringify('Error encountered'));
                }
                res.status(200).send(JSON.stringify("success"));
            })
        });

    app.post('/serviceProvider/getAllServiceProviders',function(req,res)
    {
        serviceProviderModel.find({},function(err,response)
        {
            if(!err)
            {
                res.status(200).send(response);
            }
            res.status(402).send('error while fetching all SP');
        });
    });

    app.post('/serviceProvider/update',function(req,res)
    {
        let data=req.body;
        serviceProviderModel.findByIdAndUpdate(data._id, { $set: { 
            primaryContactName: data.primaryContactName,
            primaryContactNumber:data.primaryContactNumber }}, function(err,response){
            if(!err)
            {
                res.status(200).send(response);
            }
            res.status(402).send('error while updating SP');
        });
        
    });

    app.post('/serviceProvider/delete',function(req,res)
    {
       let data=req.body;
        serviceProviderModel.findByIdAndUpdate(data._id, { $set: {status: false}},
         function(err,response){
            if(!err)
            {
                res.status(200).send(response);
            }
            res.status(402).send('error while deleting SP');
        });
    });
}

module.exports={
                    appRouter,
                    serviceProviderRouter
                };