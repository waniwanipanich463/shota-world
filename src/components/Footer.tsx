import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-12 bg-background text-foreground/40 text-[10px] md:text-xs font-sans text-center border-t border-foreground/5">
            <div className="flex flex-col items-center gap-6 tracking-[0.3em]">
                <p>© 2026 SHOTA WORLD. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-8">
                    <Link href="/privacy" className="hover:text-turquoise cursor-pointer transition-colors uppercase">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}
