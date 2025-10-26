
// let workapi="http://localhost:5000"

let workapi="http://localhost:5000"

let workerRegister=workapi+'/api/worker/register/'

let workerLogin=workapi+'/api/worker/login/'

let workerauth=workapi+'/api/auth/worker'

let workerotp=workapi+'/api/worker/checkotp'

let workProfileupload=workapi+'/api/worker/setProfile'

let workerprofileget=workapi+'/api/worker/getprofile'

let workerjobadd=workapi+'/api/worker/addjobs'

let workerjobclear=workapi+'/api/worker/clearjobs'

let workerAddress=workapi+'/api/worker/address'

let Allwork=workapi+'/api/worker/work'

let userWork=workapi+'/api/worker/userwork'

let verifyAddress=workapi+'/api/worker/verifyAddress'

let verifyPayment=workapi+'/api/worker/verifyPayment'


let worker_register=workapi+'/api/worker/register-provider'
 
let worke_provider_login=workapi+'/api/worker/login-provider'

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
    worke_provider_login
}