// Jersey data with categories
const jerseys = [
    {
        id: 1,
        name: "Manchester United Home 2023/24",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The official 2023/24 Manchester United home jersey features the iconic red color with black trim. Made with advanced moisture-wicking fabric to keep you cool and comfortable during the game. Features the club crest and sponsor logo.",
        category: "premier-league",
        reviews: [
            { user: "RedDevil4Life", text: "Perfect fit and amazing quality. The fabric feels premium!" },
            { user: "MUFC_Fan", text: "Love the new design. The details are incredible." },
            { user: "SoccerLover", text: "Great jersey, arrived quickly. Highly recommend!" }
        ]
    },
    {
        id: 2,
        name: "Real Madrid Away 2023/24",
        price: 94.99,
        image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The striking Real Madrid away jersey for the 2023/24 season features a bold purple and black design. Engineered for performance with breathable fabric and ergonomic fit. Includes club crest and sponsor.",
        category: "la-liga",
        reviews: [
            { user: "HalaMadrid", text: "The colors look even better in person. Super comfortable." },
            { user: "CR7Forever", text: "Great quality as always from Real Madrid." },
            { user: "FootballFanatic", text: "Perfect for match days. Fits true to size." }
        ]
    },
    {
        id: 3,
        name: "Barcelona Home 2023/24",
        price: 87.99,
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The classic Barcelona home jersey maintains the traditional blue and red stripes with gold accents for the 2023/24 season. Lightweight fabric with enhanced ventilation for optimal performance.",
        category: "la-liga",
        reviews: [
            { user: "BarcaFan", text: "Beautiful jersey, the gold details are stunning." },
            { user: "Messi10", text: "The fit is perfect and the material is top quality." },
            { user: "LaLigaLover", text: "Fast shipping and great customer service." }
        ]
    },
    {
        id: 4,
        name: "Liverpool Third 2023/24",
        price: 82.99,
        image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Liverpool's third jersey for the 2023/24 season features a unique black and teal design. Made with recycled materials as part of the club's sustainability initiative. Includes all official branding.",
        category: "premier-league",
        reviews: [
            { user: "YNWA", text: "Love the eco-friendly approach. Jersey looks amazing." },
            { user: "Kopite", text: "The design is even better in person. Very comfortable." },
            { user: "PremierLeagueFan", text: "Great alternative to the home jersey." }
        ]
    },
    {
        id: 5,
        name: "Bayern Munich Home 2023/24",
        price: 91.99,
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The iconic red Bayern Munich home jersey with white trim for the 2023/24 season. Features advanced Dri-FIT technology to keep you dry and comfortable. Includes all official logos and badges.",
        category: "bundesliga",
        reviews: [
            { user: "MiaSanMia", text: "Perfect replica of what the players wear." },
            { user: "BundesligaFan", text: "Excellent quality and true to size." },
            { user: "FootballCollector", text: "Another great jersey from Bayern." }
        ]
    },
    {
        id: 6,
        name: "PSG Away 2023/24",
        price: 96.99,
        image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Paris Saint-Germain's away jersey features a bold navy and gold design inspired by the city's elegance. Premium fabric with mesh panels for breathability. Includes all official branding.",
        category: "ligue-1",
        reviews: [
            { user: "PSG_Supporter", text: "The gold details are stunning. Great quality." },
            { user: "MbappeFan", text: "Fits perfectly and looks amazing." },
            { user: "Ligue1Lover", text: "Very comfortable to wear during games." }
        ]
    },
    {
        id: 7,
        name: "Chelsea Home 2023/24",
        price: 84.99,
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Chelsea's classic blue home jersey with white and red accents for the 2023/24 season. Engineered for performance with moisture-wicking technology and ergonomic fit.",
        category: "premier-league",
        reviews: [
            { user: "BlueIsTheColor", text: "Perfect Chelsea jersey. The blue is vibrant." },
            { user: "StamfordBridge", text: "Great fit and very comfortable to wear." },
            { user: "PLSupporter", text: "Arrived quickly and well packaged." }
        ]
    },
    {
        id: 8,
        name: "Juventus Home 2023/24",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Juventus returns to their traditional black and white stripes for the 2023/24 home jersey. Features a modern cut and lightweight fabric for maximum comfort and performance.",
        category: "serie-a",
        reviews: [
            { user: "JuveFan", text: "Love the return to stripes. Perfect jersey." },
            { user: "SerieALover", text: "The quality is outstanding as always." },
            { user: "FootballJerseyCollector", text: "Great addition to my collection." }
        ]
    },
    {
        id: 9,
        name: "Arsenal Third 2023/24",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Arsenal's third jersey features a unique pink and black design inspired by the club's heritage. Made with 100% recycled polyester as part of the club's sustainability efforts.",
        category: "premier-league",
        reviews: [
            { user: "Gooner", text: "The pink is actually really nice in person." },
            { user: "NorthLondon", text: "Comfortable fit and great quality." },
            { user: "PremierLeagueFanatic", text: "Different but cool design." }
        ]
    },
    {
        id: 10,
        name: "AC Milan Home 2023/24",
        price: 86.99,
        image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "AC Milan's iconic red and black stripes for the 2023/24 season. Features a modern fit with traditional design elements. Includes all official badges and sponsor logos.",
        category: "serie-a",
        reviews: [
            { user: "Rossoneri", text: "Perfect Milan jersey. The stripes are sharp." },
            { user: "SerieASupporter", text: "Great quality and comfortable to wear." },
            { user: "CalcioFan", text: "Love the classic design with modern fit." }
        ]
    },
    {
        id: 11,
        name: "Manchester United Retro 1999",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The legendary 1999 treble-winning Manchester United jersey. This retro classic features the iconic Sharp sponsor and the famous black and white collar.",
        category: "retro",
        reviews: [
            { user: "Treble99", text: "Nostalgia at its best! Perfect replica." },
            { user: "Cantona7", text: "The quality is amazing for a retro jersey." },
            { user: "FergieTime", text: "Brings back so many memories. Love it!" }
        ]
    },
    {
        id: 12,
        name: "Brazil National Team 2002",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The iconic yellow Brazil jersey from their 2002 World Cup victory. Features the classic Nike design and the CBF logo.",
        category: "national",
        reviews: [
            { user: "Ronaldo9", text: "Just like the one Ronaldo wore in the final!" },
            { user: "SambaStyle", text: "Perfect for 5-a-side games." },
            { user: "WorldCupFan", text: "The quality is top-notch." }
        ]
    }
];

// DOM Elements
const jerseysGrid = document.getElementById('jerseysGrid');
const mobileMenuBtn = document.getElementById('mobile-menu');
const mobileMenuContainer = document.getElementById('mobileMenuContainer');
const cartIcon = document.querySelector('.cart-icon');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.querySelector('.checkout-btn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutForm = document.getElementById('checkoutForm');
const confirmationModal = document.getElementById('confirmationModal');
const continueShoppingBtn = document.getElementById('continueShopping');
const categoryCards = document.querySelectorAll('.category-card');
const dropdownLinks = document.querySelectorAll('[data-category]');

// Cart state
let cart = [];
let currentCategory = 'all';

// Initialize the app
function init() {
    loadJerseys();
    setupEventListeners();
}

// Load jerseys based on current category
function loadJerseys() {
    jerseysGrid.innerHTML = '';
    
    const filteredJerseys = currentCategory === 'all' 
        ? jerseys 
        : jerseys.filter(jersey => jersey.category === currentCategory);
    
    filteredJerseys.forEach(jersey => {
        const jerseyCard = document.createElement('div');
        jerseyCard.className = 'jersey-card';
        jerseyCard.innerHTML = `
            <img src="${jersey.image}" alt="${jersey.name}" class="jersey-img">
            <div class="jersey-info">
                <h3 class="jersey-name">${jersey.name}</h3>
                <div class="jersey-price">$${jersey.price.toFixed(2)}</div>
                <button class="add-to-cart" data-id="${jersey.id}">ADD TO CART</button>
            </div>
            ${window.innerWidth > 768 ? `
            <div class="jersey-preview">
                <h4 class="preview-name">${jersey.name}</h4>
                <div class="preview-price">$${jersey.price.toFixed(2)}</div>
                <button class="quick-add-btn" data-id="${jersey.id}">ADD TO CART</button>
            </div>
            ` : ''}
        `;
        jerseysGrid.appendChild(jerseyCard);
    });

    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart, .quick-add-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const jerseyId = parseInt(e.target.getAttribute('data-id'));
            addToCart(jerseyId);
        });
    });
}

// Add to cart function
function addToCart(jerseyId) {
    const jersey = jerseys.find(j => j.id === jerseyId);
    if (!jersey) return;

    const existingItem = cart.find(item => item.id === jerseyId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...jersey,
            quantity: 1
        });
    }

    updateCart();
    showCartNotification();
}

// Update cart UI
function updateCart() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartTotal.textContent = '$0.00';
        document.querySelector('.cart-count').textContent = '0';
        return;
    }

    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
        
        total += item.price * item.quantity;
    });

    // Update cart total and count
    cartTotal.textContent = `$${total.toFixed(2)}`;
    document.querySelector('.cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const jerseyId = parseInt(e.target.getAttribute('data-id'));
            const isPlus = e.target.classList.contains('plus');
            updateCartItemQuantity(jerseyId, isPlus);
        });
    });

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const jerseyId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(jerseyId);
        });
    });
}

// Update cart item quantity
function updateCartItemQuantity(jerseyId, isPlus) {
    const item = cart.find(item => item.id === jerseyId);
    if (!item) return;

    if (isPlus) {
        item.quantity += 1;
    } else {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(jerseyId);
            return;
        }
    }

    updateCart();
}

// Remove item from cart
function removeFromCart(jerseyId) {
    cart = cart.filter(item => item.id !== jerseyId);
    updateCart();
}

// Show cart notification
function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = 'Item added to cart!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Generate random order ID
function generateOrderId() {
    return 'STRYK-' + Math.floor(100000 + Math.random() * 900000);
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuContainer.classList.toggle('active');
    });

    // Mobile dropdown menus
    document.querySelectorAll('.mobile-dropdown > a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = e.target.nextElementSibling;
            dropdown.classList.toggle('active');
        });
    });

    // Cart toggle
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    });

    // Close cart
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });

    // Cart overlay click
    cartOverlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });

    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        checkoutModal.classList.add('active');
    });

    // Close checkout modal
    closeCheckout.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });

    // Checkout form submission
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        checkoutModal.classList.remove('active');
        
        // Generate order ID
        const orderId = generateOrderId();
        document.getElementById('orderId').textContent = orderId;
        
        // Show confirmation modal
        confirmationModal.classList.add('active');
        
        // Clear cart
        cart = [];
        updateCart();
    });

    // Continue shopping button
    continueShoppingBtn.addEventListener('click', () => {
        confirmationModal.classList.remove('active');
    });

    // Category filtering
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            currentCategory = category;
            loadJerseys();
        });
    });

    // Dropdown category filtering
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            currentCategory = category;
            loadJerseys();
            
            // Close mobile menu if open
            mobileMenuContainer.classList.remove('active');
        });
    });
}

// Initialize the app
init();
