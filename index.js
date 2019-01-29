// Write your solution in this file!
const driver = {};

let updateDriverWithKeyAndValue = (driver, key, value) => {
    let modDriver = {...driver};
    modDriver[key] = value;
    return modDriver;
}

let destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value;
    return driver;
}

let deleteFromDriverByKey = (driver, key) => {
    let modDriver = {...driver};
    delete modDriver[key];
    return modDriver;
}

let destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key];
    return driver;
}