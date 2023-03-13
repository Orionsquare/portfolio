function sleep(ms){
    return new Promise((resolve) => setTimeout (resolve, ms));
}
const phrases = ['email me', 'call me', 'meet me', 'hire me'];
const el = document.getElementById("typewriter");
let sleepTime = 200;
let currPhraseIndex = 0;
const writeLoop = async() =>{
    while (true){
        let currWord = phrases[currPhraseIndex];
        for(let i=0; i<currWord.length; i++){
            el.innerText = currWord.substring(0, i+1);
            await sleep(sleepTime);
        }
        
        await sleep(sleepTime * 10);
        for(let i=currWord.length; i>0; i--){
            el.innerText = currWord.substring(0, i-1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 5);

        if(currPhraseIndex === phrases.length -1) {
            currPhraseIndex = 0;
        } else {
            currPhraseIndex ++;
        }
        }
};
writeLoop();