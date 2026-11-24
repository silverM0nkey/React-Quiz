# React Quiz

Aplicación de preguntas tipo test creada con React, TypeScript, Vite, React Router y Emotion.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Instalación y ejecución

```bash
npm install
npm run dev
```

## Compilación

```bash
npm run build
```

## Organización

```text
src/
├── App.tsx
├── main.tsx
├── styles.tsx
├── types.ts
├── components/
│   ├── Welcome.tsx
│   ├── Quiz.tsx
│   └── Question.tsx
├── data/
│   ├── questions.json
│   └── questions-api.json
├── hooks/
│   └── useQuestions.ts
└── services/
    └── mockQuestionsApi.ts
```

## `useQuestions`

El hook devuelve `data`, `loading`, `error` y `refetch`. El servicio simula una petición asíncrona. Acepta la opción `simulateError` para probar un fallo en la petición.
