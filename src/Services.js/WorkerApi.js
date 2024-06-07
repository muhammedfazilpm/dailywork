
// let workapi="http://localhost:5000"

let workapi="https://dailyworkback.vercel.app"

let workerRegister=workapi+'/api/worker/register/'

let workerLogin=workapi+'/api/worker/login/'

let workerauth=workapi+'/api/workers/auth'

let workerotp=workapi+'/api/worker/checkotp'

let workProfileupload=workapi+'/api/worker/setProfile'

let workerprofileget=workapi+'/api/worker/getprofile'

let workerjobadd=workapi+'/api/worker/addjobs'

let workerjobclear=workapi+'/api/worker/clearjobs'



module.exports={
    workerRegister,
    workerLogin,
    workerauth,
    workerotp,
    workProfileupload,
    workerprofileget,
    workerjobadd,
    workerjobclear
}