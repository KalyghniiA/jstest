const race = async (promises) => {
    try {
        for (let promise of promises) {
            const resolve = await promise.resolve();
            if (resolve.status === "fulfilled") {
                return resolve;
            }
        }
    } catch (error) {
        console.error(error);
    }
}