const express=require('express');
const dataController=require('./../controller/dataController');
const Router=express.Router();

Router.route('/post').post(dataController.sendData);

module.exports=Router;