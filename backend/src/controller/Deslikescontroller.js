const dev = require('../models/Dev');

module.exports = {
  async store(req , res){
    const { devId } = req.params;
    const { user } = req.headers;
    const loggedDev = await dev.findById(user);
    const targetDev = await dev.findById(devId);
    if(!targetDev) {
      return res.status(400).json({ Erro : 'Dev not exists'});
    }
    
    loggedDev.deslikes.push(targetDev._id);
    await loggedDev.save();
    return res.json(loggedDev); 
  }
};