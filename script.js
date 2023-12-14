var products = {
    'cookingessentials': ["The red mill", "Al kalouty", "Newland", "Al kasih", "Oat farmer Jo", "Millhouse", "Bzuriyeh", "Vivo", "Sunfeast", "Golden mountain sauces", "Naturavege", "zaghloul", "Al alali", "Bzuriyeh", "Sunfeast", "Golden mountain sauces", "Farah", "Afia", "hayat", "hello", "Durra", "Newland", "hayat", "hello", "Durra", "Newland", "Bonny", "Luna", "rimi", "Tip top", "Nabeel", "Al Kaseeh", "Mezete"],
    'cosmetics': ["golden rose", "Pastel pure", "E.L.F",
    "Essence",
    "Glossier",
    "Huda Beauty",
    "Benefit",
    "Catrice" ,
    "Lush cosmetics"], 

    'babyessentials': ["Dxn Chubby Baby Oil",
        "Baby magic",
        "seba med",
        "QV",
        "Fine Baby diapers",
        "Baby Life",
        "BabyJoy",
        "Sahha",
        "Pediagain",
        "Dano",
        "Gardo",
        "Zain",
        "Fontana",
        "The red mill"        ],  
        
        
    'beverages': ["OSHEE", "Teeba","Al rabi", "Original","Jordan National", "Cocohzi", "doobi cocoa powder",
    "Matrix", "Sama"
    ], 

    'clothingbrands': ["Fila", "Fomo", "Gymkuma", "Jobedu", "penti","nayomi", "Oyhso",
    "unbox.arabia",
    "VogaCloset", "Koton", "DeFacto", "Colin's", "LC Waikiki", "Max","Kadi", "Apekyol",
    "SharafGq" 
], 

    'coffee&tea': ["Turtle Green Tea", "Palombini", "izhiman premier", "Dimitri's", "Maarouf",
    "cordyceps coffee", "Natshe Cafe 3 in 1", "Taleen cafe 2 in 1",
    "Adel Natshe insant coffee (Adel Cafe)", "Coffee Break", "Soul & Soul", "Davidoff", "Al Ghazaleen", "Al Rayhan",
    "Good Day insatnt coffee", "DeMontre", "Ülker Cafe Crown", "Maxwell House", "Folgers", "doobi coffee"
], 
    'householditems': ["Fine", "golden", "Lamis", "Chlorfix", "mobi", "oval",
    "contac (al emlaq)", "Spartan", "Loyal", "HiGeen", "Eco Clean", "Al emlaq", 
    "Mozhilah",
    "Regent Power",
    "Bahar",
    "Al mawtini",
    "Madar",
    "Loyal",
    "Touri",
    "Bono",
    "Bonux", 
    ], 
    'pharmaceuticals': [ 
        "private",
        "Quitcool",
        "LEVACT",
        "Truxima",
        "Solosert",
        "Purlex",
        "pamol cold & flu",
        "JoFlam",
        "Voldic",
        "Rapidus",
        "Medone",
        "seba med",
        "mustela Vitamin barrier cream",
        "Atoxia",
        "Orotix",
        "Coxit",
        "Torix",
        "Flamex",
        "Pedexa",
        "Locagel",
        "SALISAL",
        "Iburam",
        "Doloraz",
        "Taskine",
        "Ibugesic",
        "Remofen",
        "Sapofen",
        "JoFlam",
        "RapidusPanda",
        "Dolocet",
        "Revanin",
        "Adol",
        "Pamol",
        "Midrone",
        "Feverol"

    ], 
    'personalgrooming': [
        "Cetaphil",
        "Higeen",
        "Loyal",
        "Raghad organics", 
        "fair & care",
        "Arko",
        "shiseido",
        "laneige",
        "the purest",
        "some by mi",
        "neogen",
        "Lush cosmetics",
        "Natural looks",
        "Stenders",
        "Beesline",
        "Al Aseel",
        "Lightness Organic Argan Oil",
        "Hairburst",
        "Sachajuan",
        "ganozhi",
        "nizoral",
        "Nana",
        "fam",
        "private",
        "Palmer's",
        "Gersy",
        "Now solutions",
        "Opalescence", 
        "Lacalut",
        "Signal",
        "Himalaya",
        "Paradontax", 
        "Dentalux",
        "Ecodenta",
        "Total Care"

    ], 
    
    'snacks': [
        "Hersheys","Reese's",
        "Ferrero rochet", "Rafaelo", "Nutella", "Kinder chocolate",
        "Lindt & Sprüngl",
        "Lotus Bakeries",
        "Break",
        "Tmix",
        "chocolips",
        "Mr chips",
        "Al Batal",
        "First sensations",
        "Bebeto",
        "Batook",
        "Shaarawi",
        "noon delights",
        "Jordina",
        "Baker",
        "Deemah"

    ], 
    'water': [
        "hayat",
        "flo be water",
        "aqua delta",
        "Sama",
        "Ultra water",
        "Fresh Water Jo"
    ], 
    'restaurants': ["Donuttery", 
        "Donuts factory",
        "planet donuts",
        "Gerard",
        "Four Winters",
        "Gusti",
        "eatalio", 
        "Crema Creme",
        "Triple Seven",
        "Mario Bakery",
        "Call Me Margherita",
        "Pizza Nina",
        "Italian Pizza House",
        "Luigi's ",
        "Pizza Lover",
        "The Big Slice",
        "Oliva",
        "Pizza SQRD",
        "The NY Pizza",
        "Pizza AL Reef",
        "Dough Union",
        "Little Italy Pizzeria",
        "Milano",
        "Pronto"            
        ],         
    'miscellaneous': [
        "Bein sports",
        "Opensouq",
        "LG",
        "Panasonic",
        "elegance",
        "Wuilt",
        "Roya",
        "Al jazeera",
        "Al mamlaka",
        "Cozmo",
        "Sameh mall",
        "Kareem Hypermarket",
        "Egybest"
    ], };

var productImages = {

    "The red mill": "redmill.png",
    "Al kalouty": "path_to_al_kalouty_image.jpg",
    "Newland": "path_to_newland_image.jpg",
};


function showProducts(category, element) {
    // Close any already open product lists
    var openProducts = document.querySelectorAll('.products-container');
    for (var i = 0; i < openProducts.length; i++) {
        openProducts[i].style.display = 'none';
    }

    // Locate or create the container for the clicked category's products
    var productsContainerId = category.replace(/\s+/g, '').toLowerCase() + '-products';
    var productsContainer = document.getElementById(productsContainerId);
    if (!productsContainer) {
        productsContainer = document.createElement('div');
        productsContainer.id = productsContainerId;
        productsContainer.className = 'products-container';
        element.parentNode.insertBefore(productsContainer, element.nextSibling);
    }

    // Clear previous contents and add category title
    productsContainer.innerHTML = '';
    var categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category;
    productsContainer.appendChild(categoryTitle);

    // Populate the container with products from the clicked category
    var categoryKey = category.toLowerCase().replace(/\s+/g, '');
    var productList = products[categoryKey];

    if (productList && productList.length > 0) {
        productList.forEach(function(productName) {
            var productCard = document.createElement('div');
            productCard.className = 'product-card';

            var productImage = document.createElement('img');
            productImage.src = productImages[productName] || 'placeholder.jpg';
            productImage.alt = productName;
            productCard.appendChild(productImage);

            var productLabel = document.createElement('p');
            productLabel.textContent = productName;
            productCard.appendChild(productLabel);

            productsContainer.appendChild(productCard);
        });
    } else {
        var noProductsMsg = document.createElement('p');
        noProductsMsg.textContent = 'No products listed under this category.';
        productsContainer.appendChild(noProductsMsg);
    }

    // Add a close button to each product container
    var closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.className = 'close-button';
    closeButton.onclick = function() {
        productsContainer.style.display = 'none';
    };
    productsContainer.appendChild(closeButton);

    // Show the products container
    productsContainer.style.display = 'flex';
}

function togglePanel() {
    var panel = document.getElementById("aboutPanel");
    panel.style.width = panel.style.width === "250px" ? "0px" : "250px";
}

function toggleRecommendationsModal() {
    var modal = document.getElementById("recommendationsModal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}


function searchProducts() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var allProducts = [];

    for (var category in products) {
        allProducts = allProducts.concat(products[category]);
    }

    var filteredProducts = allProducts.filter(function(productName) {
        return productName.toLowerCase().includes(searchInput);
    });

    displaySearchResults(filteredProducts);
}

function displaySearchResults(filteredProducts) {
    var resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    filteredProducts.forEach(function(productName) {
        var resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';

        var productImage = document.createElement('img');
        productImage.src = productImages[productName] || 'placeholder.jpg';
        productImage.alt = productName;

        var productNameEl = document.createElement('p');
        productNameEl.textContent = productName;

        resultItem.appendChild(productImage);
        resultItem.appendChild(productNameEl);
        resultsContainer.appendChild(resultItem);
    });
}

// Make sure to call this function when the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').addEventListener('input', searchProducts);
});
