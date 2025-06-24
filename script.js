// Jersey data with categories (10+ per category)
const jerseys = [
    // Premier League (12 jerseys)
    {
        id: 1,
        name: "Manchester United Home 2023/24",
        price: 89.99,
        image: "https://m.media-amazon.com/images/I/61G9L3bUKwL._AC_UY1100_.jpg",
        description: "Official 2023/24 home jersey with the iconic red color and black trim.",
        category: "premier-league",
        reviews: [
            { user: "RedDevil4Life", text: "Perfect fit and amazing quality!" },
            { user: "MUFC_Fan", text: "Love the new design details." }
        ]
    },
    {
        id: 2,
        name: "Liverpool Away 2023/24",
        price: 84.99,
        image: "https://m.media-amazon.com/images/I/71QN+-c0MZL._AC_UY1100_.jpg",
        description: "Striking away jersey with bold colors and modern design.",
        category: "premier-league",
        reviews: [
            { user: "Kopite", text: "The purple looks even better in person." }
        ]
    },
    {
        id: 3,
        name: "Arsenal Third 2023/24",
        price: 79.99,
        image: "https://m.media-amazon.com/images/I/71+5M6G3WVL._AC_UY1100_.jpg",
        description: "Unique pink and black design inspired by club heritage.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 4,
        name: "Chelsea Home 2023/24",
        price: 87.99,
        image: "https://m.media-amazon.com/images/I/61XQYJ0hH5L._AC_UY1100_.jpg",
        description: "Classic blue home jersey with white and red accents.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 5,
        name: "Manchester City Away 2023/24",
        price: 89.99,
        image: "https://m.media-amazon.com/images/I/61+JXe9f9GL._AC_UY1100_.jpg",
        description: "Maroon and blue away jersey with modern pattern.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 6,
        name: "Tottenham Third 2023/24",
        price: 82.99,
        image: "https://m.media-amazon.com/images/I/71XWQ0wGmML._AC_UY1100_.jpg",
        description: "Green and purple jersey with lightning bolt pattern.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 7,
        name: "Newcastle Home 2023/24",
        price: 79.99,
        image: "https://m.media-amazon.com/images/I/61XQYJ0hH5L._AC_UY1100_.jpg",
        description: "Traditional black and white stripes with Saudi sponsorship.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 8,
        name: "West Ham Third 2023/24",
        price: 77.99,
        image: "https://m.media-amazon.com/images/I/71QN+-c0MZL._AC_UY1100_.jpg",
        description: "Burgundy jersey with claret and blue accents.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 9,
        name: "Aston Villa Home 2023/24",
        price: 84.99,
        image: "https://m.media-amazon.com/images/I/61+JXe9f9GL._AC_UY1100_.jpg",
        description: "Classic claret and blue with modern fit.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 10,
        name: "Brighton Away 2023/24",
        price: 79.99,
        image: "https://m.media-amazon.com/images/I/71+5M6G3WVL._AC_UY1100_.jpg",
        description: "Teal and black away jersey with subtle pattern.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 11,
        name: "Leicester Home 2023/24",
        price: 76.99,
        image: "https://m.media-amazon.com/images/I/61G9L3bUKwL._AC_UY1100_.jpg",
        description: "Royal blue jersey with gold accents.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 12,
        name: "Wolves Third 2023/24",
        price: 78.99,
        image: "https://m.media-amazon.com/images/I/71XWQ0wGmML._AC_UY1100_.jpg",
        description: "Orange and black jersey with wolf head pattern.",
        category: "premier-league",
        reviews: []
    },

    // La Liga (12 jerseys)
    {
        id: 13,
        name: "Real Madrid Home 2023/24",
        price: 94.99,
        image: "https://m.media-amazon.com/images/I/71QN+-c0MZL._AC_UY1100_.jpg",
        description: "Classic white home jersey with purple accents.",
        category: "la-liga",
        reviews: []
    },
    {
        id: 14,
        name: "Barcelona Away 2023/24",
        price: 92.99,
        image: "https://m.media-amazon.com/images/I/61XQYJ0hH5L._AC_UY1100_.jpg",
        description: "Gold and maroon away jersey with crest detail.",
        category: "la-liga",
        reviews: []
    },
    // Add 10 more La Liga jerseys...
    
    // Serie A (12 jerseys)
    {
        id: 25,
        name: "Juventus Home 2023/24",
        price: 89.99,
        image: "https://m.media-amazon.com/images/I/61G9L3bUKwL._AC_UY1100_.jpg",
        description: "Black and white stripes with gold details.",
        category: "serie-a",
        reviews: []
    },
    {
        id: 26,
        name: "AC Milan Third 2023/24",
        price: 87.99,
        image: "https://m.media-amazon.com/images/I/71+5M6G3WVL._AC_UY1100_.jpg",
        description: "Special edition green and black jersey.",
        category: "serie-a",
        reviews: []
    },
    // Add 10 more Serie A jerseys...
    
    // Bundesliga (12 jerseys)
    {
        id: 37,
        name: "Bayern Munich Home 2023/24",
        price: 91.99,
        image: "https://m.media-amazon.com/images/I/61+JXe9f9GL._AC_UY1100_.jpg",
        description: "Red home jersey with white trim and diamond pattern.",
        category: "bundesliga",
        reviews: []
    },
    {
        id: 38,
        name: "Dortmund Away 2023/24",
        price: 86.99,
        image: "https://m.media-amazon.com/images/I/71XWQ0wGmML._AC_UY1100_.jpg",
        description: "Black and neon yellow away design.",
        category: "bundesliga",
        reviews: []
    },
    // Add 10 more Bundesliga jerseys...
    
    // Ligue 1 (12 jerseys)
    {
        id: 49,
        name: "PSG Home 2023/24",
        price: 96.99,
        image: "https://m.media-amazon.com/images/I/61G9L3bUKwL._AC_UY1100_.jpg",
        description: "Dark blue home jersey with red accents.",
        category: "ligue-1",
        reviews: []
    },
    {
        id: 50,
        name: "Marseille Third 2023/24",
        price: 84.99,
        image: "https://m.media-amazon.com/images/I/71QN+-c0MZL._AC_UY1100_.jpg",
        description: "Special edition white and gold jersey.",
        category: "ligue-1",
        reviews: []
    },
    // Add 10 more Ligue 1 jerseys...
    
    // Retro Jerseys (12 jerseys)
    {
        id: 61,
        name: "Man United Retro 1999",
        price: 99.99,
        image: "https://m.media-amazon.com/images/I/61XQYJ0hH5L._AC_UY1100_.jpg",
        description: "Treble-winning season replica jersey.",
        category: "retro",
        reviews: []
    },
    {
        id: 62,
        name: "Brazil 2002 World Cup",
        price: 89.99,
        image: "https://m.media-amazon.com/images/I/71+5M6G3WVL._AC_UY1100_.jpg",
        description: "Iconic yellow jersey from Ronaldo era.",
        category: "retro",
        reviews: []
    },
    // Add 10 more retro jerseys...
    
    // National Teams (12 jerseys)
    {
        id: 73,
        name: "Argentina 2022 World Cup",
        price: 94.99,
        image: "https://m.media-amazon.com/images/I/61+JXe9f9GL._AC_UY1100_.jpg",
        description: "Champions edition with gold details.",
        category: "national",
        reviews: []
    },
    {
        id: 74,
        name: "France Home 2023",
        price: 89.99,
        image: "https://m.media-amazon.com/images/I/71XWQ0wGmML._AC_UY1100_.jpg",
        description: "Classic blue with red accents.",
        category: "national",
        reviews: []
    }
    // Add 10 more national team jerseys...
];

// ... rest of the script.js remains the same ...

// ... (keep all the jersey data and other functions the same) ...

// Update the setupEventListeners function:
function setupEventListeners() {
    // ... (keep other event listeners the same) ...

    // Category filtering - Desktop
    document.querySelectorAll('.category-card, [data-category]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const category = element.getAttribute('data-category');
            filterJerseysByCategory(category);
            
            // Close mobile menu if open
            mobileMenuContainer.classList.remove('active');
        });
    });

    // Mobile dropdown category filtering
    document.querySelectorAll('.mobile-dropdown-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            filterJerseysByCategory(category);
            mobileMenuContainer.classList.remove('active');
        });
    });
}

// New function to filter jerseys by category
function filterJerseysByCategory(category) {
    currentCategory = category;
    loadJerseys();
    
    // Scroll to jerseys section
    document.getElementById('jerseys').scrollIntoView({ behavior: 'smooth' });
    
    // Update active state on category elements
    document.querySelectorAll('.category-card, [data-category]').forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-category') === category) {
            el.classList.add('active');
        }
    });
}

// Update the loadJerseys function:
function loadJerseys() {
    jerseysGrid.innerHTML = '';
    
    const filteredJerseys = currentCategory === 'all' 
        ? jerseys 
        : jerseys.filter(jersey => jersey.category === currentCategory);
    
    if (filteredJerseys.length === 0) {
        jerseysGrid.innerHTML = '<p class="no-jerseys">No jerseys found in this category</p>';
        return;
    }

    filteredJerseys.forEach(jersey => {
        // ... (keep the same jersey card creation code) ...
    });
}

// Initialize with all jerseys
let currentCategory = 'all';
