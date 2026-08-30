function getTicketPrice(isStudent) {
    if (isStudent) {
        return 10;
    }
    return 15;
}

console.log(getTicketPrice(true));  
console.log(getTicketPrice(false));



const getTicketPriceAnonymous = function(isStudent) {
    if (isStudent) {
        return 10;
    }
    return 15;
};

console.log(getTicketPriceAnonymous(true));  
console.log(getTicketPriceAnonymous(false)); 



const getTicketPriceArrow = (isStudent) => {
    if (isStudent) {
        return 10;
    }
    return 15;
};

console.log(getTicketPriceArrow(true)); 
console.log(getTicketPriceArrow(false)); 
