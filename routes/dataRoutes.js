const express=require('express');
const dataController=require('./../controller/dataController');
const Router=express.Router();

Router.route('/').post(dataController.sendData);

module.exports=Router;