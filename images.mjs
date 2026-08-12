/** 06 採用「アオゾラ工機」白 × 原色青 × 黄 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { atmosphere, texture, portraitBox } from '../_shared/scenes.mjs';
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), 'images');
mkdirSync(OUT, { recursive: true });
const put = (n, s) => writeFileSync(resolve(OUT, n + '.svg'), s, 'utf8');

const MIST='#EAF0FB', BLUE='#1D5FD8', INK='#141A26';

put('hero', atmosphere({ w:1400,h:1000, palette:[MIST,'#D3E2FA','#FFF0C2','#E8EFFC'], seed:83, light:.6, label:'背景' }));
put('og',   atmosphere({ w:1200,h:630,  palette:[MIST,'#D3E2FA','#FFF0C2'],           seed:83, light:.6, label:'OGP' }));
put('band', atmosphere({ w:1400,h:420,  palette:[BLUE,'#2E74F0','#0F3E9E'],           seed:91, light:.3, label:'帯' }));
put('floor',texture({ w:1000,h:700, base:'#DBE3EE', tint:'#4A5568', kind:'concrete', label:'工場床' }));
['e-01','e-02','e-03'].forEach((n,i)=>put(n, portraitBox({ w:700,h:900, bg:['#D3E2FA','#FFF0C2','#E8EFFC'][i], ink:INK, accent:BLUE, label:'実写差し替え', note:'社員 / 作業着' })));
put('plant',portraitBox({ w:1200,h:800, bg:MIST, ink:INK, accent:BLUE, label:'実写差し替え', note:'工場内' }));
console.log('✓ 06-hiring 8枚');
