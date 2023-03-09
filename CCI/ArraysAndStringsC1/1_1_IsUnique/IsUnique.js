
function isUnique(text){
    let characters = [];
    let isUniqueChar = true;

    for(let char of text){
        if(characters.includes(char)){
            isUniqueChar = false;
            break;
        }

        characters.push(char);
    }

    return isUniqueChar;

}

const inputs = [
    'Hello, This is the first test',
    '#21ds2fhgQsq',
    'My other',
    'JEUSIiasi',
    'Unique char'
];


for(let i of inputs){
    result = isUnique(i);
    resultText = `
    Result
        Input: ${i}
        Output: ${result}
    `;
    console.log(resultText);
}