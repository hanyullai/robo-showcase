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
  },
  {
    "id": "sorting",
    "date": "2026-11-27",
    "seed": 2701,
    "model": "claude-opus-5-5",
    "elapsed_seconds": 417.4138376712799,
    "model_calls": 27,
    "actions": 42,
    "camera_queries": 8,
    "control_reached": 29,
    "control_attempts": 32,
    "protocol": "continuous",
    "autonomous_success": true,
    "actor_independent_verification": "passed",
    "actor_stop_ack": true,
    "actor_release": true,
    "h1": "h1-v8-v9",
    "order": [
      "can",
      "milk",
      "bread",
      "cereal"
    ],
    "input_tokens": 2368401,
    "output_tokens": 19537,
    "cached_tokens_reported": 0,
    "policies": [
      {
        "path": "assets/policies/sorting-01.py.txt",
        "sha256": "f28b8bfdd8fc6e4229626ccb87c8f6e99a65f26e0fd3e34c9e62cf6d81d364aa",
        "label": "Policy 01 · rejected"
      },
      {
        "path": "assets/policies/sorting-02.py.txt",
        "sha256": "48a5e759923bd8e1f76fb3cda836bf14c382cdc3716a4d6f41bfdcd540e56ae7",
        "label": "Policy 02"
      },
      {
        "path": "assets/policies/sorting-03.py.txt",
        "sha256": "cf150153cd7d869346c645a44c0bc67f5529909431514827feb1ef9677ae7c2b",
        "label": "Policy 03"
      },
      {
        "path": "assets/policies/sorting-04.py.txt",
        "sha256": "03fc5314f42e2c52db587e7e06ff62da4732535f389b8ab49612de9243caaa46",
        "label": "Policy 04"
      },
      {
        "path": "assets/policies/sorting-05.py.txt",
        "sha256": "91adf06cbb7cbb26631a8d3f1cac5d1880f84cb20422483914222f3b0eb23870",
        "label": "Policy 05"
      },
      {
        "path": "assets/policies/sorting-06.py.txt",
        "sha256": "ea30c11b3756d29aea3eac20a1a86c2350ed53820777d8183362aacc6d98385a",
        "label": "Policy 06"
      },
      {
        "path": "assets/policies/sorting-07.py.txt",
        "sha256": "1e629cd56df64c04c47e5ca8403f493da2aff36c9a69ebf033362db39243d5bd",
        "label": "Policy 07"
      },
      {
        "path": "assets/policies/sorting-08.py.txt",
        "sha256": "c43f2279bbf47c3f34e4a28f923729ea0d189a3df02bb37578e209b0d17bcc42",
        "label": "Policy 08"
      },
      {
        "path": "assets/policies/sorting-09.py.txt",
        "sha256": "bcf82db2d7d6fee1d01ebac54403e2f5c5ed2d4df7a892757c7e22472f154c20",
        "label": "Policy 09"
      },
      {
        "path": "assets/policies/sorting-10.py.txt",
        "sha256": "aeb3c85d8e5502f0b2d9c4d8fe42d22d5fcca0a859c1318a912d5b5c5d136468",
        "label": "Policy 10"
      }
    ],
    "video": "assets/video/sorting.mp4",
    "poster": "assets/images/sorting.jpg",
    "video_seconds": 96.55,
    "original_video_sha256": "66fdea270a40c521c7b680d4abf21c52f734abf62e97ae05d10387803c5359b6",
    "web_video_sha256": "c7bb4f1428ab149ca6b170fdc7aa2ca8ab2626a2ea8be497eb824dbdcb53a040",
    "original_video": "assets/video/sorting.mp4",
    "task": "evidence/sorting-task.txt",
    "notes": "Selected autonomous run. Includes recovered motion failures. All generated policies retained, including rejected ones. Video joins original recording segments chronologically without cutting failed actions; omits model waiting. Not an aggregate success rate. Source included local modifications.",
    "checks": [
      {
        "name": "milk_released_and_settled",
        "status": "passed",
        "observed": true,
        "expected": "Native assigned bin, not grasped, retreated, <=2mm/2deg drift over 20 cycles"
      },
      {
        "name": "bread_released_and_settled",
        "status": "passed",
        "observed": true,
        "expected": "Native assigned bin, not grasped, retreated, <=2mm/2deg drift over 20 cycles"
      },
      {
        "name": "cereal_released_and_settled",
        "status": "passed",
        "observed": true,
        "expected": "Native assigned bin, not grasped, retreated, <=2mm/2deg drift over 20 cycles"
      },
      {
        "name": "can_released_and_settled",
        "status": "passed",
        "observed": true,
        "expected": "Native assigned bin, not grasped, retreated, <=2mm/2deg drift over 20 cycles"
      },
      {
        "name": "placement_order",
        "status": "passed",
        "observed": {
          "objects": [
            "can",
            "milk",
            "bread",
            "cereal"
          ],
          "first_stable_cycles": {
            "can": 510,
            "milk": 963,
            "bread": 1525,
            "cereal": 1857
          }
        },
        "expected": "can, milk, bread, cereal"
      }
    ],
    "source_hashes": {
      "vibe/hardware_sim/adapter.py": "b006da28a8beee0dcbfc0623be241595a14b0626d39a0a7c160771327add50ea",
      "vibe/hardware_sim/models.py": "676a60cd183e4eaef663a578b85c33d891dc13a39546e040583dce589dcd9ea5",
      "vibe/hardware_sim/_target_motion.py": "0abd59e7fec40e75c51d0b0c1bad400e1c4018693af7f7c010cfef7432163d8b",
      "vibe/hardware_sim/_pose_control.py": "526f3e6ff689b0d20a46cabe211d9700261ff32fd93f92eb7c84a49622604ff3",
      "vibe/hardware_sim/_pickplace_all.py": "920a587c3c2c97184577b5286b4e8193608e5787ad292c4a143a2fa310eacda8",
      "vibe/core/skills/builtins/vibe.py": "f8ba8c74ba625c3be19762a7a967c952af3734f15776667bb1068addc09cadaf",
      "tests/hardware_sim/test_target_pose.py": "ecf04d6fe3f3cc083d737915b4a0a64235883df1b482309983c3ebbde7159df8",
      "vibe/core/hardware/runtime.py": "3db5ea97300f8f922bfad86766247b69624c7ae05409e1d3d370cf37ecdd4226",
      "tests/core/hardware/test_runtime.py": "cce66778532597733c17ad2d881e0fe882a3f8f94b882449030df37f0f8ac611",
      "tests/hardware_sim/test_pickplace_all.py": "736360713e9e9cf08fd7319e522f4c3566c8732645a693fdbf0f21456ad45b1f"
    },
    "presentation": {
      "title": "FOUR OBJECTS / LANGUAGE-ORDERED SORTING",
      "prompt": {
        "en": "“Can, milk, bread, then cereal. Put each in its own compartment, verify the order, and stop safely.”",
        "zh": "“罐头、牛奶、面包，最后麦片。放入各自分区，验证顺序，再安全停止。”"
      },
      "notes": {
        "en": "Real autonomous CLI run, seed 2701. All four placements and the requested order passed both policy and external verification. The model recovered from three unreached moves; it stopped with ACK and released its lease. 27 requests / 417.4 s. H1 on. Includes every original policy and recovered failure. One successful acceptance, not a success-rate estimate.",
        "zh": "真实 CLI 自主实跑，seed 2701。四件放置及指定顺序通过策略内外验证；模型自行恢复3次未到位动作，主动停止并确认ACK、释放租约。27次请求，417.4秒，H1开启。保留全部原始策略与失败动作。这是一次成功验收，不是成功率估计。"
      }
    },
    "default_policy": 9
  }
];
