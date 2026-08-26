# Nodics Agora Telco Frontend Contract

`nodics.agora.telco` is an independent Telco storefront app. It owns only the
executable React experience for the Telco domain.

## AI tool entry path

Read this file, the README, and the nearest source/test contract before changing
files. Treat `domain.commerce.ui` as the shared renderer contract dependency;
do not copy shared renderer infrastructure back into this app.

## Change rules

- Telco-specific UX belongs in this repository.
- Shared renderer contracts belong in `domain.commerce.ui`.
- Backend business logic belongs in `nodics.ai`.
- Telco reference data belongs in the `agora.telco` Kickoff module.
- Do not add Apparel or Electronics renderer files to this app.
- Do not commit generated output, media caches, logs, database files, or local
  runtime artifacts.
