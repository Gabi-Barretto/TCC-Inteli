---
title: "Pesquisa Inicial"
sidebar_position: 0
sidebar_label: "Pesquisa Inicial"
---

## 🚀 **MVP e Versão Industrial**

## **1. Introdução**

O **monitoramento remoto de áreas agrícolas** desempenha um papel essencial na **gestão eficiente de recursos naturais** e na **otimização da produtividade**. Este projeto visa desenvolver uma solução para a coleta e análise de **dados ambientais do solo e do ar**, utilizando sensores estratégicos e conectividade sem fio para permitir **análises** via **Data Science**.

A solução será desenvolvida em **duas fases**:
- **MVP (Minimum Viable Product):** Utiliza **ESP32** como nó coletor, sensores comerciais de fácil acesso e um **gateway próprio** para transmissão dos dados.
- **Versão Industrial:** Implementa uma **placa eletrônica personalizada**, sensores certificados e redes de comunicação otimizadas.

## **2. Arquitetura do Sistema**

O sistema será composto por **nós sensores**, que coletam os dados ambientais e os transmitem para a nuvem via **LoRaWAN ou 5G**. A escolha da tecnologia influencia a necessidade ou não de um **gateway próprio**.

| **Componente**      | **MVP**                                  | **Versão Industrial**                          |
|---------------------|-----------------------------------------|------------------------------------------------|
| **Nó Coletor**      | ESP32 (com interface RS485 e ADC)       | Placa personalizada com microcontrolador otimizado |
| **Sensores**        | Sensores comerciais                     | Sensores certificados e industriais           |
| **Comunicação**     | LoRaWAN ou 5G                           | LoRaWAN ou 5G                                 |
| **Gateway Próprio** | **Sim (necessário para LoRa no MVP)**   | **Somente se LoRaWAN não estiver disponível na região** |
| **Energia**        | Bateria recarregável                     | Fonte dedicada (solar ou fixa)                |
| **Análise dos Dados** | Data Science na Nuvem                 | Data Science na Nuvem                         |

---

## **3. Seleção de Sensores para Monitoramento Ambiental**
A escolha dos sensores seguiu critérios como **relevância para a agricultura, compatibilidade com comunicação sem fio e adequação para MVP e versão industrial**.

### **Sensores para MVP**  
| **Sensor/Módulo** | **Protocolo** | **Medição** | **Link para Compra** |
|------------------|-------------|-------------|----------------|
| **Sensor de Solo RS485 7 em 1** | Modbus RTU (RS485) | Umidade, Temperatura, Condutividade, pH, NPK | [Ver sensor](https://pt.aliexpress.com/item/1005005697940574.html) |
| **MQ-135** | Analógico | Gases como NH₃ e NOₓ | [Ver sensor](https://produto.mercadolivre.com.br/MLB-2148556196-sensor-mq-135-gas-amnia-oxido-nitrico-para-arduino-rasp-_JM) |
| **DHT22** | Digital (1-Wire) | Temperatura e Umidade do ar | [Ver sensor](https://produto.mercadolivre.com.br/MLB-715330144-dht22-sensor-temperatura-e-umidade-arduinopicarm-resist-_JM) |
| **UVM-30A** | Analógico | Índice UV | [Ver sensor](https://www.saravati.com.br/sensor-de-deteccao-raio-ultravioleta-uvm-30a-uv-3v-5v.html) |
> 💡 **No MVP**, os sensores são **acessíveis e de fácil integração**, enquanto a versão **industrial** utilizará **sensores certificados para maior precisão e confiabilidade**.

---

### **Sensores Industriais**  
| **Sensor/Módulo** | **Protocolo** | **Medição** | **Link para Compra** |
|------------------|-------------|-------------|----------------|
| **Sensor de Solo RS485 7 em 1 (Industrial)** | Modbus RTU (RS485) | Umidade, Temperatura, Condutividade, pH, NPK | [Ver sensor](https://www.usinainfo.com.br/sensor-de-solo/sensor-npk-ph-condutividade-temperatura-e-umidade-do-solo-npkphcth-s-rs485-8611.html) |
| **Ammonia (NH₃) Gas Sensor** | Digital | Amônia (NH₃) | [Ver sensor](https://infrasensing.com/sensors/sensor_gas_nh3.asp?utm_source=chatgpt.com) |
| **Óxidos de Nitrogênio (NOₓ) Gas Sensor** | Digital | NOₓ | [Ver Sensor](https://www.usinainfo.com.br/sensor-de-gas-arduino/sensor-de-qualidade-do-ar-mics-6814-sensor-de-gas-monoxido-de-carbono-dioxido-de-nitrogenio-amonia-metano-e-outros-5112.html) |
| **Sonda de Umidade e Temperatura HTP201** | Modbus RTU (RS485) | Umidade e Temperatura do ar | [Ver sensor](https://sigmasensors.com.br/produtos/sonda-compacta-de-temperatura-e-umidade-com-saidas-analogicas-htp201) |
| **Sensor Industrial de UV** | Digital | Índice UV | [Ver Sensor](https://www.climaeambiente.com.br/prod,idproduto,3723414,pecas-e-acessorios-sensor-de-radiacao-ultravioleta---k6490) |

---

## **4. Comunicação Sem Fio: LoRaWAN e 5G**

A comunicação dos sensores com a nuvem poderá ser feita via **LoRaWAN** ou **5G**, dependendo da cobertura disponível na área de instalação. Como abordagem **prioritária**, adotaremos a **solução menos custosa**, evitando módulos 5G individuais nos ESP32 sempre que possível.

### **4.1. LoRaWAN – Transmissão Direta para a Nuvem (Se Disponível)**
- **Necessidade de Gateway:** ❌ **Não precisa de gateway próprio** se houver cobertura LoRaWAN da TIM ou Vivo.
- **Alcance:** Até **15 km** em área aberta.
- **Consumo de Energia:** **Muito baixo**, ideal para sensores alimentados por bateria.

💡 **Alternativa Industrial:** Contato com **TIM e Vivo** para avaliar a cobertura de **LoRaWAN em áreas agrícolas**, evitando a necessidade de um **gateway próprio** na versão comercial.

---

### **4.2. 5G – Somente se LoRaWAN não estiver Disponível**
Caso **não haja cobertura LoRaWAN**, a **alternativa menos custosa** será a **utilização de um gateway 5G** central, que coletará os dados dos ESP32 via **LoRa** e os enviará à nuvem via 5G.

**Abordagem Preferida:**
- **Os ESP32 NÃO terão módulos 5G individuais**, pois isso geraria altos custos com módulos e chips SIM.
- **Em vez disso, um único Gateway 5G será utilizado**, reduzindo custos operacionais e de hardware.

**Cenários de Comunicação:**
| **Cenário**  | **Método de Envio**  | **Necessidade de Gateway** |
|-------------|------------------|----------------------|
| **Há cobertura LoRaWAN** | ESP32 envia direto via LoRaWAN | ❌ **Não precisa de gateway** |
| **Não há cobertura LoRaWAN, mas há 5G** | ESP32 transmite para um **gateway 5G** via LoRa | ✔️ **Precisa de um gateway 5G** |
| **Não há cobertura LoRaWAN nem 5G** | Gateway pode usar outra conexão (ex.: satélite ou ) | ✔️ **Precisa de gateway com alternativa** |

---

### **4.3. Gateway LoRaWAN Próprio**
Caso **não haja cobertura LoRaWAN pública nem 5G**, a solução será a **implantação de um gateway LoRaWAN próprio**, permitindo que os dispositivos ESP32 comuniquem-se via LoRa e encaminhem os dados à nuvem.

**Abordagem Preferida:**
- **Os ESP32 utilizarão módulos LoRaWAN para se comunicar com um gateway privado.**
- **O gateway será responsável por conectar a rede LoRaWAN à internet via Wi-Fi, Ethernet ou 4G.**

✅ **Essa abordagem garante que o sistema funcione mesmo sem cobertura LoRaWAN pública ou 5G**.

---

## **5. Integração e Transmissão dos Dados**

### **5.1. Integração dos Sensores ao ESP32 (MVP)**
O **ESP32** será responsável por coletar os dados dos sensores e enviá-los via **LoRaWAN** (se houver cobertura) ou para um **gateway próprio** (caso 5G seja utilizado).

📌 **Conexão dos Sensores no MVP**:
- **Sensores RS485 (Modbus RTU)** → Adaptador RS485-TTL → UART do ESP32.
- **Sensores Analógicos** → Conversão ADC → Formatação antes do envio.
- **Sensores Digitais** → Comunicação direta via protocolos I²C ou 1-Wire.

---

## **6. Processamento de Dados e Geração de Alertas**

O **Agricultural Remote Monitoring (F-ARM)** possui uma estrutura de processamento de dados projetada para garantir **coleta eficiente, armazenamento seguro e análise inteligente** das informações capturadas pelos sensores.

Os dados serão enviados **nos horários convencionais pré-definidos**, sem a necessidade de monitoramento em tempo real. O sistema apenas **gerará alertas para variações críticas**, permitindo que os agricultores tomem decisões informadas.

---

### **6.1. Upload e Armazenamento dos Dados na Nuvem**

A comunicação entre os sensores e a AWS dependerá da **infraestrutura de rede disponível** no local da instalação. Consideramos **três cenários distintos**, cada um com um método específico de envio de dados para a nuvem:

---

### **Cenário 1: Cobertura LoRaWAN disponível (Sem Gateway)**
Se houver **cobertura LoRaWAN** disponível na área (via redes públicas como TIM, Vivo ou The Things Network), os ESP32 enviarão **diretamente** os dados para a rede LoRaWAN, que então encaminhará os dados para a AWS.

📌 **Fluxo de transmissão:**
1. **Sensores capturam dados ambientais** (ESP32 + sensores RS485).  
2. **ESP32 transmite via LoRaWAN diretamente para a rede pública**.  
3. **A rede LoRaWAN encaminha os dados para a AWS IoT Core** via protocolo MQTT.  
4. **AWS IoT Core processa e armazena os dados**:  
   - **AWS Lambda:** Processamento inicial.  
   - **AWS RDS (PostgreSQL):** Armazena registros históricos.  
   - **AWS S3:** Armazena logs e backups.  

✅ **Vantagem**: **Elimina a necessidade de um gateway próprio**, reduzindo custos operacionais e de manutenção.  

❌ **Desvantagem**: Depende da **cobertura LoRaWAN da operadora**, que pode ser limitada em algumas regiões rurais.

---

### **Cenário 2: Sem Cobertura LoRaWAN, mas com Cobertura 5G (Com Gateway 5G)**
Caso **não haja cobertura LoRaWAN**, mas **haja cobertura 5G**, os ESP32 se comunicarão **com um gateway próprio** via **LoRa ou Wi-Fi**, e esse **gateway terá um módulo 5G** para enviar os dados à AWS.

📌 **Fluxo de transmissão:**
1. **Sensores capturam dados ambientais** (ESP32 + sensores RS485).  
2. **ESP32 transmite via LoRa para um Gateway 5G** (cobertura local de 1-3 km).  
3. **O Gateway 5G envia os dados diretamente para a AWS via MQTT ou HTTP**.  
4. **AWS IoT Core processa e armazena os dados**:  
   - **AWS Lambda:** Processamento inicial.  
   - **AWS RDS (PostgreSQL):** Armazena registros históricos.  
   - **AWS S3:** Armazena logs e backups.  

✅ **Vantagem**: **Reduz a necessidade de infraestrutura LoRaWAN externa**, pois o gateway próprio concentra a comunicação.  

❌ **Desvantagem**: **Custo adicional para o gateway 5G**, incluindo plano de dados e energia.  

---

### **Cenário 3: Sem Cobertura LoRaWAN e Sem Cobertura 5G (Com Gateway Alternativo)**
Se **não houver cobertura nem de LoRaWAN nem de 5G**, o sistema dependerá de um **gateway próprio** que pode se conectar à nuvem via **Wi-Fi, satélite ou outra rede disponível**.

📌 **Fluxo de transmissão:**
1. **Sensores capturam dados ambientais** (ESP32 + sensores RS485).  
2. **ESP32 transmite via LoRa para um Gateway LoRa** (cobertura local de 1-3 km).  
3. **O Gateway transmite os dados via Wi-Fi, Ethernet ou satélite para a AWS**.  
4. **AWS IoT Core processa e armazena os dados**:  
   - **AWS Lambda:** Processamento inicial.  
   - **AWS RDS (PostgreSQL):** Armazena registros históricos.  
   - **AWS S3:** Armazena logs e backups.  

✅ **Vantagem**: Pode funcionar em **áreas remotas sem rede celular**, desde que haja alguma alternativa de conectividade.  

❌ **Desvantagem**: **Custo operacional mais alto**, pois pode ser necessário um link de satélite ou outra infraestrutura alternativa.  

---

### **Resumo dos Cenários de Comunicação**
| **Cenário** | **Como os ESP32 Enviam os Dados?** | **O Gateway é Necessário?** | **Como os Dados Chegam à AWS?** |
|------------|-----------------------------------|-----------------------------|--------------------------------|
| **1. Com Cobertura LoRaWAN** | ESP32 → Rede LoRaWAN Pública | ❌ Não precisa | Via MQTT da rede LoRaWAN |
| **2. Sem LoRaWAN, mas com 5G** | ESP32 → Gateway 5G → AWS | ✔️ Sim, gateway com 5G | Gateway envia via MQTT/HTTP |
| **3. Sem LoRaWAN e Sem 5G** | ESP32 → Gateway Alternativo → AWS | ✔️ Sim, gateway com Wi-Fi, satélite ou outra rede | Gateway envia via MQTT/HTTP |

✅ **A abordagem preferida será sempre a mais econômica, priorizando a eliminação de gateways próprios sempre que houver infraestrutura LoRaWAN disponível.**

---

### **6.2. Geração de Alertas**
Os alertas serão gerados **nos horários convencionais de leitura**, com base nas condições detectadas pelos sensores. Exemplos:

- **Umidade do Solo Baixa:** “⚠️ Atenção: Solo com umidade abaixo do recomendado para a cultura.”  
- **Temperatura Acima do Normal:** “⚠️ Alerta de temperatura elevada – risco de estresse térmico nas plantas.”  
- **Índice UV Elevado:** “⚠️ Índice UV acima do limite – risco aumentado para a lavoura.”  

📌 **O sistema NÃO funcionará em tempo real**, apenas **emitirá alertas nos horários convencionais de leitura**.

---

## **7. Conclusão e observações**
1️⃣ **MVP:** Implementação do primeiro protótipo será com **ESP32, sensores comerciais e um gateway próprio LoRa**.  
2️⃣ **Versão Industrial:** Conta com a otimização de hardware e sensores certificados + infraestrutura do local (5G e LoraWAN).  
3️⃣ **Cobertura LoRaWAN e 5G:** Contato com **TIM e Vivo** para avaliar a viabilidade da transmissão direta, eliminando a necessidade de gateway próprio. 