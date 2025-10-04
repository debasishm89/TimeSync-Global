/**
 * Countries data with timezone information
 * This module provides a comprehensive list of countries with their 
 * respective timezone information.
 * For countries with multiple time zones, timezones is an array of timezone objects.
 */

const COUNTRIES_DATA = [
    { 
        name: "Afghanistan", 
        code: "AF", 
        timezone: "Asia/Kabul", 
        utcOffset: "+04:30",
        hasDst: false,
        timezones: [
            { name: "Afghanistan Time", timezone: "Asia/Kabul", utcOffset: "+04:30", hasDst: false }
        ]
    },
    { 
        name: "Albania", 
        code: "AL", 
        timezone: "Europe/Tirane", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Algeria", 
        code: "DZ", 
        timezone: "Africa/Algiers", 
        utcOffset: "+01:00",
        hasDst: false
    },
    { 
        name: "Andorra", 
        code: "AD", 
        timezone: "Europe/Andorra", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Angola", 
        code: "AO", 
        timezone: "Africa/Luanda", 
        utcOffset: "+01:00",
        hasDst: false
    },
    { 
        name: "Antigua and Barbuda", 
        code: "AG", 
        timezone: "America/Antigua", 
        utcOffset: "-04:00",
        hasDst: false
    },
    { 
        name: "Argentina", 
        code: "AR", 
        timezone: "America/Argentina/Buenos_Aires", 
        utcOffset: "-03:00",
        hasDst: false
    },
    { 
        name: "Armenia", 
        code: "AM", 
        timezone: "Asia/Yerevan", 
        utcOffset: "+04:00",
        hasDst: false
    },
    { 
        name: "Australia", 
        code: "AU", 
        timezone: "Australia/Sydney", 
        utcOffset: "+10:00",
        hasDst: true,
        timezones: [
            { name: "Australian Eastern Time", timezone: "Australia/Sydney", utcOffset: "+10:00", hasDst: true },
            { name: "Australian Central Time", timezone: "Australia/Adelaide", utcOffset: "+09:30", hasDst: true },
            { name: "Australian Western Time", timezone: "Australia/Perth", utcOffset: "+08:00", hasDst: false }
        ]
    },
    { 
        name: "Austria", 
        code: "AT", 
        timezone: "Europe/Vienna", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Azerbaijan", 
        code: "AZ", 
        timezone: "Asia/Baku", 
        utcOffset: "+04:00",
        hasDst: false
    },
    { 
        name: "Bahamas", 
        code: "BS", 
        timezone: "America/Nassau", 
        utcOffset: "-05:00",
        hasDst: true
    },
    { 
        name: "Bahrain", 
        code: "BH", 
        timezone: "Asia/Bahrain", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Bangladesh", 
        code: "BD", 
        timezone: "Asia/Dhaka", 
        utcOffset: "+06:00",
        hasDst: false
    },
    { 
        name: "Barbados", 
        code: "BB", 
        timezone: "America/Barbados", 
        utcOffset: "-04:00",
        hasDst: false
    },
    { 
        name: "Belarus", 
        code: "BY", 
        timezone: "Europe/Minsk", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Belgium", 
        code: "BE", 
        timezone: "Europe/Brussels", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Belize", 
        code: "BZ", 
        timezone: "America/Belize", 
        utcOffset: "-06:00",
        hasDst: false
    },
    { 
        name: "Benin", 
        code: "BJ", 
        timezone: "Africa/Porto-Novo", 
        utcOffset: "+01:00",
        hasDst: false
    },
    { 
        name: "Bhutan", 
        code: "BT", 
        timezone: "Asia/Thimphu", 
        utcOffset: "+06:00",
        hasDst: false
    },
    { 
        name: "Bolivia", 
        code: "BO", 
        timezone: "America/La_Paz", 
        utcOffset: "-04:00",
        hasDst: false
    },
    { 
        name: "Bosnia and Herzegovina", 
        code: "BA", 
        timezone: "Europe/Sarajevo", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Botswana", 
        code: "BW", 
        timezone: "Africa/Gaborone", 
        utcOffset: "+02:00",
        hasDst: false
    },
    { 
        name: "Brazil", 
        code: "BR", 
        timezone: "America/Sao_Paulo", 
        utcOffset: "-03:00",
        hasDst: true
    },
    { 
        name: "Brunei", 
        code: "BN", 
        timezone: "Asia/Brunei", 
        utcOffset: "+08:00",
        hasDst: false
    },
    { 
        name: "Bulgaria", 
        code: "BG", 
        timezone: "Europe/Sofia", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "Burkina Faso", 
        code: "BF", 
        timezone: "Africa/Ouagadougou", 
        utcOffset: "+00:00",
        hasDst: false
    },
    { 
        name: "Burundi", 
        code: "BI", 
        timezone: "Africa/Bujumbura", 
        utcOffset: "+02:00",
        hasDst: false
    },
    { 
        name: "Cambodia", 
        code: "KH", 
        timezone: "Asia/Phnom_Penh", 
        utcOffset: "+07:00",
        hasDst: false
    },
    { 
        name: "Cameroon", 
        code: "CM", 
        timezone: "Africa/Douala", 
        utcOffset: "+01:00",
        hasDst: false
    },
    { 
        name: "Canada", 
        code: "CA", 
        timezone: "America/Toronto", 
        utcOffset: "-05:00",
        hasDst: true,
        timezones: [
            { name: "Newfoundland Time", timezone: "America/St_Johns", utcOffset: "-03:30", hasDst: true },
            { name: "Atlantic Time", timezone: "America/Halifax", utcOffset: "-04:00", hasDst: true },
            { name: "Eastern Time", timezone: "America/Toronto", utcOffset: "-05:00", hasDst: true },
            { name: "Central Time", timezone: "America/Winnipeg", utcOffset: "-06:00", hasDst: true },
            { name: "Mountain Time", timezone: "America/Edmonton", utcOffset: "-07:00", hasDst: true },
            { name: "Pacific Time", timezone: "America/Vancouver", utcOffset: "-08:00", hasDst: true }
        ]
    },
    { 
        name: "Cape Verde", 
        code: "CV", 
        timezone: "Atlantic/Cape_Verde", 
        utcOffset: "-01:00",
        hasDst: false
    },
    { 
        name: "Central African Republic", 
        code: "CF", 
        timezone: "Africa/Bangui", 
        utcOffset: "+01:00",
        hasDst: false
    },
    { 
        name: "Chad", 
        code: "TD", 
        timezone: "Africa/Ndjamena", 
        utcOffset: "+01:00",
        hasDst: false
    },
    { 
        name: "Chile", 
        code: "CL", 
        timezone: "America/Santiago", 
        utcOffset: "-04:00",
        hasDst: true
    },
    { 
        name: "China", 
        code: "CN", 
        timezone: "Asia/Shanghai", 
        utcOffset: "+08:00",
        hasDst: false
    },
    { 
        name: "Colombia", 
        code: "CO", 
        timezone: "America/Bogota", 
        utcOffset: "-05:00",
        hasDst: false
    },
    { 
        name: "Comoros", 
        code: "KM", 
        timezone: "Indian/Comoro", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Congo (Brazzaville)", 
        code: "CG", 
        timezone: "Africa/Brazzaville", 
        utcOffset: "+01:00",
        hasDst: false
    },
    { 
        name: "Congo (Kinshasa)", 
        code: "CD", 
        timezone: "Africa/Kinshasa", 
        utcOffset: "+01:00",
        hasDst: false
    },
    { 
        name: "Costa Rica", 
        code: "CR", 
        timezone: "America/Costa_Rica", 
        utcOffset: "-06:00",
        hasDst: false
    },
    { 
        name: "Croatia", 
        code: "HR", 
        timezone: "Europe/Zagreb", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Cuba", 
        code: "CU", 
        timezone: "America/Havana", 
        utcOffset: "-05:00",
        hasDst: true
    },
    { 
        name: "Cyprus", 
        code: "CY", 
        timezone: "Asia/Nicosia", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "Czech Republic", 
        code: "CZ", 
        timezone: "Europe/Prague", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Denmark", 
        code: "DK", 
        timezone: "Europe/Copenhagen", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Djibouti", 
        code: "DJ", 
        timezone: "Africa/Djibouti", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Dominica", 
        code: "DM", 
        timezone: "America/Dominica", 
        utcOffset: "-04:00",
        hasDst: false
    },
    { 
        name: "Dominican Republic", 
        code: "DO", 
        timezone: "America/Santo_Domingo", 
        utcOffset: "-04:00",
        hasDst: false
    },
    { 
        name: "Ecuador", 
        code: "EC", 
        timezone: "America/Guayaquil", 
        utcOffset: "-05:00",
        hasDst: false
    },
    { 
        name: "Egypt", 
        code: "EG", 
        timezone: "Africa/Cairo", 
        utcOffset: "+02:00",
        hasDst: false
    },
    { 
        name: "El Salvador", 
        code: "SV", 
        timezone: "America/El_Salvador", 
        utcOffset: "-06:00",
        hasDst: false
    },
    { 
        name: "Equatorial Guinea", 
        code: "GQ", 
        timezone: "Africa/Malabo", 
        utcOffset: "+01:00",
        hasDst: false
    },
    { 
        name: "Eritrea", 
        code: "ER", 
        timezone: "Africa/Asmara", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Estonia", 
        code: "EE", 
        timezone: "Europe/Tallinn", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "Ethiopia", 
        code: "ET", 
        timezone: "Africa/Addis_Ababa", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Fiji", 
        code: "FJ", 
        timezone: "Pacific/Fiji", 
        utcOffset: "+12:00",
        hasDst: true
    },
    { 
        name: "Finland", 
        code: "FI", 
        timezone: "Europe/Helsinki", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "France", 
        code: "FR", 
        timezone: "Europe/Paris", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Gabon", 
        code: "GA", 
        timezone: "Africa/Libreville", 
        utcOffset: "+01:00",
        hasDst: false
    },
    { 
        name: "Gambia", 
        code: "GM", 
        timezone: "Africa/Banjul", 
        utcOffset: "+00:00",
        hasDst: false
    },
    { 
        name: "Georgia", 
        code: "GE", 
        timezone: "Asia/Tbilisi", 
        utcOffset: "+04:00",
        hasDst: false
    },
    { 
        name: "Germany", 
        code: "DE", 
        timezone: "Europe/Berlin", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Ghana", 
        code: "GH", 
        timezone: "Africa/Accra", 
        utcOffset: "+00:00",
        hasDst: false
    },
    { 
        name: "Greece", 
        code: "GR", 
        timezone: "Europe/Athens", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "Grenada", 
        code: "GD", 
        timezone: "America/Grenada", 
        utcOffset: "-04:00",
        hasDst: false
    },
    { 
        name: "Guatemala", 
        code: "GT", 
        timezone: "America/Guatemala", 
        utcOffset: "-06:00",
        hasDst: false
    },
    { 
        name: "Guinea", 
        code: "GN", 
        timezone: "Africa/Conakry", 
        utcOffset: "+00:00",
        hasDst: false
    },
    { 
        name: "Guinea-Bissau", 
        code: "GW", 
        timezone: "Africa/Bissau", 
        utcOffset: "+00:00",
        hasDst: false
    },
    { 
        name: "Guyana", 
        code: "GY", 
        timezone: "America/Guyana", 
        utcOffset: "-04:00",
        hasDst: false
    },
    { 
        name: "Haiti", 
        code: "HT", 
        timezone: "America/Port-au-Prince", 
        utcOffset: "-05:00",
        hasDst: false
    },
    { 
        name: "Honduras", 
        code: "HN", 
        timezone: "America/Tegucigalpa", 
        utcOffset: "-06:00",
        hasDst: false
    },
    { 
        name: "Hungary", 
        code: "HU", 
        timezone: "Europe/Budapest", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Iceland", 
        code: "IS", 
        timezone: "Atlantic/Reykjavik", 
        utcOffset: "+00:00",
        hasDst: false
    },
    { 
        name: "India", 
        code: "IN", 
        timezone: "Asia/Kolkata", 
        utcOffset: "+05:30",
        hasDst: false
    },
    { 
        name: "Indonesia", 
        code: "ID", 
        timezone: "Asia/Jakarta", 
        utcOffset: "+07:00",
        hasDst: false
    },
    { 
        name: "Iran", 
        code: "IR", 
        timezone: "Asia/Tehran", 
        utcOffset: "+03:30",
        hasDst: true
    },
    { 
        name: "Iraq", 
        code: "IQ", 
        timezone: "Asia/Baghdad", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Ireland", 
        code: "IE", 
        timezone: "Europe/Dublin", 
        utcOffset: "+00:00",
        hasDst: true
    },
    { 
        name: "Israel", 
        code: "IL", 
        timezone: "Asia/Jerusalem", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "Italy", 
        code: "IT", 
        timezone: "Europe/Rome", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Jamaica", 
        code: "JM", 
        timezone: "America/Jamaica", 
        utcOffset: "-05:00",
        hasDst: false
    },
    { 
        name: "Japan", 
        code: "JP", 
        timezone: "Asia/Tokyo", 
        utcOffset: "+09:00",
        hasDst: false
    },
    { 
        name: "Jordan", 
        code: "JO", 
        timezone: "Asia/Amman", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "Kazakhstan", 
        code: "KZ", 
        timezone: "Asia/Almaty", 
        utcOffset: "+06:00",
        hasDst: false
    },
    { 
        name: "Kenya", 
        code: "KE", 
        timezone: "Africa/Nairobi", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Kiribati", 
        code: "KI", 
        timezone: "Pacific/Tarawa", 
        utcOffset: "+12:00",
        hasDst: false
    },
    { 
        name: "North Korea", 
        code: "KP", 
        timezone: "Asia/Pyongyang", 
        utcOffset: "+09:00",
        hasDst: false
    },
    { 
        name: "South Korea", 
        code: "KR", 
        timezone: "Asia/Seoul", 
        utcOffset: "+09:00",
        hasDst: false
    },
    { 
        name: "Kuwait", 
        code: "KW", 
        timezone: "Asia/Kuwait", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Kyrgyzstan", 
        code: "KG", 
        timezone: "Asia/Bishkek", 
        utcOffset: "+06:00",
        hasDst: false
    },
    { 
        name: "Laos", 
        code: "LA", 
        timezone: "Asia/Vientiane", 
        utcOffset: "+07:00",
        hasDst: false
    },
    { 
        name: "Latvia", 
        code: "LV", 
        timezone: "Europe/Riga", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "Lebanon", 
        code: "LB", 
        timezone: "Asia/Beirut", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "Lesotho", 
        code: "LS", 
        timezone: "Africa/Maseru", 
        utcOffset: "+02:00",
        hasDst: false
    },
    { 
        name: "Liberia", 
        code: "LR", 
        timezone: "Africa/Monrovia", 
        utcOffset: "+00:00",
        hasDst: false
    },
    { 
        name: "Libya", 
        code: "LY", 
        timezone: "Africa/Tripoli", 
        utcOffset: "+02:00",
        hasDst: false
    },
    { 
        name: "Liechtenstein", 
        code: "LI", 
        timezone: "Europe/Vaduz", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Lithuania", 
        code: "LT", 
        timezone: "Europe/Vilnius", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "Luxembourg", 
        code: "LU", 
        timezone: "Europe/Luxembourg", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Madagascar", 
        code: "MG", 
        timezone: "Indian/Antananarivo", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Malawi", 
        code: "MW", 
        timezone: "Africa/Blantyre", 
        utcOffset: "+02:00",
        hasDst: false
    },
    { 
        name: "Malaysia", 
        code: "MY", 
        timezone: "Asia/Kuala_Lumpur", 
        utcOffset: "+08:00",
        hasDst: false
    },
    { 
        name: "Maldives", 
        code: "MV", 
        timezone: "Indian/Maldives", 
        utcOffset: "+05:00",
        hasDst: false
    },
    { 
        name: "Mali", 
        code: "ML", 
        timezone: "Africa/Bamako", 
        utcOffset: "+00:00",
        hasDst: false
    },
    { 
        name: "Malta", 
        code: "MT", 
        timezone: "Europe/Malta", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Marshall Islands", 
        code: "MH", 
        timezone: "Pacific/Majuro", 
        utcOffset: "+12:00",
        hasDst: false
    },
    { 
        name: "Mauritania", 
        code: "MR", 
        timezone: "Africa/Nouakchott", 
        utcOffset: "+00:00",
        hasDst: false
    },
    { 
        name: "Mauritius", 
        code: "MU", 
        timezone: "Indian/Mauritius", 
        utcOffset: "+04:00",
        hasDst: false
    },
    { 
        name: "Mexico", 
        code: "MX", 
        timezone: "America/Mexico_City", 
        utcOffset: "-06:00",
        hasDst: true
    },
    { 
        name: "Micronesia", 
        code: "FM", 
        timezone: "Pacific/Pohnpei", 
        utcOffset: "+11:00",
        hasDst: false
    },
    { 
        name: "Moldova", 
        code: "MD", 
        timezone: "Europe/Chisinau", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "Monaco", 
        code: "MC", 
        timezone: "Europe/Monaco", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Mongolia", 
        code: "MN", 
        timezone: "Asia/Ulaanbaatar", 
        utcOffset: "+08:00",
        hasDst: false
    },
    { 
        name: "Montenegro", 
        code: "ME", 
        timezone: "Europe/Podgorica", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Morocco", 
        code: "MA", 
        timezone: "Africa/Casablanca", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Mozambique", 
        code: "MZ", 
        timezone: "Africa/Maputo", 
        utcOffset: "+02:00",
        hasDst: false
    },
    { 
        name: "Myanmar", 
        code: "MM", 
        timezone: "Asia/Yangon", 
        utcOffset: "+06:30",
        hasDst: false
    },
    { 
        name: "Namibia", 
        code: "NA", 
        timezone: "Africa/Windhoek", 
        utcOffset: "+02:00",
        hasDst: false
    },
    { 
        name: "Nauru", 
        code: "NR", 
        timezone: "Pacific/Nauru", 
        utcOffset: "+12:00",
        hasDst: false
    },
    { 
        name: "Nepal", 
        code: "NP", 
        timezone: "Asia/Kathmandu", 
        utcOffset: "+05:45",
        hasDst: false
    },
    { 
        name: "Netherlands", 
        code: "NL", 
        timezone: "Europe/Amsterdam", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "New Zealand", 
        code: "NZ", 
        timezone: "Pacific/Auckland", 
        utcOffset: "+12:00",
        hasDst: true
    },
    { 
        name: "Nicaragua", 
        code: "NI", 
        timezone: "America/Managua", 
        utcOffset: "-06:00",
        hasDst: false
    },
    { 
        name: "Niger", 
        code: "NE", 
        timezone: "Africa/Niamey", 
        utcOffset: "+01:00",
        hasDst: false
    },
    { 
        name: "Nigeria", 
        code: "NG", 
        timezone: "Africa/Lagos", 
        utcOffset: "+01:00",
        hasDst: false
    },
    { 
        name: "Norway", 
        code: "NO", 
        timezone: "Europe/Oslo", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Oman", 
        code: "OM", 
        timezone: "Asia/Muscat", 
        utcOffset: "+04:00",
        hasDst: false
    },
    { 
        name: "Pakistan", 
        code: "PK", 
        timezone: "Asia/Karachi", 
        utcOffset: "+05:00",
        hasDst: false
    },
    { 
        name: "Palau", 
        code: "PW", 
        timezone: "Pacific/Palau", 
        utcOffset: "+09:00",
        hasDst: false
    },
    { 
        name: "Panama", 
        code: "PA", 
        timezone: "America/Panama", 
        utcOffset: "-05:00",
        hasDst: false
    },
    { 
        name: "Papua New Guinea", 
        code: "PG", 
        timezone: "Pacific/Port_Moresby", 
        utcOffset: "+10:00",
        hasDst: false
    },
    { 
        name: "Paraguay", 
        code: "PY", 
        timezone: "America/Asuncion", 
        utcOffset: "-04:00",
        hasDst: true
    },
    { 
        name: "Peru", 
        code: "PE", 
        timezone: "America/Lima", 
        utcOffset: "-05:00",
        hasDst: false
    },
    { 
        name: "Philippines", 
        code: "PH", 
        timezone: "Asia/Manila", 
        utcOffset: "+08:00",
        hasDst: false
    },
    { 
        name: "Poland", 
        code: "PL", 
        timezone: "Europe/Warsaw", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Portugal", 
        code: "PT", 
        timezone: "Europe/Lisbon", 
        utcOffset: "+00:00",
        hasDst: true
    },
    { 
        name: "Qatar", 
        code: "QA", 
        timezone: "Asia/Qatar", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Romania", 
        code: "RO", 
        timezone: "Europe/Bucharest", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "Russia", 
        code: "RU", 
        timezone: "Europe/Moscow", 
        utcOffset: "+03:00",
        hasDst: false,
        timezones: [
            { name: "Kaliningrad Time", timezone: "Europe/Kaliningrad", utcOffset: "+02:00", hasDst: false },
            { name: "Moscow Time", timezone: "Europe/Moscow", utcOffset: "+03:00", hasDst: false },
            { name: "Yekaterinburg Time", timezone: "Asia/Yekaterinburg", utcOffset: "+05:00", hasDst: false },
            { name: "Omsk Time", timezone: "Asia/Omsk", utcOffset: "+06:00", hasDst: false },
            { name: "Krasnoyarsk Time", timezone: "Asia/Krasnoyarsk", utcOffset: "+07:00", hasDst: false },
            { name: "Irkutsk Time", timezone: "Asia/Irkutsk", utcOffset: "+08:00", hasDst: false },
            { name: "Yakutsk Time", timezone: "Asia/Yakutsk", utcOffset: "+09:00", hasDst: false },
            { name: "Vladivostok Time", timezone: "Asia/Vladivostok", utcOffset: "+10:00", hasDst: false },
            { name: "Magadan Time", timezone: "Asia/Magadan", utcOffset: "+11:00", hasDst: false },
            { name: "Kamchatka Time", timezone: "Asia/Kamchatka", utcOffset: "+12:00", hasDst: false }
        ]
    },
    { 
        name: "Rwanda", 
        code: "RW", 
        timezone: "Africa/Kigali", 
        utcOffset: "+02:00",
        hasDst: false
    },
    { 
        name: "Saint Kitts and Nevis", 
        code: "KN", 
        timezone: "America/St_Kitts", 
        utcOffset: "-04:00",
        hasDst: false
    },
    { 
        name: "Saint Lucia", 
        code: "LC", 
        timezone: "America/St_Lucia", 
        utcOffset: "-04:00",
        hasDst: false
    },
    { 
        name: "Saint Vincent and the Grenadines", 
        code: "VC", 
        timezone: "America/St_Vincent", 
        utcOffset: "-04:00",
        hasDst: false
    },
    { 
        name: "Samoa", 
        code: "WS", 
        timezone: "Pacific/Apia", 
        utcOffset: "+13:00",
        hasDst: true
    },
    { 
        name: "San Marino", 
        code: "SM", 
        timezone: "Europe/San_Marino", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Sao Tome and Principe", 
        code: "ST", 
        timezone: "Africa/Sao_Tome", 
        utcOffset: "+00:00",
        hasDst: false
    },
    { 
        name: "Saudi Arabia", 
        code: "SA", 
        timezone: "Asia/Riyadh", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Senegal", 
        code: "SN", 
        timezone: "Africa/Dakar", 
        utcOffset: "+00:00",
        hasDst: false
    },
    { 
        name: "Serbia", 
        code: "RS", 
        timezone: "Europe/Belgrade", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Seychelles", 
        code: "SC", 
        timezone: "Indian/Mahe", 
        utcOffset: "+04:00",
        hasDst: false
    },
    { 
        name: "Sierra Leone", 
        code: "SL", 
        timezone: "Africa/Freetown", 
        utcOffset: "+00:00",
        hasDst: false
    },
    { 
        name: "Singapore", 
        code: "SG", 
        timezone: "Asia/Singapore", 
        utcOffset: "+08:00",
        hasDst: false
    },
    { 
        name: "Slovakia", 
        code: "SK", 
        timezone: "Europe/Bratislava", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Slovenia", 
        code: "SI", 
        timezone: "Europe/Ljubljana", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Solomon Islands", 
        code: "SB", 
        timezone: "Pacific/Guadalcanal", 
        utcOffset: "+11:00",
        hasDst: false
    },
    { 
        name: "Somalia", 
        code: "SO", 
        timezone: "Africa/Mogadishu", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "South Africa", 
        code: "ZA", 
        timezone: "Africa/Johannesburg", 
        utcOffset: "+02:00",
        hasDst: false
    },
    { 
        name: "South Sudan", 
        code: "SS", 
        timezone: "Africa/Juba", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Spain", 
        code: "ES", 
        timezone: "Europe/Madrid", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Sri Lanka", 
        code: "LK", 
        timezone: "Asia/Colombo", 
        utcOffset: "+05:30",
        hasDst: false
    },
    { 
        name: "Sudan", 
        code: "SD", 
        timezone: "Africa/Khartoum", 
        utcOffset: "+02:00",
        hasDst: false
    },
    { 
        name: "Suriname", 
        code: "SR", 
        timezone: "America/Paramaribo", 
        utcOffset: "-03:00",
        hasDst: false
    },
    { 
        name: "Swaziland", 
        code: "SZ", 
        timezone: "Africa/Mbabane", 
        utcOffset: "+02:00",
        hasDst: false
    },
    { 
        name: "Sweden", 
        code: "SE", 
        timezone: "Europe/Stockholm", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Switzerland", 
        code: "CH", 
        timezone: "Europe/Zurich", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Syria", 
        code: "SY", 
        timezone: "Asia/Damascus", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "Taiwan", 
        code: "TW", 
        timezone: "Asia/Taipei", 
        utcOffset: "+08:00",
        hasDst: false
    },
    { 
        name: "Tajikistan", 
        code: "TJ", 
        timezone: "Asia/Dushanbe", 
        utcOffset: "+05:00",
        hasDst: false
    },
    { 
        name: "Tanzania", 
        code: "TZ", 
        timezone: "Africa/Dar_es_Salaam", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Thailand", 
        code: "TH", 
        timezone: "Asia/Bangkok", 
        utcOffset: "+07:00",
        hasDst: false
    },
    { 
        name: "Timor-Leste", 
        code: "TL", 
        timezone: "Asia/Dili", 
        utcOffset: "+09:00",
        hasDst: false
    },
    { 
        name: "Togo", 
        code: "TG", 
        timezone: "Africa/Lome", 
        utcOffset: "+00:00",
        hasDst: false
    },
    { 
        name: "Tonga", 
        code: "TO", 
        timezone: "Pacific/Tongatapu", 
        utcOffset: "+13:00",
        hasDst: false
    },
    { 
        name: "Trinidad and Tobago", 
        code: "TT", 
        timezone: "America/Port_of_Spain", 
        utcOffset: "-04:00",
        hasDst: false
    },
    { 
        name: "Tunisia", 
        code: "TN", 
        timezone: "Africa/Tunis", 
        utcOffset: "+01:00",
        hasDst: false
    },
    { 
        name: "Turkey", 
        code: "TR", 
        timezone: "Europe/Istanbul", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Turkmenistan", 
        code: "TM", 
        timezone: "Asia/Ashgabat", 
        utcOffset: "+05:00",
        hasDst: false
    },
    { 
        name: "Tuvalu", 
        code: "TV", 
        timezone: "Pacific/Funafuti", 
        utcOffset: "+12:00",
        hasDst: false
    },
    { 
        name: "Uganda", 
        code: "UG", 
        timezone: "Africa/Kampala", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Ukraine", 
        code: "UA", 
        timezone: "Europe/Kiev", 
        utcOffset: "+02:00",
        hasDst: true
    },
    { 
        name: "United Arab Emirates", 
        code: "AE", 
        timezone: "Asia/Dubai", 
        utcOffset: "+04:00",
        hasDst: false
    },
    { 
        name: "United Kingdom", 
        code: "GB", 
        timezone: "Europe/London", 
        utcOffset: "+00:00",
        hasDst: true
    },
    { 
        name: "United States", 
        code: "US", 
        timezone: "America/New_York", 
        utcOffset: "-05:00",
        hasDst: true,
        timezones: [
            { name: "Eastern Time (ET)", timezone: "America/New_York", utcOffset: "-05:00", hasDst: true },
            { name: "Central Time (CT)", timezone: "America/Chicago", utcOffset: "-06:00", hasDst: true },
            { name: "Mountain Time (MT)", timezone: "America/Denver", utcOffset: "-07:00", hasDst: true },
            { name: "Pacific Time (PT)", timezone: "America/Los_Angeles", utcOffset: "-08:00", hasDst: true },
            { name: "Alaska Time (AK)", timezone: "America/Anchorage", utcOffset: "-09:00", hasDst: true },
            { name: "Hawaii Time (HI)", timezone: "Pacific/Honolulu", utcOffset: "-10:00", hasDst: false }
        ]
    },
    { 
        name: "Uruguay", 
        code: "UY", 
        timezone: "America/Montevideo", 
        utcOffset: "-03:00",
        hasDst: true
    },
    { 
        name: "Uzbekistan", 
        code: "UZ", 
        timezone: "Asia/Tashkent", 
        utcOffset: "+05:00",
        hasDst: false
    },
    { 
        name: "Vanuatu", 
        code: "VU", 
        timezone: "Pacific/Efate", 
        utcOffset: "+11:00",
        hasDst: false
    },
    { 
        name: "Vatican City", 
        code: "VA", 
        timezone: "Europe/Vatican", 
        utcOffset: "+01:00",
        hasDst: true
    },
    { 
        name: "Venezuela", 
        code: "VE", 
        timezone: "America/Caracas", 
        utcOffset: "-04:00",
        hasDst: false
    },
    { 
        name: "Vietnam", 
        code: "VN", 
        timezone: "Asia/Ho_Chi_Minh", 
        utcOffset: "+07:00",
        hasDst: false
    },
    { 
        name: "Yemen", 
        code: "YE", 
        timezone: "Asia/Aden", 
        utcOffset: "+03:00",
        hasDst: false
    },
    { 
        name: "Zambia", 
        code: "ZM", 
        timezone: "Africa/Lusaka", 
        utcOffset: "+02:00",
        hasDst: false
    },
    { 
        name: "Zimbabwe", 
        code: "ZW", 
        timezone: "Africa/Harare", 
        utcOffset: "+02:00",
        hasDst: false
    }
];