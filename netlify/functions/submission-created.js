// netlify/functions/submission-created.js

// Usiamo 'import' invece di 'require'
import emailjs from '@emailjs/browser';

// Definiamo la funzione handler in modo che ESLint la capisca
export const handler = async (event) => {
    // Estrai i dati del form dall'evento
    const { payload } = JSON.parse(event.body);
    const formName = payload.form_name;
    const data = payload.data;

    // Le tue chiavi EmailJS
    const SERVICE_ID = 'service_t3wk81k';
    const PUBLIC_KEY = 'JPwGZWZsdDZcLIVDc';

    let templateId = '';
    let templateParams = {};

    // Scegli il template e i parametri in base al nome del form
    if (formName === 'preventivo') {
        templateId = 'template_g7fn9sf';
        templateParams = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
        };
    } else if (formName === 'candidatura') {
        // Per ora non facciamo nulla con le candidature, ma potremmo in futuro
        console.log('Submission per candidatura ricevuta, nessuna email da inviare tramite EmailJS.');
        return {
            statusCode: 200,
            body: 'Submission per candidatura gestita da Netlify.'
        };
    } else {
        // Se il nome del form non è riconosciuto
        return {
            statusCode: 400,
            body: 'Nome del form non riconosciuto.'
        };
    }

    try {
        // Inizializza EmailJS (necessario in ambiente server)
        emailjs.init({ publicKey: PUBLIC_KEY });

        // Invia l'email
        await emailjs.send(SERVICE_ID, templateId, templateParams);

        console.log('Email inviata con successo!');
        return {
            statusCode: 200,
            body: 'Notifica email inviata con successo.'
        };

    } catch (error) {
        console.error("Errore nell'invio dell'email:", error);
        return {
            statusCode: 500,
            body: `Errore durante l'invio dell'email: ${error}`
        };
    }
};