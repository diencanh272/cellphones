import { userCurrentSignup } from './userCurrentSignup';

function ShortName() {
    const arrStr = [];
    let text = userCurrentSignup.fullname;
    const myArray = text.split(' ');
    arrStr.push(myArray);

    const firstCharacters = arrStr.map((arr) => {
        const myCharacter = arr.map((word) => word[0]);
        return myCharacter[0];
    });

    let shortName = '';

    if (firstCharacters.length === 1) {
        shortName = firstCharacters[0];
    } else {
        shortName = `${firstCharacters[0]}${firstCharacters[firstCharacters.length - 1]}`;
    }

    return <p>{shortName}</p>;
}

export default ShortName;
