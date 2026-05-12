type Props = {
  loomId: string;
  title?: string;
};

export default function LoomVideo({ loomId, title }: Props) {
  const src = `https://www.loom.com/embed/${loomId}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`;
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black shadow-lg" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={src}
        title={title ?? "Loom video"}
        allow="fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
