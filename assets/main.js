// UseByWhen.com - Progressive Enhancement JavaScript
(function() {
    'use strict';
    
    // Static food database for search functionality
    const foodDatabase = [
        // Dairy Products & Eggs
        { name: 'Cottage Cheese (opened)', days: 7, category: 'dairy', keywords: ['cottage', 'cheese', 'dairy'], storage: 'Refrigerator' },
        { name: 'Milk (opened)', days: 7, category: 'dairy', keywords: ['milk', 'dairy', 'whole', 'skim', '2%', 'almond', 'oat'], storage: 'Refrigerator' },
        { name: 'Heavy Cream (opened)', days: 7, category: 'dairy', keywords: ['heavy', 'cream', 'whipping', 'dairy'], storage: 'Refrigerator' },
        { name: 'Yogurt (opened)', days: 14, category: 'dairy', keywords: ['yogurt', 'yoghurt', 'greek', 'dairy'], storage: 'Refrigerator' },
        { name: 'Eggs (whole)', days: 35, category: 'dairy', keywords: ['eggs', 'egg', 'whole'], storage: 'Refrigerator' },
        { name: 'Hard Cheese (opened)', days: 28, category: 'dairy', keywords: ['hard', 'cheese', 'cheddar', 'swiss', 'parmesan'], storage: 'Refrigerator' },
        { name: 'Soft Cheese (opened)', days: 7, category: 'dairy', keywords: ['soft', 'cheese', 'brie', 'camembert', 'goat'], storage: 'Refrigerator' },
        { name: 'Ricotta Cheese (opened)', days: 5, category: 'dairy', keywords: ['ricotta', 'cheese', 'dairy'], storage: 'Refrigerator' },
        { name: 'Butter (opened)', days: 90, category: 'dairy', keywords: ['butter', 'dairy'], storage: 'Refrigerator' },
        { name: 'Sour Cream (opened)', days: 14, category: 'dairy', keywords: ['sour', 'cream', 'dairy'], storage: 'Refrigerator' },
        
        // Meat & Seafood
        { name: 'Raw Chicken', days: 2, category: 'meat', keywords: ['chicken', 'poultry', 'raw', 'breast', 'thigh'], storage: 'Refrigerator' },
        { name: 'Ground Beef (raw)', days: 2, category: 'meat', keywords: ['ground', 'beef', 'hamburger', 'raw', 'mince'], storage: 'Refrigerator' },
        { name: 'Fresh Fish (raw)', days: 2, category: 'meat', keywords: ['fish', 'salmon', 'tuna', 'cod', 'raw', 'seafood'], storage: 'Refrigerator' },
        { name: 'Deli Meat (opened)', days: 5, category: 'meat', keywords: ['deli', 'meat', 'sliced', 'turkey', 'ham', 'salami'], storage: 'Refrigerator' },
        { name: 'Cooked Chicken', days: 4, category: 'meat', keywords: ['cooked', 'chicken', 'leftover'], storage: 'Refrigerator' },
        { name: 'Bacon (opened)', days: 7, category: 'meat', keywords: ['bacon', 'pork'], storage: 'Refrigerator' },
        { name: 'Salmon (smoked)', days: 14, category: 'meat', keywords: ['salmon', 'smoked', 'fish'], storage: 'Refrigerator' },
        { name: 'Ground Turkey (raw)', days: 2, category: 'meat', keywords: ['ground', 'turkey', 'raw'], storage: 'Refrigerator' },
        
        // Fresh Produce
        { name: 'Strawberries', days: 5, category: 'produce', keywords: ['strawberries', 'berries', 'fruit'], storage: 'Refrigerator' },
        { name: 'Bananas', days: 7, category: 'produce', keywords: ['bananas', 'banana', 'fruit'], storage: 'Counter' },
        { name: 'Apples', days: 21, category: 'produce', keywords: ['apples', 'apple', 'fruit'], storage: 'Refrigerator' },
        { name: 'Lettuce', days: 10, category: 'produce', keywords: ['lettuce', 'greens', 'salad', 'romaine', 'iceberg'], storage: 'Refrigerator' },
        { name: 'Carrots', days: 28, category: 'produce', keywords: ['carrots', 'carrot', 'vegetable'], storage: 'Refrigerator' },
        { name: 'Potatoes', days: 21, category: 'produce', keywords: ['potatoes', 'potato', 'russet', 'red', 'yukon'], storage: 'Pantry' },
        { name: 'Tomatoes', days: 7, category: 'produce', keywords: ['tomatoes', 'tomato', 'fruit'], storage: 'Counter' },
        { name: 'Onions', days: 30, category: 'produce', keywords: ['onions', 'onion', 'vegetable'], storage: 'Pantry' },
        { name: 'Bell Peppers', days: 10, category: 'produce', keywords: ['bell', 'peppers', 'pepper', 'vegetable'], storage: 'Refrigerator' },
        { name: 'Broccoli', days: 7, category: 'produce', keywords: ['broccoli', 'vegetable'], storage: 'Refrigerator' },
        
        // Pantry & Condiments
        { name: 'Ketchup (opened)', days: 180, category: 'pantry', keywords: ['ketchup', 'tomato', 'sauce'], storage: 'Refrigerator' },
        { name: 'Mayonnaise (opened)', days: 60, category: 'pantry', keywords: ['mayonnaise', 'mayo', 'spread'], storage: 'Refrigerator' },
        { name: 'Salsa (opened)', days: 14, category: 'pantry', keywords: ['salsa', 'sauce', 'dip'], storage: 'Refrigerator' },
        { name: 'Bread (opened)', days: 7, category: 'pantry', keywords: ['bread', 'loaf', 'sliced'], storage: 'Counter' },
        { name: 'Peanut Butter (opened)', days: 90, category: 'pantry', keywords: ['peanut', 'butter', 'spread'], storage: 'Pantry' },
        { name: 'Cereal (opened)', days: 60, category: 'pantry', keywords: ['cereal', 'breakfast'], storage: 'Pantry' },
        { name: 'Pasta (cooked)', days: 5, category: 'pantry', keywords: ['pasta', 'cooked', 'leftovers'], storage: 'Refrigerator' },
        { name: 'Rice (cooked)', days: 6, category: 'pantry', keywords: ['rice', 'cooked', 'leftovers'], storage: 'Refrigerator' },
        
        // Beverages
        { name: 'Coffee (opened)', days: 14, category: 'beverages', keywords: ['coffee', 'beans', 'ground'], storage: 'Pantry' },
        { name: 'Wine (opened)', days: 5, category: 'beverages', keywords: ['wine', 'red', 'white', 'alcohol'], storage: 'Refrigerator' },
        { name: 'Juice (opened)', days: 7, category: 'beverages', keywords: ['juice', 'orange', 'apple', 'grape'], storage: 'Refrigerator' },
        { name: 'Beer (opened)', days: 1, category: 'beverages', keywords: ['beer', 'alcohol'], storage: 'Refrigerator' },
        { name: 'Soda (opened)', days: 2, category: 'beverages', keywords: ['soda', 'soft', 'drink'], storage: 'Refrigerator' },
        { name: 'Coconut Water (opened)', days: 3, category: 'beverages', keywords: ['coconut', 'water'], storage: 'Refrigerator' },
        
        // Leftovers
        { name: 'Leftover Pizza', days: 4, category: 'leftovers', keywords: ['pizza', 'leftovers', 'slice'], storage: 'Refrigerator' },
        { name: 'Soup (homemade)', days: 4, category: 'leftovers', keywords: ['soup', 'homemade', 'leftovers'], storage: 'Refrigerator' },
        { name: 'Chinese Takeout', days: 4, category: 'leftovers', keywords: ['chinese', 'takeout', 'leftovers'], storage: 'Refrigerator' },
        { name: 'Casserole', days: 4, category: 'leftovers', keywords: ['casserole', 'leftovers'], storage: 'Refrigerator' }
    ];
    
    // DOM elements
    let searchInput, autocompleteDropdown;
    let searchIndex = [];
    
    // Initialize when DOM is ready
    function init() {
        searchInput = document.getElementById('searchInput');
        autocompleteDropdown = document.getElementById('autocompleteDropdown');
        
        if (!searchInput || !autocompleteDropdown) return;
        
        // Build search index
        buildSearchIndex();
        
        // Set up event listeners with progressive enhancement
        addEventListenerCompat(searchInput, 'input', handleSearchInput);
        addEventListenerCompat(searchInput, 'keydown', handleKeyDown);
        addEventListenerCompat(searchInput, 'focus', handleSearchFocus);
        addEventListenerCompat(searchInput, 'blur', handleSearchBlur);
        addEventListenerCompat(document, 'click', handleDocumentClick);
        
        // Handle URL search parameter
        handleUrlSearch();
        
        // Add dynamic styles for enhanced functionality
        addEnhancedStyles();
        
        // Track analytics events
        setupAnalytics();
    }
    
    // Cross-browser event listener compatibility
    function addEventListenerCompat(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, handler);
        }
    }
    
    // Build search index for faster lookups
    function buildSearchIndex() {
        searchIndex = foodDatabase.map(item => ({
            ...item,
            searchText: (item.name + ' ' + item.keywords.join(' ')).toLowerCase()
        }));
    }
    
    // Handle search input with debouncing
    let searchTimeout;
    function handleSearchInput() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = searchInput.value.trim();
            if (query.length >= 2) {
                showSuggestions(query);
            } else {
                hideSuggestions();
                clearHighlights();
            }
        }, 200);
    }
    
    // Handle search input focus
    function handleSearchFocus() {
        const query = searchInput.value.trim();
        if (query.length >= 2) {
            showSuggestions(query);
        }
    }
    
    // Handle search input blur (with delay for clicks)
    function handleSearchBlur() {
        setTimeout(() => {
            if (!autocompleteDropdown.matches(':hover')) {
                hideSuggestions();
            }
        }, 150);
    }
    
    // Handle keyboard navigation
    function handleKeyDown(e) {
        const suggestions = autocompleteDropdown.querySelectorAll('.suggestion-item');
        const activeItem = autocompleteDropdown.querySelector('.suggestion-item.active');
        
        switch (e.keyCode || e.which) {
            case 38: // Up arrow
                e.preventDefault();
                navigateSuggestions(suggestions, activeItem, -1);
                break;
            case 40: // Down arrow
                e.preventDefault();
                navigateSuggestions(suggestions, activeItem, 1);
                break;
            case 13: // Enter
                e.preventDefault();
                if (activeItem) {
                    selectSuggestion(activeItem.getAttribute('data-name'));
                } else {
                    performSearch(searchInput.value);
                }
                break;
            case 27: // Escape
                hideSuggestions();
                searchInput.blur();
                break;
        }
    }
    
    // Navigate through suggestions
    function navigateSuggestions(suggestions, activeItem, direction) {
        if (suggestions.length === 0) return;
        
        let newIndex = 0;
        if (activeItem) {
            const currentIndex = Array.from(suggestions).indexOf(activeItem);
            newIndex = currentIndex + direction;
            activeItem.classList.remove('active');
        }
        
        newIndex = Math.max(0, Math.min(newIndex, suggestions.length - 1));
        suggestions[newIndex].classList.add('active');
        suggestions[newIndex].scrollIntoView({ block: 'nearest' });
    }
    
    // Show search suggestions
    function showSuggestions(query) {
        const matches = searchInDatabase(query);
        
        if (matches.length === 0) {
            showNoSuggestions(query);
            return;
        }
        
        const html = matches.map(item => 
            `<div class="suggestion-item" data-name="${escapeHtml(item.name)}" role="option">
                <div class="suggestion-name">${highlightMatch(item.name, query)}</div>
                <div class="suggestion-info">${item.days} days · ${item.storage}</div>
            </div>`
        ).join('');
        
        autocompleteDropdown.innerHTML = html;
        autocompleteDropdown.style.display = 'block';
        autocompleteDropdown.setAttribute('aria-hidden', 'false');
        
        // Add click handlers to suggestions
        const suggestionItems = autocompleteDropdown.querySelectorAll('.suggestion-item');
        for (let i = 0; i < suggestionItems.length; i++) {
            addEventListenerCompat(suggestionItems[i], 'click', function() {
                selectSuggestion(this.getAttribute('data-name'));
            });
        }
    }
    
    // Show no suggestions found message
    function showNoSuggestions(query) {
        autocompleteDropdown.innerHTML = `
            <div class="no-suggestions" role="option">
                <div class="no-suggestions-text">No results for "${escapeHtml(query)}"</div>
                <div class="no-suggestions-hint">Try: "milk", "eggs", "chicken", "leftover pizza"</div>
            </div>
        `;
        autocompleteDropdown.style.display = 'block';
        autocompleteDropdown.setAttribute('aria-hidden', 'false');
    }
    
    // Search in database
    function searchInDatabase(query) {
        const normalizedQuery = query.toLowerCase();
        const matches = [];
        
        for (let i = 0; i < searchIndex.length; i++) {
            const item = searchIndex[i];
            if (item.searchText.indexOf(normalizedQuery) !== -1) {
                // Calculate relevance score
                let score = 0;
                if (item.name.toLowerCase().indexOf(normalizedQuery) === 0) {
                    score = 100; // Exact start match
                } else if (item.name.toLowerCase().indexOf(normalizedQuery) !== -1) {
                    score = 80; // Name contains query
                } else {
                    score = 60; // Keyword match
                }
                
                matches.push({ ...item, score });
            }
        }
        
        // Sort by relevance score and limit results
        return matches
            .sort((a, b) => b.score - a.score)
            .slice(0, 6);
    }
    
    // Highlight matching text
    function highlightMatch(text, query) {
        if (!query) return escapeHtml(text);
        
        const regex = new RegExp('(' + escapeRegex(query) + ')', 'gi');
        return escapeHtml(text).replace(regex, '<mark>$1</mark>');
    }
    
    // Escape HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Escape regex
    function escapeRegex(text) {
        return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    // Select a suggestion
    function selectSuggestion(name) {
        searchInput.value = name;
        hideSuggestions();
        performSearch(name);
        
        // Track suggestion selection
        trackEvent('suggestion_selected', {
            food_item: name,
            search_method: 'autocomplete'
        });
    }
    
    // Hide suggestions
    function hideSuggestions() {
        autocompleteDropdown.style.display = 'none';
        autocompleteDropdown.setAttribute('aria-hidden', 'true');
        autocompleteDropdown.innerHTML = '';
    }
    
    // Handle clicks outside search
    function handleDocumentClick(e) {
        if (!searchInput.contains(e.target) && !autocompleteDropdown.contains(e.target)) {
            hideSuggestions();
        }
    }
    
    // Perform search and highlight results
    function performSearch(query) {
        if (!query) return;
        
        const matches = searchInDatabase(query);
        highlightSearchResults(matches, query);
        
        // Update URL without page reload (if supported)
        if (history && history.pushState) {
            const newUrl = window.location.pathname + '?search=' + encodeURIComponent(query);
            history.pushState({ search: query }, '', newUrl);
        }
        
        // Track search
        trackEvent('search_performed', {
            search_term: query,
            results_found: matches.length
        });
    }
    
    // Highlight search results on page
    function highlightSearchResults(matches, query) {
        // Clear previous highlights
        clearHighlights();
        
        if (matches.length === 0) {
            showNoResults(query);
            return;
        }
        
        // Highlight matching sections and scroll to first match
        let firstMatch = null;
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i];
            const highlighted = highlightSection(match.category, match.name);
            if (highlighted && !firstMatch) {
                firstMatch = highlighted;
            }
        }
        
        // Scroll to first match
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        showSearchResults(matches, query);
    }
    
    // Clear previous highlights
    function clearHighlights() {
        const highlighted = document.querySelectorAll('.search-highlight');
        for (let i = 0; i < highlighted.length; i++) {
            highlighted[i].classList.remove('search-highlight');
        }
        
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.remove();
        }
    }
    
    // Highlight a specific section
    function highlightSection(categoryId, itemName) {
        const section = document.getElementById(categoryId);
        if (!section) return null;
        
        const items = section.querySelectorAll('.product-item');
        for (let i = 0; i < items.length; i++) {
            const nameElement = items[i].querySelector('.product-name');
            if (nameElement && nameElement.textContent.toLowerCase().indexOf(itemName.toLowerCase()) !== -1) {
                items[i].classList.add('search-highlight');
                return items[i];
            }
        }
        return null;
    }
    
    // Show search results summary
    function showSearchResults(matches, query) {
        const main = document.querySelector('main');
        const searchResults = document.createElement('div');
        searchResults.id = 'searchResults';
        searchResults.innerHTML = `
            <div class="search-results-banner">
                <h2>Search Results for "${escapeHtml(query)}"</h2>
                <p>Found ${matches.length} matching food item${matches.length !== 1 ? 's' : ''}. Highlighted items below show your results.</p>
                <button class="clear-search" onclick="clearSearch()">Clear Search</button>
            </div>
        `;
        
        // Insert after the intro paragraph
        const intro = main.querySelector('p');
        if (intro && intro.nextSibling) {
            main.insertBefore(searchResults, intro.nextSibling);
        } else {
            main.insertBefore(searchResults, main.children[1]);
        }
    }
    
    // Show no results message
    function showNoResults(query) {
        const main = document.querySelector('main');
        const searchResults = document.createElement('div');
        searchResults.id = 'searchResults';
        searchResults.innerHTML = `
            <div class="no-results-banner">
                <h2>No results found for "${escapeHtml(query)}"</h2>
                <p>Try searching for common food items like "milk", "eggs", "chicken", or "leftover pizza".</p>
                <button class="clear-search" onclick="clearSearch()">Clear Search</button>
            </div>
        `;
        
        const intro = main.querySelector('p');
        if (intro && intro.nextSibling) {
            main.insertBefore(searchResults, intro.nextSibling);
        } else {
            main.insertBefore(searchResults, main.children[1]);
        }
    }
    
    // Clear search function (global for button onclick)
    window.clearSearch = function() {
        searchInput.value = '';
        clearHighlights();
        hideSuggestions();
        
        // Update URL
        if (history && history.pushState) {
            history.pushState({}, '', window.location.pathname);
        }
    };
    
    // Handle URL search parameter
    function handleUrlSearch() {
        const urlParams = getUrlParams();
        if (urlParams.search) {
            const query = decodeURIComponent(urlParams.search);
            searchInput.value = query;
            performSearch(query);
        }
    }
    
    // Get URL parameters (cross-browser)
    function getUrlParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const queries = queryString.split('&');
        
        for (let i = 0; i < queries.length; i++) {
            const pair = queries[i].split('=');
            if (pair[0]) {
                params[pair[0]] = pair[1] || '';
            }
        }
        
        return params;
    }
    
    // Add enhanced styles for search functionality
    function addEnhancedStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .autocomplete-dropdown {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border-radius: 0 0 20px 20px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                max-height: 400px;
                overflow-y: auto;
                z-index: 1000;
                display: none;
            }
            
            .suggestion-item {
                padding: 1rem 1.5rem;
                border-bottom: 1px solid #f0f0f0;
                cursor: pointer;
                transition: background-color 0.2s ease;
            }
            
            .suggestion-item:hover,
            .suggestion-item.active {
                background-color: #f8f9ff;
            }
            
            .suggestion-item:last-child {
                border-bottom: none;
                border-radius: 0 0 20px 20px;
            }
            
            .suggestion-name {
                font-weight: 600;
                color: #333;
                margin-bottom: 0.25rem;
            }
            
            .suggestion-info {
                font-size: 0.9rem;
                color: #666;
            }
            
            .suggestion-name mark {
                background-color: #fff3cd;
                padding: 0 2px;
                border-radius: 2px;
            }
            
            .no-suggestions {
                padding: 1.5rem;
                text-align: center;
                color: #666;
            }
            
            .no-suggestions-text {
                font-weight: 600;
                margin-bottom: 0.5rem;
            }
            
            .no-suggestions-hint {
                font-size: 0.9rem;
                color: #888;
            }
            
            .search-highlight {
                background-color: #fff3cd !important;
                border-left-color: #ffc107 !important;
                animation: highlightPulse 2s ease-in-out;
                scroll-margin-top: 2rem;
            }
            
            @keyframes highlightPulse {
                0%, 100% { background-color: #fff3cd; }
                50% { background-color: #fff8dc; }
            }
            
            .search-results-banner,
            .no-results-banner {
                background: #e0f2fe;
                padding: 1.5rem;
                border-radius: 12px;
                margin: 2rem 0;
                border-left: 4px solid #0288d1;
                text-align: center;
            }
            
            .no-results-banner {
                background: #fff3e0;
                border-left-color: #ff9800;
            }
            
            .search-results-banner h2,
            .no-results-banner h2 {
                margin: 0 0 0.5rem 0;
                color: #01579b;
                font-size: 1.5rem;
            }
            
            .no-results-banner h2 {
                color: #e65100;
            }
            
            .search-results-banner p,
            .no-results-banner p {
                margin: 0 0 1rem 0;
                color: #0277bd;
            }
            
            .no-results-banner p {
                color: #ef6c00;
            }
            
            .clear-search {
                background: #667eea;
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 6px;
                cursor: pointer;
                font-size: 0.9rem;
                transition: background-color 0.2s ease;
            }
            
            .clear-search:hover {
                background: #5a67d8;
            }
            
            /* Accessibility improvements */
            .search-input:focus {
                outline: 2px solid #667eea;
                outline-offset: 2px;
            }
            
            /* Mobile enhancements */
            @media (max-width: 768px) {
                .autocomplete-dropdown {
                    max-height: 300px;
                }
                
                .suggestion-item {
                    padding: 0.75rem 1rem;
                }
                
                .search-results-banner,
                .no-results-banner {
                    padding: 1rem;
                    margin: 1rem 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Analytics setup and tracking
    function setupAnalytics() {
        // Track page view
        trackEvent('page_view', {
            page_title: document.title,
            page_location: window.location.href
        });
    }
    
    function trackEvent(eventName, parameters) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, parameters);
        }
        
        // Console log for debugging (remove in production)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('Analytics Event:', eventName, parameters);
        }
    }
    
    // Cross-browser DOMContentLoaded
    function ready(fn) {
        if (document.readyState === 'complete' || 
            (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
            fn();
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState === 'complete') fn();
            });
        }
    }
    
    // Initialize the application
    ready(init);
    
    // Trust pages modal functionality
    function createModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <span class="close" aria-label="Close">&times;</span>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close handlers
        const closeBtn = modal.querySelector('.close');
        closeBtn.onclick = () => modal.style.display = 'none';
        
        modal.onclick = (e) => {
            if (e.target === modal) modal.style.display = 'none';
        };
        
        // Escape key handler
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
        
        return modal;
    }
    
    // Trust page content
    const trustPages = {
        about: {
            title: 'About UseByWhen',
            content: `
                <h3>Our Mission</h3>
                <p>UseByWhen helps reduce food waste by providing accurate, science-based shelf life information for common food items. Our goal is to help people make informed decisions about food safety and storage.</p>
                
                <h3>Data Sources</h3>
                <p>All information on UseByWhen comes from trusted, authoritative sources:</p>
                <ul>
                    <li><strong>USDA</strong> - United States Department of Agriculture food safety guidelines</li>
                    <li><strong>FDA</strong> - Food and Drug Administration recommendations</li>
                    <li><strong>Manufacturer Guidelines</strong> - Direct from food producers and packaging</li>
                    <li><strong>Food Safety Research</strong> - Peer-reviewed scientific studies</li>
                </ul>
                
                <h3>Accuracy Commitment</h3>
                <p>We regularly review and update our database to ensure accuracy. However, always use your best judgment when determining food safety. When in doubt, throw it out!</p>
                
                <h3>Contact Us</h3>
                <p>Have suggestions or found incorrect information? Contact us at <a href="mailto:hello@usebywhen.com">hello@usebywhen.com</a></p>
            `
        },
        privacy: {
            title: 'Privacy Policy',
            content: `
                <p><strong>Last updated:</strong> August 17, 2025</p>
                
                <h3>Information We Collect</h3>
                <p>UseByWhen collects minimal information to provide our service:</p>
                <ul>
                    <li><strong>Usage Analytics:</strong> We use Google Analytics to understand how visitors use our site</li>
                    <li><strong>Search Queries:</strong> Anonymous search terms to improve our database</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, and device information for security</li>
                </ul>
                
                <h3>How We Use Your Information</h3>
                <ul>
                    <li>Improve our food database and search functionality</li>
                    <li>Analyze site performance and user experience</li>
                    <li>Prevent abuse and ensure site security</li>
                </ul>
                
                <h3>Information Sharing</h3>
                <p>We do not sell, trade, or rent your personal information. We may share anonymous, aggregated data for research purposes.</p>
                
                <h3>Cookies</h3>
                <p>We use cookies for analytics and to remember your preferences. You can disable cookies in your browser settings.</p>
                
                <h3>Your Rights</h3>
                <p>You have the right to request information about data we've collected and to request its deletion. Contact us at <a href="mailto:privacy@usebywhen.com">privacy@usebywhen.com</a></p>
                
                <h3>Updates</h3>
                <p>We may update this policy periodically. Check this page for the latest version.</p>
            `
        },
        terms: {
            title: 'Terms of Service',
            content: `
                <p><strong>Last updated:</strong> August 17, 2025</p>
                
                <h3>Acceptance of Terms</h3>
                <p>By using UseByWhen, you agree to these terms. If you don't agree, please don't use our service.</p>
                
                <h3>Service Description</h3>
                <p>UseByWhen provides general food shelf life information for educational purposes. This information should not replace professional food safety advice or your own judgment.</p>
                
                <h3>Disclaimer</h3>
                <p><strong>Important:</strong> UseByWhen provides general guidelines only. Food safety depends on many factors including storage conditions, temperature, humidity, and individual food items. Always use your best judgment.</p>
                
                <h3>Limitation of Liability</h3>
                <p>UseByWhen is not responsible for any illness, injury, or loss resulting from use of our information. When in doubt about food safety, consult a qualified professional or discard the item.</p>
                
                <h3>Intellectual Property</h3>
                <p>The content, design, and functionality of UseByWhen are protected by copyright and other laws. You may not copy, reproduce, or distribute our content without permission.</p>
                
                <h3>User Conduct</h3>
                <p>You agree to use UseByWhen responsibly and not to:</p>
                <ul>
                    <li>Attempt to harm or interfere with the service</li>
                    <li>Use automated tools to scrape or download content</li>
                    <li>Submit false or misleading information</li>
                </ul>
                
                <h3>Changes to Terms</h3>
                <p>We may update these terms periodically. Continued use after changes constitutes acceptance.</p>
                
                <h3>Contact</h3>
                <p>Questions about these terms? Contact us at <a href="mailto:legal@usebywhen.com">legal@usebywhen.com</a></p>
            `
        },
        contact: {
            title: 'Contact Us',
            content: `
                <h3>Get in Touch</h3>
                <p>We'd love to hear from you! Here's how to reach us:</p>
                
                <h3>General Questions</h3>
                <p>Email: <a href="mailto:hello@usebywhen.com">hello@usebywhen.com</a></p>
                <p>For general questions, feedback, or suggestions about UseByWhen.</p>
                
                <h3>Food Safety Questions</h3>
                <p><strong>Important:</strong> For urgent food safety concerns, please contact:</p>
                <ul>
                    <li><a href="https://www.usda.gov" target="_blank" rel="noopener">USDA Food Safety and Inspection Service</a></li>
                    <li><a href="https://www.fda.gov" target="_blank" rel="noopener">FDA Food Safety Resources</a></li>
                    <li>Your local health department</li>
                    <li>Poison control: 1-800-222-1222</li>
                </ul>
                
                <h3>Suggest Food Items</h3>
                <p>Missing a food item? Email us at <a href="mailto:suggestions@usebywhen.com">suggestions@usebywhen.com</a></p>
                <p>Please include:</p>
                <ul>
                    <li>Food item name and category</li>
                    <li>Storage method and conditions</li>
                    <li>Reliable source for shelf life information</li>
                </ul>
                
                <h3>Report Issues</h3>
                <p>Found incorrect information or technical problems?</p>
                <p>Email: <a href="mailto:support@usebywhen.com">support@usebywhen.com</a></p>
                
                <h3>Business Inquiries</h3>
                <p>For partnerships or business questions:</p>
                <p>Email: <a href="mailto:business@usebywhen.com">business@usebywhen.com</a></p>
                
                <h3>Follow Us</h3>
                <p>Stay updated with food safety tips and new features:</p>
                <ul>
                    <li><a href="https://www.tiktok.com/@usebywhen" target="_blank" rel="noopener">TikTok @usebywhen</a></li>
                    <li><a href="https://www.instagram.com/usebywhen" target="_blank" rel="noopener">Instagram @usebywhen</a></li>
                    <li><a href="https://twitter.com/usebywhen" target="_blank" rel="noopener">X (Twitter) @usebywhen</a></li>
                </ul>
                
                <h3>Response Time</h3>
                <p>We typically respond to emails within 24-48 hours during business days.</p>
            `
        }
    };
    
    // Setup trust page links
    ready(function() {
        const footerLinks = document.querySelectorAll('.footer-links a');
        footerLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const pageName = href.substring(1);
                if (trustPages[pageName]) {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const modal = createModal(trustPages[pageName].title, trustPages[pageName].content);
                        modal.style.display = 'block';
                        
                        // Track modal open
                        trackEvent('modal_opened', {
                            modal_name: pageName,
                            modal_title: trustPages[pageName].title
                        });
                        
                        // Focus management for accessibility
                        const closeBtn = modal.querySelector('.close');
                        closeBtn.focus();
                    });
                }
            }
        });
    });
    
    // Service Worker registration
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(function() {
            // Service worker registration failed - fail silently
        });
    }
    
})();