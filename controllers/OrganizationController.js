const Organization = require('../models/Organization');
const City = require('../models/City');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const path = require('path');



const getAllOrganizations = async (req, res) => {

  const { isActive }= req.query
  const queryObject = {}

  if(isActive){

    queryObject.isActive = isActive
  }

  let result =  Organization.find(queryObject).
  populate({path:'city' ,select:'name -_id'}).populate({path:'branche.city' ,select:'name -_id'}).
  populate({path:'mainCenter.city' ,select:'name -_id'}).populate({path:'facilitiesAndCenter.city' ,select:'name -_id'});

  const organization = await result
    res.status(StatusCodes.OK).json({ organization  });
  };


  const getSingleOrganization = async (req, res) => {
    const { id: organizationId } = req.params;
  
    const organization = await Organization.findOne({ _id: organizationId }).
    populate({path:'city' ,select:'name -_id'}).populate({path:'branche.city' ,select:'name -_id'}).
    populate({path:'mainCenter.city' ,select:'name -_id'}).populate({path:'facilitiesAndCenter.city' ,select:'name -_id'});
  
    if (!organization) {
      throw new CustomError.NotFoundError(`No Organization with id : ${organizationId}`);
    }
    res.status(StatusCodes.OK).json({ organization });
  };



  const createOrganization = async (req, res) => {
    const { city : city } = req.body;

    const isExistCity = await City.findOne({ _id: city });
  
    if (!isExistCity) {
      throw new CustomError.NotFoundError(`No city with id : ${city}`);
    }

    const organization = await Organization.create(req.body);
    res.status(StatusCodes.CREATED).json({organization});
  };



  const updateOrganization = async (req, res) => {
    const { id: organizationId } = req.params;
  
    const organization = await Organization.findOneAndUpdate({ _id: organizationId }, req.body,
       { new: true, runValidators: true, });
  
    if (!organization) {
      throw new CustomError.NotFoundError(`No Organization with id : ${organizationId}`);
    }
  
    res.status(StatusCodes.OK).json({ organization });
  };



  const deleteOrganization = async (req, res) => {
    const { id: organizationId } = req.params;
  
    const organization = await Organization.findOne({ _id: organizationId });
  
    if (!organization) {
      throw new CustomError.NotFoundError(`No Organization with id : ${organizationId}`);
    }
  
    await organization.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Organization removed.' });
  };

  const uploadImage = async (req, res) => {
    if (!req.files) {
      throw new CustomError.BadRequestError('No File Uploaded');}
      const logoImage = req.files.logoImage;
   
 
  //  const maxSize = 1024 * 1024;
  //   if (logoImage.size > maxSize) {
  //     throw new CustomError.BadRequestError('Please upload image smaller 1MB');
  //        }

   if (!logoImage.mimetype.startsWith('image')) {
      throw new CustomError.BadRequestError('Please Upload logo image');
    }
  
    const imagePath = path.join(__dirname,'../public/uploads/images/' + `${logoImage.name}`);
    await logoImage.mv(imagePath);
    res.status(StatusCodes.OK).json({ image: `/images/${logoImage.name}` });
  };
  

  const isActive = async (req, res) => {
    const { id: organizationId , } = req.params;
  
    const organization =await Organization.findOneAndUpdate({_id:organizationId},{ isActive:'مرخصة'},);
  
    if (!organization) {
      throw new CustomError.NotFoundError(`No Organization with id : ${organizationId}`);
    }
    res.status(StatusCodes.OK).json({ msg: `Success! Organization is active`});
  };


  const uploadPdf = async (req, res) => {
    if (!req.files) {
      throw new CustomError.BadRequestError('No File Uploaded');}
      const pdf = req.files.pdf;
  
    const filePath = path.join(__dirname,'../public/uploads/charts/' + `${pdf.name}`);
    await pdf.mv(filePath);
    res.status(StatusCodes.OK).json({ file: `/charts/${pdf.name}` });
  };

//-------------

// const Counter = async (req, res) => {
//   const organization = await Organization.find({});
//   const user = await User.find({});
//   res.status(StatusCodes.OK).
//   json({ msg: `Count of organizations :${organization.length} , Count of users : ${user.length}`});
// };





  module.exports = {
    getAllOrganizations,getSingleOrganization,
    deleteOrganization ,createOrganization ,updateOrganization,
    uploadImage ,isActive ,uploadPdf
  };
  