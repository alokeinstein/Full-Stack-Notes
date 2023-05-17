//If we give a undefined value in the console it will throw an error, for handling the error or try to solve it we will use : try{}catch(){}
setTimeout(()=>{
    console.log("Searching for the Nearest Device...")
},2000)

setTimeout(()=>{
    //it will throw an error 
    //console.log(rahul)

    try{
        console.log(rahul)
    }catch(error){
        //i can write anything in the console as i wish like "error has been handled"
        console.log(error)
    }
},3000)

setTimeout(()=>{
    console.log("Connecting to Asus : UserName : Vivek Tiwari")
    console.log("Hacking Wifi Password.....")
},4000)


//UNNECESSARY CODE DOWN THERE JUST FOR PRANK 
/* setTimeout(()=>{
    console.log("Password : vkt12345 ")
    console.log("PASSWORD CRACKED")
},10000)

setTimeout(()=>{
    console.log("Customizing the Device")
},13000)

setTimeout(()=>{
    let a = prompt("Do you want to fetch whatsapp data?")
    if (a==="yes"){alert("fetching data from phone.....")}
},16000)

setTimeout(()=>{
    alert("Data is sended on the server")
    alert("hacking complete")
},20000)


setTimeout(()=>{
    console.warn("Phone No: 91+ 7531031254")
},23000)

setTimeout(()=>{
    console.warn("WARNING: Whatsapp Photos sending on the server")
},27000)

 */