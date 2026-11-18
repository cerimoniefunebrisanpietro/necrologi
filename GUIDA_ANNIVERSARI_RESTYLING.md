# Aggiornamento San Pietro — Anniversari e restyling elegante

## Cosa cambia
- Nuova pagina `/anniversari/`, con annunci commemorativi e ricorrenze annuali autorizzate.
- Nuovo gruppo **Anniversari** nel pannello `/admin/`.
- Richieste degli anniversari via modulo Netlify, senza pubblicazione automatica.
- Nuovo riquadro **Oggi nel ricordo** nella homepage: mostra gli anniversari del giorno secondo l'ora italiana anche senza nuova compilazione quotidiana del sito.
- Menu Necrologi a tendina con accesso a Necrologi, Anniversari e Archivio.
- Sfondo avorio caldo con verde bosco e oro satinato, senza sostituire le fotografie e il logo esistenti.
- Informativa privacy estesa al nuovo modulo.

## Come creare un anniversario manualmente
1. Accedi a `https://cerimoniefunebrisanpietro.it/admin/`.
2. Scegli **Anniversari** > **Nuovo anniversario**.
3. Inserisci nome, date, dedica, eventuale foto e Santa Messa in suffragio.
4. Dopo aver raccolto il consenso, attiva **Autorizzazione alla pubblicazione acquisita dalla famiglia**.
5. Solo quando è pronto, attiva **Pubblicato (approvazione finale)** e salva. Entrambi i campi devono essere attivi per pubblicare.
6. L'annuncio sarà visibile in `/anniversari/` e avrà un link individuale.

## Come abilitare un ricordo annuale da un necrologio
1. Vai su **Necrologi** nel pannello e apri un necrologio esistente.
2. Raccogli un consenso SPECIFICO della famiglia per mostrare annualmente il ricordo.
3. Attiva sia **Autorizzazione specifica della famiglia per le ricorrenze annuali** sia **Mostra anniversario automaticamente ogni anno**.
4. Salva. Ogni anno, nel giorno e mese del decesso, il ricordo comparirà nel riquadro `Oggi nel ricordo`, calcolato nel browser in fuso Europe/Rome.
5. Un necrologio esistente non viene incluso automaticamente: nessuna ricorrenza viene attivata senza consenso.

## Richieste dalle famiglie
Il modulo **Richiedi la pubblicazione di un anniversario** invia la richiesta a Netlify Forms (form: `richiesta-anniversario`). Verifica nella dashboard Netlify le richieste ricevute e le eventuali notifiche, poi raccogli i consensi prima della pubblicazione. L'invio non pubblica dati del defunto.

## Importante
- I necrologi e le condoglianze preesistenti non vengono cancellati o modificati.
- Le ricorrenze annuali non sono notifiche via email: appaiono sul sito nel giorno della ricorrenza.
- Un anniversario manuale è un annuncio per una data specifica; per pubblicare un nuovo anniversario manuale l'anno seguente si crea un nuovo annuncio.
- La pubblicazione sul sito effettivo avverrà solo dopo integrazione del ramo e corretta compilazione Netlify.
