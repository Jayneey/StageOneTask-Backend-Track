const express = require('express');
const app = express();

app.get('/', async (req, res) => {
	const clientIp = req.ip; 
	let location = 'Unknown Location';})

	try {
		const response = await axios.get(`https://ipinfo.io/${clientIp}?token=bae27d16f97188`);
		location = response.data.city || 'Unknown Location'; 
	} catch (error) {
		console.error('Error fetching location:', error);
	}

	const visitorName =  req.query.name || 'Visitor';  
	const temperature = '20';const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
    const clientIp = req.ip;
    let location = 'Unknown Location'; 
    let temperature = 'Unknown';

    try {
        // Existing logic to fetch location
    } catch (error) {
        console.error('Error fetching location:', error);
    }

    const visitorName = req.query.name || 'Visitor';

    if (location !== 'Unknown Location') {
        try {
            const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ace9476b622f2ad978b7539f20e4c364&units=metric`);
            temperature = weatherResponse.data.main.temp + '°C';
        } catch (weatherError) {
            console.error('Error fetching temperature:', weatherError);
        }
    }

    const response = {
        client_ip: clientIp,
        location: location,
        greeting: `Hello, ${visitorName}! The temperature is ${temperature} in ${location}.`
    };

    res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})