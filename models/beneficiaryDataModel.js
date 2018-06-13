var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var benDataSchema=new Schema(
    {
        _id:Number,
        name:{type:String,uppercase:true,trim:true,required:true},
        age:Number,
        place:String
    }
);

var benDataModel=mongoose.model('benDataModel',benDataSchema);

module.exports=benDataModel;

