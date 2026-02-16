
// let workapi="http://localhost:3000"

let workapi="https://backend.kooliapp.in"

let workerRegister=workapi+'/server/user/register/'

let workerLogin=workapi+'/server/user/login'

let workerauth=workapi+'/server/authenticate/worker'

let providerauth=workapi+'/server/authenticate/provider'

let workerotp=workapi+'/server/user/verifyOtp'

let workProfileupload=workapi+'/api/worker/setProfile'

let workerprofileget=workapi+'/api/worker/getprofile'

let workerWorkGet=workapi+'/server/worker/getWork'

let locationAll=workapi+'/server/location'

let workerjobadd=workapi+'/api/worker/addjobs'

let workerjobclear=workapi+'/api/worker/clearjobs'

let workerAddress=workapi+'/api/worker/address'

let Allwork=workapi+'/server/worker/getAllWork'

let purchase=workapi+'/server/provider/purchase'

let userWork=workapi+'/server/worker/createWork'

let verifyAddress=workapi+'/api/worker/verifyAddress'

let verifyPayment=workapi+'/server/provider/verifyPay'


let worker_register=workapi+'/api/worker/register-provider'
 
let worke_provider_login=workapi+'/api/worker/login-provider'


let deleteWork=workapi+'/server/worker/deleteWork'

let workersListBylocation=workapi+'/server/provider/getworker'

let forgotPasswordApi=workapi+'/server/user/forgetPassword'

let verifyOtpApi=workapi+'/server/user/updatePassword'
module.exports={
    workerRegister,
    workerLogin,
    workerauth,
    workerotp,
    workProfileupload,
    workerprofileget,
    workerjobadd,
    workerjobclear,
    workerAddress,
    Allwork,
    userWork,
    verifyAddress,
    verifyPayment,
    worker_register,
    worke_provider_login,
    workerWorkGet,
    locationAll,
    deleteWork,
    workersListBylocation,
    purchase,
    forgotPasswordApi,
    verifyOtpApi,
    providerauth
}