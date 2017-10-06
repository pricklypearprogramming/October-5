const client = filestack.init('YOUR_API_KEY');

const results = document.getElementById('result');

const setResults = res => {
    const files = res.filesUploaded.map(JSON.stringify);
    return results.innerHTML = files;
};
const openPicker = () => {
    return client.pick({
    maxFiles: 1
})
    .then(setResults);
}