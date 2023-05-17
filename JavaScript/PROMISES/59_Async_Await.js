async function weather(){
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 degrees")
        },2000)
    })
    let biharWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("15 degrees")
        },5000)
    })

    console.log("fetching the weather of DELHI, please wait.......")
    //await stops the further code and fulfill the current code, after fulfilling(resolve/reject) next code will execute
    let delhiW = await delhiWeather
    console.log("Weather of Delhi is : "+delhiW)

    console.log("fetching the weather of BIHAR, please wait.......")
    let biharW = await biharWeather
    console.log("Weather of Bihar is : "+biharW)

}
//console.log(weather())

/* 
const cherry = async()=>{
    console.log("hello motherfucker, i am not waiting")
}

const main1 = async()=>{
    console.log("welcome to weather control room")
    let a = weather()

    //this funtion will not wait for the execution of the weather() function
    let b = cherry()
}
console.log(main1())
 */




//Now cherry() have to wait for the execution of the weather() with the help await
const cherry = async()=>{
    console.log("hello sir, i am waiting")
}

const main1 = async()=>{
    console.log("welcome to weather control room")
    let a = await weather()
    let b = await cherry()
}
console.log(main1())