# Nodics Agora Telco Frontend Contract

`nodics.agora.telco` is an independent Telco storefront app. It owns only the
executable React experience for the Telco domain.

## AI tool entry path

Read this file, the README, and the nearest source/test contract before changing
files. The renderer contract required by this reusable storefront template lives
inside this app so the repository remains self-contained.

## Change rules

- Telco-specific UX belongs in this repository.
- Template renderer contracts required at runtime belong in this repository.
- Backend business logic belongs in `nodics.ai`.
- Telco reference data belongs in the `agora.telco` Kickoff module.
- Do not add Apparel or Electronics renderer files to this app.
- Do not commit generated output, media caches, logs, database files, or local
  runtime artifacts.

Frontend startup is independent of backend health. Keep unavailable/retry UI and
frontend tests in this application. Backend API acceptance must never start or
test this frontend. Container deployment is owned by [docker/README.md](docker/README.md).
