# Assembly workcell — 2026-11-28

Three fixed known scenes (2811/2812/2813), each run once. All passed internal and
external assemble_nut checks, model-requested stop ACK and lease release.
Real target moves reached: 17/17, 17/17, 14/14. All failed policies and preview
reports are preserved in data.json and the source selector.

Videos contain every recorded simulation frame and omit model waiting. The
industrial view changes only presentation; original actor-view videos are linked.
29 valid preview returns included 14 paths that did not reach; one additional
preview request failed parameter validation. Virtual planning totaled about 36s.
Task wall times: 1133.27s, 325.33s, 1690.43s; requests: 34, 21, 27. Tokens are
provider-reported input/output/cache separately in data.json, not a cost estimate.

Runtime files match [ea99e4a](https://github.com/hxx90/coding-agent-harness/commit/ea99e4af272f3b3e400b6717c5400585ddd5ea80).
No private transcripts, API configuration or machine paths are published.
Policy files retain original bytes; see assets-sha256.json for asset hashes.

The earlier same-controller known-scene batch completed 1/3; this batch completed
3/3. This is a small engineering check on previously diagnosed scenes, not a
population success-rate claim. Model wait/filter conditions, preview availability,
instructions and compute differ, so no causal statistical claim is made.

## Latest initialization repair

[6802868](https://github.com/hxx90/coding-agent-harness/commit/6802868bf4bb532f361276864026e5492bf01d02)
settles the native floating reset before first RGB-D/Viewer/recording.
Five no-model paired scenes changed approximately 60mm initial drop to less than
0.002mm in the simulated state measurement. Setup used 20 virtual control cycles
(one simulated second), counted separately from the actor budget. 203 hardware
regressions and 122 agent-loop checks passed during release preparation.
**No complete autonomous task trial was rerun after this initialization repair.**
The three videos above must not be labeled as tests of that later repair.
