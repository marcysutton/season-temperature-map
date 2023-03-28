var temps = {};
// Define historic climate data

temps = {
	'Barrow'			: 	
		{	
            springequinox2023_high: 22,
            springequinox2023_low: -1,
            springequinox2013_high: -6,
            springequinox2013_low: -11,
            springequinox1973_high: -7,
            springequinox1973_low: -16,
            springequinox1948_high: -16,
            springequinox1948_low: -25
		},
	'Anchorage'			: 	
		{ 
			springequinox2023_high: 37,
            springequinox2023_low: 21,
            springequinox2013_high: 24,
            springequinox2013_low: 9,
            springequinox1973_high: 29,
            springequinox1973_low: 12,
            springequinox1948_high: 29,
            springequinox1948_low: 17
		},
	'Juneau'			: 	
		{ 
			springequinox2023_high: 41,
            springequinox2023_low: 34,
            springequinox2013_high: 27,
            springequinox2013_low: 10,
            springequinox1973_high: 21,
            springequinox1973_low: 10,
            springequinox1948_high: 36,
            springequinox1948_low: 22
		},
	'Inuvik'			: 	
        {
            springequinox2023_high: 30,
            springequinox2023_low: 10,
            springequinox2013_high: -12,
            springequinox2013_low: -17,
            springequinox1973_high: -17,
            springequinox1973_low: -41,
            springequinox1948_high: null,
            springequinox1948_low: null
        },
	'Naujaat': 
    {	
            springequinox2023_high: -13,
            springequinox2023_low: -20,
            springequinox2013_high: -8,
            springequinox2013_low: -18,
            springequinox1973_high: null,
            springequinox1973_low: null,
            springequinox1948_high: null,
            springequinox1948_low: null
    },
	'Yellowknife': 
		{	
			springequinox2023_high: 17,
            springequinox2023_low: -1,
            springequinox2013_high: 24,
            springequinox2013_low: 4,
            springequinox1973_high: 7,
            springequinox1973_low: -12,
            springequinox1948_high: 11,
            springequinox1948_low: -21
		},
	'Vancouver'			: 	
		{	
			springequinox2023_high: 51,
            springequinox2023_low: 45,
            springequinox2013_high: 55,
            springequinox2013_low: 39,
            springequinox1973_high: 51,
            springequinox1973_low: 40,
            springequinox1948_high: 44,
            springequinox1948_low: 32
		}, 
	'Edmonton'	:	
		{ 
			springequinox2023_high: 34,
            springequinox2023_low: 5,
            springequinox2013_high: 30,
            springequinox2013_low: 18,
            springequinox1973_high: 43,
            springequinox1973_low: 24,
            springequinox1948_high: 34,
            springequinox1948_low: 11
		},
	'Iqaluit'	: 	
		{	
			springequinox2023_high: -10,
            springequinox2023_low: -22,
            springequinox2013_high: 18,
            springequinox2013_low: 8,
            springequinox1973_high: -5,
            springequinox1973_low: -25,
            springequinox1948_high: 11,
            springequinox1948_low: -8
		}, 
	'St. Catharines'	:		
		{ 
			springequinox2023_high: 44,
            springequinox2023_low: 33,
            springequinox2013_high: 34,
            springequinox2013_low: 26,
            springequinox1973_high: 33,
            springequinox1973_low: 24,
            springequinox1948_high: 63,
            springequinox1948_low: 39
		}	, 
	'Montreal'			:		
		{	
			springequinox2023_high: 42,
            springequinox2023_low: 24,
            springequinox2013_high: 33,
            springequinox2013_low: 21,
            springequinox1973_high: 31,
            springequinox1973_low: 24,
            springequinox1948_high: 50,
            springequinox1948_low: 40
		}	,
	'Halifax'		:		
		{	
			springequinox2023_high: 40,
            springequinox2023_low: 21,
            springequinox2013_high: 36,
            springequinox2013_low: 19,
            springequinox1973_high: 31,
            springequinox1973_low: 27,
            springequinox1948_high: 48,
            springequinox1948_low: 30
		}, 
	'Seattle'			:		
		{	
			springequinox2023_high: 56,
            springequinox2023_low: 46,
            springequinox2013_high: 52,
            springequinox2013_low: 40,
            springequinox1973_high: 49,
            springequinox1973_low: 39,
            springequinox1948_high: 44,
            springequinox1948_low: 33
		}, 
	'Sacramento'			:		
		{	
			springequinox2023_high: 59,
            springequinox2023_low: 47,
            springequinox2013_high: 62,
            springequinox2013_low: 49,
            springequinox1973_high: 56,
            springequinox1973_low: 41,
            springequinox1948_high: 58,
            springequinox1948_low: 35
		}, 
	'San Diego'			:		
		{	
			springequinox2023_high: 63,
            springequinox2023_low: 56,
            springequinox2013_high: 66,
            springequinox2013_low: 57,
            springequinox1973_high: 61,
            springequinox1973_low: 52,
            springequinox1948_high: 61,
            springequinox1948_low: 48
		}, 
    'Honolulu'			:		
        {	
            springequinox2023_high: 88,
            springequinox2023_low: 72,
            springequinox2013_high: 80,
            springequinox2013_low: 65,
            springequinox1973_high: 81,
            springequinox1973_low: 70,
            springequinox1948_high: 80,
            springequinox1948_low: 69
        },
    'Phoenix'			:		
        {	
            springequinox2023_high: 73,
            springequinox2023_low: 56,
            springequinox2013_high: 85,
            springequinox2013_low: 62,
            springequinox1973_high: 75,
            springequinox1973_low: 54,
            springequinox1948_high: 64,
            springequinox1948_low: 44
        }, 
    'Minneapolis'			:		
        {	
            springequinox2023_high: 39,
            springequinox2023_low: 25,
            springequinox2013_high: 21,
            springequinox2013_low: 5,
            springequinox1973_high: 52,
            springequinox1973_low: 33,
            springequinox1948_high: 63,
            springequinox1948_low: 32
        },
    'Oklahoma City'			:		
        {	
            springequinox2023_high: 56,
            springequinox2023_low: 32,
            springequinox2013_high: 58,
            springequinox2013_low: 33,
            springequinox1973_high: 53,
            springequinox1973_low: 38,
            springequinox1948_high: 77,
            springequinox1948_low: 50
        },
    'Detroit'			:		
        {	
            springequinox2023_high: 50,
            springequinox2023_low: 26,
            springequinox2013_high: 32,
            springequinox2013_low: 18,
            springequinox1973_high: 39,
            springequinox1973_low: 26,
            springequinox1948_high: 61,
            springequinox1948_low: 39
        },
    'New York'			:		
        {	
            springequinox2023_high: 51,
            springequinox2023_low: 31,
            springequinox2013_high: 45,
            springequinox2013_low: 32,
            springequinox1973_high: 38,
            springequinox1973_low: 32,
            springequinox1948_high: 70,
            springequinox1948_low: 57
        },
    'Washington, D.C.'			:		
        {	
            springequinox2023_high: 53,
            springequinox2023_low: 30,
            springequinox2013_high: 54,
            springequinox2013_low: 39,
            springequinox1973_high: 56,
            springequinox1973_low: 36,
            springequinox1948_high: 81,
            springequinox1948_low: 55
        },
    'New Orleans'			:		
        {	
            springequinox2023_high: 57,
            springequinox2023_low: 39,
            springequinox2013_high: 69,
            springequinox2013_low: 55,
            springequinox1973_high: 75,
            springequinox1973_low: 58,
            springequinox1948_high: 82,
            springequinox1948_low: 72
        },
    'Jacksonville'			:		
        {	
            springequinox2023_high: 62,
            springequinox2023_low: 37,
            springequinox2013_high: 64,
            springequinox2013_low: 45,
            springequinox1973_high: 76,
            springequinox1973_low: 51,
            springequinox1948_high: 88,
            springequinox1948_low: 66
        },
    'Miami'			:		
        {	
            springequinox2023_high: 77,
            springequinox2023_low: 59,
            springequinox2013_high: 84,
            springequinox2013_low: 64,
            springequinox1973_high: 80,
            springequinox1973_low: 59,
            springequinox1948_high: 83,
            springequinox1948_low: 72
        },
    'La Paz'			:		
        {	
            springequinox2023_high: 84,
            springequinox2023_low: 57,
            springequinox2013_high: 86,
            springequinox2013_low: 50,
            springequinox1973_high: null,
            springequinox1973_low: null,
            springequinox1948_high: null,
            springequinox1948_low: null
        },
    'Monterrey'			:		
        {	
            springequinox2023_high: 59,
            springequinox2023_low: 41,
            springequinox2013_high: 72,
            springequinox2013_low: 61,
            springequinox1973_high: null,
            springequinox1973_low: null,
            springequinox1948_high: null,
            springequinox1948_low: null
        },
    'Guadalajara'			:		
        {	
            springequinox2023_high: 81,
            springequinox2023_low: 50,
            springequinox2013_high: 88,
            springequinox2013_low: 50,
            springequinox1973_high: 86,
            springequinox1973_low: null,
            springequinox1948_high: null,
            springequinox1948_low: null
        },
    'Puebla City'			:		
        {	
            springequinox2023_high: 72,
            springequinox2023_low: 43,
            springequinox2013_high: 81,
            springequinox2013_low: 45,
            springequinox1973_high: null,
            springequinox1973_low: null,
            springequinox1948_high: null,
            springequinox1948_low: null
        },
    'Cancun'			:		
        {	
            springequinox2023_high: 79,
            springequinox2023_low: 70,
            springequinox2013_high: 84,
            springequinox2013_low: 75,
            springequinox1973_high: null,
            springequinox1973_low: null,
            springequinox1948_high: null,
            springequinox1948_low: null
        }
};

export default temps;


// Definte current temperature data (can be pulled via a php script from weather.gov)

// temps['Sanford'].currenttemp 		  = 11	;
// temps['Portland'].currenttemp 		=	10	;
// temps['Augusta'].currenttemp			=	-2	;
// temps['Bar Harbor'].currenttemp	  =	12	;
// temps['Auburn'].currenttemp			  =	1		;
// temps['Waterville'].currenttemp	  = -15	;
// temps['Millinocket'].currenttemp	= -10	;
// temps['Houlton'].currenttemp			=	-3	;
// temps['Caribou'].currenttemp			=	-20	;
// temps['Presque Isle'].currenttemp =	-9	;
// temps['Bangor'].currenttemp			  =	-19	;
