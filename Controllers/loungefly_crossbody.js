const Loungefly = require("../models/Loungefly");

exports.list = async (req,res) =>{
    try{
        const loungeflys = await Loungefly.find({});
        res.render("Loungefly_Crossbody",{loungeflys: loungflys});
    } catch (e) {
        res.status(404).send({ messge:"unable to list loungefly"});
    }
};

exports.crossbody = async (req,res) => {
    try{
        const loungefly_crossbody = Loungefly ({value:req.body.name});
        res.render('Loungefly_Crossbody',{ loungefly_crossbody: value})
    } catch(e){
        res.status(404).send({message:"unable to list type"})
    }
};