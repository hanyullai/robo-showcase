export const runs = [
  {
    "date": "2026-11-19",
    "seed": 911,
    "model": "claude-fable-5",
    "elapsed_seconds": 129.8196297492832,
    "model_calls": 10,
    "actions": 5,
    "control_reached": 3,
    "control_attempts": 3,
    "protocol": "historical-bounded",
    "autonomous_success": true,
    "actor_independent_verification": "passed",
    "actor_stop_ack": true,
    "actor_release": true,
    "tool_errors": [],
    "h1": "off",
    "id": "lift",
    "policies": [
      {
        "path": "assets/policies/lift-1.py.txt",
        "sha256": "3db8e1605be2150af097d69e9fea41b2e2ecc8969cacb29e658166c951c5cc8f",
        "label": "Policy 01"
      }
    ],
    "video": "assets/video/lift.mp4",
    "poster": "assets/images/lift.jpg",
    "video_seconds": 6.65,
    "original_video_sha256": "d68b5032dcce0b26ba64d29aeff09e7edaa3dc301f399ba6ad5c5b8fb004861e",
    "web_video_sha256": "4481ab871803c0835c0f36830bf3f9fff615312e352a6edd70eee46209cf82ac",
    "original_video": "https://github.com/hxx90/coding-agent-harness/blob/codex/robo-hardware-harness/docs/demos/lift/recording.mp4"
  },
  {
    "date": "2026-11-21",
    "seed": 1202,
    "model": "claude-opus-5-5",
    "elapsed_seconds": 91.41707933321595,
    "model_calls": 10,
    "actions": 9,
    "control_reached": 6,
    "control_attempts": 6,
    "protocol": "historical-bounded",
    "autonomous_success": true,
    "actor_independent_verification": "passed",
    "actor_stop_ack": true,
    "actor_release": true,
    "tool_errors": [
      "not_connected before acquiring lease; actor corrected"
    ],
    "h1": "off",
    "id": "stack",
    "policies": [
      {
        "path": "assets/policies/stack-1.py.txt",
        "sha256": "0ce9951402d62c09ace96073ccded36b7b531f672d25c1dc9c1ec760be1be272",
        "label": "Policy 01"
      },
      {
        "path": "assets/policies/stack-2.py.txt",
        "sha256": "5b8a5c845702617c66482ef390db8f4dbb90510cd7c31547f688c65bb7b3fe03",
        "label": "Policy 02"
      }
    ],
    "video": "assets/video/stack.mp4",
    "poster": "assets/images/stack.jpg",
    "video_seconds": 6.8,
    "original_video_sha256": "37fc49eecb6a6b4fc47cef34f1a45dd6f29e92660d32b6d49f932ef74c05e0e5",
    "web_video_sha256": "37da2d20e1f39ae2b99484e41ea540273b47abe58b02dc5ecc177add7304549c",
    "original_video": "https://github.com/hxx90/coding-agent-harness/blob/codex/robo-hardware-harness/docs/demos/stack/recording.mp4"
  },
  {
    "date": "2026-11-21",
    "seed": 1302,
    "model": "claude-opus-5-5",
    "elapsed_seconds": 106.20068979263306,
    "model_calls": 10,
    "actions": 10,
    "control_reached": 7,
    "control_attempts": 7,
    "protocol": "continuous",
    "autonomous_success": true,
    "actor_independent_verification": "passed",
    "actor_stop_ack": true,
    "actor_release": true,
    "tool_errors": [
      "not_connected before acquiring lease; actor corrected",
      "unsafe_policy: ListComp rejected before actions; actor generated a corrected policy"
    ],
    "h1": "off",
    "id": "pickplace",
    "policies": [
      {
        "path": "assets/policies/pickplace-1.py.txt",
        "sha256": "5173c594932be75448eb8c6aaf0874778d47157331f4f3d842c5d04120aa6c7a",
        "label": "Policy 01"
      }
    ],
    "video": "assets/video/pickplace.mp4",
    "poster": "assets/images/pickplace.jpg",
    "video_seconds": 16.65,
    "original_video_sha256": "62a80476d0305bad9173af104998af0e8a531575f5be9cdb2dc2df80677dddb6",
    "web_video_sha256": "b90c1ec3cb419afdd5a358655316587beff46a9893c618ba2a9dfef588fd702c",
    "original_video": "https://github.com/hxx90/coding-agent-harness/blob/codex/robo-hardware-harness/docs/demos/pickplace/recording.mp4"
  },
  {
    "date": "2026-11-26",
    "seed": 2607,
    "model": "claude-opus-5-5",
    "elapsed_seconds": 201.07624173164368,
    "model_calls": 15,
    "actions": 12,
    "control_reached": 10,
    "control_attempts": 10,
    "h1": "h1-v8-v9",
    "protocol": "continuous",
    "autonomous_success": true,
    "actor_independent_verification": "passed",
    "actor_stop_ack": true,
    "actor_release": true,
    "stop_ack_latency_ms": 80.94596862792969,
    "pause_seconds": 5.0373358726501465,
    "stable_cycles": 80,
    "input_tokens": 1131624,
    "output_tokens": 9353,
    "cached_tokens_reported": 0,
    "notes": "Single real-model Stack run with operator interruption. Runtime rejected an unsupported conditional expression and a stale lease; the model corrected both. No task replay or scene reset. All resumed moves reached their targets. The published policy is the newly generated resumed policy.",
    "id": "resume",
    "policies": [
      {
        "path": "assets/policies/resume-1.py.txt",
        "sha256": "e91ec5fa0a7613b1aa1c68ebac6f5d8c48b3c5721adac7dabdb1d462b88cc054",
        "label": "Policy 01"
      }
    ],
    "video": "assets/video/resume.mp4",
    "poster": "assets/images/resume.jpg",
    "video_seconds": 15.3,
    "original_video_sha256": "b6ea2bdc04699c83be49c88cc6e8f327a682d1074f54874fd41f83581c4356c0",
    "web_video_sha256": "e6f58807e1f96d00e18c47beb760d1599b4a4768b225a4de56d7c4537a95ac33",
    "original_video": "evidence/stack-resume-original.mp4"
  }
];
