// Global variables
let currentUser = null;
let selectedService = null;
let availableTimeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];

// Currency configuration for South African Rand
const CURRENCY = {
    symbol: 'R',
    code: 'ZAR',
    position: 'before' // 'before' or 'after'
};

// Sample data - ALL PRICES IN SOUTH AFRICAN RAND (ZAR)
const services = [
    {
        id: 1,
        name: 'Classic Manicure',
        category: 'nails',
        description: 'Nail shaping, cuticle care, and polish',
        price: 350, // ZAR
        duration: 45,
        image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        name: 'Gel Manicure',
        category: 'nails',
        description: 'Long-lasting gel polish application',
        price: 500, // ZAR
        duration: 60,
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        name: 'Luxury Pedicure',
        category: 'nails',
        description: 'Foot soak, exfoliation, massage, and polish',
        price: 650, // ZAR
        duration: 75,
        image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 4,
        name: 'Nail Art',
        category: 'nails',
        description: 'Custom nail designs and embellishments',
        price: 250, // ZAR
        duration: 30,
        image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 5,
        name: 'French Manicure',
        category: 'nails',
        description: 'Classic French tip manicure',
        price: 400, // ZAR
        duration: 50,
        image: 'https://images.unsplash.com/photo-1610992235669-1a9605e3a9a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 6,
        name: 'Acrylic Nails (Full Set)',
        category: 'nails',
        description: 'Full set of acrylic nails with your choice of color',
        price: 550, // ZAR
        duration: 90,
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 7,
        name: 'Natural Makeup',
        category: 'makeup',
        description: 'Everyday natural look application',
        price: 750, // ZAR
        duration: 60,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 8,
        name: 'Bridal Makeup',
        category: 'makeup',
        description: 'Complete bridal makeup package with trial',
        price: 2500, // ZAR
        duration: 120,
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 9,
        name: 'Evening Glam',
        category: 'makeup',
        description: 'Bold and dramatic evening makeup',
        price: 950, // ZAR
        duration: 75,
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 10,
        name: 'Airbrush Makeup',
        category: 'makeup',
        description: 'Flawless airbrush application',
        price: 1200, // ZAR
        duration: 90,
        image: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 11,
        name: 'HD Makeup',
        category: 'makeup',
        description: 'High-definition makeup for photos and events',
        price: 1100, // ZAR
        duration: 90,
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 12,
        name: 'Makeup Lesson',
        category: 'makeup',
        description: 'One-on-one makeup lesson with professional artist',
        price: 850, // ZAR
        duration: 120,
        image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
];

const artists = [
    {
        id: 1,
        name: 'Artist 1',
        specialty: 'Nail Art Specialist',
        image: '',
        rating: 4.9,
        experience: '8 years'
    },
    {
        id: 2,
        name: 'Artist 2',
        specialty: 'Makeup Artist',
        image: '',
        rating: 4.8,
        experience: '6 years'
    },
    {
        id: 3,
        name: 'Artist 3',
        specialty: 'Nail Technician',
        image: '',
        rating: 5.0,
        experience: '10 years'
    },
    {
        id: 4,
        name: 'Artist 4',
        specialty: 'Bridal Specialist',
        image: 'fef',
        rating: 4.9,
        experience: '7 years'
    },
    {
        id: 5,
        name: 'Thabo Nkosi',
        specialty: 'Men\'s Grooming',
        image: 'name',
        rating: 4.7,
        experience: '5 years'
    },
    {
        id: 6,
        name: 'Artist 5',
        specialty: 'Henna & Nail Art',
        image: 'oetn',
        rating: 4.9,
        experience: '6 years'
    }
];

const gallery = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1610992235669-1a9605e3a9a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Nail Art Design'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Bridal Makeup'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Manicure'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Pedicure'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Editorial Makeup'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Gel Nails'
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Acrylic Nails'
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1522337360781-0b0e9b1e8b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'African Print Nails'
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Bridal Beauty'
    }
];

// Helper function to format price in ZAR
function formatPrice(price) {
    return `${CURRENCY.symbol}${price}`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadServices();
    loadArtists();
    loadGallery();
    loadArtistsForSelect();
    loadServicesForSelect();
    setupEventListeners();
    checkUserLogin();
    setMinDate();
});

// Load services
function loadServices() {
    const servicesGrid = document.getElementById('services-grid');
    servicesGrid.innerHTML = '';
    
    services.forEach(service => {
        const serviceCard = createServiceCard(service);
        servicesGrid.appendChild(serviceCard);
    });
}

// Create service card
function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.setAttribute('data-category', service.category);
    
    card.innerHTML = `
        <div class="service-image">
            <img src="${service.image}" alt="${service.name}">
        </div>
        <div class="service-info">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <div class="service-footer">
                <span class="service-price">${formatPrice(service.price)}</span>
                <span class="service-duration"><i class="far fa-clock"></i> ${service.duration}min</span>
            </div>
            <button class="btn-book-service" onclick="bookService(${service.id})">Book Now</button>
        </div>
    `;
    
    return card;
}

// Filter services by category
function filterServices(category) {
    const cards = document.querySelectorAll('.service-card');
    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.toLowerCase() === category || (category === 'all' && tab.textContent === 'All')) {
            tab.classList.add('active');
        }
    });
    
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Load artists
function loadArtists() {
    const artistsGrid = document.getElementById('artists-grid');
    artistsGrid.innerHTML = '';
    
    artists.forEach(artist => {
        const artistCard = createArtistCard(artist);
        artistsGrid.appendChild(artistCard);
    });
}

// Create artist card
function createArtistCard(artist) {
    const card = document.createElement('div');
    card.className = 'artist-card';
    
    const stars = '★'.repeat(Math.floor(artist.rating)) + '☆'.repeat(5 - Math.floor(artist.rating));
    
    card.innerHTML = `
        <div class="artist-image">
            <img src="${artist.image}" alt="${artist.name}">
        </div>
        <h3>${artist.name}</h3>
        <p>${artist.specialty}</p>
        <div class="artist-rating">${stars}</div>
        <p>${artist.experience} experience</p>
        <button class="btn-view-profile" onclick="viewArtistProfile(${artist.id})">View Profile</button>
    `;
    
    return card;
}

// Load gallery
function loadGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = '';
    
    gallery.forEach(item => {
        const galleryItem = createGalleryItem(item);
        galleryGrid.appendChild(galleryItem);
    });
}

// Create gallery item
function createGalleryItem(item) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    
    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="gallery-overlay">
            <h3>${item.title}</h3>
        </div>
    `;
    
    return div;
}

// Load artists for select dropdown
function loadArtistsForSelect() {
    const artistSelect = document.getElementById('artist');
    if (artistSelect) {
        artists.forEach(artist => {
            const option = document.createElement('option');
            option.value = artist.id;
            option.textContent = artist.name;
            artistSelect.appendChild(option);
        });
    }
}

// Load services for select dropdown
function loadServicesForSelect() {
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        services.forEach(service => {
            const option = document.createElement('option');
            option.value = service.id;
            option.textContent = `${service.name} - ${formatPrice(service.price)}`;
            serviceSelect.appendChild(option);
        });
        
        // Add event listener for service selection
        serviceSelect.addEventListener('change', updateBookingSummary);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Payment method toggle
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'card') {
                document.getElementById('cardPaymentForm').style.display = 'block';
            } else {
                document.getElementById('cardPaymentForm').style.display = 'none';
            }
        });
    });
    
    // Date input change
    document.getElementById('date')?.addEventListener('change', loadAvailableTimeSlots);
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

// Set minimum date to today
function setMinDate() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    }
}

// Load available time slots
function loadAvailableTimeSlots() {
    const timeSelect = document.getElementById('time');
    if (timeSelect) {
        timeSelect.innerHTML = '<option value="">Select time</option>';
        
        // In a real app, you would check database for booked slots
        availableTimeSlots.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    }
}

// Update booking summary
function updateBookingSummary() {
    const serviceId = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    if (serviceId && date && time) {
        const service = services.find(s => s.id == serviceId);
        const summary = document.getElementById('bookingSummary');
        
        summary.innerHTML = `
            <h3>Booking Summary</h3>
            <p><strong>Service:</strong> ${service.name}</p>
            <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Duration:</strong> ${service.duration} minutes</p>
            <p><strong>Price:</strong> ${formatPrice(service.price)}</p>
        `;
    }
}

// Book service
function bookService(serviceId) {
    if (!currentUser) {
        showToast('Please login to book a service');
        openLoginModal();
        return;
    }
    
    selectedService = services.find(s => s.id === serviceId);
    openBookingModal();
}

// Handle booking form submission
function handleBooking(event) {
    event.preventDefault();
    
    if (!currentUser) {
        showToast('Please login to book');
        openLoginModal();
        return;
    }
    
    const serviceId = document.getElementById('service').value;
    const artistId = document.getElementById('artist').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const notes = document.getElementById('notes').value;
    
    if (!serviceId || !date || !time) {
        showToast('Please fill all required fields');
        return;
    }
    
    const service = services.find(s => s.id == serviceId);
    
    // Store booking details for payment
    window.currentBooking = {
        service: service,
        artist: artists.find(a => a.id == artistId),
        date: date,
        time: time,
        notes: notes,
        totalAmount: service.price
    };
    
    closeModal('bookingModal');
    openPaymentModal();
}

// Process payment
function processPayment() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value;
        const expiry = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;
        const cardName = document.getElementById('cardName').value;
        
        if (!cardNumber || !expiry || !cvv || !cardName) {
            showToast('Please fill all card details');
            return;
        }
        
        // Validate card number (simple validation)
        if (cardNumber.replace(/\s/g, '').length !== 16) {
            showToast('Invalid card number');
            return;
        }
    }
    
    // Simulate payment processing
    showToast('Processing payment...');
    
    setTimeout(() => {
        // Save booking
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const newBooking = {
            id: Date.now(),
            ...window.currentBooking,
            userId: currentUser.id,
            bookingDate: new Date().toISOString(),
            status: 'confirmed',
            paymentStatus: 'paid'
        };
        
        bookings.push(newBooking);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        
        showToast(`Booking confirmed! Total: ${formatPrice(window.currentBooking.totalAmount)}`);
        closeModal('paymentModal');
        
        // Clear form
        document.getElementById('bookingForm').reset();
    }, 2000);
}

// Open modals
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function openBookingModal() {
    if (!currentUser) {
        openLoginModal();
        return;
    }
    document.getElementById('bookingModal').style.display = 'block';
}

function openPaymentModal() {
    const summary = document.getElementById('paymentSummary');
    const booking = window.currentBooking;
    
    summary.innerHTML = `
        <h3>Payment Summary</h3>
        <p><strong>Service:</strong> ${booking.service.name}</p>
        <p><strong>Artist:</strong> ${booking.artist ? booking.artist.name : 'Any available'}</p>
        <p><strong>Date:</strong> ${new Date(booking.date).toLocaleDateString()}</p>
        <p><strong>Time:</strong> ${booking.time}</p>
        <p><strong>Total Amount:</strong> ${formatPrice(booking.totalAmount)}</p>
    `;
    
    document.getElementById('paymentModal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Authentication
function switchAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabs = document.querySelectorAll('.auth-tab');
    
    tabs.forEach(t => t.classList.remove('active'));
    
    if (tab === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        tabs[0].classList.add('active');
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        tabs[1].classList.add('active');
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation
    if (!email || !password) {
        showToast('Please fill all fields');
        return;
    }
    
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        showToast('Login successful!');
        closeModal('loginModal');
        updateUIForLoggedInUser();
    } else {
        showToast('Invalid email or password');
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('regPhone').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    // Validation
    if (!name || !email || !phone || !password || !confirmPassword) {
        showToast('Please fill all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        showToast('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        showToast('Password must be at least 6 characters');
        return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.email === email)) {
        showToast('Email already registered');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        password
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    showToast('Registration successful!');
    closeModal('loginModal');
    updateUIForLoggedInUser();
}

// Check if user is logged in
function checkUserLogin() {
    const user = localStorage.getItem('currentUser');
    if (user) {
        currentUser = JSON.parse(user);
        updateUIForLoggedInUser();
    }
}

// Update UI for logged in user
function updateUIForLoggedInUser() {
    const loginBtn = document.querySelector('.btn-login');
    if (currentUser) {
        loginBtn.textContent = currentUser.name.split(' ')[0];
        loginBtn.onclick = () => showUserMenu();
    }
}

// Show user menu
function showUserMenu() {
    // In a real app, you would show a dropdown with profile, bookings, logout
    if (confirm('Logout?')) {
        logout();
    }
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    location.reload();
}

// Contact form
function handleContact(event) {
    event.preventDefault();
    showToast('Message sent! We\'ll get back to you soon.');
    event.target.reset();
}

// View artist profile
function viewArtistProfile(artistId) {
    const artist = artists.find(a => a.id === artistId);
    showToast(`Viewing ${artist.name}'s profile`);
    // In a real app, you would open a modal with artist details
}

// Scroll to services
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Format card number
document.getElementById('cardNumber')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s/g, '');
    if (value.length > 0) {
        value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
    }
    e.target.value = value;
});

// Format expiry date
document.getElementById('expiryDate')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\//g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value;
});

// Restrict CVV to numbers
document.getElementById('cvv')?.addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

// Add South African payment methods (Optional)
const SA_PAYMENT_OPTIONS = {
    card: 'Credit/Debit Card',
    eft: 'EFT',
    snapscan: 'SnapScan',
    zapper: 'Zapper'
};

// You can add this to the payment methods section in the HTML if desired