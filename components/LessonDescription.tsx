import MockTakenlijst from "@/components/MockTakenlijst";

type Props = {
  text: string;
};

// Renders a lesson description that supports a bit of lightweight markup:
//   **bold**            -> bold text
//   ![alt](/path.png)   -> an image placed between paragraphs (add |small to shrink)
//   {{takenlijst}}      -> an inline rendered component
//   {{big:...}}         -> a large, emphasised callout line
const TOKEN_RE =
  /!\[([^\]]*)\]\(([^)]+)\)|\{\{big:([^}]+)\}\}|\{\{([a-z-]+)\}\}/g;

const COMPONENTS: Record<string, React.ReactNode> = {
  takenlijst: <MockTakenlijst />,
};

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

type Block =
  | { type: "text"; value: string }
  | { type: "image"; src: string; alt: string }
  | { type: "component"; name: string }
  | { type: "big"; value: string };

export default function LessonDescription({ text }: Props) {
  const blocks: Block[] = [];
  let lastIndex = 0;
  for (const match of text.matchAll(TOKEN_RE)) {
    const [full, alt, src, big, component] = match;
    const start = match.index ?? 0;
    if (start > lastIndex) {
      blocks.push({ type: "text", value: text.slice(lastIndex, start) });
    }
    if (big) {
      blocks.push({ type: "big", value: big });
    } else if (component) {
      blocks.push({ type: "component", name: component });
    } else {
      blocks.push({ type: "image", src, alt });
    }
    lastIndex = start + full.length;
  }
  if (lastIndex < text.length) {
    blocks.push({ type: "text", value: text.slice(lastIndex) });
  }

  return (
    <div className="mt-5 space-y-5">
      {blocks.map((block, i) => {
        if (block.type === "big") {
          return (
            <p
              key={i}
              className="text-2xl md:text-3xl font-bold text-dark leading-snug"
            >
              {block.value}
            </p>
          );
        }
        if (block.type === "component") {
          return <div key={i}>{COMPONENTS[block.name] ?? null}</div>;
        }
        if (block.type === "image") {
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
        }
        return (
          block.value.trim() && (
            <p
              key={i}
              className="text-dark/80 leading-relaxed whitespace-pre-line"
            >
              {renderBold(block.value.trim(), `b${i}`)}
            </p>
          )
        );
      })}
    </div>
  );
}
