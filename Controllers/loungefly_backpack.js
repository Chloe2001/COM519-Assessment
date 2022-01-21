const Loungefly = require("../models/Loungefly");

exports.list = async (req,res) => {
try {
    const Loungeflys = await Loungefly.fins({});
    res.render("Loungefly_backpack", {loungeflys: loungeflys});
} catch (e) {
    res.status(404).send({message:"unable to list Loungefly"});
    }
};

exports.backpack = async (req,res) =>{
    try {
        const loungefly_backpack = Loungefly({value:req.body.name});
        res.render('Loungefly_backpack', {loungefly_backpack: value})
    } catch(e) {
        res.status(404).send({message:"unable to list type"})
    
    }
};