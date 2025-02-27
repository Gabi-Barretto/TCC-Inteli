---
sidebar_position: 0
---

# F-ARM

## Agricultural Remote Monitoring

O Agricultural Remote Monitoring (F-ARM) visa o monitoramento remoto da qualidade ambiental em fazendas, com foco na análise do solo e do ar. A solução permite a coleta e transmissão de dados ambientais em tempo real para um aplicativo móvel intuitivo. Sensores serão conectados a um ESP32 com módulos LoRa, que transmitirão os dados para um ESP32 coletor, responsável pelo envio via LoRaWAN para um gateway central. O gateway transmitirá os dados para a nuvem via MQTT (AWS IoT Core), possibilitando que o aplicativo móvel exiba métricas em tempo real, fornecendo informações essenciais para otimizar a produtividade agrícola e gerar alertas preventivos sobre variações ambientais.

Além da coleta e exibição de métricas ambientais, o projeto incluirá uma etapa de Data Science, onde serão aplicadas técnicas de regressão linear para identificar relações entre o Índice de Vegetação por Diferença Normalizada (NDVI) — obtido através do portal Embrapa SatVeg — e os dados coletados pelos sensores. Essa análise permitirá correlacionar variáveis ambientais com a produtividade agrícola, fornecendo insights inteligentes e intuitivos que ajudarão na tomada de decisão estratégica e no planejamento agrícola sustentável.