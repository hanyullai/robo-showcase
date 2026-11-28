# Dual-specification assembly — 2026-11-29

One prespecified seed (2911), one real natural-language CLI trial, no replacement
run. The agent visually identified two parts, chose round first, then square, and
completed both. All eight independent checks passed inside the policy and through
the external verifier, followed by actor-requested stop ACK and lease release.

- Model: claude-opus-5-5, temperature 1, thinking off; existing output setting 128000.
- H1 h1-v8-v9 unchanged, two actual helper calls. Legacy controller; continuous mode.
- 530.69 seconds task wall time; 31 model requests; 16 original policies.
- 16/16 real target moves reached; 21 physical commands started.
- 3/5 virtual path previews passed. Preview excludes movable-object contact/payload.
- Round passed first at 389.66s while square was incomplete; both passed internally
  at 497.61s, externally at 502.99s, and again during cleanup at 530.47s.
- 782 recorded frames, 39.1 seconds playback. Industrial rendering changes only
  display materials/view; original actor camera video remains available.

## Failures and limits

The first three policy drafts were rejected for restricted-Python syntax. Stale
image sequences later caused crop failures and safety stop/lease revocation. The
agent reacquired the lease, rearmed, and refreshed observations before each crop.
Every draft, error, failed preview and partial inspection is retained in data.json
and the page. No winning policy, hidden object state or manual policy correction
was supplied; there was no scene reset.

Control completion and task success are separate. The pair verifier checks each
assigned peg, full bore containment/seating, release/retreat and stability; earlier
completion is revoked if disturbed. Private simulation state is used only by the
independent scorer. This one scene is not a success-rate estimate or validation of
physical factory reliability.

The TUI needed a second exit signal after task completion and hardware cleanup;
total process supervision was 563.48s. This did not intervene in assembly. Project
configuration was restored byte-for-byte and no trial processes remained.

## Provenance and validation

Base source commit: 6802868bf4bb532f361276864026e5492bf01d02 plus the local
uncommitted dual-nut extension at recording time. Do not identify the base commit
alone as the tested source. Exact runtime file hashes: candidate-files.json.
This new dual scene includes settled initialization. The older assembly/ collection
retains its own earlier runtime and provenance; it is not relabeled by this release.

Related hardware regression: 202 passed; final focused check: 17 passed (overlapping,
not additive); scoped Pyright and Ruff passed. Agent-loop suite: 469 passed, four
reasoning-provider mock failures reproduced on pristine base HEAD, unrelated to the
simulator extension. Completion/truncation protection was preserved.

Provider reports 2,176,593 input tokens, 27,768 output tokens and zero cached tokens;
no usage-unknown requests. These are usage figures, not a price estimate.

Original generated policy bytes and public asset SHA-256 values are listed in
assets-sha256.json. The original.mp4 download is the concatenated original recording;
replay.mp4 is its browser transcode; industrial.mp4 re-renders the same recorded states.
Only curated evidence is published: no credentials, private transcripts, runtime
configuration or machine paths.
