import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";

export const Route = createFileRoute("/studio")({
  component: StudioPage,
});

function StudioPage() {
  const [ready, setReady] = useState<{ Studio: React.ComponentType<any>; config: any } | null>(null);

  useEffect(() => {
    Promise.all([
      import("sanity"),
      import("../../sanity.config"),
    ]).then(([sanityMod, configMod]) => {
      setReady({ Studio: sanityMod.Studio, config: configMod.default });
    });
  }, []);

  if (!ready) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FDFAF7", fontFamily: "Inter, sans-serif", color: "#5C3D1E" }}>
        Đang tải Studio...
      </div>
    );
  }

  return (
    <div style={{ height: "100vh" }}>
      <ready.Studio config={ready.config} />
    </div>
  );
}
