// baking a cake setTimeout(()=>{}, time_in_miliseconds)
const ingredients = {
    fruits: ['apple', 'strawberry', 'banana'],
    holders: ['cone', 'cup', 'square'],
    toppings:['chocolate', 'milk toast', 'ice']
}

const order = () => {
    console.log('Order recieved')
    production('strawberry')
}
const production = (fruit = ingredients.fruits[0], holder = ingredients.holders[0], topping = ingredients.toppings[1]) => {
    const check_input = ()=> {
    fruitList = ingredients.fruits;
    holderList = ingredients.holders;
    toppingList = ingredients.toppings;
try {
    if (!fruitList.includes(fruit)) {
        throw new Error(`${fruit} is unavailable`);
    }

    if (!holderList.includes(holder)) {
        throw new Error(`${holder} is unavailable`).message;
    }

    if (!toppingList.includes(topping)) {
        throw new Error(`${topping} is unavailable`);
    }
}
catch(error){
    console.log(error.message, "Exiting.....")
    process.exit(1)
    
}
}
check_input()

 setTimeout(()=>{
    console.log("Starting Production")
    setTimeout(()=>{
        console.log(`"${fruit}" is ready`)
        setTimeout(()=>{
            console.log(`cake placed on "${holder}"`)
            setTimeout(() => {
                console.log(`"${topping}" added`)
                setTimeout(()=>{
                    console.log("Starting Machine")
                    setTimeout(()=>{
                        console.log("Baking almost complete")
                        setTimeout(()=>{
                            console.log('Cake ready!.........Serving')
                        }, 1000)
                    },2000)
                 }, 1000)
            },1000)
         }, 1000)
    }, 1000)
 }, 2000)
}
order(production)