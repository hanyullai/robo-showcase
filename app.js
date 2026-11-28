import { runs } from './assets/runs.js?v=8';

const $ = (selector) => document.querySelector(selector);
const sourceCache = new Map();
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let language = 'en';
// Open in English even when a previous visit selected Chinese.
let selected = runs.find((run) => run.id === 'nut');
let source = '';
let sourceVersion = 0;
let toastTimer;
let heroUserPaused = false;
let heroVisible = false;
const originalText = new Map([...document.querySelectorAll('[data-i18n]')].map((node) => [node, node.innerHTML]));
const zh = {
  assemblyEyebrow:'新增 / 自主装配工位',assemblyTitle:'先预演路线，<br>再执行装配。',assemblySummary:'三个固定场景，三次独立验证通过。<br>完整工业画面、失败记录与原始策略代码。',assemblyBoundary:'工业画面由记录状态重绘，模型所见 RGB-D 未改变。这是已知场景的小样本检查，不代表长期成功率。录像早于最新初始化修复；该修复已通过五个无模型配对检查，尚未重跑完整自主任务。',assemblyWatch:'查看三场完整装配记录 ↗',

  navWork:'实验现场',navSystem:'如何运作',navEvidence:'结果证据',eyebrow:'具身智能实验室',
  hero1:'语言输入。',hero2:'行动输出。',heroDescription:'让 agent 自己写策略、操作机械臂，<br>再用独立验证证明结果。',watch:'进入实验现场',how:'看看它如何运作',heroNote:'真实 AGENT 实跑 · MUJOCO 仿真<br>不是预先编排的成功动画',
  fieldRecording:'装配工位 / 2026.11.28',simulation:'记录状态重绘',heroFilmTitle:'观察、预演、自主装配。',heroFilmSub:'三个固定初态，分别独立验证。',independentlyVerified:'独立验证通过',stripLabel:'从自然语言到实际动作',
  workEyebrow:'01 / 实验现场',workTitle:'少一点描述。<br>多一点行动。',workDescription:'选择一项任务，看真实的执行过程。<br>然后打开驱动它的原始策略代码。',liftTag:'第一次抓起物体',stackTag:'精确放置，保持稳定',pickplaceTag:'把物体送到指定位置',resumeTag:'停得下来，也能继续',actualFootage:'真实仿真器录像',generatedPolicy:'模型自主生成的 POLICY',copy:'复制',original:'原始文件 ↗',codeNote:'保留模型生成的原文，未经人工修正。',metricResult:'独立任务验证',metricTime:'任务实际耗时',metricCalls:'模型请求次数',metricMotion:'移动到位次数',details:'运行记录 +',originalVideo:'查看原始录像 ↗',selectionNote:'这里展示精选成功记录，不代表总体成功率。录像仅包含仿真时段，不包含模型等待；不同记录的模型与协议不同。所有演示均为仿真，尚不代表真实机械臂验收。',
  systemEyebrow:'02 / 如何运作',systemTitle:'智能需要闭环。<br>结果需要证据。',sense:'观察当前世界。',senseText:'通过 RGB-D 和相机标定获得可计算的几何信息，让行动有据可依。',plan:'写出下一步。',planText:'语言模型自主生成 Python 策略，并根据执行反馈修正下一步。',act:'让控制可控。',actText:'独立运行时管理武装、租约、逐周期反馈控制和用户中断。',verify:'核对真实结果。',verifyText:'独立任务检查确认结果，停止回执和租约释放完成收尾。',
  recoveryEyebrow:'03 / 一次真实的暂停',recoveryTitle:'暂停动作。<br>继续完成。',recoveryDescription:'移动途中，操作者按下停止。<br>Agent 必须根据此刻的状态重新出发。',stopMetric:'本次测得的停止 ACK',stopNote:'一次本地仿真测量。<br>不代表实时性保证。',log1:'运动被中断',log1Text:'停止 ACK 确认，随后五秒没有新增运动。',log2:'重新观察当前状态',log2Text:'旧租约被拒绝，agent 自行申请了新租约。',log3:'新策略，完成叠放',log3Text:'恢复后的十次移动均到位，两次任务验证通过。',log4:'明确完成收尾',log4Text:'Agent 主动停止、确认 ACK，并释放租约。',evidenceNote:'每一个结果，都有对应的记录。',inspectEvidence:'查看运行数据与文件哈希 ↗',
  closingEyebrow:'开放代码，可观察行为。',closingTitle:'给语言<br>一双行动的手<span class="accent">。</span>',exploreSource:'查看项目源码',runLocally:'在 Mac 上运行 ↗',setupNote:'需要先安装项目并配置模型与仿真器，详见运行手册。',footer:'独立具身智能项目。',footerStatus:'持续开放构建'
};
Object.assign(zh, {
  nutTag:'抓取、对孔、套入',
  replanTag:'暂停、改优先级、继续完成',
  replanVerified:'实跑已验证',
  watchReplan:'真实录像 / 观看完整实跑 ↗',
  priorityTag:'倒下后重新观察、抓取',
  sortingTag:'四件物品，按序完成',
  "navChallenges": "进阶挑战",
  "seeChallenges": "不止一次抓取 ↗",
  "challengeEyebrow": "NEXT / 更难的挑战",
  "challengeTitle": "更多物体。<br>更多变化。",
  "challengeDescription": "一项挑战已经实跑验证。<br>另外两项，留待继续探索。",
  "challengeStatus": "待验证",
  "conceptLabel": "场景示意 / 非实跑录像",
  "challengeCriteria": "怎样才算通过？",
  "sortTitle": "桌面整理挑战。",
  "sortLead": "四种物体，一句指令。<br>中途，还能改变主意。",
  "sortPrompt": "“先罐头，再牛奶。”<br><span>“等一下，牛奶最后放。”</span>",
  "sortSkill": "识别 → 排序 → 记住进度",
  "sortCriteria": "一次真实 CLI 流程已验证：罐头放好后暂停，保留其放置，再完成麦片、面包和牛奶。策略内外顺序验证、模型主动停止和释放租约均通过，没有重置场景。",
  "recoverTitle": "被打乱，也能继续。",
  "recoverLead": "目标位置变了。<br>Agent 得自己发现。",
  "recoverPrompt": "“把它抓起来。”<br><span>抓取之前，物体被移动了。</span>",
  "recoverSkill": "发现变化 → 重新观察 → 恢复行动",
  "recoverCriteria": "识别物体位置变化，弃用过期目标，根据当前观测重新生成动作；仍需支持停止、恢复和独立验证。下方已录制的 Stack 暂停恢复并不代表已验证物体移位。",
  "rebuildTitle": "拆开，再重新搭好。",
  "rebuildLead": "先拆掉已有积木塔。<br>再按新顺序重建。",
  "rebuildPrompt": "“把这座塔重新搭一下。”<br><span>“绿色在最上面，红色在中间。”</span>",
  "rebuildSkill": "规划依赖 → 重建 → 验证",
  "rebuildCriteria": "按可执行的顺序拆取积木、安排临时放置，再按指定颜色顺序重建；验证松爪、稳定性和最终顺序。已有的双方块 Stack 记录并不代表已通过这项多积木挑战。",
  "challengeDisclosure": "分拣并改顺序已有真实验证录像。物体移位和拆塔重建仍是未验证的场景示意。这些精选实跑不代表总体成功率。",
  "challengeRecordings": "观看已验证的实跑 ↓"
});
const descriptions = {
  lift:{title:'LIFT / GRASP & RAISE',prompt:{en:'“Grasp the red cube, lift it, and independently verify the result.”',zh:'“抓起红方块，将它抬升，并独立验证任务结果。”'},notes:{en:'Selected autonomous Lift run, seed 911. The model generated one policy; 3 moves reached their targets and lift_object passed. Model: claude-fable-5. H1 was off. Historical bounded protocol. These displayed task prompts are concise translations, not byte-for-byte transcripts.',zh:'精选自主 Lift 记录，seed 911。模型生成一段策略，三次移动全部到位，lift_object 验证通过。使用 claude-fable-5，H1 关闭，属于历史有界协议。页面任务指令为精简译文，并非完整会话原文。'}},
  stack:{title:'STACK / PLACE & RELEASE',prompt:{en:'“Stack the red cube on the green cube. Release, retreat, and verify stability.”',zh:'“把红方块叠在绿方块上，松爪、撤离，再确认稳定。”'},notes:{en:'Selected autonomous Stack run, seed 1202. Two original policies are available above. A not_connected error was corrected by the agent before it completed the task. 6 moves reached; independent verification passed with 23 stable cycles. H1 off. Historical bounded protocol.',zh:'精选自主 Stack 记录，seed 1202。上方可切换两份原始策略。模型自行纠正了 not_connected 错误，随后完成任务。六次移动到位，独立验证通过，稳定窗口为 23 周期。H1 关闭，属于历史有界协议。'}},
  pickplace:{title:'PICK & PLACE / CAN TO BIN',prompt:{en:'“Move the red can into its assigned compartment, release it, and verify placement.”',zh:'“把红色罐子放进指定分区，松爪并独立验证放置结果。”'},notes:{en:'Native single-can PickPlaceCan, seed 1302. This is not four-object sorting. The destination comes from the public fixed workcell specification. A list-comprehension policy was rejected before actions; the agent generated a corrected policy. 7 moves reached. H1 off; continuous protocol.',zh:'原生单罐 PickPlaceCan，seed 1302，不是四物体分拣。目标格子来自公开固定工位规格。第一次策略因列表推导式被执行前拒绝，模型随后自行生成了修正版。七次移动到位，H1 关闭，连续执行协议。'}},
  resume:{title:'STACK / PAUSE & RESUME',prompt:{en:'“Continue the Stack task from the current state. Verify the result, then stop and release.”',zh:'“从当前状态继续 Stack 任务。独立验证结果，再停止并释放租约。”'},notes:{en:'Real Opus 5.5 run, seed 2607. After an operator interruption and a five-second stationary pause, the agent re-observed, recovered from a stale lease, and wrote a new policy. All 10 resumed moves reached; both Stack checks passed with 80 stable cycles. 15 requests / 201.1 s across the task. H1 on. One successful recovery trial, not a recovery success rate.',zh:'真实 Opus 5.5 运行，seed 2607。人工暂停并静置五秒后，模型重新观察，自行纠正旧租约问题，生成新策略。恢复后的十次移动全部到位，策略内外验证通过，稳定 80 个周期。整项任务共 15 次请求、201.1 秒，H1 开启。这是一次恢复成功记录，不代表总体恢复成功率。'}}
};

function notify(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.add('visible');toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2300);}
function escapeHtml(value){return value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
function highlight(text){
  const pattern=/(#[^\n]*|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b(?:if|else|elif|for|while|in|not|and|or|True|False|None|break|continue)\b|\b\d+(?:\.\d+)?\b|\b[a-zA-Z_]\w*(?=\())/g;
  return text.split('\n').map(line=>{
    let result='',end=0;
    for(const match of line.matchAll(pattern)){
      result+=escapeHtml(line.slice(end,match.index));const token=match[0];
      const kind=token.startsWith('#')?'comment':/^['"]/.test(token)?'string':/^\d/.test(token)?'number':/^(if|else|elif|for|while|in|not|and|or|True|False|None|break|continue)$/.test(token)?'keyword':'function';
      result+=`<span class="tok-${kind}">${escapeHtml(token)}</span>`;end=match.index+token.length;
    }
    result+=escapeHtml(line.slice(end));return `<span class="code-line">${result||' '}</span>`;
  }).join('');
}
async function loadPolicy(index=0){
  const version=++sourceVersion;const policy=selected.policies[index];source='';$('#copy-policy').disabled=true;
  $('#policy-code').textContent=language==='zh'?'正在读取原始策略…':'Loading original policy…';
  $('#download-policy').href=policy.path;
  try{
    let text=sourceCache.get(policy.path);
    if(text===undefined){const response=await fetch(policy.path);if(!response.ok)throw new Error('Policy unavailable');text=await response.text();sourceCache.set(policy.path,text);}
    if(version!==sourceVersion)return;
    source=text;$('#policy-code').innerHTML=highlight(text);$('.code-window').scrollTop=0;$('.code-window').scrollLeft=0;$('#copy-policy').disabled=false;
  }catch{
    if(version===sourceVersion)$('#policy-code').textContent=language==='zh'?'未能读取策略，请点击上方“原始文件”。':'Could not load the policy. Use the original file link above.';
  }
}
function renderRunText(){
  const info=descriptions[selected.id]||selected.presentation;$('#run-title').textContent=info.title;$('#run-seed').textContent=`SEED ${selected.seed}`;$('#run-prompt').textContent=info.prompt[language];$('#run-notes').textContent=info.notes[language];
  $('#metric-result').innerHTML=(language==='zh'?'通过':'PASSED')+' <i>↗</i>';
  $('#run-outcome').textContent=info.outcome?.[language]||'';$('#run-outcome').hidden=!info.outcome;
  $('#metric-time').innerHTML=`${selected.elapsed_seconds.toFixed(1)} <small>s</small>`;
  $('#metric-calls').textContent=selected.model_calls;$('#metric-motion').textContent=`${selected.control_reached} / ${selected.control_attempts}`;
  $('#run-model').textContent=selected.model==='claude-opus-5-5'?'OPUS 5.5':'FABLE 5';$('#run-date').textContent=selected.date.replaceAll('-','.');$('#run-library').textContent=`H1 ${selected.h1==='off'?'OFF':'ON'}`;
  $('#original-video').href=selected.original_video;
  const opened=!$('#run-details').hidden;$('#details-toggle').textContent=language==='zh'?`运行记录 ${opened?'−':'+'}`:`Run notes ${opened?'−':'+'}`;
}
async function selectRun(id,{autoplay=false}={}){
  selected=runs.find(r=>r.id===id)||runs[0];
  document.querySelectorAll('[data-task]').forEach(tab=>{const active=tab.dataset.task===selected.id;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
  $('#experiment-panel').setAttribute('aria-labelledby',`tab-${selected.id}`);
  const video=$('#run-video');video.pause();video.src=selected.video;video.poster=selected.poster;video.setAttribute('aria-label',`${selected.id} recorded autonomous experiment`);video.load();
  $('#policy-select').replaceChildren(...selected.policies.map((policy,i)=>{const option=document.createElement('option');option.value=i;option.textContent=policy.label;return option;}));
  $('#run-details').hidden=true;$('#details-toggle').setAttribute('aria-expanded','false');renderRunText();
  const nextHash=selected.id==='resume'?'#experiments':`#run-${selected.id}`;if(autoplay){history.replaceState(null,'',nextHash);video.play().catch(()=>{});}
  const policyIndex=selected.default_policy||0;$('#policy-select').value=String(policyIndex);await loadPolicy(policyIndex);
}
function setLanguage(lang){
  language=lang;try{localStorage.setItem('robo-language',lang);}catch{/* Preference is optional. */}
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  for(const [node,original] of originalText){node.innerHTML=lang==='zh'?(zh[node.dataset.i18n]||original):original;}
  $('#language').textContent=lang==='zh'?'EN':'中文';$('#language').setAttribute('aria-label',lang==='zh'?'Switch to English':'切换到中文');renderRunText();syncHeroButton();
}
async function copy(text,button){
  const old=button.textContent;
  try{await navigator.clipboard.writeText(text);button.textContent=language==='zh'?'已复制':'Copied';notify(language==='zh'?'已复制到剪贴板':'Copied to clipboard');setTimeout(()=>{button.textContent=old;},1800);}
  catch{notify(language==='zh'?'浏览器未允许复制，请打开原始文件手动复制。':'Copy unavailable. Open the original file to copy manually.');}
}
const hero=$('#hero-video');
function syncHeroButton(){const paused=hero.paused;$('#hero-toggle').textContent=paused?'▶':'Ⅱ';$('#hero-toggle').setAttribute('aria-label',language==='zh'?(paused?'播放主录像':'暂停主录像'):(paused?'Play hero recording':'Pause hero recording'));}
function updateHero(){if(heroVisible&&!heroUserPaused&&!reducedMotion.matches&&!document.hidden)hero.play().catch(syncHeroButton);else hero.pause();}
hero.addEventListener('play',syncHeroButton);hero.addEventListener('pause',syncHeroButton);
$('#hero-toggle').addEventListener('click',()=>{heroUserPaused=!hero.paused;if(hero.paused)hero.play().catch(()=>notify(language==='zh'?'请重试播放':'Please try playback again'));else hero.pause();});
new IntersectionObserver(entries=>{heroVisible=entries[0].isIntersecting;updateHero();},{threshold:.1}).observe(hero);
reducedMotion.addEventListener('change',updateHero);document.addEventListener('visibilitychange',()=>{updateHero();if(document.hidden)$('#run-video').pause();});
$('#language').addEventListener('click',()=>setLanguage(language==='en'?'zh':'en'));
$('#copy-policy').addEventListener('click',()=>copy(source,$('#copy-policy')));
$('#copy-command').addEventListener('click',()=>copy('robo --legacy-harness --workdir .',$('#copy-command')));
$('#policy-select').addEventListener('change',event=>loadPolicy(Number(event.target.value)));
$('#details-toggle').addEventListener('click',()=>{$('#run-details').hidden=!$('#run-details').hidden;$('#details-toggle').setAttribute('aria-expanded',String(!$('#run-details').hidden));renderRunText();});
const tabs=[...document.querySelectorAll('[data-task]')];
for(const tab of tabs){tab.addEventListener('click',()=>selectRun(tab.dataset.task,{autoplay:true}));tab.addEventListener('keydown',event=>{const index=tabs.indexOf(tab);let target;if(event.key==='ArrowRight')target=tabs[(index+1)%tabs.length];if(event.key==='ArrowLeft')target=tabs[(index-1+tabs.length)%tabs.length];if(event.key==='Home')target=tabs[0];if(event.key==='End')target=tabs.at(-1);if(target){event.preventDefault();target.focus();selectRun(target.dataset.task,{autoplay:true});}});}
const initialId=location.hash.startsWith('#run-')?location.hash.slice(5):'nut';
setLanguage(language);await selectRun(initialId);
if(location.hash.startsWith('#run-'))$('#experiments').scrollIntoView({behavior:'instant'});

window.addEventListener('hashchange',()=>{const id=location.hash.slice(5);if(location.hash.startsWith('#run-')&&runs.some(run=>run.id===id)){selectRun(id);$('#experiments').scrollIntoView({behavior:'instant'});}});
