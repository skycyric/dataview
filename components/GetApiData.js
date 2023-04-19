const GetApiData = async (apiKey, keyword, startDate, endDate) => {
    const url = `https://api.similarweb.com/v4/keywords/keyword/analysis/organic-competitors?api_key=${apiKey}&keyword=${keyword}&start_date=${startDate}&end_date=${endDate}&country=tw&metrics=traffic,organic-vs-paid,volume,cpc&format=json&limit=30&sort=traffic_share`;
    try {
        const response = await fetch(url);
        const apiData = await response.json();
        return {
            data: apiData.traffic_breakdown,
            volume: apiData.search_volume.volume,
        };
    } catch (error) {
        console.error(error);
    }
};

export default GetApiData;