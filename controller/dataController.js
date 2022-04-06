const express=require('express');
const mongoose=require('mongoose');
const Data=require('./../model/dataModel');

exports.sendData= async (req,res ,next)=>
{
    const data= await Data.create({name :req.body.name,
        email: req.body.email,
        opinion: req.body.opinion
    })

    res.status(200).json({status:'success',
data:{data}});
}