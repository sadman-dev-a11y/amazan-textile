import js from '@eslint/js';
import ts from 'typescript-eslint';
export default ts.config({ignores:['dist']},js.configs.recommended,...ts.configs.recommended,{files:['src/**/*.{ts,tsx}'],languageOptions:{globals:{document:'readonly',window:'readonly',navigator:'readonly',IntersectionObserver:'readonly',HTMLDialogElement:'readonly',HTMLImageElement:'readonly',HTMLElement:'readonly',URL:'readonly',URLSearchParams:'readonly',console:'readonly'}}});
