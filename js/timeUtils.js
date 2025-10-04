/**
 * Time Utilities Module
 * This module provides utility functions for time zone conversions,
 * handling DST (Daylight Saving Time), date difference calculation, and formatting time.
 */

const TimeUtils = (function() {
    /**
     * Checks if DST is active for a specific timezone on a given date
     * @param {string} timezone - The IANA timezone string
     * @param {Date} date - Date to check (default is current date)
     * @return {boolean} - True if DST is active, false otherwise
     */
    function isDstActive(timezone, date = new Date()) {
        // Get the standard time offset for January (winter in Northern hemisphere)
        const januaryOffset = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
        
        // Get the summer time offset for July (summer in Northern hemisphere)
        const julyOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
        
        // Get current offset for the timezone and date
        const currentOffset = date.getTimezoneOffset();
        
        // If the current offset is different from the January offset and matches the July offset
        // or if the current offset is different from the July offset and matches the January offset,
        // DST is active. This is a simplified approach and may not be accurate for all edge cases.
        return (januaryOffset !== julyOffset) && 
               ((currentOffset === Math.min(januaryOffset, julyOffset)) ||
                (currentOffset === Math.max(januaryOffset, julyOffset)));
    }

    /**
     * Converts time from one timezone to another and detects date difference
     * @param {string} time - Time string in format "HH:MM"
     * @param {string} fromTimezone - Source timezone
     * @param {string} toTimezone - Target timezone
     * @param {Date} date - Date for which to perform the conversion (default is current date)
     * @return {Object} - Object with converted time and date difference info
     */
    function convertTime(time, fromTimezone, toTimezone, date = new Date()) {
        try {
            // Parse the time string
            const [hours, minutes] = time.split(':').map(Number);
            
            // Create a date object with the given time
            const sourceDate = new Date(date);
            sourceDate.setHours(hours, minutes, 0, 0);
            
            // Create the formatter for the source timezone
            const sourceFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: fromTimezone,
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false
            });
            
            // Create the formatter for the target timezone with date components
            const targetFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: toTimezone,
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false
            });
            
            // Create time-only formatter for the target timezone
            const targetTimeFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: toTimezone,
                hour: 'numeric',
                minute: 'numeric',
                hour12: false
            });
            
            // Get the formatted strings and parts for both source and target
            const sourceFormattedDate = sourceFormatter.formatToParts(sourceDate);
            const targetFormattedParts = targetFormatter.formatToParts(sourceDate);
            
            // Extract source date components
            const sourceDay = parseInt(sourceFormattedDate.find(part => part.type === 'day').value, 10);
            const sourceMonth = parseInt(sourceFormattedDate.find(part => part.type === 'month').value, 10);
            const sourceYear = parseInt(sourceFormattedDate.find(part => part.type === 'year').value, 10);
            
            // Extract target date components
            const targetDay = parseInt(targetFormattedParts.find(part => part.type === 'day').value, 10);
            const targetMonth = parseInt(targetFormattedParts.find(part => part.type === 'month').value, 10);
            const targetYear = parseInt(targetFormattedParts.find(part => part.type === 'year').value, 10);
            
            // Get just the time
            const targetFormattedTime = targetTimeFormatter.format(sourceDate);
            
            // Calculate date difference
            let dateDifference = 'same';
            
            if (targetYear > sourceYear || 
                (targetYear === sourceYear && targetMonth > sourceMonth) || 
                (targetYear === sourceYear && targetMonth === sourceMonth && targetDay > sourceDay)) {
                dateDifference = 'next';
            } else if (targetYear < sourceYear || 
                (targetYear === sourceYear && targetMonth < sourceMonth) || 
                (targetYear === sourceYear && targetMonth === sourceMonth && targetDay < sourceDay)) {
                dateDifference = 'previous';
            }
            
            return {
                time: targetFormattedTime,
                dateDifference: dateDifference
            };
        } catch (error) {
            console.error('Error converting time:', error);
            return { 
                time: time, 
                dateDifference: 'same'
            }; // Return original time on error
        }
    }

    /**
     * Formats time from 24h to 12h format
     * @param {string} time - Time in 24h format "HH:MM"
     * @return {string} - Time in 12h format "hh:mm AM/PM"
     */
    function formatTimeTo12h(time) {
        const [hours, minutes] = time.split(':').map(Number);
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
        
        return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    }

    /**
     * Formats time from 12h to 24h format
     * @param {string} time - Time in 12h format "hh:mm AM/PM"
     * @return {string} - Time in 24h format "HH:MM"
     */
    function formatTimeTo24h(time) {
        const [timePart, period] = time.split(' ');
        let [hours, minutes] = timePart.split(':').map(Number);
        
        if (period === 'PM' && hours !== 12) {
            hours += 12;
        } else if (period === 'AM' && hours === 12) {
            hours = 0;
        }
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    /**
     * Gets the current time in a specific timezone
     * @param {string} timezone - IANA timezone string
     * @return {string} - Current time in "HH:MM" format
     */
    function getCurrentTimeInTimezone(timezone) {
        const now = new Date();
        
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        });
        
        return formatter.format(now);
    }

    /**
     * Gets the difference in hours between two timezones
     * @param {string} timezone1 - First timezone
     * @param {string} timezone2 - Second timezone
     * @return {number} - Difference in hours (can be negative)
     */
    function getTimezoneDifference(timezone1, timezone2) {
        const now = new Date();
        
        const formatter1 = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone1,
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        });
        
        const formatter2 = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone2,
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        });
        
        const time1 = formatter1.format(now);
        const time2 = formatter2.format(now);
        
        const [hours1, minutes1] = time1.split(':').map(Number);
        const [hours2, minutes2] = time2.split(':').map(Number);
        
        // Calculate difference in decimal hours
        let hoursDiff = hours2 - hours1;
        let minutesDiff = (minutes2 - minutes1) / 60;
        
        // Adjust for day boundary crossings
        if (hoursDiff > 12) hoursDiff -= 24;
        if (hoursDiff < -12) hoursDiff += 24;
        
        return hoursDiff + minutesDiff;
    }

    /**
     * Converts slider value to time
     * @param {number} value - Slider value (0-95 for 15 min increments)
     * @return {string} - Time in "HH:MM" format
     */
    function sliderValueToTime(value) {
        const hours = Math.floor(value / 4);
        const minutes = (value % 4) * 15;
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    /**
     * Converts time to slider value
     * @param {string} time - Time in "HH:MM" format
     * @return {number} - Slider value (0-95 for 15 min increments)
     */
    function timeToSliderValue(time) {
        const [hours, minutes] = time.split(':').map(Number);
        
        return (hours * 4) + Math.round(minutes / 15);
    }

    return {
        isDstActive,
        convertTime,
        formatTimeTo12h,
        formatTimeTo24h,
        getCurrentTimeInTimezone,
        getTimezoneDifference,
        sliderValueToTime,
        timeToSliderValue
    };
})();