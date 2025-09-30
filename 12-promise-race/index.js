const race = async (promises) => {
    try {
        return await Promise.race(promises);
    } catch (error) {
        console.error(error);
    }
}