const LinkModel = require('../models/Class-LinkModel');

const redirect = async (req,res) => {
    
    let titleReq = req.params.titleFromURL;

    try{
        let obj = await LinkModel.findOneAndUpdate({title: titleReq}, {$inc: {click: 1}});

        console.log(obj);
        res.redirect(obj.url);

    } catch (error){
        res.send('Link not found!');
    }
}

const addLink = async (req,res) => {
    let link = new LinkModel (req.body);

    try{      
        let newObj = await link.save();
        res.redirect("/");
    } catch(error){
        res.render('add', {error, body: req.body});
    }
}

const getAllLinks = async (req,res) => {
    try{
        let links = await LinkModel.find({});
        res.render('all', {links});
    } catch(error) {
        res.send(error);
    }
}

const deleteLink = async (req,res) => {
    let idFromReq = req.params.id;

    if(!idFromReq){
        idFromReq = req.body.id;
    }

    try{

        await LinkModel.findByIdAndDelete(idFromReq);
        res.send(idFromReq);

    } catch(error){
        res.status(404).send(error);
    }
}

const loadLink = async (req,res) => {
    let id = req.params.id;

    try{

        let obj = await LinkModel.findById(id);
        res.render('edit', {error: false, body: obj});

    } catch(error){
        res.status(404).send(error);
    }
}

const editLink = async (req, res) => {
    
    let id = req.params.id;
    if(!id){
        id = req.body.id;
    }

    let link = {};
    link.title = req.body.title;
    link.description = req.body.description;
    link.url = req.body.url;

    try{
        
        let obj = await LinkModel.updateOne({_id: id}, link);

        res.redirect("/");

    } catch(error){
        res.render('edit', {error, body: req.body});
    }
}

module.exports = {redirect, addLink, getAllLinks, deleteLink, loadLink, editLink};