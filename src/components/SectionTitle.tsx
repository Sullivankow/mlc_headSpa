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
        <div className="section-title">
            <p className="section-eyebrow">
                {eyebrow}
            </p>
            <h2 className="display-serif">{title}</h2>
            {text && <p className="section-title-copy">{text}</p>}
        </div>
    );
}
