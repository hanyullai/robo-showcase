# ROBO — Language in. Motion out.

A static, bilingual showcase of Hanyu Lai's Robo embodied-agent project.

The site presents **selected real autonomous CLI simulation runs**, original model-generated policy files, and independently checked task results. It does not claim an aggregate success rate, official benchmark standing or physical robot validation.

## Preview

Serve this directory with any static HTTP server, for example:

```sh
npx --yes http-server . -p 4173 -c-1
```

Open `http://localhost:4173`. There is no build step, runtime dependency, analytics, API key or model call.

## Publish

GitHub Pages: deploy the `main` branch, repository root. `.nojekyll` ensures assets are served as-is. All local paths are relative so project Pages works without rewriting.

## Evidence

- `evidence/runs.json`: curated run metadata, original video hashes and policy hashes.
- `assets/policies/`: original model output; not standalone Python scripts.
- `assets/video/`: H.264 browser-compatible transcodes at original playback rate.
- `evidence/stack-resume-original.mp4`: original latest recovery recording.
- Earlier original recordings and broader project documentation are linked to the source repository.

Videos contain simulation frames and omit time spent waiting for the model. Task wall time is shown separately. The older Lift and Stack runs use historical bounded protocols; PickPlace and recovery use continuous protocols. The latest record used H1; the three earlier records did not. Do not treat these records as a paired comparison.

Only curated recordings, generated policies and result summaries are published. Full model conversations, credentials, machine paths and private runtime logs are not included.

## Interaction

- Four experiment tabs with keyboard arrow / Home / End navigation.
- Original policy selector, download and copy.
- English / Chinese interface.
- User-controlled video playback and reduced-motion support.
- Evidence links and reproducibility information.

Main project: https://github.com/hxx90/coding-agent-harness/tree/codex/robo-hardware-harness
