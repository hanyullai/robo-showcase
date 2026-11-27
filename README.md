# ROBO — Language in. Motion out.

A static, bilingual showcase of the Robo embodied-agent project.

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

Videos contain simulation frames and omit time spent waiting for the model. Task wall time is shown separately. The older Lift and Stack runs use historical bounded protocols; PickPlace and recovery use continuous protocols. The four newest records used H1; the three earlier records did not. Do not treat these records as a paired comparison.

Only curated recordings, generated policies and result summaries are published. Full model conversations, credentials, machine paths and private runtime logs are not included.

## Interaction

- Seven experiment tabs with keyboard arrow / Home / End navigation.
- Original policy selector, download and copy.
- English / Chinese interface.
- User-controlled video playback and reduced-motion support.
- Evidence links and reproducibility information.

Main project: https://github.com/hxx90/coding-agent-harness/tree/codex/robo-hardware-harness

## Advanced challenge previews

Desk sorting with revised instructions now links to a real verified recording. Object-displacement recovery and tower rebuilding remain proposed, unverified scenarios, shown as schematics.

## Four-object ordered sorting (2026-11-27)

The latest selected real CLI run completed can, milk, bread and cereal in that
order, passed independent checks and model-directed stop/lease release. It took
27 model requests and 417.4 seconds, with 3 motion failures recovered by the model.
All 10 original policies are included. The 96.55-second browser video joins every
recording segment chronologically, including failed actions, and excludes model
waiting. H1 was enabled. Full sorting is now verified for this one scene; mid-task
instruction changes are now verified in the additional run below.

## Two new selected journeys (2026-11-27)

| Demo | Verified task | Complete model-directed cleanup | Wall time | Requests | Moves reached |
| --- | --- | --- | --- | --- | --- |
| Big Item First | 4/4: cereal → bread → milk → can | No: final content_filter; harness fallback stop ACK and release passed | 381.0 s | 22 | 26/28 |
| Change of Plan | 4/4: can → cereal → bread → milk | Yes | 414.7 s | 29, including one operator interruption | 24/26 |

Both ran once, with the same seed 2701, Opus 5.5, H1 and controller. The first
record includes recovery after the milk carton tipped over. In the second, the
operator paused after can verification, held for 5.02 seconds without new
motion, and changed the remaining priority. The original can completion cycle
was preserved; no scene reset or winning policy was injected.

Each includes 10 unedited generated policies and every simulation recording
segment, including failed motions. Videos omit model waiting and stationary
periods with no new simulation frames. The five-second hold is validated by
runtime records; its wall-clock timeline is in `evidence/runs.json`.

Task/order success, control receipts and model-versus-fallback cleanup are
reported separately. Source file hashes identify the locally modified candidate.
These two selected demonstrations are not an aggregate benchmark or comparison.
