type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum }

// INSTEAD OF WRITING THIS WITH CODE DUPLICATION

const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has uid of ${uid}`);
}

const greet = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello`);
}

//WE CAN WRITE THIS USING TYPE ALIAS

const logDetails2 = (uid: StringOrNum, item: string) => {
    console.log(`${item} has uid of ${uid}`);
}

const greet2 = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}