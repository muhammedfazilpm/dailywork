
// let workapi="http://localhost:5000"

let workapi="https://dailyworkback.vercel.app"

let workerRegister=workapi+'/api/worker/register/'

let workerLogin=workapi+'/api/worker/login/'

let workerauth=workapi+'/api/workers/auth'



module.exports={
    workerRegister,
    workerLogin,
    workerauth
}