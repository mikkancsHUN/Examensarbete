# Examensarbete

## Frontend

Första steget för att kunna testa appen efter githubrepot klonat ner ska man stå i "vue-app" filen och installera npm packages i terminalen. Efter det man kör "npm run dev" precis som man gör i React och sen man klickar på länken man fått.

På webbsidan man ska kunna:
- sortera kategorin för kläderna (till ex.: t-shirt, hoodie, caps etc...). man kan ha flera kategorin väljat samtidigt.
- öppna mobil/hamburgermenyn oavsett om det är på mobil eller desktop storlek och navigera till alla möjliga sidor.
- gilla specifika produkter och om man klicker högre upp på "Header" delen på hjärta ikonen eller på mobilmenyn hittar man länk till favoritsidan och där ser man alla sina favorit produkter. Man kan ogilla produkter på alla sidor.
- la produkter till varukorgen när man klickar på produktens knapp "Purchase".
- se enskilda pris för varje produkt, se totala värden för en specific produkt om man köper mer än ett stycken, se totala värden för alla produkter med dess kvantitet som ligger i varukorgen. Man kan också ta borta produkter därifrån.
(När man klickar på "finalize puchasing" då kommer ta bortas alla produkter från varukorgen så det finns ingen riktig betalning... eller nåt fint simulation :( )

Som man ska inte kunna göra (än):
- registrera sig och logga in. det finns ingenting och göra med profiler och användare.
- sökfältet och navbaren under sökfältet har ingen funktionalitet.
- köpa verkligen.

## Backend

För att få upp produkterna på webbsidan ska man svänga till och stå i "planet-saints-api" filen. Först skapar du ett "local.yml" file och skriva in din organisation från serverless framework och din iamRole för lambafunktionerna från din aws:

organisation: mittOrganisationNamn
iamRole: arn:awsMittIamRole/lambdaDynamoDbRole

Efter detta medan man står i "planet-saints-api" filen fortfarande, kör "serverless deploy" i terminalen och produkterna kommer finnas på webbidan.
På api det finns bara ett GET och ett GET{id} endpoints för att få kläderna på sidan, men finns ingen där du kommer använda GET{id} endpoint (än). Annars på Insomnia funkar det också bra om man vill testa.

För att testa endpoints på Insomnia:
- GET all products: https://du_hittar_länken_på_productsgrid_component.com/products
- GET{id} ett specific produkt: https://du_hittar_länken_på_productsgrid_component.com/products/id:n_för_produkten
