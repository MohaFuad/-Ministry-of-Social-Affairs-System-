const express = require('express');
const router = express.Router();
const { authenticateUser,} = require('../middleware/authentication');
const {
    getAllOrganizations , getSingleOrganization ,deleteOrganization ,createOrganization
    ,updateOrganization  ,isActive ,uploadPdf ,uploadImage
  } = require('../controllers/OrganizationController')
  
  router.route('/').get(authenticateUser,getAllOrganizations).post(authenticateUser,createOrganization)
  router.route('/:id').get(authenticateUser,getSingleOrganization )
  router.route('/:id').delete(authenticateUser,deleteOrganization ).patch(authenticateUser,updateOrganization)
  router.route('/upload').post(uploadPdf)
  router.route('/uploadImage').post(uploadImage)
  router.route('/active/:id').patch(authenticateUser,isActive)

  module.exports = router;