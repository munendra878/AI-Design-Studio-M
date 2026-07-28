import { Wand2, Loader2 } from "lucide-react";

export default function GenerateButton({
  loading,
  onClick,
  text = "Generate AI Prompt",
}) {
  return (
    <button
      className="generate-btn"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2
            size={20}
            className="spin"
          />
          Generating...
        </>
      ) : (
        <>
          <Wand2 size={20} />
          {text}
        </>
      )}
    </button>
  );
}