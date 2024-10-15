// Handle form submission
document.getElementById('travelForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user input values
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const interests = document.getElementById('interests').value;
    const budget = document.getElementById('budget').value;

    // Simulate calling an AI or external travel API for dynamic recommendations
    const aiGeneratedItinerary = generateItinerary(destination, startDate, endDate, interests, budget);

    // Display the generated itinerary
    const itineraryList = document.getElementById('itineraryList');
    itineraryList.innerHTML = '';  // Clear any previous results

    aiGeneratedItinerary.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itineraryList.appendChild(li);
    });

    // Show the itinerary section
    document.getElementById('itinerary').style.display = 'block';
});

// Mock AI itinerary generation function
function generateItinerary(destination, startDate, endDate, interests, budget) {
    // Simulate different activities based on user interests
    let activities = {
        culture: [
            `Visit the famous museum in ${destination}.`,
            `Explore the historical district.`,
            `Attend a local cultural performance.`
        ],
        adventure: [
            `Go hiking in the nearby mountains.`,
            `Try water sports at the local beach.`,
            `Book a guided adventure tour.`
        ],
        relaxation: [
            `Enjoy a day at the spa.`,
            `Relax at a scenic beach resort.`,
            `Take a calming nature walk.`
        ],
        nature: [
            `Visit a national park near ${destination}.`,
            `Explore the botanical gardens.`,
            `Take a boat tour through the natural reserves.`
        ]
    };

    // Create a simple itinerary
    return [
        `Day 1: Arrive in ${destination} and settle in.`,
        `Day 2: ${activities[interests][0]}`,
        `Day 3: ${activities[interests][1]}`,
        `Day 4: Free day to explore and relax.`,
        `Day 5: ${activities[interests][2]}`,
        `Day 6: Departure from ${destination}.`
    ];
}
