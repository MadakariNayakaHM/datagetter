const express=require('express');
const dataController=require('./../controller/viewsController');
const Router=express.Router();

Router.route('/').get(dataController.data);
module.exports=Router