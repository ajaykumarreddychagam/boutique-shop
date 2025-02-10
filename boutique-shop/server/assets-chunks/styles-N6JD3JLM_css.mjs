export default `@layer theme,base,components,utilities;@layer theme{:root,:host{--font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-400: oklch(.704 .191 22.216);--color-red-500: oklch(.637 .237 25.331);--color-green-400: oklch(.792 .209 151.711);--color-blue-400: oklch(.707 .165 254.624);--color-blue-500: oklch(.623 .214 259.815);--color-blue-600: oklch(.546 .245 262.881);--color-indigo-600: oklch(.511 .262 276.966);--color-indigo-700: oklch(.457 .24 277.023);--color-purple-400: oklch(.714 .203 305.504);--color-pink-400: oklch(.718 .202 349.761);--color-pink-500: oklch(.656 .241 354.308);--color-gray-100: oklch(.967 .003 264.542);--color-gray-200: oklch(.928 .006 264.531);--color-gray-400: oklch(.707 .022 261.325);--color-gray-500: oklch(.551 .027 264.364);--color-gray-700: oklch(.373 .034 259.733);--color-gray-800: oklch(.278 .033 256.848);--color-gray-900: oklch(.21 .034 264.665);--color-black: #000;--color-white: #fff;--spacing: .25rem;--container-xs: 20rem;--container-lg: 32rem;--container-2xl: 42rem;--container-7xl: 80rem;--text-sm: .875rem;--text-sm--line-height: calc(1.25 / .875);--text-base: 1rem;--text-base--line-height: 1.5 ;--text-lg: 1.125rem;--text-lg--line-height: calc(1.75 / 1.125);--text-xl: 1.25rem;--text-xl--line-height: calc(1.75 / 1.25);--text-2xl: 1.5rem;--text-2xl--line-height: calc(2 / 1.5);--text-4xl: 2.25rem;--text-4xl--line-height: calc(2.5 / 2.25);--text-6xl: 3.75rem;--text-6xl--line-height: 1;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700;--tracking-tight: -.025em;--radius-md: .375rem;--radius-lg: .5rem;--ease-in: cubic-bezier(.4, 0, 1, 1);--ease-out: cubic-bezier(0, 0, .2, 1);--ease-in-out: cubic-bezier(.4, 0, .2, 1);--default-transition-duration: .15s;--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);--default-font-family: var(--font-sans);--default-font-feature-settings: var(--font-sans--font-feature-settings);--default-font-variation-settings: var( --font-sans--font-variation-settings );--default-mono-font-family: var(--font-mono);--default-mono-font-feature-settings: var( --font-mono--font-feature-settings );--default-mono-font-variation-settings: var( --font-mono--font-variation-settings )}}@layer base{*,:after,:before,::backdrop,::file-selector-button{box-sizing:border-box;margin:0;padding:0;border:0 solid}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:var( --default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" );font-feature-settings:var(--default-font-feature-settings, normal);font-variation-settings:var( --default-font-variation-settings, normal );-webkit-tap-highlight-color:transparent}body{line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var( --default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace );font-feature-settings:var( --default-mono-font-feature-settings, normal );font-variation-settings:var( --default-mono-font-variation-settings, normal );font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea,::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;border-radius:0;background-color:transparent;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1;color:color-mix(in oklab,currentColor 50%,transparent)}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]),::file-selector-button{appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer utilities{.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.-inset-0{inset:calc(var(--spacing) * -0)}.-inset-0\\.5{inset:calc(var(--spacing) * -.5)}.inset-0{inset:calc(var(--spacing) * 0)}.inset-x-0{inset-inline:calc(var(--spacing) * 0)}.top-1{top:calc(var(--spacing) * 1)}.top-1\\/2{top:50%}.top-full{top:100%}.right-0{right:calc(var(--spacing) * 0)}.right-4{right:calc(var(--spacing) * 4)}.bottom-4{bottom:calc(var(--spacing) * 4)}.left-0{left:calc(var(--spacing) * 0)}.left-4{left:calc(var(--spacing) * 4)}.z-10{z-index:10}.z-40{z-index:40}.col-start-2{grid-column-start:2}.row-start-1{grid-row-start:1}.container{width:100%}@media (width >= 40rem){.container{max-width:40rem}}@media (width >= 48rem){.container{max-width:48rem}}@media (width >= 64rem){.container{max-width:64rem}}@media (width >= 80rem){.container{max-width:80rem}}@media (width >= 96rem){.container{max-width:96rem}}.-m-2{margin:calc(var(--spacing) * -2)}.m-48{margin:calc(var(--spacing) * 48)}.m-55{margin:calc(var(--spacing) * 55)}.m-87{margin:calc(var(--spacing) * 87)}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-10{margin-top:calc(var(--spacing) * 10)}.mt-12{margin-top:calc(var(--spacing) * 12)}.-mb-px{margin-bottom:-1px}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-8{margin-bottom:calc(var(--spacing) * 8)}.ml-2{margin-left:calc(var(--spacing) * 2)}.ml-3{margin-left:calc(var(--spacing) * 3)}.ml-4{margin-left:calc(var(--spacing) * 4)}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.hidden\\!{display:none!important}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1 / 1}.size-6{width:calc(var(--spacing) * 6);height:calc(var(--spacing) * 6)}.size-full{width:100%;height:100%}.h-1{height:calc(var(--spacing) * 1)}.h-2{height:calc(var(--spacing) * 2)}.h-3{height:calc(var(--spacing) * 3)}.h-6{height:calc(var(--spacing) * 6)}.h-8{height:calc(var(--spacing) * 8)}.h-10{height:calc(var(--spacing) * 10)}.h-16{height:calc(var(--spacing) * 16)}.h-64{height:calc(var(--spacing) * 64)}.h-\\[500px\\]{height:500px}.h-auto{height:auto}.h-full{height:100%}.w-1{width:calc(var(--spacing) * 1)}.w-3{width:calc(var(--spacing) * 3)}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-44{width:calc(var(--spacing) * 44)}.w-auto{width:auto}.w-full{width:100%}.w-px{width:1px}.max-w-2xl{max-width:var(--container-2xl)}.max-w-7xl{max-width:var(--container-7xl)}.max-w-xs{max-width:var(--container-xs)}.min-w-full{min-width:100%}.flex-1{flex:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.-translate-x-full{--tw-translate-x: -100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1{--tw-translate-y: calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-0{--tw-translate-x: calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y)}.resize{resize:both}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing) * 2)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-8{gap:calc(var(--spacing) * 8)}.gap-x-4{column-gap:calc(var(--spacing) * 4)}.gap-x-6{column-gap:calc(var(--spacing) * 6)}.gap-x-8{column-gap:calc(var(--spacing) * 8)}.space-y-2 :where(>:not(:last-child)){--tw-space-y-reverse: 0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}.space-y-4 :where(>:not(:last-child)){--tw-space-y-reverse: 0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}.space-y-6 :where(>:not(:last-child)){--tw-space-y-reverse: 0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.space-y-10 :where(>:not(:last-child)){--tw-space-y-reverse: 0;margin-block-start:calc(calc(var(--spacing) * 10) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 10) * calc(1 - var(--tw-space-y-reverse)))}.gap-y-6{row-gap:calc(var(--spacing) * 6)}.gap-y-10{row-gap:calc(var(--spacing) * 10)}.space-x-4 :where(>:not(:last-child)){--tw-space-x-reverse: 0;margin-inline-start:calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)))}.space-x-6 :where(>:not(:last-child)){--tw-space-x-reverse: 0;margin-inline-start:calc(calc(var(--spacing) * 6) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-x-reverse)))}.space-x-8 :where(>:not(:last-child)){--tw-space-x-reverse: 0;margin-inline-start:calc(calc(var(--spacing) * 8) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-x-reverse)))}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:calc(infinity * 1px)}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-800{border-color:var(--color-gray-800)}.border-indigo-600{border-color:var(--color-indigo-600)}.border-transparent{border-color:transparent}.border-white{border-color:var(--color-white)}.bg-black{background-color:var(--color-black)}.bg-black\\/25{background-color:color-mix(in oklab,var(--color-black) 25%,transparent)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-indigo-600{background-color:var(--color-indigo-600)}.bg-white{background-color:var(--color-white)}.bg-gradient-to-r{--tw-gradient-position: to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-purple-400{--tw-gradient-from: var(--color-purple-400);--tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-pink-500{--tw-gradient-via: var(--color-pink-500);--tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-via-stops)}.to-red-500{--tw-gradient-to: var(--color-red-500);--tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-cover{object-fit:cover}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-12{padding-block:calc(var(--spacing) * 12)}.py-16{padding-block:calc(var(--spacing) * 16)}.pt-5{padding-top:calc(var(--spacing) * 5)}.pt-8{padding-top:calc(var(--spacing) * 8)}.pt-10{padding-top:calc(var(--spacing) * 10)}.pt-16{padding-top:calc(var(--spacing) * 16)}.pt-px{padding-top:1px}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-8{padding-bottom:calc(var(--spacing) * 8)}.pb-12{padding-bottom:calc(var(--spacing) * 12)}.pb-80{padding-bottom:calc(var(--spacing) * 80)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading, var(--text-2xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading, var(--text-4xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading, var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading, var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading, var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading, var(--text-xl--line-height))}.font-bold{--tw-font-weight: var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight: var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight: var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking: var(--tracking-tight);letter-spacing:var(--tracking-tight)}.whitespace-nowrap{white-space:nowrap}.text-black{color:var(--color-black)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-green-400{color:var(--color-green-400)}.text-indigo-600{color:var(--color-indigo-600)}.text-red-400{color:var(--color-red-400)}.text-white{color:var(--color-white)}.opacity-0{opacity:0%}.opacity-100{opacity:100%}.ring{--tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow,.shadow-sm{--tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / .1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / .1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.blur{--tw-blur: blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:var(--tw-duration, var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:var(--tw-duration, var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:var(--tw-duration, var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:var(--tw-duration, var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:var(--tw-duration, var(--default-transition-duration))}.duration-150{--tw-duration: .15s;transition-duration:.15s}.duration-200{--tw-duration: .2s;transition-duration:.2s}.duration-300{--tw-duration: .3s;transition-duration:.3s}.duration-500{--tw-duration: .5s;transition-duration:.5s}.ease-in{--tw-ease: var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease: var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-linear{--tw-ease: linear;transition-timing-function:linear}.ease-out{--tw-ease: var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover: hover){.group-hover\\:text-gray-500:is(:where(.group):hover *){color:var(--color-gray-500)}}@media (hover: hover){.group-hover\\:text-gray-800:is(:where(.group):hover *){color:var(--color-gray-800)}}@media (hover: hover){.group-hover\\:opacity-75:is(:where(.group):hover *){opacity:75%}}@media (hover: hover){.hover\\:bg-blue-600:hover{background-color:var(--color-blue-600)}}@media (hover: hover){.hover\\:bg-indigo-700:hover{background-color:var(--color-indigo-700)}}@media (hover: hover){.hover\\:text-blue-400:hover{color:var(--color-blue-400)}}@media (hover: hover){.hover\\:text-gray-500:hover{color:var(--color-gray-500)}}@media (hover: hover){.hover\\:text-gray-800:hover{color:var(--color-gray-800)}}@media (hover: hover){.hover\\:text-pink-400:hover{color:var(--color-pink-400)}}@media (hover: hover){.hover\\:text-red-400:hover{color:var(--color-red-400)}}@media (hover: hover){.hover\\:text-white:hover{color:var(--color-white)}}.focus\\:ring-2:focus{--tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400:focus{--tw-ring-color: var(--color-blue-400)}.focus\\:outline-none:focus{--tw-outline-style: none;outline-style:none}.disabled\\:opacity-50:disabled{opacity:50%}@media (width >= 40rem){.sm\\:static{position:static}}@media (width >= 40rem){.sm\\:top-0{top:calc(var(--spacing) * 0)}}@media (width >= 40rem){.sm\\:left-1\\/2{left:50%}}@media (width >= 40rem){.sm\\:mt-4{margin-top:calc(var(--spacing) * 4)}}@media (width >= 40rem){.sm\\:max-w-lg{max-width:var(--container-lg)}}@media (width >= 40rem){.sm\\:translate-x-8{--tw-translate-x: calc(var(--spacing) * 8);translate:var(--tw-translate-x) var(--tw-translate-y)}}@media (width >= 40rem){.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (width >= 40rem){.sm\\:space-y-4 :where(>:not(:last-child)){--tw-space-y-reverse: 0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}}@media (width >= 40rem){.sm\\:px-6{padding-inline:calc(var(--spacing) * 6)}}@media (width >= 40rem){.sm\\:py-12{padding-block:calc(var(--spacing) * 12)}}@media (width >= 40rem){.sm\\:py-24{padding-block:calc(var(--spacing) * 24)}}@media (width >= 40rem){.sm\\:pt-24{padding-top:calc(var(--spacing) * 24)}}@media (width >= 40rem){.sm\\:pb-40{padding-bottom:calc(var(--spacing) * 40)}}@media (width >= 40rem){.sm\\:text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading, var(--text-6xl--line-height))}}@media (width >= 40rem){.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading, var(--text-sm--line-height))}}@media (width >= 40rem){.sm\\:opacity-0{opacity:0%}}@media (width >= 48rem){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (width >= 48rem){.md\\:justify-end{justify-content:flex-end}}@media (width >= 48rem){.md\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading, var(--text-2xl--line-height))}}@media (width >= 48rem){.md\\:text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading, var(--text-6xl--line-height))}}@media (width >= 48rem){.md\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading, var(--text-xl--line-height))}}@media (width >= 64rem){.lg\\:absolute{position:absolute}}@media (width >= 64rem){.lg\\:inset-y-0{inset-block:calc(var(--spacing) * 0)}}@media (width >= 64rem){.lg\\:top-1\\/2{top:50%}}@media (width >= 64rem){.lg\\:left-1\\/2{left:50%}}@media (width >= 64rem){.lg\\:mx-auto{margin-inline:auto}}@media (width >= 64rem){.lg\\:ml-0{margin-left:calc(var(--spacing) * 0)}}@media (width >= 64rem){.lg\\:ml-6{margin-left:calc(var(--spacing) * 6)}}@media (width >= 64rem){.lg\\:ml-8{margin-left:calc(var(--spacing) * 8)}}@media (width >= 64rem){.lg\\:block{display:block}}@media (width >= 64rem){.lg\\:flex{display:flex}}@media (width >= 64rem){.lg\\:hidden{display:none}}@media (width >= 64rem){.lg\\:aspect-auto{aspect-ratio:auto}}@media (width >= 64rem){.lg\\:h-80{height:calc(var(--spacing) * 80)}}@media (width >= 64rem){.lg\\:w-full{width:100%}}@media (width >= 64rem){.lg\\:max-w-7xl{max-width:var(--container-7xl)}}@media (width >= 64rem){.lg\\:flex-1{flex:1}}@media (width >= 64rem){.lg\\:-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}}@media (width >= 64rem){.lg\\:translate-x-8{--tw-translate-x: calc(var(--spacing) * 8);translate:var(--tw-translate-x) var(--tw-translate-y)}}@media (width >= 64rem){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width >= 64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width >= 64rem){.lg\\:items-center{align-items:center}}@media (width >= 64rem){.lg\\:justify-end{justify-content:flex-end}}@media (width >= 64rem){.lg\\:gap-y-8{row-gap:calc(var(--spacing) * 8)}}@media (width >= 64rem){.lg\\:space-x-6 :where(>:not(:last-child)){--tw-space-x-reverse: 0;margin-inline-start:calc(calc(var(--spacing) * 6) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-x-reverse)))}}@media (width >= 64rem){.lg\\:space-x-8 :where(>:not(:last-child)){--tw-space-x-reverse: 0;margin-inline-start:calc(calc(var(--spacing) * 8) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-x-reverse)))}}@media (width >= 64rem){.lg\\:self-stretch{align-self:stretch}}@media (width >= 64rem){.lg\\:px-8{padding-inline:calc(var(--spacing) * 8)}}@media (width >= 64rem){.lg\\:pt-40{padding-top:calc(var(--spacing) * 40)}}@media (width >= 64rem){.lg\\:pb-48{padding-bottom:calc(var(--spacing) * 48)}}@media (width >= 64rem){.lg\\:opacity-100{opacity:100%}}@media (width >= 80rem){.xl\\:aspect-7\\/8{aspect-ratio:7/8}}@media (width >= 80rem){.xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width >= 80rem){.xl\\:gap-x-8{column-gap:calc(var(--spacing) * 8)}}}@property --tw-translate-x{syntax: "*"; inherits: false; initial-value: 0;}@property --tw-translate-y{syntax: "*"; inherits: false; initial-value: 0;}@property --tw-translate-z{syntax: "*"; inherits: false; initial-value: 0;}@property --tw-rotate-x{syntax: "*"; inherits: false; initial-value: rotateX(0);}@property --tw-rotate-y{syntax: "*"; inherits: false; initial-value: rotateY(0);}@property --tw-rotate-z{syntax: "*"; inherits: false; initial-value: rotateZ(0);}@property --tw-skew-x{syntax: "*"; inherits: false; initial-value: skewX(0);}@property --tw-skew-y{syntax: "*"; inherits: false; initial-value: skewY(0);}@property --tw-space-y-reverse{syntax: "*"; inherits: false; initial-value: 0;}@property --tw-space-x-reverse{syntax: "*"; inherits: false; initial-value: 0;}@property --tw-border-style{syntax: "*"; inherits: false; initial-value: solid;}@property --tw-gradient-position{syntax: "*"; inherits: false;}@property --tw-gradient-from{syntax: "<color>"; inherits: false; initial-value: #0000;}@property --tw-gradient-via{syntax: "<color>"; inherits: false; initial-value: #0000;}@property --tw-gradient-to{syntax: "<color>"; inherits: false; initial-value: #0000;}@property --tw-gradient-stops{syntax: "*"; inherits: false;}@property --tw-gradient-via-stops{syntax: "*"; inherits: false;}@property --tw-gradient-from-position{syntax: "<length-percentage>"; inherits: false; initial-value: 0%;}@property --tw-gradient-via-position{syntax: "<length-percentage>"; inherits: false; initial-value: 50%;}@property --tw-gradient-to-position{syntax: "<length-percentage>"; inherits: false; initial-value: 100%;}@property --tw-font-weight{syntax: "*"; inherits: false;}@property --tw-tracking{syntax: "*"; inherits: false;}@property --tw-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-shadow-color{syntax: "*"; inherits: false;}@property --tw-inset-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-inset-shadow-color{syntax: "*"; inherits: false;}@property --tw-ring-color{syntax: "*"; inherits: false;}@property --tw-ring-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-inset-ring-color{syntax: "*"; inherits: false;}@property --tw-inset-ring-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-ring-inset{syntax: "*"; inherits: false;}@property --tw-ring-offset-width{syntax: "<length>"; inherits: false; initial-value: 0px;}@property --tw-ring-offset-color{syntax: "*"; inherits: false; initial-value: #fff;}@property --tw-ring-offset-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-blur{syntax: "*"; inherits: false;}@property --tw-brightness{syntax: "*"; inherits: false;}@property --tw-contrast{syntax: "*"; inherits: false;}@property --tw-grayscale{syntax: "*"; inherits: false;}@property --tw-hue-rotate{syntax: "*"; inherits: false;}@property --tw-invert{syntax: "*"; inherits: false;}@property --tw-opacity{syntax: "*"; inherits: false;}@property --tw-saturate{syntax: "*"; inherits: false;}@property --tw-sepia{syntax: "*"; inherits: false;}@property --tw-backdrop-blur{syntax: "*"; inherits: false;}@property --tw-backdrop-brightness{syntax: "*"; inherits: false;}@property --tw-backdrop-contrast{syntax: "*"; inherits: false;}@property --tw-backdrop-grayscale{syntax: "*"; inherits: false;}@property --tw-backdrop-hue-rotate{syntax: "*"; inherits: false;}@property --tw-backdrop-invert{syntax: "*"; inherits: false;}@property --tw-backdrop-opacity{syntax: "*"; inherits: false;}@property --tw-backdrop-saturate{syntax: "*"; inherits: false;}@property --tw-backdrop-sepia{syntax: "*"; inherits: false;}@property --tw-duration{syntax: "*"; inherits: false;}@property --tw-ease{syntax: "*"; inherits: false;}
`;