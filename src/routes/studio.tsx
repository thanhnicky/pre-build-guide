import { createFileRoute } from "@tanstack/react-router";
import { Studio } from "sanity";
import sanityConfig from "../../sanity.config";

export const Route = createFileRoute("/studio")({
  component: StudioPage,
});

function StudioPage() {
  return (
    <div style={{ height: "100vh" }}>
      <Studio config={sanityConfig} />
    </div>
  );
}
