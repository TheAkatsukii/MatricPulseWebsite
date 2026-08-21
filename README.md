# MatricPulse website

Next.js site for Matric Pulse. Static exam JSON is served from `public/` so the Android app can fetch it without a Play Store update:

- https://matricpulse.thatdev.co.za/timetable.json
- https://matricpulse.thatdev.co.za/past_papers_archive.json

## Exam config sync

Workflow: [`.github/workflows/sync-exam-config.yml`](.github/workflows/sync-exam-config.yml)

[MatricPulseScrapper](https://github.com/TheAkatsukii/MatricPulseScrapper) scrapes weekly, uploads a GitHub Actions artifact named `past-papers-config`, then dispatches this workflow with `scraper_run_id`.

This job:

1. Downloads that artifact from the scraper repo
2. Writes `public/past_papers_archive.json`
3. Commits and pushes if the file changed (hosting then deploys)

`public/timetable.json` is seeded from the Android bundled timetable. It is **not** produced by the scraper; update it in this repo when the DBE timetable changes.

### Secret: `CONFIG_SYNC_TOKEN`

Add the same fine-grained PAT used on the scraper as a repository secret named `CONFIG_SYNC_TOKEN`.

Required access:

- **MatricPulseScrapper:** Actions read
- **MatricPulseWebsite:** Contents write, Actions write

You can also run the workflow manually from Actions → *Sync exam config from scraper* and paste a scraper run ID.
