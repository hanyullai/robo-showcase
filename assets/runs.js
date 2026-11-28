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
  },
  {
    "id": "nut",
    "date": "2026-11-27",
    "seed": 2802,
    "model": "claude-opus-5-5",
    "elapsed_seconds": 853.1150677204132,
    "model_calls": 54,
    "actions": 30,
    "camera_queries": 12,
    "control_reached": 20,
    "control_attempts": 24,
    "protocol": "continuous",
    "autonomous_success": true,
    "actor_independent_verification": "passed",
    "actor_stop_ack": true,
    "actor_release": true,
    "h1": "h1-v8-v9",
    "input_tokens": 4391019,
    "output_tokens": 49821,
    "cached_tokens_reported": 0,
    "policies": [
      {
        "path": "assets/policies/nut-01.py.txt",
        "sha256": "ceae15e6de192212fb386d110cf4f35058147c29d8ea520899077ceb9f0a2b49",
        "label": "Policy 01"
      },
      {
        "path": "assets/policies/nut-02.py.txt",
        "sha256": "4e9cc761f40692e91f6f4a94e962b34393d097d578ab86cdf2e3b631136c3c49",
        "label": "Policy 02 · rejected"
      },
      {
        "path": "assets/policies/nut-03.py.txt",
        "sha256": "0097dd0356387e757998a435a3cffd1fc5cbb879c0131b55865d76fd29f91cad",
        "label": "Policy 03 · rejected"
      },
      {
        "path": "assets/policies/nut-04.py.txt",
        "sha256": "1ae12a090a0c378e4177f742fea65cbf8b71debf3e3fea662b00f5b4c7d72c79",
        "label": "Policy 04"
      },
      {
        "path": "assets/policies/nut-05.py.txt",
        "sha256": "5ac335ec813790bd44d138da552b2acafe520d260d9fe738d5c8bbabab8f8452",
        "label": "Policy 05"
      },
      {
        "path": "assets/policies/nut-06.py.txt",
        "sha256": "6a1e8e5a253e6c90b98d297d3c0b16c4c385ba717f312161f8b91aeba663b881",
        "label": "Policy 06"
      },
      {
        "path": "assets/policies/nut-07.py.txt",
        "sha256": "1aa1cfce0d9ac5c873b90ed5550f7841f1423835120215f4223d2124a442cb5b",
        "label": "Policy 07"
      },
      {
        "path": "assets/policies/nut-08.py.txt",
        "sha256": "860698868ae1ea2de98cbed081c7d449ab73d41b5693ee7246f42810d01b9974",
        "label": "Policy 08 · rejected"
      },
      {
        "path": "assets/policies/nut-09.py.txt",
        "sha256": "3fe4b92d5bbf0b9973c5aec88146ac53b95e6923d812e5356ff302fe0678ea6b",
        "label": "Policy 09 · rejected"
      },
      {
        "path": "assets/policies/nut-10.py.txt",
        "sha256": "006843a27f6c7120c5b1141d5d7985175a1a72bf8e286cc9900a81b6015c05e3",
        "label": "Policy 10"
      },
      {
        "path": "assets/policies/nut-11.py.txt",
        "sha256": "6ab051d374a00f357d55bcaeb4fbb9d46ac6967e30aa9e25c9155fdb0b7394e7",
        "label": "Policy 11 · rejected"
      },
      {
        "path": "assets/policies/nut-12.py.txt",
        "sha256": "0149af8f968420bef02711da6c7b2bb71ad1a7bc6a4f6eb46d1104389b346a4e",
        "label": "Policy 12"
      },
      {
        "path": "assets/policies/nut-13.py.txt",
        "sha256": "74f24f17283ddb3eb039886f14310b53c78f56749f9f8320602b6161cdd77398",
        "label": "Policy 13"
      },
      {
        "path": "assets/policies/nut-14.py.txt",
        "sha256": "bf42dc0336c8ab03c699703a581b7f0634d882f8856357ddc617d2f0fc4e664f",
        "label": "Policy 14"
      },
      {
        "path": "assets/policies/nut-15.py.txt",
        "sha256": "6ee97d5224f55fbf3fef9d436e80adac24742acbc736d8b061e4eb808a1d54ee",
        "label": "Policy 15"
      },
      {
        "path": "assets/policies/nut-16.py.txt",
        "sha256": "74ecf6953390f855edbcfd732f34ed9e2b9ad158c8893e493348874ca3507ecd",
        "label": "Policy 16"
      },
      {
        "path": "assets/policies/nut-17.py.txt",
        "sha256": "dc2aa17237641e0132ecde00474cfe6d2ef1d399e4baa3b386ae4929abf0ed25",
        "label": "Policy 17"
      },
      {
        "path": "assets/policies/nut-18.py.txt",
        "sha256": "03d19ca466829788fae1c39c8536f213c592952ef1146af6171446bc73443c02",
        "label": "Policy 18"
      },
      {
        "path": "assets/policies/nut-19.py.txt",
        "sha256": "cd84503c13fb2bdfc8caa4b4834e1877d031f6c0f938e93366015ad043088486",
        "label": "Policy 19"
      },
      {
        "path": "assets/policies/nut-20.py.txt",
        "sha256": "69186f64e1102c5adba8914c687e746166d392bddff9baad6362866ec95bcd43",
        "label": "Policy 20"
      },
      {
        "path": "assets/policies/nut-21.py.txt",
        "sha256": "e2e878c7b197786e565f50d80870993e157c036b21b796a8887dfc1474f91c1e",
        "label": "Policy 21"
      },
      {
        "path": "assets/policies/nut-22.py.txt",
        "sha256": "091f29bf7f0c7e0f129479e8b79fadcf9741fa4ac9407931bbe3bed006422aa3",
        "label": "Policy 22"
      },
      {
        "path": "assets/policies/nut-23.py.txt",
        "sha256": "f1c3bc3c0ee0c8364945edcd7ef708ec330c4bdfb7f7e318fdf2d9117fa1a0b6",
        "label": "Policy 23"
      }
    ],
    "video": "assets/video/nut.mp4",
    "poster": "assets/images/nut.jpg",
    "video_seconds": 89.5,
    "original_video_sha256": "bdf78c24c62640558b61707f41ddd9f26db31e44ebe731ccb05b9e8fff81d7a2",
    "web_video_sha256": "3cfd639091e5009ca58f8bdbe9877a71e4841aa068c83af88b399dddd681f65e",
    "original_video": "assets/video/nut.mp4",
    "task": "evidence/nut-task.txt",
    "notes": "Seed 2802. 54 model requests, 853.1 s; 20/24 executed target moves reached, plus one move rejected for an invalid parameter. The agent corrected restricted-Python errors, refreshed stale visual crops, changed grasp orientation after failed approaches, then recovered from a parameter error after opening the gripper. All 23 original policies and 9 video segments are retained. Video is 89.5 s and excludes model waiting. Two previous trials were blocked by upstream content_filter before physical actions. Model, controller, H1 bundle and scorer were unchanged. H1 was available, but its helper was not called. One successful scene, not a success-rate estimate.",
    "checks": [
      {
        "name": "official_nut_assembly",
        "status": "passed",
        "observed": true,
        "expected": "Native NutAssemblySquare success"
      },
      {
        "name": "peg_inside_seated_hole",
        "status": "passed",
        "observed": true,
        "expected": "Square peg corners inside bore, upright within 5 degrees, nut center 0.825<z<0.845 m"
      },
      {
        "name": "released_and_retreated",
        "status": "passed",
        "observed": true,
        "expected": "Not grasped; TCP more than 0.06 m from nut"
      },
      {
        "name": "stable_insertion",
        "status": "passed",
        "observed": true,
        "expected": "20 cycles, <=2 mm / 2 degree peak-to-peak pose drift; verification advances no cycles"
      }
    ],
    "source_hashes": {
      "tests/core/hardware/test_runtime.py": "cce66778532597733c17ad2d881e0fe882a3f8f94b882449030df37f0f8ac611",
      "tests/hardware_sim/test_pickplace_all.py": "736360713e9e9cf08fd7319e522f4c3566c8732645a693fdbf0f21456ad45b1f",
      "tests/hardware_sim/test_target_pose.py": "ecf04d6fe3f3cc083d737915b4a0a64235883df1b482309983c3ebbde7159df8",
      "vibe/core/hardware/runtime.py": "3db5ea97300f8f922bfad86766247b69624c7ae05409e1d3d370cf37ecdd4226",
      "vibe/core/skills/builtins/vibe.py": "09cebd2e16b5f9d7db67c3793709725b45039eab2398dff359d429e2ac7c04ed",
      "vibe/hardware_sim/_nut_assembly.py": "87db080ebb0af4b4963f361cf542a4b8852c3f88b389865ab3388f8f7226d7b1",
      "vibe/hardware_sim/_pickplace_all.py": "b273448f817694ceb1207348c4f2aa419d748cbfc175d4bf60f997b9d4a31f91",
      "vibe/hardware_sim/_pose_control.py": "526f3e6ff689b0d20a46cabe211d9700261ff32fd93f92eb7c84a49622604ff3",
      "vibe/hardware_sim/_target_motion.py": "0abd59e7fec40e75c51d0b0c1bad400e1c4018693af7f7c010cfef7432163d8b",
      "vibe/hardware_sim/adapter.py": "cfc21030e4688cc146ee7ffaaf6d3ee7c0e13c87ac4f49733be704ddb67ff607",
      "vibe/hardware_sim/models.py": "359c640bd98c8b9b943734122326cb34125270dfe84b7d191733ec5e992f1ea0"
    },
    "process_lifetime_seconds": 856.1337661743164,
    "task_success": true,
    "operator_interruption": false,
    "finish_reasons": {
      "tool_calls": 52,
      "stop": 2
    },
    "source_commit": "ff1f7843d2b245a07c97c102a580206edd5cb077",
    "source_includes_local_modifications": true,
    "default_policy": 14,
    "helper_calls": 0,
    "physical_commands_started": 30,
    "parameter_rejections_without_motion": 1,
    "prior_blocked_trials": 2,
    "action_metric_definition": "Non-camera commands started, including one invalid move_to parameter call with no motion.",
    "presentation": {
      "title": "NUT ASSEMBLY / ALIGN & INSERT",
      "prompt": {
        "en": "“Fit the square nut onto its square peg. Release, retreat, verify independently, then stop and release the lease.”",
        "zh": "“把方形螺母套到对应方柱上，松爪、撤离、独立验证，再停止并释放租约。”"
      },
      "outcome": {
        "en": "Autonomous end-to-end pass: peg inside the bore, nut seated, released and stable. Both policy and external verification passed; model stop ACK and lease release confirmed.",
        "zh": "自主全链路通过：方柱穿孔、螺母落座、松爪且稳定；策略内外验证通过，模型主动停止 ACK 和租约释放确认。"
      },
      "notes": {
        "en": "Seed 2802. 54 model requests, 853.1 s; 20/24 executed target moves reached, plus one move rejected for an invalid parameter. The agent corrected restricted-Python errors, refreshed stale visual crops, changed grasp orientation after failed approaches, then recovered from a parameter error after opening the gripper. All 23 original policies and 9 video segments are retained. Video is 89.5 s and excludes model waiting. Two previous trials were blocked by upstream content_filter before physical actions. Model, controller, H1 bundle and scorer were unchanged. H1 was available, but its helper was not called. One successful scene, not a success-rate estimate.",
        "zh": "Seed 2802。54 次模型请求、853.1 秒；实际执行的 24 次目标移动中 20 次到位，另有 1 次因参数错误被拒绝、未移动。模型自行修正受限 Python 错误、更新过期取点、在接近失败后改变抓手朝向，并从松爪后的参数错误中恢复。完整保留 23 份原始策略、9 段录像；合并录像 89.5 秒，不含模型等待。之前两次在物理动作前被上游 content_filter 阻断。模型、控制器、H1 包和评分器均未改；H1 可用但没有实际 helper 调用。这是一场成功记录，不代表成功率。"
      }
    }
  },
  {
    "id": "dual-nut",
    "date": "2026-11-29",
    "seed": 2911,
    "model": "claude-opus-5-5",
    "elapsed_seconds": 530.69,
    "model_calls": 31,
    "actions": 21,
    "control_reached": 16,
    "control_attempts": 16,
    "protocol": "continuous-dual-nut-pilot-v1",
    "autonomous_success": true,
    "task_success": true,
    "actor_independent_verification": "passed",
    "actor_stop_ack": true,
    "actor_release": true,
    "h1": "h1-v8-v9",
    "helper_calls": 2,
    "policies": [
      {
        "path": "dual-assembly/unit-01/policy-01.py.txt",
        "sha256": "ea6eaf755ec6563ae75956d1c64c2b39d4481915b185e696c0aa23c0c50e43ba",
        "label": "Policy 01 · rejected"
      },
      {
        "path": "dual-assembly/unit-01/policy-02.py.txt",
        "sha256": "b86e3c078b790616d129b5cc31e897a4b1d5e8a264c010aa9b03b3a59b5be12d",
        "label": "Policy 02 · rejected"
      },
      {
        "path": "dual-assembly/unit-01/policy-03.py.txt",
        "sha256": "9f8ed5cab1496bd94a903a2a3f28fd9fe2e7c279bc259550dcbecf46edc23fea",
        "label": "Policy 03 · rejected"
      },
      {
        "path": "dual-assembly/unit-01/policy-04.py.txt",
        "sha256": "a4043a0ad8fcce252b285da4be0b02eba17fddd6eb0eea3e7f0f4f1b6d26f1e5",
        "label": "Policy 04 · adapter_error"
      },
      {
        "path": "dual-assembly/unit-01/policy-05.py.txt",
        "sha256": "6c310514548dd6035dd180e953660872e1a40d2611850c32f22c70397340693d",
        "label": "Policy 05 · lease_required"
      },
      {
        "path": "dual-assembly/unit-01/policy-06.py.txt",
        "sha256": "6c310514548dd6035dd180e953660872e1a40d2611850c32f22c70397340693d",
        "label": "Policy 06 · adapter_error"
      },
      {
        "path": "dual-assembly/unit-01/policy-07.py.txt",
        "sha256": "a7f427752b142f418a5dde53f6a6b3dd66bf479db1ce08fefbcccc1caa67957f",
        "label": "Policy 07 · completed"
      },
      {
        "path": "dual-assembly/unit-01/policy-08.py.txt",
        "sha256": "05b90b5edd935d85845a28b1fbeb454172164d73f01a692b8483e634be48d777",
        "label": "Policy 08 · completed"
      },
      {
        "path": "dual-assembly/unit-01/policy-09.py.txt",
        "sha256": "9c97c0c58e268ec9c387e9543541760d1e6977a205f3088798dd07430584551c",
        "label": "Policy 09 · completed"
      },
      {
        "path": "dual-assembly/unit-01/policy-10.py.txt",
        "sha256": "f9ddfd95ee5ec961be6be52e913515adc0aa599f5013af272c156d6f59575e10",
        "label": "Policy 10 · completed"
      },
      {
        "path": "dual-assembly/unit-01/policy-11.py.txt",
        "sha256": "3682a886439c986c63cbe3e4ff359342193cbe527948ab558af322c0df3b14ef",
        "label": "Policy 11 · completed"
      },
      {
        "path": "dual-assembly/unit-01/policy-12.py.txt",
        "sha256": "d10b71b5fc9e2ecee3cf41f99b877db24153d479588b37e916fc5e67c940e1d1",
        "label": "Policy 12 · completed"
      },
      {
        "path": "dual-assembly/unit-01/policy-13.py.txt",
        "sha256": "64f3c413dea7596ecda3875223c8e10709a678ac7b97ffc2227c34c4c5cd677e",
        "label": "Policy 13 · completed"
      },
      {
        "path": "dual-assembly/unit-01/policy-14.py.txt",
        "sha256": "bbd937f4db7637b3d7a78eebea3717289f2dcda8dfe425511825f5f173bb37a0",
        "label": "Policy 14 · completed"
      },
      {
        "path": "dual-assembly/unit-01/policy-15.py.txt",
        "sha256": "2caaa4669a85d12e5a25140b19424d4f12658807fc2403f07b04f50986fa7c2b",
        "label": "Policy 15 · completed"
      },
      {
        "path": "dual-assembly/unit-01/policy-16.py.txt",
        "sha256": "04c07bda3f1dd414e6504e91572ee84523d1e97a8805c2c44ccb57e16e2c7293",
        "label": "Policy 16 · completed"
      }
    ],
    "default_policy": 13,
    "video": "dual-assembly/unit-01/industrial.mp4",
    "poster": "dual-assembly/unit-01/industrial.png",
    "video_seconds": 39.1,
    "original_video": "dual-assembly/unit-01/original.mp4",
    "original_video_sha256": "d7b8ff625bb24aa5940e41486de9589b9b8bebb6776fae749d8040fdc53a0121",
    "web_video_sha256": "6eab1f0d0551bf6bed08fbc15ef4a3c5f6bafdb2ce81f7dce24a891e433e897e",
    "verification_checks": [
      {
        "name": "square_official_nut_assembly",
        "status": "passed",
        "observed": true,
        "expected": "Native per-object check on the assigned peg"
      },
      {
        "name": "square_peg_inside_seated_hole",
        "status": "passed",
        "observed": true,
        "expected": "Assigned peg fully inside both bore faces, upright within 5 degrees, nut center 0.825<z<0.845 m"
      },
      {
        "name": "square_released_and_retreated",
        "status": "passed",
        "observed": true,
        "expected": "Not grasped; TCP more than 0.06 m from nut"
      },
      {
        "name": "square_stable_insertion",
        "status": "passed",
        "observed": true,
        "expected": "20 cycles, <=2 mm / 2 degree peak-to-peak pose drift; verification advances no cycles"
      },
      {
        "name": "round_official_nut_assembly",
        "status": "passed",
        "observed": true,
        "expected": "Native per-object check on the assigned peg"
      },
      {
        "name": "round_peg_inside_seated_hole",
        "status": "passed",
        "observed": true,
        "expected": "Assigned peg fully inside both bore faces, upright within 5 degrees, nut center 0.825<z<0.845 m"
      },
      {
        "name": "round_released_and_retreated",
        "status": "passed",
        "observed": true,
        "expected": "Not grasped; TCP more than 0.06 m from nut"
      },
      {
        "name": "round_stable_insertion",
        "status": "passed",
        "observed": true,
        "expected": "20 cycles, <=2 mm / 2 degree peak-to-peak pose drift; verification advances no cycles"
      }
    ],
    "tool_errors": [
      "<tool_error>robo_run_policy failed: Robo code policy failed\n\nerror_code=unsafe_policy, message=Policy loop target must be one name, line=3,column=1",
      "<tool_error>robo_run_policy failed: Robo code policy failed\n\nerror_code=unsafe_policy, message=Policy syntax ListComp is not allowed, line=6,column=10",
      "<tool_error>robo_run_policy failed: Robo code policy failed\n\nerror_code=unsafe_policy, message=Policy calls must use an allowed function name, line=8,column=9",
      "<tool_error>robo_run_policy failed: Robo code policy failed\n\nerror_code=adapter_error, message=Hardware adapter execute failed, line=1,column=1",
      "<tool_error>robo_run_policy failed: Robo code policy failed\n\nerror_code=lease_required, message=Command requires the active lease for mujoco-panda-1, line=4,column=1",
      "<tool_error>robo_devices failed: Cannot arm mujoco-panda-1: lease_required\n\nerror_code=lease_required</tool_error>",
      "<tool_error>robo_run_policy failed: Robo code policy failed\n\nerror_code=adapter_error, message=Hardware adapter execute failed, line=4,column=1"
    ],
    "source_commit": "6802868bf4bb532f361276864026e5492bf01d02",
    "source_includes_local_modifications": true,
    "source_hashes_file": "dual-assembly/candidate-files.json",
    "full_evidence": "dual-assembly/",
    "presentation": {
      "title": "DUAL ASSEMBLY / IDENTIFY & MATCH",
      "prompt": {
        "en": "“Identify both nuts, fit each onto its matching peg, then independently verify both and stop safely.”",
        "zh": "“识别两种螺母，分别装到对应柱上，独立验证两件并安全停止。”"
      },
      "outcome": {
        "en": "Round first, then square. Both parts passed all eight checks; actor stop ACK and lease release confirmed.",
        "zh": "先圆后方，两件共八项独立检查通过；模型主动停止 ACK、释放租约完成。"
      },
      "notes": {
        "en": "Seed 2911. One trial, 31 requests, 530.69 s. All 16 original policies retained, including rejected drafts and stale-observation failures corrected by the agent. 16/16 moves reached. Industrial display re-renders all 782 recorded frames; 39.1 s excludes model waiting. Two H1 calls. The base source is 6802868 plus a local dual-nut extension, not the base commit alone. One successful scene, not a reliability estimate. Full per-part checks and failed attempts: dual-assembly/.",
        "zh": "Seed 2911，单场 31 次请求、530.69 秒。保留全部 16 份原始策略，包括模型自行纠正的语法和旧观测错误。16/16 移动到位，工业展示重渲染全部 782 帧；39.1 秒录像省略模型等待。H1 调用两次。源码为 6802868 加本地双件扩展，非基础提交本身。单场成功不代表可靠成功率，逐件验证与失败记录见双件详情页。"
      }
    }
  }
];
