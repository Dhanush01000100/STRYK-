// Jersey data
const jerseys = [
    {
        id: 1,
        name: "Manchester United Home 2023/24",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The official 2023/24 Manchester United home jersey features the iconic red color with black trim. Made with advanced moisture-wicking fabric to keep you cool and comfortable during the game. Features the club crest and sponsor logo.",
        reviews: [
            { user: "RedDevil4Life", text: "Perfect fit and amazing quality. The fabric feels premium!" },
            { user: "MUFC_Fan", text: "Love the new design. The details are incredible." },
            { user: "SoccerLover", text: "Great jersey, arrived quickly. Highly recommend!" }
        ]
    },
    {
        id: 2,
        name: "Real Madrid Away 2023/24",
        price: "$94.99",
        image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The striking Real Madrid away jersey for the 2023/24 season features a bold purple and black design. Engineered for performance with breathable fabric and ergonomic fit. Includes club crest and sponsor.",
        reviews: [
            { user: "HalaMadrid", text: "The colors look even better in person. Super comfortable." },
            { user: "CR7Forever", text: "Great quality as always from Real Madrid." },
            { user: "FootballFanatic", text: "Perfect for match days. Fits true to size." }
        ]
    },
    {
        id: 3,
        name: "Barcelona Home 2023/24",
        price: "$87.99",
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The classic Barcelona home jersey maintains the traditional blue and red stripes with gold accents for the 2023/24 season. Lightweight fabric with enhanced ventilation for optimal performance.",
        reviews: [
            { user: "BarcaFan", text: "Beautiful jersey, the gold details are stunning." },
            { user: "Messi10", text: "The fit is perfect and the material is top quality." },
            { user: "LaLigaLover", text: "Fast shipping and great customer service." }
        ]
    },
    {
        id: 4,
        name: "Liverpool Third 2023/24",
        price: "$82.99",
        image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Liverpool's third jersey for the 2023/24 season features a unique black and teal design. Made with recycled materials as part of the club's sustainability initiative. Includes all official branding.",
        reviews: [
            { user: "YNWA", text: "Love the eco-friendly approach. Jersey looks amazing." },
            { user: "Kopite", text: "The design is even better in person. Very comfortable." },
            { user: "PremierLeagueFan", text: "Great alternative to the home jersey." }
        ]
    },
    {
        id: 5,
        name: "Bayern Munich Home 2023/24",
        price: "$91.99",
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The iconic red Bayern Munich home jersey with white trim for the 2023/24 season. Features advanced Dri-FIT technology to keep you dry and comfortable. Includes all official logos and badges.",
        reviews: [
            { user: "MiaSanMia", text: "Perfect replica of what the players wear." },
            { user: "BundesligaFan", text: "Excellent quality and true to size." },
            { user: "FootballCollector", text: "Another great jersey from Bayern." }
        ]
    },
    {
        id: 6,
        name: "PSG Away 2023/24",
        price: "$96.99",
        image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Paris Saint-Germain's away jersey features a bold navy and gold design inspired by the city's elegance. Premium fabric with mesh panels for breathability. Includes all official branding.",
        reviews: [
            { user: "PSG_Supporter", text: "The gold details are stunning. Great quality." },
            { user: "MbappeFan", text: "Fits perfectly and looks amazing." },
            { user: "Ligue1Lover", text: "Very comfortable to wear during games." }
        ]
    },
    {
        id: 7,
        name: "Chelsea Home 2023/24",
        price: "$84.99",
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Chelsea's classic blue home jersey with white and red accents for the 2023/24 season. Engineered for performance with moisture-wicking technology and ergonomic fit.",
        reviews: [
            { user: "BlueIsTheColor", text: "Perfect Chelsea jersey. The blue is vibrant." },
            { user: "StamfordBridge", text: "Great fit and very comfortable to wear." },
            { user: "PLSupporter", text: "Arrived quickly and well packaged." }
        ]
    },
    {
        id: 8,
        name: "Juventus Home 2023/24",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Juventus returns to their traditional black and white stripes for the 2023/24 home jersey. Features a modern cut and lightweight fabric for maximum comfort and performance.",
        reviews: [
            { user: "JuveFan", text: "Love the return to stripes. Perfect jersey." },
            { user: "SerieALover", text: "The quality is outstanding as always." },
            { user: "FootballJerseyCollector", text: "Great addition to my collection." }
        ]
    },
    {
        id: 9,
        name: "Arsenal Third 2023/24",
        price: "$79.99",
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Arsenal's third jersey features a unique pink and black design inspired by the club's heritage. Made with 100% recycled polyester as part of the club's sustainability efforts.",
        reviews: [
            { user: "Gooner", text: "The pink is actually really nice in person." },
            { user: "NorthLondon", text: "Comfortable fit and great quality." },
            { user: "PremierLeagueFanatic", text: "Different but cool design." }
        ]
    },
    {
        id: 10,
        name: "AC Milan Home 2023/24",
        price: "$86.99",
        image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "AC Milan's iconic red and black stripes for the 2023/24 season. Features a modern fit with traditional design elements. Includes all official badges and sponsor logos.",
        reviews: [
            { user: "Rossoneri", text: "Perfect Milan jersey. The stripes are sharp." },
            { user: "SerieASupporter", text: "Great quality and comfortable to wear." },
            { user: "CalcioFan", text: "Love the classic design with modern fit." }
        ]
    }
];

// DOM Elements
const jerseysGrid = document.getElementById('jerseysGrid');
const jerseyModal = document.getElementById('jerseyModal');
const closeModal = document.getElementById('closeModal');
const modalJerseyName = document.getElementById('modalJerseyName');
const modalJerseyImg = document.getElementById('modalJerseyImg');
const modalJerseyPrice = document.getElementById('modalJerseyPrice');
const modalJerseyDesc = document.getElementById('modalJerseyDesc');
const jerseyReviews = document.getElementById('jerseyReviews');

// Load jerseys
function loadJerseys() {
    jerseysGrid.innerHTML = '';
    jerseys.forEach(jersey => {
        const jerseyCard = document.createElement('div');
        jerseyCard.className = 'jersey-card';
        jerseyCard.innerHTML = `
            <img src="${jersey.image}" alt="${jersey.name}" class="jersey-img">
            <div class="jersey-info">
                <h3 class="jersey-name">${jersey.name}</h3>
                <div class="jersey-price">${jersey.price}</div>
                <button class="preview-btn" data-id="${jersey.id}">PREVIEW & BUY</button>
            </div>
        `;
        jerseysGrid.appendChild(jerseyCard);
    });

    // Add event listeners to preview buttons
    document.querySelectorAll('.preview-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const jerseyId = parseInt(e.target.getAttribute('data-id'));
            openModal(jerseyId);
        });
    });
}

// Open modal with jersey details
function openModal(jerseyId) {
    const jersey = jerseys.find(j => j.id === jerseyId);
    if (jersey) {
        modalJerseyName.textContent = jersey.name;
        modalJerseyImg.src = jersey.image;
        modalJerseyPrice.textContent = jersey.price;
        modalJerseyDesc.textContent = jersey.description;

        // Load reviews
        jerseyReviews.innerHTML = '';
        jersey.reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review';
            reviewElement.innerHTML = `
                <div class="review-user">${review.user}</div>
                <div class="review-text">"${review.text}"</div>
            `;
            jerseyReviews.appendChild(reviewElement);
        });

        jerseyModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close modal
function closeModalFunc() {
    jerseyModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
closeModal.addEventListener('click', closeModalFunc);
window.addEventListener('click', (e) => {
    if (e.target === jerseyModal) {
        closeModalFunc();
    }
});

// Initialize
loadJerseys();