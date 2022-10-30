const State = require('../models/State');
const City = require('../models/City');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');



const getAllStates = async (req, res) => {
    const state = await State.find({}).populate('cities');
    res.status(StatusCodes.OK).json({ state });
  };


  const getSingleState = async (req, res) => {
    const { id: stateId } = req.params;
  
    const state = await State.findOne({ _id: stateId }).populate('cities');
  
    if (!state) {
      throw new CustomError.NotFoundError(`No state with id : ${stateId}`);
    }
    res.status(StatusCodes.OK).json({ state });
  };

  const createState = async (req, res) => {
    const state = await State.create(req.body);
    res.status(StatusCodes.CREATED).json({ state });
  };

  const updateState = async (req, res) => {
    const { id: stateId } = req.params;
  
    const state = await State.findOneAndUpdate({ _id: stateId }, req.body, {
      new: true,runValidators: true, });
  
    if (!state) {
      throw new CustomError.NotFoundError(`No state with id : ${stateId}`);
    }
  
    res.status(StatusCodes.OK).json({ state });
  };


  const deleteState = async (req, res) => {
    const { id: stateId } = req.params;
  
    const state = await State.findOne({ _id: stateId });
  
    const city = await City.findOne({state:stateId})

    if(city == null){ await state.remove(); } else{ await City.remove(city) }
    if (!state) {throw new CustomError.NotFoundError(`No state with id : ${stateId}`);}

    await state.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! state removed.' });
  };



  module.exports = {
    getAllStates,getSingleState,
    deleteState ,createState ,updateState
  };
  