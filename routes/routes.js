var benDataModel=require('../models/beneficiaryDataModel');

var appRouter=function(app)
{
    app.get('/',function(req,res)
        {
            res.status(200).send('welcome to our restful apis');
        });

    app.get('/tables/:number',function(req,res)
        {
            let table_array=[];
            let number=req.params.number;

            if(number>0)
            {
                for(let i=1;i<=10;i++)
                {
                    table_array.push(number*i);
                }
                res.status(200).send(table_array);
            }
            else
              {
                res.status(200).send('Enter a positive integer');
              }
            });

    app.post('/user/saveUser',function(req,res)
    {
      let data=req.body;
    //   let dob=new Date();
    //   if(data.age!=undefined)
    //     {
    //       let age=parseInt(data.age);
    //       let date=new Date();
    //       date.setFullYear(date.getFullYear()-24);
    //       dob=new Date(date);
    //     }

    var beneficiary=new benDataModel(
        {
            _id:data._id,
            name:data.name,
            age:data.age,
            place:data.place

        }
    )

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

module.exports=appRouter;