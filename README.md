# Finda
A website that collects posts from itch.io game jam community forums that are looking for teams using React and Nextjs.

## Features
- Collects posts from ongoing and upcoming game jams that have more than 300 participants.
- Filters posts based on title to collect only those that are looking for team/members. 
- Filter posts based on your desired role. 

## How to run locally
- Clone findateam repo ``https://github.com/cdricn/finda.git``
- Clone the [scraper API](https://github.com/cdricn/itch-jamcommunity-api) ``https://github.com/cdricn/itch-jamcommunity-api.git``
- You'll need node.js to run the scraper API. You can download from their [website](https://nodejs.org/en/download).
- Run the Scraper API with ``npm run start``.
- Go to the findateam app and create an ``.env.local`` file and add this line with the port the API is running on ``API_ENDPOINT="http://localhost:{your port}"``.
- Run findateam with ``npm run dev``.

