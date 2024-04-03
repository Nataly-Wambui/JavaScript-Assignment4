//Question 1
function arrayOperations(numbers){
    let firstFour = numbers.slice(0,4).map(x=> x*x);
    let lastTwo = numbers.slice(-2).map(x=> x+10);
    let middleNums = numbers.slice(4,-2);
    let newValues = firstFour .concat(middleNums).concat(lastTwo);
    console.log({newValues});
    return newValues
}
arrayOperations([2,3,4,5,6,7,8,9,10]);

//Question 2
function loopThrough(){
    let arrNum = [1,2,3,4,5,6,7,8,9];
    let i = 0
    while(arrNum.indexOf(i) <4){
        console.log("Item less than index 4");
            break;
    
    }
}
loopThrough();

//Question 3
function manyFruits(fruits){
    for(let i = 0; i< fruits.length; i++){
        if (i === 2){
            continue;
        }
        console.log(fruits[i]);
    }
}
manyFruits(["apple", "plum", "banana", "strawberries", "kiwi"])


//Question4
function arrayOfStrings(people){
    for(let i = 0;i < people.length; i++){
        console.log(people[i]);
    }
}
arrayOfStrings(["Nataly", "Wise", "Les", "Wes", "Ivy", "Mary"]);


//Question5
function myName(name){
    let reverseName = "";
    let i = name.length -1;
    while (i >= 0) {
        reverseName += name[i];
        i --;
    }
    return reverseName;
}
console.log(myName("Nataly"));


