### 📡 **Enviando os Dados do Servidor para a Nuvem**  

Agora que decidimos **usar a nuvem**, precisamos definir **como os dados do Gateway serão enviados para um servidor na nuvem** e **armazenados corretamente**.

---

## **1️⃣ Estratégia de Comunicação**
📌 O **servidor na nuvem** receberá os dados do **Gateway LoRaWAN** e os armazenará em um **banco de dados na nuvem**, permitindo acesso remoto via aplicativo ou dashboard.

🎯 **Fluxo de Comunicação**:
1. **Sensores** → enviam dados via **LoRa P2P** para o **ESP32 (nó coletor)**.  
2. **ESP32** → retransmite os dados via **LoRaWAN** para o **Gateway**.  
3. **Gateway LoRaWAN** → envia os dados para a **nuvem** via **MQTT ou HTTP (API REST)**.  
4. **Servidor na Nuvem** → processa os dados e os **salva no banco de dados**.  
5. **Aplicativo/Dashboard** → acessa os dados do servidor para exibição e alertas.  

---

## **2️⃣ Como Enviar os Dados para a Nuvem?**  

Temos **duas principais opções** para conectar o Gateway LoRaWAN à nuvem:

### **🔹 Opção 1: MQTT Broker na Nuvem (Mais Otimizado para IoT)**
✅ **Usa MQTT (Message Queuing Telemetry Transport), um protocolo leve e eficiente para IoT**.  
✅ **Comunicação contínua e de baixa latência**.  
✅ **Escalável e compatível com AWS IoT Core, Mosquitto, EMQX, etc.**  

📌 **Exemplo de Fluxo com MQTT na Nuvem**:
- O **Gateway LoRaWAN** publica mensagens no **AWS IoT Core** via **MQTT**.  
- O **Servidor na Nuvem** assina o tópico MQTT e processa os dados.  
- O **Servidor armazena os dados no banco de dados**.  
- O **Dashboard e Aplicativo** acessam os dados processados via **API REST**.  

💡 **Melhor escolha se o projeto precisa de comunicação contínua e em tempo real!** 🚀  

---

### **🔹 Opção 2: API REST no Servidor (Mais Flexível para Outras Integrações)**
✅ O **Gateway LoRaWAN** envia os dados para uma **API REST** rodando no **servidor na nuvem**.  
✅ A API processa os dados e os armazena no banco de dados.  
✅ O aplicativo e dashboard acessam os dados via **requisições HTTP (REST API)**.  

📌 **Exemplo de Fluxo com API REST**:
- O **Gateway LoRaWAN** envia dados via **HTTP POST** para a API do Servidor.  
- A **API na nuvem (FastAPI, Flask, Node.js)** recebe os dados e os salva no **banco de dados na nuvem**.  
- O **Dashboard e Aplicativo** fazem requisições **HTTP GET** para buscar os dados.  

💡 **Melhor escolha se o projeto precisar armazenar e consultar dados, mas não for 100% tempo real.**  

---

## **3️⃣ Onde Hospedar o Servidor na Nuvem?**
📌 Dependendo do orçamento e da necessidade de escalabilidade, temos as seguintes opções:

| Plataforma | Vantagens | Observações |
|------------|-----------|-------------|
| **AWS IoT Core + DynamoDB** | Alta escalabilidade, integração direta com MQTT | Pode ter custos elevados |
| **Google Cloud IoT + Firestore** | Fácil integração com apps | Menos customizável |
| **Mosquitto MQTT em AWS EC2** | MQTT próprio, mais barato | Requer configuração manual |
| **FastAPI/Flask em AWS EC2 + PostgreSQL** | Flexível, barato | Necessita mais gerenciamento |
| **Firebase Realtime Database** | Fácil de usar, integração rápida | Pode ser caro se muitos dispositivos enviarem dados |

📌 **Sugestão inicial:**  
- **Se precisar de um MQTT Broker confiável** → **AWS IoT Core**.  
- **Se preferir algo mais controlável e barato** → **FastAPI + PostgreSQL em AWS EC2**.  

---

## **4️⃣ Como o Gateway LoRaWAN Envia os Dados?**
Dependendo da escolha entre **MQTT ou API REST**, o código do **Gateway LoRaWAN** muda.

### **🔹 Código para Enviar Dados via MQTT (AWS IoT Core)**  
📌 **Exemplo de código para enviar dados do Gateway LoRaWAN para a AWS via MQTT:**
```python
import paho.mqtt.client as mqtt
import json

BROKER = "your-aws-iot-endpoint.amazonaws.com"
PORT = 8883
TOPIC = "plantacao/dados"

def on_connect(client, userdata, flags, rc):
    print("Conectado ao MQTT Broker com código:", rc)
    client.subscribe(TOPIC)

def on_message(client, userdata, msg):
    print(f"Recebido: {msg.topic} -> {msg.payload.decode()}")

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.tls_set("caminho_para_certificado.pem")  # Definir certificado TLS se necessário
client.connect(BROKER, PORT, 60)

dados = {
    "sensor_id": "001",
    "temperatura": 26.5,
    "umidade": 78.3
}

client.publish(TOPIC, json.dumps(dados))
client.loop_forever()
```
📌 **Esse código envia os dados via MQTT para a AWS IoT Core.**  

---

### **🔹 Código para Enviar Dados via API REST (Flask/FastAPI)**
📌 **Exemplo de código para enviar dados do Gateway LoRaWAN via HTTP POST para uma API na nuvem:**
```python
import requests
import json

URL = "https://seu-servidor.com/api/dados"

dados = {
    "sensor_id": "001",
    "temperatura": 26.5,
    "umidade": 78.3
}

headers = {"Content-Type": "application/json"}
resposta = requests.post(URL, data=json.dumps(dados), headers=headers)

print(f"Resposta do servidor: {resposta.status_code} - {resposta.text}")
```
📌 **Esse código envia os dados para uma API hospedada na nuvem.**  

---

## **📌 Próximos Passos**
1️⃣ **Escolher entre MQTT (tempo real) ou API REST (mais flexível).**  
2️⃣ **Configurar um servidor na nuvem (AWS, Google Cloud, etc.).**  
3️⃣ **Testar envio do Gateway LoRaWAN para a nuvem.**  
4️⃣ **Configurar o banco de dados para armazenar os dados recebidos.**  

🚀 **Agora podemos aprofundar a escolha da plataforma de nuvem e banco de dados! Qual opção prefere?**