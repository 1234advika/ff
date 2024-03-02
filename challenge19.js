document.addEventListener('DOMContentLoaded', function () {
    const listingsContainer = document.getElementById('listings');
    const searchInput = document.getElementById('searchInput');

    const properties = [
        { title: 'Spacious Apartment', location: 'New York', price: '$2000/month' },
        { title: 'Cozy House', location: 'Los Angeles', price: '$3000/month' },
        { title: 'Luxury Villa', location: 'Miami', price: '$5000/month' },
        { title: 'Modern Condo', location: 'San Francisco', price: '$2500/month' },
    ];

    displayListings(properties);

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProperties = properties.filter(property =>
            property.title.toLowerCase().includes(searchTerm) || 
            property.location.toLowerCase().includes(searchTerm)
        );
        displayListings(filteredProperties);
    });

    function displayListings(properties) {
        listingsContainer.innerHTML = '';
        properties.forEach(property => {
            const propertyDiv = document.createElement('div');
            propertyDiv.classList.add('property');
            propertyDiv.innerHTML = `
                <h2>${property.title}</h2>
                <p><strong>Location:</strong> ${property.location}</p>
                <p><strong>Price:</strong> ${property.price}</p>
            `;
            listingsContainer.appendChild(propertyDiv);
        });
    }
});