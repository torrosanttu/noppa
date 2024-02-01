const getRandomIntNumberInRange = (min,max) => {
    return (Math.floor(Math.random() * max)) + min;
}

document.querySelector('button').addEventListener('click',() => {
    const randomized_number = getRandomIntNumberInRange(1,6)

    document.querySelector(".img1").setAttribute("src", 
    "./img/dice"+randomized_number+".png"); 
})

 


