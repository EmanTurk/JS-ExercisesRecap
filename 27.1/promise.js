//nesting function-callback hell- use promises instead-easier to read. 
const numberValue = (num) =>{
    return new Promise((resolve, reject)=>
{
    if (num > 10){
        resolve();
    }
    else{
        reject ();
    }
});
};
numberValue ()///change the number here to test-I tried it's working!
.then(()=>{
    console.log('Greater than 10!');
})
.catch (()=>{
    console.log('Oops');
});