
const token=localStorage.getItem('token')

const headers={
    Authorization: `Bearer ${token}`,'Content-Type':'application/json'
}


module.exports={
    headers
}