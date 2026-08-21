# MatricPulse website

Next.js site for Matric Pulse. Static exam JSON is served from `public/` so the Android app can fetch it without a Play Store update:

- https://matricpulse.thatdev.co.za/timetable.json
- https://matricpulse.thatdev.co.za/past_papers_archive.json

## Exam config sync

Workflow: [`.github/workflows/sync-exam-config.yml`](.github/workflows/sync-exam-config.yml)

[MatricPulseScrapper](https://github.com/TheAkatsukii/MatricPulseScrapper) uploads a GitHub Actions artifact, then dispatches this workflow with `scraper_run_id` and `artifact_name`:

| `artifact_name` | Public file |
|---|---|
| `past-papers-config` (default) | `public/past_papers_archive.json` |
| `timetable-config` | `public/timetable.json` |

The Android app fetches those URLs on launch.

### Secret: `CONFIG_SYNC_TOKEN`

Add the same fine-grained PAT used on the scraper as a repository secret named `CONFIG_SYNC_TOKEN`.

Required access:

- **MatricPulseScrapper:** Actions read
- **MatricPulseWebsite:** Contents write, Actions write

You can also run the workflow manually from Actions → *Sync exam config from scraper* and paste a scraper run ID.
