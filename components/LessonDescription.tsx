type Props = {
  text: string;
};

// Renders a lesson description that supports two bits of lightweight markup:
//   **bold**            -> bold text
//   ![alt](/path.png)   -> an image placed between paragraphs
const IMAGE_RE = /!\[([^\]]*)\]\(([^)]+)\)/g;

function renderBold(text: string, keyPrefix: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`${keyPrefix}-${i}`} className="font-semibold text-dark">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function LessonDescription({ text }: Props) {
  const blocks: Array<
    { type: "text"; value: string } | { type: "image"; src: string; alt: string }
  > = [];
  let lastIndex = 0;
  for (const match of text.matchAll(IMAGE_RE)) {
    const [full, alt, src] = match;
    const start = match.index ?? 0;
    if (start > lastIndex) {
      blocks.push({ type: "text", value: text.slice(lastIndex, start) });
    }
    blocks.push({ type: "image", src, alt });
    lastIndex = start + full.length;
  }
  if (lastIndex < text.length) {
    blocks.push({ type: "text", value: text.slice(lastIndex) });
  }

  return (
    <div className="mt-5 space-y-5">
      {blocks.map((block, i) =>
        block.type === "image" ? (
          (() => {
            const [alt, size] = block.alt.split("|");
            const widthClass = size === "small" ? "max-w-sm" : "w-full";
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={block.src}
                alt={alt}
                className={`rounded-xl border border-black/10 shadow-sm ${widthClass}`}
              />
            );
          })()
        ) : (
          block.value.trim() && (
            <p
              key={i}
              className="text-dark/80 leading-relaxed whitespace-pre-line"
            >
              {renderBold(block.value.trim(), `b${i}`)}
            </p>
          )
        )
      )}
    </div>
  );
}
