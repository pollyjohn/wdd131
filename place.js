        const calculateWindChill = (T, V) => 
            (13.12 + 0.6215 * T - 11.37 * Math.pow(V, 0.16) + 0.3965 * T * Math.pow(V, 0.16));

        document.addEventListener('DOMContentLoaded', () => {
            // 1. Variáveis Estáticas para o Clima (Conforme Requisito)
            const temperature = parseFloat(document.getElementById('temp-display').textContent); // 10 °C
            const windSpeed = parseFloat(document.getElementById('wind-display').textContent); // 5 km/h

            // Elemento de exibição do Wind Chill
            const windChillDisplay = document.getElementById('windchill-display');

            // 2. Condicionais para o Cálculo do Wind Chill (Regra Métrica)
            const TEMP_MAX = 10; // °C
            const WIND_MIN = 4.8; // km/h

            if (temperature <= TEMP_MAX && windSpeed > WIND_MIN) {
                // As condições são atendidas: T <= 10 °C E V > 4.8 km/h
                
                // Calcula o fator Wind Chill
                const windChillFactor = calculateWindChill(temperature, windSpeed);
                
                // Exibe o resultado com uma casa decimal e o símbolo de °C
                windChillDisplay.textContent = `${windChillFactor.toFixed(1)} °C`;

            } else {
                // As condições NÃO sãoatendidas
                windChillDisplay.textContent = "N/A"; // Not Applicable
            }
            
            // 3. Lógica do Rodapé
            
            // Define o ano atual
            const currentYear = new Date().getFullYear();
            const copyrightSpan = document.getElementById('copyright-info');
            // O conteúdo do copyright é definido no HTML, mas o ano pode ser atualizado se necessário:
            copyrightSpan.innerHTML = copyrightSpan.innerHTML.replace('2024', currentYear);

            // const lastModifiedDate = "02/08/2024 22:47:47";
            // document.getElementById('last-modified').textContent = `Last Modification: ${lastModifiedDate}`;
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

