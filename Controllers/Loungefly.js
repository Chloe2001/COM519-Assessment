const Loungefly = require ("../models/Loungefly");

exports.list = async (req,res) => {
    try{
        const Loungefly = await Loungefly.find({});
        res.render("Loungefly_list",{Loungefly:Loungefly});
    } catch(e){
        res.status(404).send({message:"Unable to list Loungefly"});
    }
};

exports.delete = async (req,res) => {
    const id = req.params.id;
    try{
        await Loungefly.findByIdAndRemove(id);
        res.redirect("/Loungefly_List");
    } catch (e) {
        res.status(404).send({
            message:'Unable to delete Loungefly.',
        });
    }
};

exports.create = async (req,res) => {

    try{
        const Loungefly = new Loungefly ({Name: req.body.name, Type: req.body.Type, });
        await Loungefly.save();
        res.redirect('/Loungefly_List/?message=New Loungefly was added!')
    } catch (e) {
        if (e.errors) {
            console.log(e.errors);
            res.render('Loungefly_New',{errors:e.errors})
            return;
        }
    
    return res.status(400).send({
        message: JSON.parse(e),
    });
}
}
exports.edit = async (req,res) => {
    const id = req.params.id;
    try{
        const loungefly = await Loungefly.findById(id);
        res.render('Loungefly_update', { Loungeflys: Loungeflys, id:id});
    } catch (e){
        res.status(404).send({
            message:'unable to find Loungefly ${id}',
        });
    }
};

exports.update=async (req,res) => {
    const id = req.params.id;
    try{
        const Loungefly = await Loungefly.updateOne({_id:id},req.body);
        res.redirect('/Loungefly_List/?message=loungefly has been updated');
    }catch (e){
        res.status(404).send({
            message:'unable to find Loungefly ${id}.',
        });
    }
};