
const mongoose = require('mongoose')
const validator = require('validator');


const ActivitiesAndProjectsByOthersOrganizationSchema = mongoose.Schema({
  name: {type: String,  },
  fundingSourceAndNationality: { type: String, },
    executionPlace: { type: String,},
    numberBeneficiaries: { type: Number, },
    executionTime: {type: String, },
    costProject: {type: String, },
   
});
const BankAccountSchema = new mongoose.Schema(
  {
    bankName: {type: String,}, address: { type: String,}, numberAccount: {type: String,},currency: { type: String,  },
      balance: {type: String,},
  },
)

const BoardOfTrusteSchema = new mongoose.Schema(
  {
    name: {type: String,},dateOfBirth: { type: Date, },
      placeOfBirth: {type: Date,}, job: {type: String,  },
      adjective: { type: String,},
      phone: {type: String,},
      currentPlace: { type: String, },
     
  },
)

const EmployeeStatsSchema = new mongoose.Schema(
  {
    maleStaff: { type: Number,}, femaleStaff: {type: Number, },
      noteStaff: { type: String,},maleContractors: {type: Number, },
      femaleContractors: { type: Number, }, noteContractors: { type: String,},
      maleVolunteers: { type: Number, },
      femaleVolunteers: {type: Number, },
      noteVolunteers: {type: String,},
      maleOthers: {type: Number, },
      femaleOthers: { type: Number, }, noteOthers: { type: String,},
    
  },
)

const ExpenditureSchema = new mongoose.Schema(
  {
    nameExpenditure: {type: String,},credit: {type: String, },
      note: {type: String,},
      
  },
)

const FounderSchema = new mongoose.Schema(
  {
    name: { type: String,},
    dateOfBirth: {  type: Date,  }, placeOfBirth: { type: Date, },
      job: { type: String, },
      gualification: {  type: String,}, phone: { type: String, },
      currentPlace: { type: String, },
     
  },
)

const OrganizationGoalSchema = new mongoose.Schema(
  {
    goal: {type: String, },
  },
)

const OrganizationProjectSchema = new mongoose.Schema(
  {
    name: {type: String,},fundingSource: { type: String, },
      ExecutionPlace: { type: String, },beneficiaries: { type: String, },
      costProject: { type: String,},
  },
)
const OrganizationRegulationSchema = new mongoose.Schema(
  {
    regulation: {type: String, },
    isAvailable: {type: String, enum: { values: ['غير متوفر', 'متوفر'],message: '{VALUE} is not supported', }, },
      numberDoors: { type: String,},
      numberLuck: {type: String,},numberMaterials: {type: String,},
      note: { type: String,},
      
  },
)

const OversightCommitteSchema = new mongoose.Schema(
  {
    name: {type: String, },
    dateOfBirth: {type: Date, },
      placeOfBirth: { type: Date,  },
      job: {type: String, },
      qualification: { type: String,  },
      phone: {type: String,},
      currentPlace: { type: String, },
     
  },
)

const PeopleAndSupportingStationSchema = new mongoose.Schema(
  {
    nameSupportingStation: {type: String,}, nationality: {  type: String, },
      
  },
)

const ProjectsByPeopleSchema = new mongoose.Schema(
  {
    name: {
      type: String, },
    fundingSource: { type: String,},executionPlace: {type: String, },beneficiaries: { type: String, },
      executionTime: { type: String, },
      costProject: { type: String, },
     
  },
)

const RevenueSchema = new mongoose.Schema(
  {
    nameRevenue: { type: String, }, debit: { type: String,
      }, note: { type: String, },
     
  },
)

const StandingCommitteSchema = new mongoose.Schema(
  {
    name: { type: String,},
    countMale: {type: Number, },
      countFemale: { type: Number, },
      note: {  type: String, },
     
  },
)

//------

const MainCenterSchema = new mongoose.Schema(
  {
    street: { type: String, },
      buildingType: { type: String, },
      ownOrRent: {type: String,
        enum: { values: ['إيجار ', 'ملك'], message: '{VALUE} is not supported',},},
      city: { type: mongoose.Types.ObjectId,
        ref:'City'},
     
  },
)


const BrancheSchema = new mongoose.Schema(
  {
    name: {type: String,},
    dateCreated: {  type: Date,},
      permitNumber: { type: String,  },
      street: {type: String,},
      ownOrRent: { type: String, enum: { values: ['إيجار', 'ملك'], message: '{VALUE} is not supported', }, },
      city: { type: mongoose.Types.ObjectId,
        ref:'City'},
   
  },
)

const FacilitiesAndCenterSchema = new mongoose.Schema(
  {
    name: {type: String,},
    dateCreated: { type: Date,},
      activityType: { type: String, },
      phone: {type: String, },
      city: { type: mongoose.Types.ObjectId,
        ref:'City'},
     
  },
)


const RisksSchema = new mongoose.Schema(
  {
    Risk: {type: String,}
  },
)

//--------------
const OrganizationSchema = new mongoose.Schema(
  {
    nameAr: {
      type: String,
    
    },
    nameEn: {
        type: String,
      
      },
    type: {
      type: String,
   
    },
    lastRenewalDate: {
      type: Date,

    },
    permitNumber: {
        type: String,
     
      },
      permitDate: {
        type: Date,
       
      },
      fieldWork: {
        type: String,
       
      },
      email: {
        type: String,
        validate: {
          validator: validator.isEmail,
          message: 'Please provide valid email',
        },
      },
      website: {
        type: String,
      },
      isActive: {
        type: String,
        default:'غير مرخصة'
      },
      phone: {
        type: String,
      },
      localOrInternational: {
        type: String,
        enum: {
          values: [' محلية', 'دولية'],
          message: '{VALUE} is not supported',
        },
      },
      logo: {
        type: String,
      },

      OrganizationalChart: {
        type: String,
      },
      city: {type: mongoose.Types.ObjectId,ref:'City',},
      activitiesAndProjectsByOthersOrganization :[ActivitiesAndProjectsByOthersOrganizationSchema],
      bankAccount:[BankAccountSchema],
      boardOfTruste:[BoardOfTrusteSchema],
      employeeStats:[EmployeeStatsSchema],
      expenditure:[ExpenditureSchema],
      founder:[FounderSchema],
      organizationGoal:[OrganizationGoalSchema],
      organizationProject:[OrganizationProjectSchema],
      organizationRegulation:[OrganizationRegulationSchema],
      oversightCommitte:[OversightCommitteSchema],
      peopleAndSupporting:[PeopleAndSupportingStationSchema],
      projectsByPeople:[ProjectsByPeopleSchema],
      revenue:[RevenueSchema],
      standingCommitte:[StandingCommitteSchema],
      mainCenter:[MainCenterSchema],
      branche:[BrancheSchema],
      facilitiesAndCenter:[FacilitiesAndCenterSchema],
      risks:[RisksSchema]

  },
 
)

module.exports = mongoose.model('Organization', OrganizationSchema)
 