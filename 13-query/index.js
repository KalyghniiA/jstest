const params = {
    search: "Вася",
    take: 10,
}

const createQuery = params => {
    let query = "";
    const paramsKeys = Object.keys(params);
    for (let paramKey of paramsKeys) {
        query += `${paramKey}=${params[paramKey]}&`;
    }

    return query.slice(0, query.length - 1);
}


console.log(createQuery(params));
