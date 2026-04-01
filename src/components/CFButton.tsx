type CFButtonTypes = "primary" | "secondary";

interface CFButtonProps {
    url: string;
    label: string;
    variant?: CFButtonTypes;
    buttonType?: CFButtonTypes;
}

function CFButton({
    url,
    label,
    variant = "primary",
    buttonType = "primary",
}: CFButtonProps) {
    const sizeClasses =
        variant === "secondary" ? "text-xs py-2 px-4" : "text-sm py-3 px-6";
    const typeClasses =
        buttonType === "secondary"
            ? "border border-technical-blue text-technical-blue hover:bg-technical-blue hover:text-white"
            : "bg-black text-white border-black hover:bg-technical-gray hover:border-technical-gray";

    return (
        <a
            className={`relative cursor-pointer overflow-hidden rounded-none border font-sans font-semibold tracking-wide uppercase transition-all duration-200 hover:-translate-y-0.5 ${typeClasses} ${sizeClasses} inline-flex items-center justify-center`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="tracking-wider">{label}</span>
        </a>
    );
}

export default CFButton;
