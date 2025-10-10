// windchil script

const calculateWindChill = (T, V) => 
            (13.12 + 0.6215 * T - 11.37 * Math.pow(V, 0.16) + 0.3965 * T * Math.pow(V, 0.16));

        document.addEventListener('DOMContentLoaded', () => {
       
            const temperature = parseFloat(document.getElementById('temp-display').textContent); 
            const windSpeed = parseFloat(document.getElementById('wind-display').textContent); 


            const windChillDisplay = document.getElementById('windchill-display');


            const TEMP_MAX = 10; 
            const WIND_MIN = 4.8;

            if (temperature <= TEMP_MAX && windSpeed > WIND_MIN) {
                
                const windChillFactor = calculateWindChill(temperature, windSpeed);
                
               
                windChillDisplay.textContent = `${windChillFactor.toFixed(1)} °C`;

            } else {
               
                windChillDisplay.textContent = "N/A"; 
            }
            
            const currentYear = new Date().getFullYear();
            const copyrightSpan = document.getElementById('copyright-info');

            copyrightSpan.innerHTML = copyrightSpan.innerHTML.replace('2024', currentYear);

        });

        
        
//  last modified and current year script



const year = document.querySelector("#currentyear")
const lastModifiedElement = document.getElementById("lastModified");

const today = new Date();


const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });


const parsedDateTime = formatter.format(today);


currentyear.innerHTML = `<span >${today.getFullYear()}</span>`;
lastModifiedElement.innerHTML = `<span class="lastModified">Last Modified: ${parsedDateTime}</span>`;

