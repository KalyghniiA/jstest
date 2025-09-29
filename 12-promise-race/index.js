const race = async (promises) => {
    for (let promise in promises) {
        if (promise.ok === true)
            return promise;
    }
}

