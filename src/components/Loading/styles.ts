import { keyframes, styled } from "../../stitches.config";

const animationDuration = "8s";

// House to square transformation and sliding animation
const houseToSquareSlide = keyframes({
  // 1. Start in center as house
  "0%": {
    clipPath: "polygon(10% 50%, 50% 0%, 90% 50%, 90% 100%, 10% 100%)",
    transform: "translate(-50%, -50%)",
  },
  "10%": {
    clipPath: "polygon(10% 50%, 50% 0%, 90% 50%, 90% 100%, 10% 100%)",
    transform: "translate(-50%, -50%)",
  },

  // 2. Transform to square IN CENTER (triangle edges fold out)
  "15%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(-50%, -50%)",
  },

  // 3. Move to top left as square
  "20%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(-100%, -100%)",
  },

  // 4. Move to top right as square
  "30%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(0%, -100%)",
  },

  // 5. Move back to center as square
  "35%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(-50%, -50%)",
  },

  // 6. Transform back to house IN CENTER
  "40%": {
    clipPath: "polygon(10% 50%, 50% 0%, 90% 50%, 90% 100%, 10% 100%)",
    transform: "translate(-50%, -50%)",
  },

  // 7. Hold as house in center
  "50%": {
    clipPath: "polygon(10% 50%, 50% 0%, 90% 50%, 90% 100%, 10% 100%)",
    transform: "translate(-50%, -50%)",
  },

  // 8. Transform to square IN CENTER
  "55%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(-50%, -50%)",
  },

  // 9. Move to bottom right as square
  "60%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(0%, 0%)",
  },

  // 10. Move to bottom left as square
  "70%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(-100%, 0%)",
  },

  // 11. Move back to center as square
  "75%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(-50%, -50%)",
  },

  // 12. Transform back to house IN CENTER
  "80%": {
    clipPath: "polygon(10% 50%, 50% 0%, 90% 50%, 90% 100%, 10% 100%)",
    transform: "translate(-50%, -50%)",
  },

  // 13. Hold as house before restart
  "100%": {
    clipPath: "polygon(10% 50%, 50% 0%, 90% 50%, 90% 100%, 10% 100%)",
    transform: "translate(-50%, -50%)",
  },
});

export const LoadingStyled = styled("div", {
  // Main animated element
  "&::before": {
    animation: `${houseToSquareSlide} ${animationDuration} cubic-bezier(0.45, 0, 0.55, 1) infinite`,
    backgroundColor: "currentColor",
    content: "",
    height: "50%",
    left: "50%",
    position: "absolute",
    top: "50%",
    transformOrigin: "center",
    width: "50%",
  },
  backgroundColor: "$yellow",
  display: "inline-flex",
  height: "$medium",
  position: "relative",

  width: "$medium",
});

export const LoadingOverlayStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$text",
  border: "1px solid $text",
  borderRadius: "$small",
  bottom: "$medium",
  boxShadow: "$large",
  color: "$background",
  display: "flex",
  justifyContent: "center",
  maxWidth: "600px",
  padding: "$smallest $small",
  phone: {
    left: "50%",
    maxWidth: "95%",
    textAlign: "center",
    transform: "translateX(-50%)",
    width: "fit-content",
  },
  pointerEvents: "none",
  position: "fixed",
  right: "$medium",
  userSelect: "none",
  zIndex: "$toast",
});

export const LoadingOverlayTitledStyled = styled("div", {
  marginLeft: "$small",
});
