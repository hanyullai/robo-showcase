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
  },
  {
    "id": "priority",
    "date": "2026-11-27",
    "seed": 2701,
    "model": "claude-opus-5-5",
    "elapsed_seconds": 380.9587857723236,
    "model_calls": 22,
    "actions": 41,
    "camera_queries": 9,
    "control_reached": 26,
    "control_attempts": 28,
    "protocol": "continuous",
    "autonomous_success": false,
    "actor_independent_verification": "in-policy only",
    "actor_stop_ack": false,
    "actor_release": false,
    "h1": "h1-v8-v9",
    "order": [
      "cereal",
      "bread",
      "milk",
      "can"
    ],
    "input_tokens": 2198713,
    "output_tokens": 15534,
    "cached_tokens_reported": 0,
    "policies": [
      {
        "path": "assets/policies/priority-01.py.txt",
        "sha256": "2c9d8db44e8e4e2b49f9ef95a334ea563caf64ee780aaeffb2e13b8927d539d0",
        "label": "Policy 01 · rejected"
      },
      {
        "path": "assets/policies/priority-02.py.txt",
        "sha256": "85d8cca6f0a4b84b2a910f50be0a1a1628be892e5f92e155cb175fa0250c2abf",
        "label": "Policy 02"
      },
      {
        "path": "assets/policies/priority-03.py.txt",
        "sha256": "97e4fd40ade9c34cdc9f354270f96ae65451817c0b59f5029d787ea5b1b10c08",
        "label": "Policy 03"
      },
      {
        "path": "assets/policies/priority-04.py.txt",
        "sha256": "a23d2e66c156c95d53e3ece35890d2d3404db6c1315363f8ad032de7be61ad57",
        "label": "Policy 04"
      },
      {
        "path": "assets/policies/priority-05.py.txt",
        "sha256": "fb0752e40a55ab06a72a789022ae7ba5423c1b77d79ab9a740d66aadde08c894",
        "label": "Policy 05"
      },
      {
        "path": "assets/policies/priority-06.py.txt",
        "sha256": "fcde8d5ed69bb8e6ba66b5d24cadf6d84f700a1c7cc8a820ceb10e97060480b5",
        "label": "Policy 06"
      },
      {
        "path": "assets/policies/priority-07.py.txt",
        "sha256": "c651bd46d733208ccf6500be9f50cb70ffbc8154f2247a2182e4ff074eaf54af",
        "label": "Policy 07"
      },
      {
        "path": "assets/policies/priority-08.py.txt",
        "sha256": "4a4d9442572683027e196a69eb5ed65ba9b5e20811cd69149654ee468523440a",
        "label": "Policy 08"
      },
      {
        "path": "assets/policies/priority-09.py.txt",
        "sha256": "91217d1e846302031a7863b5c94599ace6883e862c5a6934afc361b21107e0dc",
        "label": "Policy 09"
      },
      {
        "path": "assets/policies/priority-10.py.txt",
        "sha256": "285aed9da570ffd68b1ceaaf135f35bbace8f31932db85fac93f7d5ddc109b93",
        "label": "Policy 10"
      }
    ],
    "video": "assets/video/priority.mp4",
    "poster": "assets/images/priority.jpg",
    "video_seconds": 103.9,
    "original_video_sha256": "50f548ededbacd1c2bbb31723ac8efd0b41f5840f8eb31492674330a3f5d879a",
    "web_video_sha256": "40d70bc4c6be24e2979bcd5b9ccf26b61ee9f612a1b7769b1ed68d08070613f5",
    "original_video": "assets/video/priority.mp4",
    "task": "evidence/priority-task.txt",
    "notes": "Autonomous manipulation completed all four placements in the requested order. Final gateway content_filter prevented model-directed external verification and cleanup; harness fallback verified all objects, acknowledged stop and released lease. All recording segments and generated policies retained. Selected demo, not a success-rate estimate.",
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
            "cereal",
            "bread",
            "milk",
            "can"
          ],
          "first_stable_cycles": {
            "cereal": 427,
            "bread": 756,
            "milk": 1480,
            "can": 2063
          }
        },
        "expected": "cereal, bread, milk, can"
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
    "task_success": true,
    "fallback_stop_ack": true,
    "fallback_release": true,
    "finish_reasons": {
      "tool_calls": 20,
      "stop": 1,
      "content_filter": 1
    },
    "operator_interruption": false,
    "default_policy": 9,
    "presentation": {
      "title": "SORT / BIG ITEM FIRST",
      "prompt": {
        "en": "“Cereal first. Then bread, milk and can. Verify the placement order.”",
        "zh": "“大件优先：先麦片，再面包、牛奶、罐头。独立验证放置顺序。”"
      },
      "outcome": {
        "en": "4/4 objects and requested order passed. The gateway filtered the next response; the harness performed fallback verification, stop ACK and lease release. Model-directed final cleanup did not complete.",
        "zh": "4/4 物品及指定顺序通过。随后网关过滤了下一条响应，由系统完成兜底验证、停止 ACK 和租约释放；模型主动收尾未完成。"
      },
      "notes": {
        "en": "One real autonomous trial, seed 2701. The milk carton tipped over after a failed approach; the agent re-observed it and changed the grasp. A later reach-limited move with the can was also recovered. 26/28 moves reached; all 10 original policies and failed actions are retained. 22 requests, 381.0 s wall time, H1 on. Task success and complete autonomous cleanup are reported separately.",
        "zh": "一次真实自主实跑，seed 2701。牛奶在接近失败后倒下，模型重新观察并调整抓法；随后也从罐头移动超出可达范围的失败中恢复。26/28 次移动到位，完整保留 10 份原始策略和失败动作。22 次请求、381.0 秒，H1 开启。任务成功与完整自主收尾分开报告。"
      }
    },
    "process_lifetime_seconds": 382.3439428806305,
    "request_errors": {
      "content_filter": 1
    },
    "source_commit": "ff1f7843d2b245a07c97c102a580206edd5cb077",
    "source_includes_local_modifications": true
  },
  {
    "id": "replan",
    "date": "2026-11-27",
    "seed": 2701,
    "model": "claude-opus-5-5",
    "elapsed_seconds": 414.6935441493988,
    "model_calls": 29,
    "actions": 38,
    "camera_queries": 7,
    "control_reached": 24,
    "control_attempts": 26,
    "protocol": "continuous",
    "autonomous_success": true,
    "actor_independent_verification": "passed",
    "actor_stop_ack": true,
    "actor_release": true,
    "h1": "h1-v8-v9",
    "order": [
      "can",
      "cereal",
      "bread",
      "milk"
    ],
    "input_tokens": 2192279,
    "output_tokens": 20304,
    "cached_tokens_reported": 0,
    "policies": [
      {
        "path": "assets/policies/replan-01.py.txt",
        "sha256": "81bf363ba0bea7fcb8839c226239f7042115da0434e766982048e51ca408186e",
        "label": "Policy 01 · rejected"
      },
      {
        "path": "assets/policies/replan-02.py.txt",
        "sha256": "248fa0843b195e1318e78ece0a09dcb641b8e3d9aef2ba06ccf51cb9a9b12517",
        "label": "Policy 02"
      },
      {
        "path": "assets/policies/replan-03.py.txt",
        "sha256": "5e76cfbeb4a97e99a0ca744b3ca4543e6a3c8d0c078b30522f5b98777f19cf7f",
        "label": "Policy 03"
      },
      {
        "path": "assets/policies/replan-04.py.txt",
        "sha256": "9a3ab00c4ad31c5b83a443ce5d6e4a40c56ded7d790446be41c182bc61c03a6f",
        "label": "Policy 04"
      },
      {
        "path": "assets/policies/replan-05.py.txt",
        "sha256": "f69136adc03f1ef9b4583c36b4d3b1fc9d4ba598e308f0ad34ef13c072136d1a",
        "label": "Policy 05"
      },
      {
        "path": "assets/policies/replan-06.py.txt",
        "sha256": "e994c8ac62e4a311e24633d31dc3163da14bcf808bd9c2be9c807103fe218a0c",
        "label": "Policy 06"
      },
      {
        "path": "assets/policies/replan-07.py.txt",
        "sha256": "235a1383b5a5360436e96b9e57657bfe4b1fa3d53ffe355db9a70f0ea633b5a4",
        "label": "Policy 07"
      },
      {
        "path": "assets/policies/replan-08.py.txt",
        "sha256": "eb844554bb352568bf0df44c9ed4dd9473ed11a9a58905a8b9b4d3d46e9b6fbe",
        "label": "Policy 08"
      },
      {
        "path": "assets/policies/replan-09.py.txt",
        "sha256": "2895fc177141bccf1d1b105da6de20b7d33165fc3cbb87f465e93eb44fa7f298",
        "label": "Policy 09"
      },
      {
        "path": "assets/policies/replan-10.py.txt",
        "sha256": "fe75810ab993e5e594ced198a6f0a3fe537721569020d411811c9d27a256df57",
        "label": "Policy 10"
      }
    ],
    "video": "assets/video/replan.mp4",
    "poster": "assets/images/replan.jpg",
    "video_seconds": 76.6,
    "original_video_sha256": "45cfe77b00893c3aa82fba76fd79fe0ab314cbf441ab56d36259685dac8479b5",
    "web_video_sha256": "8effdac7f3d0ee491bb585c0c40ec5e1600c76b0069512c26db2940b5afe976f",
    "original_video": "assets/video/replan.mp4",
    "task": "evidence/replan-task.txt",
    "notes": "Operator paused after independent can verification, held stationary for 5.02 seconds, then changed the remaining order. Agent re-observed and completed can/cereal/bread/milk without resetting the scene. Both ordered checks, model stop ACK and lease release passed. Video preserves all simulation recording segments and failed motions; waiting and stationary hold are documented by wall-clock operator timeline.",
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
            "cereal",
            "bread",
            "milk"
          ],
          "first_stable_cycles": {
            "can": 801,
            "cereal": 1043,
            "bread": 1281,
            "milk": 1513
          }
        },
        "expected": "can, cereal, bread, milk"
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
    "process_lifetime_seconds": 460.87954211235046,
    "task_success": true,
    "fallback_stop_ack": true,
    "fallback_release": true,
    "finish_reasons": {
      "tool_calls": 26,
      "stop": 2
    },
    "operator_interruption": true,
    "stationary_hold_seconds": 5.022826910018921,
    "can_first_stable_cycle_preserved": true,
    "operator_timeline": [
      {
        "at_seconds": 174.99,
        "event": "shortcut_sent"
      },
      {
        "at_seconds": 175.162,
        "event": "stop_ack_observed"
      },
      {
        "at_seconds": 180.143,
        "event": "stationary_check_passed"
      },
      {
        "at_seconds": 180.143,
        "event": "resume_sent"
      },
      {
        "at_seconds": 414.694,
        "event": "natural_turn_finished"
      }
    ],
    "default_policy": 9,
    "presentation": {
      "title": "SORT / PAUSE & REPRIORITIZE",
      "prompt": {
        "en": "“Can first, then milk.” → Pause → “Keep the can. Cereal next, bread after it, milk last.”",
        "zh": "“先罐头，再牛奶。” → 暂停 → “保留罐头；先麦片，再面包，牛奶最后。”"
      },
      "outcome": {
        "en": "4/4 in the revised order. Stop ACK, 5.02 s without new motion, completed can preserved. The agent resumed, passed both ordered checks, then stopped and released the lease.",
        "zh": "4/4 按新顺序完成。暂停收到 ACK，5.02 秒无新增运动，罐头保持已完成。模型自主恢复、通过策略内外顺序验证，主动停止并释放租约。"
      },
      "notes": {
        "en": "One real interactive CLI journey, seed 2701. The operator changed priorities after can placement; no scene reset, state teleportation or winning policy injection. 24/26 moves reached, including recovery from two failed motions. 29 requests include one interrupted by the operator. 414.7 s task wall time; 76.6 s of simulator video. Waiting and the stationary hold have no new simulation frames; the five-second pause is evidenced by runtime records, not five seconds of video. All 10 policies are original. H1 on. A selected successful demonstration, not a recovery success rate.",
        "zh": "一次真实交互 CLI 流程，seed 2701。罐头放好后由操作者改优先级，没有重置场景、瞬移状态或注入获胜策略。24/26 次移动到位，包含两次失败后的恢复。29 次请求含 1 次被操作者中断；任务实际耗时 414.7 秒，仿真录像 76.6 秒。等待和静置期间没有新增仿真帧，五秒暂停由运行日志证明，不等于录像中五秒画面。完整保留 10 份原始策略，H1 开启。这是一次成功演示，不代表恢复成功率。"
      }
    },
    "request_errors": {
      "operator_interrupted": 1
    },
    "source_commit": "ff1f7843d2b245a07c97c102a580206edd5cb077",
    "source_includes_local_modifications": true
  }
];
