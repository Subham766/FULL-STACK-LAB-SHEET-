require("dotenv").config();
module.exports=(req,res,next)=>{
 const key=req.headers["x-api-key"];
 if(!key)return res.status(401).json({error:"API key is required"});
 if(key!==process.env.API_KEY)return res.status(401).json({error:"Invalid API key"});
 next();
};