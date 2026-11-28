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

Videos contain simulation frames and omit time spent waiting for the model. Task wall time is shown separately. The older Lift and Stack runs use historical bounded protocols; PickPlace and recovery use continuous protocols. The five newest records had H1 enabled; the three earlier records did not. The nut run made no H1 helper call. Do not treat these records as a paired comparison.

Only curated recordings, generated policies and result summaries are published. Full model conversations, credentials, machine paths and private runtime logs are not included.

## Interaction

- Eight experiment tabs with keyboard arrow / Home / End navigation.
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

## Square-nut assembly (2026-11-27)

One real autonomous CLI journey at seed 2802 passed native success, square-peg
containment through the nut bore, seating height, release/retreat and 20-cycle
stability. Both internal and external checks passed, followed by model-directed
stop ACK and lease release. 54 requests / 853.1 seconds; 20 of 24 executed target
moves reached. One additional target-move call had invalid parameters and did
not move. All 23 policies and 9 chronological video segments are preserved.

The agent corrected syntax and stale-crop errors, changed grasp orientation
after motion failures, and recovered after a post-release parameter error. The
controller and verification thresholds were not changed. H1 was available but
not called. Two earlier trials were blocked by upstream content_filter before
physical action; this selected success is not a benchmark success rate.

## Assembly workcell collection (2026-11-28)

`assembly/` preserves three fixed real CLI trials, every generated policy and all
recorded simulation frames. All three passed independent task checks and actor
cleanup; 48/48 real target moves reached. The hero now uses industrial display
rendering from recorded state, with the original actor camera available in the
collection. No actor RGB-D or physics was recolored.

Recordings match runtime commit `ea99e4af272f3b3e400b6717c5400585ddd5ea80`. Latest source commit
`6802868bf4bb532f361276864026e5492bf01d02` adds settled initialization, verified in five no-model paired
scenes; no autonomous trials were rerun after that fix. The site labels these
versions separately and makes no long-term 100% success claim. Public assets and
original policy hashes are in `assembly/assets-sha256.json`.
