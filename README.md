# Snowday

A demo app for VMS that retrieves data from the snow forecast API and determines the most-likely snow day for that week.
 
## Installation

1. Download the zip file, unzip to a folder on your desktop. Ex: `vms-demo`
2. Open your console and navigate to the folder you just created
    - *Windows*: Right-click on the folder and select `Open Command Window Here`
    - *Mac*: 
        - Open Spotlight (Command + Spacebar _or_ click the magnifying glass in the far right of the task bar), search for 'Terminal'
        - In Terminal prompt, type: `cd ~/Desktop/{folder-name}` and hit Enter
3. Install the Node.js packages from the console's command prompt: `npm install && cd client && npm install`

## Development

1. To watch all files, run `npm run dev` from the console's command prompt. This will open a browser window. Any changes to files will trigger a browser refresh 
2. To quit, press `Control + C` (both Mac and Windows)

## Sample API Response

The [Ski Resort Snow Report and Weather Forecast API](http://www.myweather2.com/developer/apis.aspx?uref=f8add9ec-fe95-4001-b822-df8680e49dce) will return JSON:

```
{
   "weather":{
      "forecast":[
         {
            "date":"2016-11-01",
            "day":[
               {
                  "weather_code":"0",
                  "weather_text":"Sunny skies",
                  "wind":[
                     {
                        "dir":"WSW",
                        "dir_degree":"240",
                        "speed":"7",
                        "wind_unit":"mph"
                     }
                  ]
               }
            ],
            "day_max_temp":"54",
            "night":[
               {
                  "weather_code":"22",
                  "weather_text":"Patchy snow possible",
                  "wind":[
                     {
                        "dir":"NNW",
                        "dir_degree":"342",
                        "speed":"11",
                        "wind_unit":"mph"
                     }
                  ]
               }
            ],
            "night_min_temp":"21",
            "temp_unit":"f"
         }
      ],
      "snow_report":[
         {
            "conditions":"No report available today",
            "last_snow_date":"Apr 16",
            "lower_snow_depth":"0",
            "report_date":"2016-10-10 00:00",
            "upper_snow_depth":"0"
         }
      ]
   }
}
```

Documentation can be found [here](http://www.myweather2.com/developer/apis.aspx?uref=becda844-8299-4bf6-899b-d771a92b9dbf).

Other units query string parameters: `&temp_unit=f&ws_unit=mph`

====

To Do List:

- [ ]  

 ## LICENSE
Copyright 2016 Kenzan, LLC <http://kenzan.com>
 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
 
    http://www.apache.org/licenses/LICENSE-2.0
 
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.