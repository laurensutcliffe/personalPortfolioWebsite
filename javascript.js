let facts = {
    0 : "I've completed a backwards bungy jump.",
    1 : "I am passionate about software development.",
    2 : "I spontaneously backpacked the East Coast of Australia.",
    3 : "I enjoy console gaming.",
    4 : "I use MacOs and Windows Daily",
    5 : "I am left handed.",
    6 : "I have been to the top of the tallest building in the world.",
    7 : "I built my own PC."
    

}

let ranNum = () => Math.round(Math.random()*4)
let counter = 0



let randomFacts = () => {
    
    document.getElementById("factsP").innerHTML = facts[counter];
    counter++;
    if(counter > 7){
        counter = 0;
    }
}