// static/js/fix-brython-path.js

(function() {
  console.log('Brython path fixer starting...');
  
  // Function to normalize URL path
  function normalizePath(url) {
    var normalized = url;
    
    // Fix duplicate baseUrl (praktikum-dasar-pemrograman appears twice)
    normalized = normalized.replace(
      /\/praktikum-dasar-pemrograman\/+praktikum-dasar-pemrograman\//g, 
      '/praktikum-dasar-pemrograman/'
    );
    
    // Fix double slashes (but keep protocol slashes)
    normalized = normalized.replace(/([^:])\/\/+/g, '$1/');
    
    // Fix brython_runner path issues
    normalized = normalized.replace(/brython_runner\/__init__\.py/g, 'brython_runner.py');
    
    // Fix bry-libs double slashes
    normalized = normalized.replace(/\/bry-libs\/+/g, '/bry-libs/');
    
    return normalized;
  }
  
  // Store original fetch
  var originalFetch = window.fetch;
  
  // Override fetch function
  window.fetch = function(input, init) {
    var url;
    
    // Convert input to string URL
    if (input instanceof Request) {
      url = input.url;
    } else if (input instanceof URL) {
      url = input.toString();
    } else {
      url = input;
    }
    
    var originalUrl = url;
    url = normalizePath(url);
    
    if (originalUrl !== url) {
      console.log('Fixed URL:', originalUrl, '->', url);
    }
    
    // Create new Request or use fixed URL
    var fixedInput = input instanceof Request 
      ? new Request(url, input) 
      : url;
    
    // Call original fetch with fixed URL
    return originalFetch.call(this, fixedInput, init);
  };
  
  // Function to fix script sources
  function fixScriptSources() {
    var scripts = document.querySelectorAll('script[src*="bry-libs"], script[src*="brython"], script[type="text/python"]');
    scripts.forEach(function(script) {
      if (script.src) {
        var originalSrc = script.src;
        var normalizedSrc = normalizePath(originalSrc);
        
        if (originalSrc !== normalizedSrc) {
          script.src = normalizedSrc;
          console.log('Fixed script src:', originalSrc, '->', normalizedSrc);
        }
      }
    });
  }
  
  // Function to fix global URLs
  function fixGlobalUrls() {
    if (window.brython_runner_url) {
      var originalUrl = window.brython_runner_url;
      var normalizedUrl = normalizePath(originalUrl);
      
      if (originalUrl !== normalizedUrl) {
        window.brython_runner_url = normalizedUrl;
        console.log('Fixed brython_runner_url:', originalUrl, '->', normalizedUrl);
      }
    }
    
    // Check for other global brython variables
    var globalVars = ['brython_src', 'brython_stdlib', 'brython_runner'];
    globalVars.forEach(function(varName) {
      if (window[varName]) {
        var original = window[varName];
        var normalized = normalizePath(original);
        if (original !== normalized) {
          window[varName] = normalized;
          console.log('Fixed ' + varName + ':', original, '->', normalized);
        }
      }
    });
  }
  
  // Fix existing elements immediately
  fixScriptSources();
  fixGlobalUrls();
  
  // Listen for DOM changes to catch dynamically added scripts
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if it's a script tag
            if (node.tagName === 'SCRIPT' && node.src) {
              var originalSrc = node.src;
              var normalizedSrc = normalizePath(originalSrc);
              if (originalSrc !== normalizedSrc) {
                node.src = normalizedSrc;
                console.log('Fixed new script src:', originalSrc, '->', normalizedSrc);
              }
            }
            
            // Check for nested script tags
            var nestedScripts = node.querySelectorAll && node.querySelectorAll('script[src*="bry-libs"], script[src*="brython"], script[type="text/python"]');
            if (nestedScripts) {
              nestedScripts.forEach(function(script) {
                if (script.src) {
                  var originalSrc = script.src;
                  var normalizedSrc = normalizePath(originalSrc);
                  if (originalSrc !== normalizedSrc) {
                    script.src = normalizedSrc;
                    console.log('Fixed nested script src:', originalSrc, '->', normalizedSrc);
                  }
                }
              });
            }
          }
        });
        
        // Re-fix global URLs after DOM changes
        fixGlobalUrls();
      }
    });
  });
  
  // Start observing when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      // Fix again after DOM is loaded
      setTimeout(function() {
        fixScriptSources();
        fixGlobalUrls();
      }, 100);
    });
  } else {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    // Fix again for already loaded content
    setTimeout(function() {
      fixScriptSources();
      fixGlobalUrls();
    }, 100);
  }
  
  // Cleanup function
  window.addEventListener('beforeunload', function() {
    observer.disconnect();
  });
  
  console.log('Brython path fixer initialized');
})();
