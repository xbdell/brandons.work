interface TerminalPageIndicatorProps {
    pageTitle: string;
}

function TerminalPageIndicator({ pageTitle }: TerminalPageIndicatorProps) {
    return (
        <div className="text-technical-gray border-base-300 inline-flex items-center gap-2 border bg-white px-4 py-2 font-mono text-sm font-semibold tracking-widest uppercase">
            <span className="bg-technical-blue animate-pulse-slow relative block h-2 w-2"></span>
            <span>{pageTitle}</span>
        </div>
    );
}

export default TerminalPageIndicator;
