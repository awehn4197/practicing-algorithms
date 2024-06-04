/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2]).then(results => results.reduce(
        (acc, nextVal) => acc + nextVal,
        0
    ))
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */