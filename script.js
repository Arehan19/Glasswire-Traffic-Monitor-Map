// Global variables
let liveConnectionsEnabled = true;
let currentTimePeriod = 'live';
let chartData = {
  live: Array(15).fill(0).map(() => Math.random() * 100),
  '1h': Array(15).fill(0).map(() => Math.random() * 80),
  '6h': Array(15).fill(0).map(() => Math.random() * 120),
  '24h': Array(15).fill(0).map(() => Math.random() * 90),
  '7d': Array(15).fill(0).map(() => Math.random() * 60)
};
let networkStats = {
  uploadSpeed: 538.9,
  downloadSpeed: 263.8,
  latency: 45,
  packetLoss: 0.1
};

// Simplified applications array
const applications = [
  { name: 'Chrome', icon: '🌐', upload: 234.5, download: 567.8, status: 'active' },
  { name: 'Firefox', icon: '🦊', upload: 67.3, download: 123.4, status: 'active' },
  { name: 'Outlook', icon: '📧', upload: 45.2, download: 89.1, status: 'active' },
  { name: 'Teams', icon: '💬', upload: 123.7, download: 45.6, status: 'active' },
  { name: 'Steam', icon: '🎮', upload: 12.3, download: 234.5, status: 'warning' },
  { name: 'Discord', icon: '💬', upload: 34.5, download: 67.8, status: 'active' },
  { name: 'Spotify', icon: '🎵', upload: 8.9, download: 156.7, status: 'active' },
  { name: 'VS Code', icon: '💻', upload: 23.4, download: 45.6, status: 'active' },
  { name: 'Zoom', icon: '📹', upload: 98.7, download: 234.1, status: 'active' },
  { name: 'Slack', icon: '💼', upload: 15.2, download: 32.8, status: 'active' },
  { name: 'Photoshop', icon: '🎨', upload: 5.6, download: 12.4, status: 'inactive' },
  { name: 'OneDrive', icon: '☁️', upload: 45.8, download: 78.3, status: 'active' },
  { name: 'Netflix', icon: '🎬', upload: 3.2, download: 456.7, status: 'warning' },
  { name: 'GitHub', icon: '🐙', upload: 12.7, download: 34.9, status: 'active' },
  { name: 'Docker', icon: '🐳', upload: 8.3, download: 15.6, status: 'active' },
  { name: 'Battle.net', icon: '⚔️', upload: 18.9, download: 267.4, status: 'warning' },
  { name: 'Skype', icon: '📞', upload: 34.1, download: 67.5, status: 'inactive' },
  { name: 'Dropbox', icon: '📦', upload: 28.6, download: 52.3, status: 'active' },
  { name: 'Epic Games', icon: '🎯', upload: 9.8, download: 189.2, status: 'warning' },
  { name: 'Telegram', icon: '✈️', upload: 7.4, download: 15.8, status: 'active' }
];

// Updated global connections with proper coordinates and realistic network data
const globalConnections = [
  {
    country: 'United States',
    ip: '104.16.249.249',
    status: 'secure',
    region: 'North America',
    x: 200,
    y: 180,
    upload: '74.4 KB/s',
    download: '339.0 KB/s',
    latency: '26ms',
    packetLoss: '1.2%'
  },
  {
    country: 'Germany',
    ip: '157.240.12.35',
    status: 'secure',
    region: 'Europe',
    x: 500,
    y: 160,
    upload: '78.5 KB/s',
    download: '367.8 KB/s',
    latency: '38ms',
    packetLoss: '0.9%'
  },
  {
    country: 'United Kingdom',
    ip: '151.101.193.140',
    status: 'secure',
    region: 'Europe',
    x: 450,
    y: 150,
    upload: '82.1 KB/s',
    download: '298.4 KB/s',
    latency: '28ms',
    packetLoss: '0.5%'
  },
  {
    country: 'Japan',
    ip: '172.217.175.110',
    status: 'warning',
    region: 'Asia',
    x: 780,
    y: 190,
    upload: '92.7 KB/s',
    download: '412.3 KB/s',
    latency: '45ms',
    packetLoss: '1.5%'
  },
  {
    country: 'Singapore',
    ip: '13.107.42.14',
    status: 'secure',
    region: 'Asia',
    x: 680,
    y: 300,
    upload: '72.8 KB/s',
    download: '345.2 KB/s',
    latency: '35ms',
    packetLoss: '0.6%'
  },
  {
    country: 'Brazil',
    ip: '177.71.128.140',
    status: 'warning',
    region: 'South America',
    x: 290,
    y: 350,
    upload: '95.2 KB/s',
    download: '423.7 KB/s',
    latency: '52ms',
    packetLoss: '1.7%'
  },
  {
    country: 'Canada',
    ip: '99.84.227.28',
    status: 'secure',
    region: 'North America',
    x: 180,
    y: 140,
    upload: '68.2 KB/s',
    download: '315.7 KB/s',
    latency: '32ms',
    packetLoss: '0.8%'
  },
  {
    country: 'France',
    ip: '185.199.108.153',
    status: 'secure',
    region: 'Europe',
    x: 480,
    y: 170,
    upload: '88.9 KB/s',
    download: '392.1 KB/s',
    latency: '42ms',
    packetLoss: '1.1%'
  },
  {
    country: 'Australia',
    ip: '203.208.60.1',
    status: 'warning',
    region: 'Oceania',
    x: 780,
    y: 380,
    upload: '80.6 KB/s',
    download: '376.9 KB/s',
    latency: '48ms',
    packetLoss: '1.3%'
  },
  {
    country: 'Russia',
    ip: '77.88.55.88',
    status: 'danger',
    region: 'Europe',
    x: 580,
    y: 140,
    upload: '105.3 KB/s',
    download: '445.6 KB/s',
    latency: '65ms',
    packetLoss: '2.1%'
  },
  {
    country: 'China',
    ip: '180.76.76.76',
    status: 'danger',
    region: 'Asia',
    x: 680,
    y: 180,
    upload: '91.4 KB/s',
    download: '408.5 KB/s',
    latency: '71ms',
    packetLoss: '2.3%'
  },
  {
    country: 'Netherlands',
    ip: '8.8.8.8',
    status: 'secure',
    region: 'Europe',
    x: 470,
    y: 155,
    upload: '65.4 KB/s',
    download: '287.6 KB/s',
    latency: '29ms',
    packetLoss: '0.7%'
  }
];

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function () {
  initializeTheme();
  showLoadingScreen();

  setTimeout(() => {
    initializeDashboard();
    hideLoadingScreen();
  }, 2500);
});

// Theme Management Functions
function initializeTheme() {
  // Check for saved theme preference or default to 'dark'
  const savedTheme = localStorage.getItem('datawave-theme') || 'dark';

  // Apply the theme
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Apply new theme with smooth transition
  document.documentElement.style.transition = 'all 0.3s ease';
  document.documentElement.setAttribute('data-theme', newTheme);

  // Save preference
  localStorage.setItem('datawave-theme', newTheme);

  // Remove transition after animation completes
  setTimeout(() => {
    document.documentElement.style.transition = '';
  }, 300);
}

function showLoadingScreen() {
  const progressBar = document.querySelector('.loading-progress .progress-bar');
  let progress = 0;

  const progressInterval = setInterval(() => {
    progress += Math.random() * 12;
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
    }
    if (progressBar) {
      progressBar.style.width = progress + '%';
    }
  }, 150);
}

function hideLoadingScreen() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    loadingOverlay.classList.add('hidden');

    setTimeout(() => {
      loadingOverlay.style.display = 'none';
    }, 500);
  }
}

function initializeDashboard() {
  setupEventListeners();
  updateCurrentTime();
  renderApplications();
  renderChart();
  updateNetworkStats();
  populateConnectionsList();
  renderWorldMap();
  startRealTimeUpdates();
  updateMemoryUsage();
  updateTotalUsageDisplay();
  setupMapPopup();
}

function setupEventListeners() {
  // Theme toggle button
  const themeToggleBtn = document.getElementById('themeToggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Live connections toggle
  const liveToggle = document.getElementById('liveConnections');
  if (liveToggle) {
    liveToggle.addEventListener('change', function (e) {
      liveConnectionsEnabled = e.target.checked;
      if (liveConnectionsEnabled) {
        startRealTimeUpdates();
      }
    });
  }

  // Connection filter
  const connectionFilter = document.getElementById('connectionFilter');
  if (connectionFilter) {
    connectionFilter.addEventListener('change', function () {
      filterConnections(this.value);
    });
  }

  // Time period buttons
  const timePeriodButtons = document.querySelectorAll('.time-period-btn');
  timePeriodButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove active class from all buttons
      timePeriodButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      // Update current time period
      currentTimePeriod = this.getAttribute('data-period');
      // Re-render chart with new data
      renderChart();
    });
  });
}

function setupMapPopup() {
  const mapPopup = document.getElementById('mapPopup');
  const popupClose = document.getElementById('popupClose');
  const worldMapContainer = document.querySelector('.world-map-container');
  const worldMap = document.getElementById('worldMap');

  // Close popup when clicking the close button
  if (popupClose) {
    popupClose.addEventListener('click', function (e) {
      e.stopPropagation();
      hideMapPopup();
    });
  }

  // Close popup when clicking outside the map container
  document.addEventListener('click', function (e) {
    if (!worldMapContainer.contains(e.target)) {
      hideMapPopup();
    }
  });

  // Prevent closing when clicking inside the popup
  if (mapPopup) {
    mapPopup.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  // Use event delegation for connection dots (mouse events)
  if (worldMap) {
    worldMap.addEventListener('click', function (e) {
      if (e.target.classList.contains('connection-dot')) {
        const connectionIndex = parseInt(e.target.getAttribute('data-connection-index'));
        const connection = globalConnections[connectionIndex];
        if (connection) {
          showMapPopup(e, {
            location: connection.country,
            status: connection.status,
            upload: connection.upload,
            download: connection.download,
            latency: connection.latency,
            packetLoss: connection.packetLoss
          });
        }
      }
    });

    // Add touch events for mobile devices
    worldMap.addEventListener('touchstart', function (e) {
      // Prevent default to avoid scrolling while interacting with map
      if (e.target.classList.contains('connection-dot')) {
        e.preventDefault();
      }
    });

    worldMap.addEventListener('touchend', function (e) {
      if (e.target.classList.contains('connection-dot')) {
        const touch = e.changedTouches[0];
        const connectionIndex = parseInt(e.target.getAttribute('data-connection-index'));
        const connection = globalConnections[connectionIndex];

        if (connection) {
          // Create a synthetic mouse event for compatibility
          const mouseEvent = new MouseEvent('click', {
            clientX: touch.clientX,
            clientY: touch.clientY
          });

          showMapPopup(mouseEvent, {
            location: connection.country,
            status: connection.status,
            upload: connection.upload,
            download: connection.download,
            latency: connection.latency,
            packetLoss: connection.packetLoss
          });
        }
      }
    });
  }
}

function hideMapPopup() {
  const mapPopup = document.getElementById('mapPopup');
  if (mapPopup) {
    mapPopup.classList.remove('visible');
  }
}

function updateCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const currentTimeElement = document.getElementById('currentTime');
  if (currentTimeElement) {
    currentTimeElement.textContent = timeString;
  }
}

function renderApplications() {
  const container = document.getElementById('applicationsList');
  if (!container) return;

  container.innerHTML = '';
  applications.forEach((app, index) => {
    const appElement = document.createElement('div');
    appElement.className = 'application-item';
    appElement.style.animationDelay = `${index * 0.05}s`;
    appElement.innerHTML = `
      <div class="app-icon">
        <span>${app.icon}</span>
      </div>
      <div class="app-details">
        <div class="app-name">${app.name}</div>
        <div class="app-stats">
          <span>↑ ${app.upload.toFixed(1)} KB</span>
          <span>↓ ${app.download.toFixed(1)} KB</span>
        </div>
      </div>
      <div class="app-status ${app.status}"></div>
    `;
    // Add hover effects
    appElement.addEventListener('mouseenter', function () {
      this.style.transform = 'translateX(4px)';
      this.style.boxShadow = '0 4px 15px rgba(168, 85, 247, 0.2)';
    });
    appElement.addEventListener('mouseleave', function () {
      this.style.transform = 'translateX(0)';
      this.style.boxShadow = '';
    });
    container.appendChild(appElement);
  });
  updateTotalStats();
  // Update app count
  const activeAppCount = document.getElementById('activeAppCount');
  if (activeAppCount) {
    activeAppCount.textContent = applications.length;
  }
}

function updateTotalStats() {
  const totalUpload = applications.reduce((sum, app) => sum + app.upload, 0);
  const totalDownload = applications.reduce((sum, app) => sum + app.download, 0);

  const totalUploadElement = document.getElementById('totalUpload');
  const totalDownloadElement = document.getElementById('totalDownload');
  if (totalUploadElement) {
    totalUploadElement.textContent = `${totalUpload.toFixed(2)} KB`;
  }
  if (totalDownloadElement) {
    totalDownloadElement.textContent = `${totalDownload.toFixed(2)} KB`;
  }
  // Update the new total usage display
  updateTotalUsageDisplay();
}

function updateTotalUsageDisplay() {
  const totalUpload = applications.reduce((sum, app) => sum + app.upload, 0);
  const totalDownload = applications.reduce((sum, app) => sum + app.download, 0);
  const totalCombined = totalUpload + totalDownload;
  const currentRate = (totalCombined / 100); // Simulated current rate

  // Update individual metric values
  const totalUploadMetricElement = document.getElementById('totalUploadMetric');
  const totalDownloadMetricElement = document.getElementById('totalDownloadMetric');
  const totalCombinedElement = document.getElementById('totalCombined');
  const currentRateElement = document.getElementById('currentRate');
  if (totalUploadMetricElement) {
    totalUploadMetricElement.textContent = `${(totalUpload / 1000).toFixed(1)} MB`;
  }
  if (totalDownloadMetricElement) {
    totalDownloadMetricElement.textContent = `${(totalDownload).toFixed(1)} KB`;
  }
  if (totalCombinedElement) {
    totalCombinedElement.textContent = `${(totalCombined / 1000).toFixed(1)} GB`;
  }
  if (currentRateElement) {
    currentRateElement.textContent = `${currentRate.toFixed(1)} MB/s`;
  }
}

function renderChart() {
  const container = document.getElementById('liveChart');
  if (!container) return;

  container.innerHTML = '';
  const data = chartData[currentTimePeriod];
  const maxValue = Math.max(...data);
  data.forEach((value, index) => {
    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    bar.style.height = `${(value / maxValue) * 100}%`;
    bar.style.animationDelay = `${index * 0.02}s`;
    // Add tooltip on hover
    bar.addEventListener('mouseenter', function (e) {
      showTooltip(e, `${value.toFixed(1)} MB/s`);
    });
    bar.addEventListener('mouseleave', hideTooltip);
    container.appendChild(bar);
  });
  // Update traffic value based on current period
  const currentTrafficElement = document.getElementById('currentTraffic');
  if (currentTrafficElement && data.length > 0) {
    const currentTraffic = data[data.length - 1];
    currentTrafficElement.textContent = `${currentTraffic.toFixed(1)} MB/s`;
  }
}

function renderWorldMap() {
  const connectionDotsContainer = document.getElementById('connectionDots');
  if (!connectionDotsContainer) return;

  connectionDotsContainer.innerHTML = '';

  // Add connection dots based on globalConnections array
  globalConnections.forEach((connection, index) => {
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', connection.x);
    dot.setAttribute('cy', connection.y);
    dot.setAttribute('r', '4.5');
    dot.setAttribute('class', `connection-dot ${connection.status}`);
    dot.setAttribute('data-connection-index', index);
    dot.style.cursor = 'pointer';

    // Set color based on status
    let color;
    switch (connection.status) {
      case 'Secure':
        color = '#10b981';
        break;
      case 'Warning':
        color = '#f59e0b';
        break;
      case 'Danger':
        color = '#ef4444';
        break;
      default:
        color = '#6b7280';
    }

    dot.setAttribute('fill', color);
    dot.setAttribute('filter', `drop-shadow(0 0 6px ${color})`);

    // Add click event to highlight connection
    dot.addEventListener('click', function () {
      highlightConnection(connection.country);
    });

    connectionDotsContainer.appendChild(dot);
  });

  // Add connection lines from center (your location)
  const centerX = 400;
  const centerY = 200;

  globalConnections.forEach(connection => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', centerX);
    line.setAttribute('y1', centerY);
    line.setAttribute('x2', connection.x);
    line.setAttribute('y2', connection.y);
    line.setAttribute('class', `connection-line ${connection.status}`);
    line.setAttribute('stroke', getConnectionColor(connection.status));
    line.setAttribute('stroke-width', '1');
    line.setAttribute('stroke-dasharray', '5');
    line.style.animation = 'dash 18s linear infinite';
    connectionDotsContainer.appendChild(line);
  });

  // Add center dot (your location)
  const centerDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  centerDot.setAttribute('cx', centerX);
  centerDot.setAttribute('cy', centerY);
  centerDot.setAttribute('r', '6');
  centerDot.setAttribute('fill', '#00d4ff');
  centerDot.setAttribute('filter', 'drop-shadow(0 0 8px #00d4ff)');
  centerDot.style.animation = 'connectionPulse 1.5s infinite ease-in-out';
  connectionDotsContainer.appendChild(centerDot);
}

function getConnectionColor(status) {
  switch (status.toLowerCase()) {
    case 'secure': return '#10b981';
    case 'warning': return '#f59e0b';
    case 'danger': return '#ef4444';
    default: return '#6b7280';
  }
}

function highlightConnection(country) {
  // Find and highlight the connection in the list
  const connectionItems = document.querySelectorAll('.connection-item');
  connectionItems.forEach(item => {
    const countryElement = item.querySelector('.connection-country');
    if (countryElement && countryElement.textContent === country) {
      item.style.background = 'rgba(0, 212, 255, 0.1)';
      item.style.borderRadius = '8px';
      item.style.padding = '0.6rem';

      // Reset after 2 seconds
      setTimeout(() => {
        item.style.background = '';
        item.style.padding = '0.6rem 0';
      }, 2000);
    }
  });
}

function updateNetworkStats() {
  const uploadSpeedElement = document.getElementById('uploadSpeed');
  const downloadSpeedElement = document.getElementById('downloadSpeed');
  const latencyElement = document.getElementById('latency');
  const packetLossElement = document.getElementById('packetLoss');
  const connectionCountElement = document.getElementById('connectionCount');

  if (uploadSpeedElement) {
    uploadSpeedElement.textContent = `${networkStats.uploadSpeed.toFixed(1)} KB/s`;
  }
  if (downloadSpeedElement) {
    downloadSpeedElement.textContent = `${networkStats.downloadSpeed.toFixed(1)} KB/s`;
  }
  if (latencyElement) {
    latencyElement.textContent = `${networkStats.latency.toFixed(0)}ms`;
  }
  if (packetLossElement) {
    packetLossElement.textContent = `${networkStats.packetLoss.toFixed(1)}%`;
  }
  if (connectionCountElement) {
    connectionCountElement.textContent = globalConnections.length;
  }
  // Update progress bars
  const uploadProgress = Math.min(100, (networkStats.uploadSpeed / 1000) * 100);
  const downloadProgress = Math.min(100, (networkStats.downloadSpeed / 500) * 100);
  const uploadProgressElement = document.getElementById('uploadProgress');
  const downloadProgressElement = document.getElementById('downloadProgress');
  if (uploadProgressElement) {
    uploadProgressElement.style.width = `${uploadProgress}%`;
  }
  if (downloadProgressElement) {
    downloadProgressElement.style.width = `${downloadProgress}%`;
  }
}

function updateMemoryUsage() {
  // Simulate memory updates
  const lanMemoryUsage = 60 + Math.random() * 20; // 60-80%
  const wanMemoryUsage = 40 + Math.random() * 20; // 40-60%

  const lanMemoryElement = document.getElementById('lanMemory');
  const wanMemoryElement = document.getElementById('wanMemory');
  if (lanMemoryElement) {
    lanMemoryElement.style.width = `${lanMemoryUsage}%`;
    const lanUsed = (lanMemoryUsage * 10 / 100).toFixed(1);
    lanMemoryElement.parentElement.nextElementSibling.querySelector('.memory-used').textContent = `${lanUsed} GB`;
  }
  if (wanMemoryElement) {
    wanMemoryElement.style.width = `${wanMemoryUsage}%`;
    const wanUsed = (wanMemoryUsage * 10 / 100).toFixed(1);
    wanMemoryElement.parentElement.nextElementSibling.querySelector('.memory-used').textContent = `${wanUsed} GB`;
  }
}

function populateConnectionsList() {
  const connectionsList = document.getElementById('connectionList');
  if (!connectionsList) return;

  connectionsList.innerHTML = '';

  globalConnections.forEach(connection => {
    const connectionItem = document.createElement('div');
    connectionItem.className = 'connection-item';
    connectionItem.dataset.status = connection.status;
    connectionItem.innerHTML = `
      <div class="connection-details">
        <div class="connection-country">${connection.country}</div>
        <div class="connection-ip">${connection.ip}</div>
      </div>
      <div class="connection-status ${connection.status}">
        ${capitalizeFirstLetter(connection.status)}
      </div>
    `;

    // Add click event to highlight on map
    connectionItem.addEventListener('click', function () {
      highlightConnectionOnMap(connection);
    });

    connectionsList.appendChild(connectionItem);
  });
}

function highlightConnectionOnMap(connection) {
  // Find and highlight the dot on the map
  const dots = document.querySelectorAll('.connection-dot');
  dots.forEach(dot => {
    const cx = parseFloat(dot.getAttribute('cx'));
    const cy = parseFloat(dot.getAttribute('cy'));

    if (cx === connection.x && cy === connection.y) {
      // Create a temporary highlight ring
      const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      ring.setAttribute('cx', cx);
      ring.setAttribute('cy', cy);
      ring.setAttribute('r', '4');
      ring.setAttribute('fill', 'none');
      ring.setAttribute('stroke', '#00d4ff');
      ring.setAttribute('stroke-width', '2');
      ring.style.animation = 'connectionPulse 1s ease-out';
      ring.style.opacity = '0.8';
      document.getElementById('connectionDots').appendChild(ring);
      // Remove after animation
      setTimeout(() => {
        if (ring.parentNode) {
          ring.parentNode.removeChild(ring);
        }
      }, 1000);
    }
  });
}

function filterConnections(filter) {
  const connectionItems = document.querySelectorAll('.connection-item');
  connectionItems.forEach(item => {
    const status = item.dataset.status;
    switch (filter) {
      case 'all':
        item.style.display = 'flex';
        break;
      case 'secure':
        item.style.display = status === 'secure' ? 'flex' : 'none';
        break;
      case 'warning':
        item.style.display = status === 'warning' ? 'flex' : 'none';
        break;
      case 'danger':
        item.style.display = status === 'danger' ? 'flex' : 'none';
        break;
    }
  });
}

function startRealTimeUpdates() {
  if (!liveConnectionsEnabled) return;

  // Update time every second
  setInterval(updateCurrentTime, 1000);

  // Update live chart data every 2 seconds
  setInterval(() => {
    if (liveConnectionsEnabled && currentTimePeriod === 'live') {
      chartData.live.shift();
      chartData.live.push(Math.random() * 100);
      renderChart();
    }
  }, 2000);

  // Update network stats every 3 seconds
  setInterval(() => {
    if (liveConnectionsEnabled) {
      networkStats.uploadSpeed = Math.max(0, networkStats.uploadSpeed + (Math.random() - 0.5) * 40);
      networkStats.downloadSpeed = Math.max(0, networkStats.downloadSpeed + (Math.random() - 0.5) * 25);
      networkStats.latency = Math.max(10, networkStats.latency + (Math.random() - 0.5) * 8);
      networkStats.packetLoss = Math.max(0, Math.min(5, networkStats.packetLoss + (Math.random() - 0.5) * 0.3));
      updateNetworkStats();
    }
  }, 3000);

  // Update application data every 4 seconds
  setInterval(() => {
    if (liveConnectionsEnabled) {
      applications.forEach(app => {
        app.upload = Math.max(0, app.upload + (Math.random() - 0.5) * 8);
        app.download = Math.max(0, app.download + (Math.random() - 0.5) * 12);
      });
      renderApplications();
    }
  }, 4000);

  // Update memory usage every 5 seconds
  setInterval(() => {
    if (liveConnectionsEnabled) {
      updateMemoryUsage();
    }
  }, 5000);

  // Update total usage display every 3 seconds
  setInterval(() => {
    if (liveConnectionsEnabled) {
      updateTotalUsageDisplay();
    }
  }, 3000);
}

function showTooltip(event, text) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;
  tooltip.style.position = 'absolute';
  tooltip.style.background = 'rgba(0, 0, 0, 0.8)';
  tooltip.style.color = 'white';
  tooltip.style.padding = '0.4rem 0.6rem';
  tooltip.style.borderRadius = '4px';
  tooltip.style.fontSize = '0.7rem';
  tooltip.style.pointerEvents = 'none';
  tooltip.style.zIndex = '1000';
  tooltip.style.left = event.pageX + 8 + 'px';
  tooltip.style.top = event.pageY - 25 + 'px';

  document.body.appendChild(tooltip);
}

function hideTooltip() {
  const tooltip = document.querySelector('.tooltip');
  if (tooltip) {
    tooltip.remove();
  }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey || event.metaKey) {
    switch (event.key) {
      case 'r':
        event.preventDefault();
        location.reload();
        break;
      case 'f':
        event.preventDefault();
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        }
        break;
      case 't':
        event.preventDefault();
        toggleTheme();
        break;
    }
  }

  // Number keys to switch time periods
  if (event.key >= '1' && event.key <= '5') {
    const periods = ['live', '1h', '6h', '24h', '7d'];
    const periodIndex = parseInt(event.key) - 1;
    if (periods[periodIndex]) {
      // Update button states
      document.querySelectorAll('.time-period-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-period') === periods[periodIndex]) {
          btn.classList.add('active');
        }
      });
      currentTimePeriod = periods[periodIndex];
      renderChart();
    }
  }
});

// Error handling
window.addEventListener('error', function (event) {
  console.error('Dashboard Error:', event.error);
});

// Add visibility change handling
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    console.log('Dashboard paused');
  } else {
    console.log('Dashboard resumed');
  }
});

// Add mobile-specific close button styling
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 768px) {
    .mobile-close-btn {
      display: flex !important;
    }
  }
  
  @media (min-width: 769px) {
    .mobile-close-btn {
      display: none !important;
    }
  }
`;
document.head.appendChild(style);

// Add this to the end of your script.js file

// Mobile-specific improvements
document.addEventListener('DOMContentLoaded', function () {
  // Handle viewport height changes on mobile (especially when keyboard appears)
  function handleViewportResize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  handleViewportResize();
  window.addEventListener('resize', handleViewportResize);

  // Fix for iOS Safari address bar
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';

    const appContainer = document.querySelector('.dashboard');
    if (appContainer) {
      appContainer.style.position = 'absolute';
      appContainer.style.top = '0';
      appContainer.style.left = '0';
      appContainer.style.width = '100%';
      appContainer.style.height = '100%';
      appContainer.style.overflow = 'auto';
      appContainer.style.webkitOverflowScrolling = 'touch';
    }
  }

  // Prevent double-tap to zoom on interactive elements
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // Improve touch scrolling on lists
  const scrollableElements = document.querySelectorAll('.applications-list, .connection-list');
  scrollableElements.forEach(element => {
    element.style.webkitOverflowScrolling = 'touch';

    // Add pull-to-refresh functionality
    let startY = 0;
    let isPulling = false;

    element.addEventListener('touchstart', function (e) {
      if (element.scrollTop === 0) {
        startY = e.touches[0].pageY;
        isPulling = true;
      }
    });

    element.addEventListener('touchmove', function (e) {
      if (isPulling && element.scrollTop === 0) {
        const touchY = e.touches[0].pageY;
        const pullDistance = touchY - startY;

        if (pullDistance > 0) {
          e.preventDefault();
          element.style.transform = `translateY(${Math.min(pullDistance / 3, 60)}px)`;
        }
      }
    });

    element.addEventListener('touchend', function () {
      if (isPulling) {
        isPulling = false;
        element.style.transform = '';

        // If pulled enough, refresh the content
        if (element.scrollTop === 0 && startY > 0) {
          // Refresh content based on which list was pulled
          if (element.classList.contains('applications-list')) {
            renderApplications();
          } else if (element.classList.contains('connection-list')) {
            populateConnectionsList();
          }
        }
      }
    });
  });
});

function showMapPopup(event, data) {
  const mapPopup = document.getElementById('mapPopup');
  const popupTitle = document.getElementById('popupTitle');
  const popupContent = document.getElementById('popupContent');
  const worldMapContainer = document.querySelector('.world-map-container');

  if (!mapPopup || !popupTitle || !popupContent || !worldMapContainer) return;

  // Hide any existing popup
  hideMapPopup();

  // Set popup title and content with capitalized status
  popupTitle.textContent = data.location;
  popupContent.innerHTML = `
    <div class="popup-row">
      <span class="popup-label">Status:</span>
      <span class="popup-value ${data.status.toLowerCase()}">${capitalizeFirstLetter(data.status)}</span>
    </div>
    <div class="popup-row">
      <span class="popup-label">Upload:</span>
      <span class="popup-value">${data.upload}</span>
    </div>
    <div class="popup-row">
      <span class="popup-label">Download:</span>
      <span class="popup-value">${data.download}</span>
    </div>
    <div class="popup-row">
      <span class="popup-label">Latency:</span>
      <span class="popup-value">${data.latency}</span>
    </div>
    <div class="popup-row">
      <span class="popup-label">Packet Loss:</span>
      <span class="popup-value">${data.packetLoss}</span>
    </div>
  `;

  //Get the SVG element and container position
  const svg = document.getElementById('worldMap');
  if (!svg) return;

  // Create an SVG point for accurate coordinate transformation
  const pt = svg.createSVGPoint();

  // For touch events, we need to use the clientX/Y from the event
  let clientX, clientY;
  if (event.touches && event.touches[0]) {
    clientX = event.touches[0].clientX;
    clientY = event.touches[0].clientY;
  } else {
    clientX = event.clientX;
    clientY = event.clientY;
  }

  // Convert screen coordinates to SVG coordinates
  pt.x = clientX;
  pt.y = clientY;
  const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());

  // Find the closest connection dot to the touch point
  let closestDot = null;
  let minDistance = Infinity;

  const dots = svg.querySelectorAll('.connection-dot');
  dots.forEach(dot => {
    const cx = parseFloat(dot.getAttribute('cx'));
    const cy = parseFloat(dot.getAttribute('cy'));
    const distance = Math.sqrt(Math.pow(cx - svgP.x, 2) + Math.pow(cy - svgP.y, 2));

    if (distance < minDistance) {
      minDistance = distance;
      closestDot = dot;
    }
  });

  // If we found a dot within a reasonable distance, use it
  if (closestDot && minDistance < 20) {
    pt.x = parseFloat(closestDot.getAttribute('cx'));
    pt.y = parseFloat(closestDot.getAttribute('cy'));
  } else {
    // Otherwise, use the original touch point
    pt.x = svgP.x;
    pt.y = svgP.y;
  }

  // Convert SVG coordinates to screen coordinates
  const screenCTM = svg.getScreenCTM();
  const screenPoint = pt.matrixTransform(screenCTM);

  // Get container position and dimensions
  const containerRect = worldMapContainer.getBoundingClientRect();

  // Temporarily show popup to get its dimensions
  mapPopup.classList.add('visible');
  const popupRect = mapPopup.getBoundingClientRect();
  mapPopup.classList.remove('visible');

  // Mobile-specific adjustments
  if (window.innerWidth <= 768) {
    // Center the popup on mobile for better visibility
    let left = (containerRect.width - popupRect.width) / 2;
    let top = (containerRect.height - popupRect.height) / 2;

    // Ensure popup stays within bounds
    left = Math.max(10, Math.min(left, containerRect.width - popupRect.width - 10));
    top = Math.max(10, Math.min(top, containerRect.height - popupRect.height - 10));

    // Add a semi-transparent backdrop for better visibility
    const backdrop = document.createElement('div');
    backdrop.className = 'popup-backdrop';
    backdrop.style.position = 'absolute';
    backdrop.style.top = '0';
    backdrop.style.left = '0';
    backdrop.style.width = '100%';
    backdrop.style.height = '100%';
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    backdrop.style.zIndex = '999';
    backdrop.style.borderRadius = '12px';

    // Add backdrop to container
    worldMapContainer.appendChild(backdrop);

    // Override hideMapPopup to also remove backdrop
    const originalHideMapPopup = hideMapPopup;
    hideMapPopup = function () {
      originalHideMapPopup();
      if (backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
      }
      // Restore original function
      hideMapPopup = originalHideMapPopup;
    };

    // Set final position and show popup
    mapPopup.style.left = `${left}px`;
    mapPopup.style.top = `${top}px`;
    mapPopup.classList.add('visible');

    // Add a close button if it doesn't exist
    if (!mapPopup.querySelector('.mobile-close-btn')) {
      const closeBtn = document.createElement('button');
      closeBtn.className = 'mobile-close-btn';
      closeBtn.innerHTML = '&times;';
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '5px';
      closeBtn.style.right = '5px';
      closeBtn.style.background = 'none';
      closeBtn.style.border = 'none';
      closeBtn.style.color = 'var(--text-muted)';
      closeBtn.style.fontSize = '16px';
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.padding = '0';
      closeBtn.style.width = '24px';
      closeBtn.style.height = '24px';
      closeBtn.style.display = 'flex';
      closeBtn.style.alignItems = 'center';
      closeBtn.style.justifyContent = 'center';

      closeBtn.addEventListener('click', function () {
        hideMapPopup();
      });

      mapPopup.appendChild(closeBtn);
    }
  } else {
    // Desktop positioning logic
    // Calculate position relative to container
    let left = screenPoint.x - containerRect.left + 15; // Offset from dot
    let top = screenPoint.y - containerRect.top - 10;   // Offset above dot

    // Adjust horizontal position if needed
    if (left + popupRect.width > containerRect.width) {
      left = screenPoint.x - containerRect.left - popupRect.width - 15;
    }

    // Adjust vertical position if needed
    if (top + popupRect.height > containerRect.height) {
      top = screenPoint.y - containerRect.top - popupRect.height + 10;
    }

    // Ensure popup stays within container bounds
    left = Math.max(10, Math.min(left, containerRect.width - popupRect.width - 10));
    top = Math.max(10, Math.min(top, containerRect.height - popupRect.height - 10));

    // Set final position and show popup
    mapPopup.style.left = `${left}px`;
    mapPopup.style.top = `${top}px`;
    mapPopup.classList.add('visible');
  }

  // Add touch event listener to close popup when tapping outside
  if (window.innerWidth <= 768) {
    const closePopupOnOutsideTouch = function (e) {
      // Check if the touch is outside the popup
      if (!mapPopup.contains(e.target) && e.target !== mapPopup) {
        hideMapPopup();
        document.removeEventListener('touchend', closePopupOnOutsideTouch);
      }
    };

    // Add the event listener with a small delay to prevent immediate closing
    setTimeout(() => {
      document.addEventListener('touchend', closePopupOnOutsideTouch);
    }, 100);
  }
}