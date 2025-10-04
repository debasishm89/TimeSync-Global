# TimeSync Global: The 'Did I Wake You?' Detector

A sophisticated time zone conversion tool built with vanilla JavaScript, HTML, and CSS that helps users schedule meetings across different time zones without accidentally waking up their colleagues.

## Features

- **Multi-Country Support**: Choose from 195 countries around the world
- **Multiple Time Zones**: Support for countries with multiple time zones (US, Canada, Australia, Russia, etc.)
- **Date Difference Indicator**: Shows whether the time falls on the same day, next day, or previous day
- **Daylight Saving Time Aware**: Automatically adjusts for DST when applicable
- **Intuitive Interface**: Simple slider control for selecting time in 15-minute increments
- **Customizable**: Add/remove countries for comparison
- **Persistent Settings**: Saves your preferences to local storage

## Access the tool

[Here](https://debasishm89.github.io/TimeSync-Global/)


## How to Use

1. Select your current location from the dropdown menu
   - For countries with multiple time zones, an additional dropdown will appear
2. Use the time slider to select a specific time
3. Add other countries/time zones for comparison
4. See the equivalent times with indicators for date differences

## Use Cases

- International business meetings
- Scheduling calls with overseas clients or team members


## Technical Details

- Built with vanilla JavaScript (no frameworks)
- Responsive design works on mobile and desktop
- No external dependencies (except for Font Awesome for icons)
- Uses the Intl.DateTimeFormat API for accurate time zone handling
- Modular code structure for easy maintenance


## Author

[Debasish Mandal](https://www.linkedin.com/in/debasishmandal/)

## License

```
/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <https://www.linkedin.com/in/debasishmandal/> wrote this file. As long as you 
 * retain this notice you can do whatever you want with this stuff. If we meet 
 * some day, and you think this stuff is worth it, you can buy me a beer in return.
 *   - Debasish Mandal
 * ----------------------------------------------------------------------------
 */
```

This project is licensed under the Beerware License. Feel free to use, modify, and distribute as you wish. If you find it useful and we happen to meet, you can buy me a beer!