/**
 * Main Application Module
 * Handles the user interface and interactions for the timezone converter
 */

(function() {
    // DOM Elements
    const currentCountryDropdown = document.getElementById('current-country');
    const currentTimezoneSelector = document.getElementById('timezone-selector');
    const currentTimezoneDropdown = document.getElementById('current-timezone');
    const setCurrentCountryBtn = document.getElementById('set-current-country');
    const currentCountryInfo = document.getElementById('current-country-info');
    const currentCountryName = document.getElementById('current-country-name');
    const currentCountryTime = document.getElementById('current-country-time');
    const currentCountryTimezone = document.getElementById('current-country-timezone');
    const currentCountryOffset = document.getElementById('current-country-offset');
    const currentCountryDst = document.getElementById('current-country-dst');
    
    const timeSlider = document.getElementById('time-slider');
    const selectedTime = document.getElementById('selected-time');
    const selectedDay = document.getElementById('selected-day');
    
    const addCountryDropdown = document.getElementById('add-country');
    const addTimezoneSelector = document.getElementById('add-timezone-selector');
    const addTimezoneDropdown = document.getElementById('add-timezone');
    const addCountryBtn = document.getElementById('add-country-btn');
    const countriesList = document.getElementById('countries-list');
    
    // State Management
    const state = {
        currentCountry: null,
        currentTimezone: null,
        selectedTime: '12:00',
        countries: [],
        timeInterval: null
    };
    
    // Load state from localStorage if available
    function loadState() {
        const savedState = localStorage.getItem('timezoneConverterState');
        if (savedState) {
            try {
                const parsedState = JSON.parse(savedState);
                state.currentCountry = parsedState.currentCountry;
                state.currentTimezone = parsedState.currentTimezone;
                
                // Update UI based on loaded state
                if (state.currentCountry) {
                    currentCountryDropdown.value = state.currentCountry.code;
                    updateCurrentCountryInfo(state.currentCountry);
                }
                
                // Load saved countries
                if (parsedState.countries && parsedState.countries.length) {
                    state.countries = parsedState.countries;
                    renderCountriesList();
                }
            } catch (e) {
                console.error('Error loading saved state:', e);
            }
        }
    }
    
    // Save state to localStorage
    function saveState() {
        localStorage.setItem('timezoneConverterState', JSON.stringify({
            currentCountry: state.currentCountry,
            currentTimezone: state.currentTimezone,
            countries: state.countries
        }));
    }
    
    // Initialize the application
    function init() {
        populateCountryDropdowns();
        initTimeSlider();
        setupEventListeners();
        loadState();
        startTimeUpdater();
        updateAllTimes();
    }
    
    // Populate country dropdowns with data from countries.js
    function populateCountryDropdowns() {
        // Sort countries alphabetically
        const sortedCountries = [...COUNTRIES_DATA].sort((a, b) => 
            a.name.localeCompare(b.name)
        );
        
        // Create dropdown options HTML
        const optionsHtml = sortedCountries.map(country => 
            `<option value="${country.code}">${country.name}</option>`
        ).join('');
        
        // Set the options for both dropdowns
        currentCountryDropdown.innerHTML += optionsHtml;
        addCountryDropdown.innerHTML += optionsHtml;
    }
    
    // Initialize the time slider
    function initTimeSlider() {
        // Set initial slider value to current time
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentValue = (currentHour * 4) + Math.floor(currentMinute / 15);
        
        timeSlider.value = currentValue;
        state.selectedTime = TimeUtils.sliderValueToTime(currentValue);
        selectedTime.textContent = TimeUtils.formatTimeTo12h(state.selectedTime);
        selectedDay.textContent = 'Today';
    }
    
    // Set up event listeners
    function setupEventListeners() {
        // Country dropdown change - show timezone selector if multiple timezones
        currentCountryDropdown.addEventListener('change', () => {
            const selectedCode = currentCountryDropdown.value;
            if (!selectedCode) {
                currentTimezoneSelector.classList.add('hidden');
                return;
            }
            
            const countryData = COUNTRIES_DATA.find(c => c.code === selectedCode);
            if (countryData && countryData.timezones && countryData.timezones.length > 1) {
                // Populate timezone dropdown
                populateTimezoneDropdown(currentTimezoneDropdown, countryData.timezones);
                currentTimezoneSelector.classList.remove('hidden');
            } else {
                currentTimezoneSelector.classList.add('hidden');
            }
        });
        
        // Add country dropdown change - show timezone selector if multiple timezones
        addCountryDropdown.addEventListener('change', () => {
            const selectedCode = addCountryDropdown.value;
            if (!selectedCode) {
                addTimezoneSelector.classList.add('hidden');
                return;
            }
            
            const countryData = COUNTRIES_DATA.find(c => c.code === selectedCode);
            if (countryData && countryData.timezones && countryData.timezones.length > 1) {
                // Populate timezone dropdown
                populateTimezoneDropdown(addTimezoneDropdown, countryData.timezones);
                addTimezoneSelector.classList.remove('hidden');
            } else {
                addTimezoneSelector.classList.add('hidden');
            }
        });
        
        // Set current country button click
        setCurrentCountryBtn.addEventListener('click', () => {
            const selectedCode = currentCountryDropdown.value;
            if (!selectedCode) return;
            
            const countryData = COUNTRIES_DATA.find(c => c.code === selectedCode);
            if (countryData) {
                state.currentCountry = {...countryData}; // Clone to avoid reference issues
                
                // Handle multiple timezones
                if (countryData.timezones && countryData.timezones.length > 1 && currentTimezoneDropdown.value) {
                    const selectedTimezone = countryData.timezones.find(tz => tz.timezone === currentTimezoneDropdown.value);
                    if (selectedTimezone) {
                        state.currentTimezone = selectedTimezone;
                        // Update the country with the selected timezone data
                        state.currentCountry.timezone = selectedTimezone.timezone;
                        state.currentCountry.utcOffset = selectedTimezone.utcOffset;
                        state.currentCountry.hasDst = selectedTimezone.hasDst;
                    }
                } else {
                    state.currentTimezone = null;
                }
                
                updateCurrentCountryInfo(state.currentCountry);
                saveState();
                updateAllTimes();
                
                // Reset timezone dropdown
                currentTimezoneSelector.classList.add('hidden');
                currentTimezoneDropdown.innerHTML = '<option value="">Select timezone</option>';
            }
        });
        
        // Time slider change
        timeSlider.addEventListener('input', () => {
            const sliderValue = parseInt(timeSlider.value);
            state.selectedTime = TimeUtils.sliderValueToTime(sliderValue);
            selectedTime.textContent = TimeUtils.formatTimeTo12h(state.selectedTime);
            updateAllTimes();
        });
        
        // Add country button click
        addCountryBtn.addEventListener('click', () => {
            const selectedCode = addCountryDropdown.value;
            if (!selectedCode) return;
            
            const countryData = COUNTRIES_DATA.find(c => c.code === selectedCode);
            if (countryData) {
                // Create a copy of the country data
                const countryToAdd = {...countryData};
                
                // Handle multiple timezones
                if (countryData.timezones && countryData.timezones.length > 1 && addTimezoneDropdown.value) {
                    const selectedTimezone = countryData.timezones.find(tz => tz.timezone === addTimezoneDropdown.value);
                    if (selectedTimezone) {
                        // Update the country with the selected timezone data
                        countryToAdd.timezone = selectedTimezone.timezone;
                        countryToAdd.utcOffset = selectedTimezone.utcOffset;
                        countryToAdd.hasDst = selectedTimezone.hasDst;
                        countryToAdd.displayName = `${countryData.name} (${selectedTimezone.name})`;
                    }
                }
                
                // Generate a unique ID for this country+timezone
                const countryId = countryToAdd.displayName ? 
                                  `${countryToAdd.code}-${countryToAdd.timezone}` : 
                                  countryToAdd.code;
                                  
                // Check if this exact country+timezone is already added
                if (!state.countries.some(c => c.code === countryToAdd.code && c.timezone === countryToAdd.timezone)) {
                    countryToAdd.id = countryId;
                    state.countries.push(countryToAdd);
                    renderCountriesList();
                    saveState();
                    updateAllTimes();
                }
                
                // Reset dropdowns
                addCountryDropdown.value = '';
                addTimezoneSelector.classList.add('hidden');
                addTimezoneDropdown.innerHTML = '<option value="">Select timezone</option>';
            }
        });
        
        // Delegate event for remove country buttons
        countriesList.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-country-btn') || e.target.closest('.remove-country-btn')) {
                const button = e.target.classList.contains('remove-country-btn') ? 
                               e.target : 
                               e.target.closest('.remove-country-btn');
                const countryId = button.dataset.id;
                state.countries = state.countries.filter(c => c.id !== countryId);
                renderCountriesList();
                saveState();
            }
        });
    }
    
    // Populate timezone dropdown for countries with multiple timezones
    function populateTimezoneDropdown(dropdown, timezones) {
        dropdown.innerHTML = '<option value="">Select timezone</option>';
        timezones.forEach(timezone => {
            const option = document.createElement('option');
            option.value = timezone.timezone;
            option.textContent = `${timezone.name} (${timezone.utcOffset})`;
            dropdown.appendChild(option);
        });
    }
    
    // Update current country info display
    function updateCurrentCountryInfo(country) {
        currentCountryName.textContent = country.name;
        currentCountryTimezone.textContent = `Timezone: ${country.timezone}`;
        currentCountryOffset.textContent = `UTC Offset: ${country.utcOffset}`;
        
        const isDst = TimeUtils.isDstActive(country.timezone);
        currentCountryDst.textContent = `DST: ${isDst ? 'Active' : 'Inactive'}`;
        currentCountryDst.classList.toggle('active', isDst);
        
        // Show the info section
        currentCountryInfo.classList.remove('hidden');
    }
    
    // Render the list of added countries
    function renderCountriesList() {
        if (state.countries.length === 0) {
            countriesList.innerHTML = `
                <div class="empty-state">
                    <p>No countries added yet. Add countries to compare time zones.</p>
                </div>
            `;
            return;
        }
        
        countriesList.innerHTML = state.countries.map(country => {
            const displayName = country.displayName || country.name;
            
            return `
                <div class="country-item" data-id="${country.id}">
                    <div class="country-info-left">
                        <span class="country-name">${displayName}</span>
                        <span class="country-timezone">${country.timezone} (${country.utcOffset})</span>
                    </div>
                    <div class="country-info-right">
                        <div class="country-time-right">
                            <span id="time-${country.id}">--:--</span>
                            <span class="date-indicator" id="date-${country.id}"></span>
                        </div>
                        <button class="remove-country-btn" data-id="${country.id}">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Update the time display for all countries
    function updateAllTimes() {
        if (!state.currentCountry) return;
        
        // Update current country time
        if (state.timeInterval === null) { // If not live updating
            const convertedTime = state.selectedTime;
            currentCountryTime.textContent = TimeUtils.formatTimeTo12h(convertedTime);
        }
        
        // Update all other countries' times
        state.countries.forEach(country => {
            const timeElement = document.getElementById(`time-${country.id}`);
            const dateElement = document.getElementById(`date-${country.id}`);
            
            if (timeElement && dateElement) {
                const result = TimeUtils.convertTime(
                    state.selectedTime,
                    state.currentCountry.timezone,
                    country.timezone
                );
                
                timeElement.textContent = TimeUtils.formatTimeTo12h(result.time);
                
                // Update date indicator
                if (result.dateDifference === 'next') {
                    dateElement.textContent = 'Next day';
                    dateElement.className = 'date-indicator next-day';
                } else if (result.dateDifference === 'previous') {
                    dateElement.textContent = 'Previous day';
                    dateElement.className = 'date-indicator previous-day';
                } else {
                    dateElement.textContent = '';
                    dateElement.className = 'date-indicator';
                }
            }
        });
    }
    
    // Start the live time updater
    function startTimeUpdater() {
        // Clear any existing interval
        if (state.timeInterval) {
            clearInterval(state.timeInterval);
        }
        
        // Update times every second
        state.timeInterval = setInterval(() => {
            if (state.currentCountry) {
                // Update current country time with live time
                const currentTime = TimeUtils.getCurrentTimeInTimezone(state.currentCountry.timezone);
                currentCountryTime.textContent = TimeUtils.formatTimeTo12h(currentTime);
                
                // Update all other countries with converted current time
                state.countries.forEach(country => {
                    const timeElement = document.getElementById(`time-${country.id}`);
                    const dateElement = document.getElementById(`date-${country.id}`);
                    
                    if (timeElement && dateElement) {
                        const result = TimeUtils.convertTime(
                            currentTime,
                            state.currentCountry.timezone,
                            country.timezone
                        );
                        
                        timeElement.textContent = TimeUtils.formatTimeTo12h(result.time);
                        
                        // Update date indicator
                        if (result.dateDifference === 'next') {
                            dateElement.textContent = 'Next day';
                            dateElement.className = 'date-indicator next-day';
                        } else if (result.dateDifference === 'previous') {
                            dateElement.textContent = 'Previous day';
                            dateElement.className = 'date-indicator previous-day';
                        } else {
                            dateElement.textContent = '';
                            dateElement.className = 'date-indicator';
                        }
                    }
                });
            }
        }, 1000);
    }
    
    // Initialize the app
    document.addEventListener('DOMContentLoaded', init);
})();