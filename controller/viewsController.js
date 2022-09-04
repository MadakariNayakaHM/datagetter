exports.data= (req,res,next)=>
{
    res.status(200).render('base');
    next();
}