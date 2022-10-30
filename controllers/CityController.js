const City = require('../models/City');
const State = require('../models/State');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');



const getAllCities = async (req, res) => {
    const cities = await City.find({ }).select('name -_id').populate({path:'state' ,select:'name'});
    res.status(StatusCodes.OK).json({ cities });
  };


  const getSingleCity = async (req, res) => {
    const { id: cityId } = req.params;
  
    const city = await City.findOne({ _id: cityId }).select('name -_id').populate({path:'state' ,select:'name'});
  
    if (!city) {
      throw new CustomError.NotFoundError(`No city with id : ${cityId}`);
    }
    res.status(StatusCodes.OK).json({ city });
  };

  const createCity = async (req, res) => {

    const { state } = req.body;

    const isExistState = await State.findOne({ _id: state });
  
    if (!isExistState) {
      throw new CustomError.NotFoundError(`No state with id : ${state}`);
    }


    const city = await City.create(req.body);
    res.status(StatusCodes.CREATED).json({ city });
  };

  const updateCity= async (req, res) => {
    const { id: cityId } = req.params;
  
    const city = await City.findOneAndUpdate({ _id: cityId }, req.body, {
      new: true,runValidators: true, });
  
    if (!city) {
      throw new CustomError.NotFoundError(`No state with id : ${cityId}`);
    }
  
    res.status(StatusCodes.OK).json({ city });
  };


  const deleteCity = async (req, res) => {
    const { id: cityId } = req.params;
  
    const city = await City.findOne({ _id: cityId });
  
    if (!city) {
      throw new CustomError.NotFoundError(`No city with id : ${cityId}`);
    }
  
    await city.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! City removed.' });
  };



  module.exports = {
    getAllCities,getSingleCity,
    deleteCity ,createCity ,updateCity
  };
  