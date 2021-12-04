export const validateRegister = (form) => {
  const {
    email,
    password,
    phoneNumber,
    occupation,
    finance,
    dobDay,
    dobMonth,
    dobYear,
    education,
    name,
    idNumber,
    biologicalAge,
    overyAge,
    amhLevel,
    lifeCycle,
    pregCycle,
    menstrualCycle,
    crampCycle,
    bleedCycle,
  } = form
  let errors = {}

  if (!name) {
    errors.name = 'Name is required.'
  }
  if (!email) {
    errors.email = 'Email is required.'
  }else if(!validateEmail(email)){
   errors.email = 'Email is not valid.'
  }
  if(!password){
   errors.password = 'Please enter password';
  }else if(password.length <8){
   errors.password = 'Password must be atleast 8 characters'
  }
  if(dobDay === 'DD' || dobMonth === 'MM' || dobYear === 'YYYY'){
   errors.dob = 'Please select Date of birth'
  }
  if(education=== '-1'){
   errors.education = 'Please select education'
  }
  if(occupation=== '-1'){
   errors.occupation = 'Please select occupation'
   }
   if(!idNumber){
    errors.idNumber = 'Please enter ID Number'
   }
   if(!phoneNumber){
    errors.phoneNumber = 'Please enter your phone number'
   }
   if(!biologicalAge){
   errors.biologicalAge = 'Please enter Biological Age'
  }
  if(!amhLevel){
   errors.amhLevel = 'Please enter AMH Level'
  }
  if(!overyAge){
   errors.overyAge = 'Please enter Overy Age'
  }

  return errors
}

export const validateLogin=({email, password})=>{
  let errors = {}

  if (!email) {
    errors.email = 'Email is required.'
  }else if(!validateEmail(email)){
   errors.email = 'Email is not valid.'
  }
  if(!password){
   errors.password = 'Please enter password';
  }else if(password.length < 8){
   errors.password = 'Password must be atleast 8 characters'
  }
  return errors;
}

export const validateUserData = (form) => {
  const {
    phoneNumber,
    occupation,
    finance,
    dobDay,
    dobMonth,
    dobYear,
    education,
    biologicalAge,
    overyAge,
    amhLevel,
    lifeCycle,
    pregCycle,
    menstrualCycle,
    crampCycle,
    bleedCycle,
  } = form
  let errors = {}

  if(dobDay == '' || dobMonth == '' || dobYear == ''){
   errors.dob = 'Please select Date of birth'
  }
  if(education=== '-1'){
   errors.education = 'Please select education'
  }
  if(occupation=== '-1'){
   errors.occupation = 'Please select occupation'
   }
   if(!biologicalAge){
   errors.biologicalAge = 'Please enter Biological Age'
  }
  if(!amhLevel){
   errors.amhLevel = 'Please enter AMH Level'
  }
  if(!overyAge){
   errors.overyAge = 'Please enter Overy Age'
  }
  if(!phoneNumber){
    errors.phoneNumber = 'Please enter your phone number'
   }

  return errors
}

function validateEmail(email) {
  let regxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (email.match(regxEmail)) {
    return true
  } else {
    return false
  }
}
