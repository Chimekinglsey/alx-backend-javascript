const ingredients = {
    fruits: ['Apple', 'Strawberry', 'Banana'],
    holders: ['cone', 'cup', 'square'],
    toppings:['chocolate', 'milk toast', 'ice']
}

const fruitList = ingredients.fruits;
const holderList = ingredients.holders;
const toppingList = ingredients.toppings;


let fruit = fruitList[0]
let holder = holderList[0]
let topping = toppingList[1]

let is_open = true
//give default parameter values to order input
const order = (time=0, choiceFruit = fruit, choiceHolder = holder, choiceTopping = topping) => {
    const check_input = () => { 
    try {
        if (!fruitList.includes(choiceFruit))
            throw new Error(`${choiceFruit} is unavailable`);
        //override global fruit values for specific choice within catalogue
        else fruit = choiceFruit
    
        if (!holderList.includes(choiceHolder))
            throw new Error(`${choiceHolder} is unavailable`).message;
        //override default holder value, make the new choice available outside this local scope
        else holder = choiceHolder

    
        if (!toppingList.includes(choiceTopping))
            throw new Error(`${choiceTopping} is unavailable`);
        //override default topping value, make the new choice available outside this local scope

        else topping = choiceTopping
    }
    catch(error){
        console.log(error.message, "Exiting.....")
        process.exit(1)
        
    }
    }
    return new Promise((resolve, reject) => {
        if (is_open){
            setTimeout(()=>{
                resolve(console.log('Order recieved'))
                    if(fruit || holder || topping)
                        check_input(fruit, holder, topping)
                    else check_input()
            }, time)
        }
        else reject(()=>console.log("We have closed! Thank you"))
    })
}

// Utility function to create a Promise with a timeout
function createTimeoutPromise(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}
order(1000)
        // .then(()=>
        // {   
        //     return new Promise((resolve)=>{
        //         setTimeout( ()=>{
        //         resolve()
        //         console.log('Processing Order')}, 1000)
        //     })
        // })
        // .then(()=>{
        //     return new Promise((resolve) => {
        //         setTimeout(()=> resolve(console.log(`"${fruit}" is ready`)), 1000)
        //     })
        // })
        // .then(()=>{
        //     return new Promise((resolve)=>{
        //         setTimeout(()=>resolve(console.log(`cake placed on "${holder}"`)),1000)
        //     })
        // })
        // .then(()=>{
        //     return new Promise((resolve)=>{
        //         setTimeout(()=>resolve(console.log(`"${topping}" added`)),1000)
        //     })
        // })
        // .then(()=>{
        //     return new Promise((resolve)=>{
        //         setTimeout(()=>resolve(console.log(`Starting Machine`)),1000)
        //     })
        // })
        // .then(()=>{
        //     return new Promise((resolve)=>{
        //         setTimeout(()=>resolve(console.log(`Baking almost complete`)),1000)
        //     })
        // })
        // .then(()=>{
        //     return new Promise((resolve)=>{
        //         setTimeout(()=>resolve(console.log(`Cake ready!.........Serving`)),1000)
        //     })
        // })
        .then(() => createTimeoutPromise(1000))
        .then(() => {
            console.log('Processing Order');
            return createTimeoutPromise(1000);
        })
        .then(() => {
            console.log(`"${fruit}" is ready`);
            return createTimeoutPromise(1000);
        })
        .then(() => {
            console.log(`cake placed on "${holder}"`);
            return createTimeoutPromise(1000);
        })
        .then(() => {
            console.log(`"${topping}" added`);
            return createTimeoutPromise(1000);
        })
        .then(() => {
            console.log('Starting Machine');
            return createTimeoutPromise(1000);
        })
        .then(() => {
            console.log('Baking almost complete');
            return createTimeoutPromise(1000);
        })
        .then(() => {
            console.log('Cake ready!.........Serving');
        })
        .catch((error) => {
            console.error(error.message, "Exiting.....");
            process.exit(1);
        });