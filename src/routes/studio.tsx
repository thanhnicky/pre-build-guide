import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import sanityConfig from "../../sanity.config";

export const Route = createFileRoute("/studio")({
  component: StudioPage,
});

function StudioPage() {
  const [StudioComp, setStudioComp] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import("sanity").then((mod) => {
      setStudioComp(() => mod.Studio);
    });
  }, []);

  if (!StudioComp) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FDFAF7", fontFamily: "Inter, sans-serif", color: "#5C3D1E" }}>
        Đang tải Studio...
      </div>
    );
  }

  return (
    <div style={{ height: "100vh" }}>
      <StudioComp config={sanityConfig} />
    </div>
  );
}
