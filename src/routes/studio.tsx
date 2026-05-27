import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/studio")({
  component: StudioRedirect,
});

function StudioRedirect() {
  useEffect(() => {
    window.location.href = "https://songo-blog.sanity.studio";
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FDFAF7", fontFamily: "Inter, sans-serif", color: "#5C3D1E" }}>
      Đang chuyển hướng đến Studio...
    </div>
  );
}
