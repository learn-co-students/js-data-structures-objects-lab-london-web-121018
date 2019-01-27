// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    let newobj = Object.assign({}, driver, {[key]: value});

    return newobj;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

    return driver;
};

function deleteFromDriverByKey(driver, key) {
    let newobj = Object.assign({}, driver);

    return delete newobj.key;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    return delete driver[key];
}

