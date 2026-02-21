export default function Footer() {
    return (
        <footer className="w-full py-8 bg-black text-neutral-500 text-xs md:text-sm font-sans text-center border-t border-neutral-900">
            <div className="flex flex-col items-center gap-4">
                <p>© 2026 SHOTA NIWANO. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-4">
                    <span className="hover:text-white cursor-pointer transition-colors">PRIVACY POLICY</span>
                </div>
            </div>
        </footer>
    );
}
