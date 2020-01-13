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
    if (targetDev.likes.includes(loggedDev._id)){
      console.log('LIKO MAN');
    }
    loggedDev.likes.push(targetDev._id);
    await loggedDev.save();
    return res.json(loggedDev); 
  }
};