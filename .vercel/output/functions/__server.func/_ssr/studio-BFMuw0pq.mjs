import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function StudioRedirect() {
  reactExports.useEffect(() => {
    window.location.href = "/studio/index.html";
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#FDFAF7",
    fontFamily: "Inter, sans-serif",
    color: "#5C3D1E"
  }, children: "Đang chuyển hướng đến Studio..." });
}
export {
  StudioRedirect as component
};
