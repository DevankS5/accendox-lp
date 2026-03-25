/**
 * Main initialization function
 * Runs when the DOM is fully loaded
 */
function init() {
    console.log('Thank you page loaded successfully');
    
    // Check for call=True query parameter
    checkCallParameter();
}

/**
 * Check if call=True is present in URL query parameters
 * If present, show the Book a Call button
 * TEMPORARILY DISABLED - Button is always shown
 */
function checkCallParameter() {
    // Temporarily commenting out the conditional logic
    // Always show the button regardless of query params
    const bookCallButton = document.getElementById('bookCallButton');
    if (bookCallButton) {
        bookCallButton.style.display = 'block';
        bookCallButton.style.visibility = 'visible';
    }
    
    /* Original conditional logic (commented out temporarily):
    const urlParams = new URLSearchParams(window.location.search);
    const callParam = urlParams.get('call');
    
    if (callParam && callParam.toLowerCase() === 'true') {
        const bookCallButton = document.getElementById('bookCallButton');
        if (bookCallButton) {
            bookCallButton.style.display = 'block';
            bookCallButton.style.visibility = 'visible';
        }
    }
    */
}

// ===========================
// Event Listeners
// ===========================

// Wait for the DOM to be fully loaded before running our initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM is already loaded, run init immediately
    init();
}
