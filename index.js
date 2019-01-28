// Write your solution in this file!
 const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  new_driver = driver;
  new_driver[key] = value;
  return new_driver;
};

function deleteFromDriverByKey(driver, key) {
  const driver_clone = Object.assign({}, driver);
  delete driver_clone[key];
  return driver_clone;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
};
