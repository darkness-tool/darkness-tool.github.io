document.addEventListener('DOMContentLoaded', () => {
  // Create the menu container
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.bottom = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '50px'; // Default closed state
  container.style.background = 'white';
  container.style.boxShadow = '0 -2px 10px rgba(0,0,0,0.2)';
  container.style.transition = 'height 0.3s ease';
  container.style.overflow = 'hidden';
  container.style.zIndex = '9999'; // Ensure it's on top

  // Create the toggle button
  const button = document.createElement('div');
  button.innerText = '探索更多有趣網站 ▼';
  button.style.height = '50px';
  button.style.lineHeight = '50px';
  button.style.textAlign = 'center';
  button.style.background = '#007bff'; // Blue background
  button.style.color = 'white';
  button.style.cursor = 'pointer';
  button.style.fontSize = '16px';
  button.style.fontWeight = 'bold'; // Make text bolder
  button.style.borderRadius = '5px 5px 0 0'; // Rounded top corners
  button.style.transition = 'background 0.3s ease'; // Smooth hover transition

  // Hover effects
  button.addEventListener('mouseenter', () => {
    button.style.background = '#0056b3'; // Darker blue on hover
  });
  button.addEventListener('mouseleave', () => {
    button.style.background = '#007bff'; // Original blue
  });

  // Create the menu content area
  const content = document.createElement('div');
  content.id = 'menu-content';
  content.style.overflowY = 'auto';
  content.style.maxHeight = 'calc(50vh - 50px)'; // Adjust for footer
  content.style.flex = '1'; // Take remaining space

  // Create the menu footer area
  const footer = document.createElement('div');

  // Append elements
  container.appendChild(button);
  container.appendChild(content);
  content.appendChild(footer);
  document.body.appendChild(container);

  // Toggle state
  let isOpen = false;
  let contentLoaded = false;
  let footerLoaded = false;

  // Function to load jQuery if not present
  function loadjQuery(callback) {
    if (window.jQuery) {
      callback();
    } else {
      const script = document.createElement('script');
      script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      script.onload = callback;
      document.head.appendChild(script);
    }
  }

  // Function to load content
  function loadContent() {
    loadjQuery(() => {
      $('#menu-content').load('indexContentImprove.html', () => {
        contentLoaded = true;
      });
      $('#menu-footer').load('banner.html', () => {
        footerLoaded = true;
      });
    });
  }

  button.addEventListener('click', () => {
    if (isOpen) {
      container.style.height = '50px';
      button.innerText = '探索更多有趣網站 ▼';
    } else {
      container.style.height = '50vh';
      button.innerText = '收起 ▲';
      if (!contentLoaded || !footerLoaded) {
        loadContent();
      }
    }
    isOpen = !isOpen;
  });
});