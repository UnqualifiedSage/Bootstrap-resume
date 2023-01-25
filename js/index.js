const date =  new Date()
const birthday = document.querySelector("#birthday")
console.log(date.getDate())
console.log(date.getMonth())
getBirthday()
function getBirthday(){
    if(date.getMonth()>=0 && date.getDate()>=2){
        birthday.innerHTML = date.getFullYear()-1996
        return
    }
    birthday.innerHTML = date.getFullYear()-1996-1
}




