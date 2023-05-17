const loadScript = (src)=>{
    return new Promise((resolve,reject)=>{

        //create an new div element  
        let script = document.createElement("script")

        //`script` element with the `type` attribute to include a JavaScript file in an HTML document: <script type="text/javascript" src="/path/to/script.js"></script>

        //but to directly attach the file via js, we will do this
        script.type = "text/javascript"

        //src is used to attach external file in HTML
        //but to directly attach the external file via js we can do this 
        script.src = src

        //The term "append" means to add something to the end of something else .In the context  of the `appendChild()` method , it means to add an element as the last child of a parent element.
        
        document.body.appendChild(script)

        script.onload = ()=>{
            //if script will load then this msg will be shown 
            resolve("script has been loaded")
        }
        script.onerror =()=>{
            //if script will fail to load due to some error or typos this msg will be shown
            reject("script has not been loaded")
        }
    })
}

//this is the right script so it will load successfully, but for testing `.catch` you can add some mistake in the script and error will be caught via function written below
let p1 = loadScript("http://www.google.com")
p1.then((value)=>{
    console.log(value)

    //i can load as many script as i want without callbackHell 
    //if you do error while writing it will be handled by `.catch` function
    return loadScript("http://www.instagram.com")
}).then((value)=>{
    console.log("2nd script has been loaded")
}).catch((error)=>{
    console.log("sorry, we are having some problem loading the script")
})














