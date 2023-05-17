    let text = "my name is alok tiwari ."
    let textArray = text.split(' ')
    let textLength = textArray.length
    console.log(textLength)
    // let lastLetter = textArray[textArray.length-1]
    // console.log(lastLetter)
    let capitalizedSentence = '';
    for(let i=0; i<=textLength; i++){
        if (textArray[i-1]==="."){
            capitalizedSentence += textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1) + ' ';
            //return capitalizedSentence

        }else{
            capitalizedSentence += textArray[i] + ' '
            //return capitalizedSentence
        }
    }
    console.log(text)



    