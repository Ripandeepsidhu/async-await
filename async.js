const fetchAdviceById = async (id) => {
    try{
        const response= await fetch(`https://api.adviceslip.com/advice/${id}`);
        if(!response.ok){
            throw new Error ("Network response was not ok");
        }
        const data = await response.json();
        const advice = data.slip.advice;
        console.log(`Advice(ID: ${id}): ${advice}`);
    } 
    catch (error){}
};

function rollDice() {
    return new Promise ((resolve,reject )=> {
        const diceValue = Math.floor(Math.random()*6)+1;
        console.log(`You rolled: ${diceValue}`);
if(diceValue>=3){
    fetchAdviceById(diceValue);
    resolve('You win');
    
} else{
    reject('You lose');
}
});
}

const result = async () => {
    try{
        await rollDice();
    }catch(error){
        console.log(error);
    }
};
result();