// Claude API Configuration
// API key is handled server-side for security
// Client-side requests will use the server's API key automatically

// Browser-compatible configuration
const CLAUDE_API_KEY = null; // API key is not needed on client-side

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CLAUDE_API_KEY };
} else {
    // Make available globally in browser
    window.CLAUDE_API_KEY = CLAUDE_API_KEY;
}
