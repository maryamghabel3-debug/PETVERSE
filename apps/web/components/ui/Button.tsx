export function Button({children, ...p}:any){ return <button {...p} className={"px-4 py-2 rounded-xl bg-[#FF6B4A] text-white font-medium hover:opacity-90 "+(p.className||"")}>{children}</button>}
