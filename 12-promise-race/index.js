const race = async (promises) => {
    try {
        const data = await Promise.all(promises);
        return data[0];
    } catch (error) {
        console.error(error);
    }
}