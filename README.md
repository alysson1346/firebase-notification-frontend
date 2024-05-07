# Firebase Notification Frontend

Este é um projeto simples desenvolvido em Next.js com o objetivo de configurar um service worker para registrar tokens de dispositivo e enviar notificações push usando o Firebase Cloud Messaging (FCM) da Google quando o navegador estiver fechado.

## Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- Node.js
- npm (Node Package Manager)

# Service Worker e Registro de Token
Quando o botão é clickado, o service worker é registrado. O service worker é responsável por interceptar eventos de notificação e gerenciar a exibição das notificações push.

Para realizar o envio das notificações quando o browser estiver fechado por favor acesse este link: https://github.com/alysson1346/firebase-notification-backend
