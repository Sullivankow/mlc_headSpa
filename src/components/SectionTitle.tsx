export function SectionTitle({
    eyebrow,
    title,
    text,
}: {
    readonly eyebrow: string;
    readonly title: string;
    readonly text?: string;
}) {
    return (
        <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="uppercase tracking-[.25em] text-xs gold font-semibold mb-3">
                {eyebrow}
            </p>
            <h2 className="serif text-4xl md:text-5xl mb-4">{title}</h2>
            {text && <p className="text-[#76665a] leading-relaxed">{text}</p>}
        </div>
    );
}
