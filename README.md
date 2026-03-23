# Rick and Morty Personāžu Pētnieks

Mūsdienīga viena lapas aplikācija (SPA), kas ļauj apskatīt personāžus no multfilmas **Rick and Morty**.  
Izveidota, izmantojot **React**, **TypeScript**, **Axios**, **React Router** un **Tailwind CSS**.

![Rick and Morty Aplikācijas ekrānšāviņš](https://via.placeholder.com/1200x600/111827/00ff9f?text=Rick+and+Morty+Aplikācija)  
*(Drīz šeit būs reāls ekrānšāviņš – izveido to pats un nomaini saiti)*

## Demo

Tiešsaistes versija:  
👉 https://github.com/NastjaFedina/Rick-and-Morty-app

## Galvenās iespējas

- Pilns personāžu saraksts ar bezgalīgu ielādi (“Ielādēt vēl” poga)
- Meklēšana pēc vārda reāllaikā
- Divi filtri: statuss (Alive / Dead / Unknown) un dzimums (Male / Female / Genderless / Unknown)
- Detalizēta personāža lapa ar pilnu informāciju
- Skaisti ielādes skeleton kartītes
- Kļūdu apstrāde ar pogu “Mēģināt vēlreiz”
- Pilnībā responsīvs dizains (mobilajām ierīcēm un datoram)
- Visa koda tipizācija ar TypeScript
- Tīra feature-based projekta struktūra

## Izmantotās tehnoloģijas

- **React** + **Vite** (ātra izstrāde un HMR)
- **TypeScript** (pilnīga tipu drošība props, API un stāvoklim)
- **Axios** – pieprasījumi publiskajam API
- **React Router v6** – klientu puses navigācija
- **Tailwind CSS** – utilitārais CSS ietvars
- **GitHub Pages** + **GitHub Actions** – automātisks deplojs

## Projekta struktūra
src/
├── components/               # Kopīgi komponenti
│   ├── LoadingSpinner.tsx
│   ├── ErrorMessage.tsx
│   └── ...
├── features/
│   └── characters/           # Galvenā fīča – personāži
│       ├── api.ts            # Visi pieprasījumi API
│       ├── types.ts          # TypeScript interfeisi
│       ├── components/
│       │   ├── CharacterCard.tsx
│       │   ├── FilterBar.tsx
│       │   └── SkeletonCard.tsx
│       └── pages/
│           └── CharactersPage.tsx   # Galvenā saraksta lapa
├── App.tsx                   # Maršrutēšana
└── main.tsx


## Kā palaist lokāli

1. Klonē repo
   ```bash
   git clone https://github.com/NastjaFedina/Rick-and-Morty-app.git
   cd Rick-and-Morty-app

2. Instalē atkarības
```bash
npm install

3. Palaid izstrādes režīmā
```bash
npm run dev
Atver pārlūkā: http://localhost:5173

4. Veido produkcijas būvējumu
```bash
npm run build

## API
Izmantots publisks API:
https://rickandmortyapi.com/api/character
Bez atslēgām, bez stingriem ierobežojumiem.

## Ko varētu uzlabot nākotnē

1. Bezgalīga skrolēšana (infinite scroll) vietā “Ielādēt vēl” pogas
2. Filtrs pēc sugas (species)
3. Tumšā/gaismīgā tēma
4. Filtru saglabāšana URL (query parametri)
5. Kartīšu parādīšanās animācijas
6. Mīļāko personāžu sadaļa (localStorage)
