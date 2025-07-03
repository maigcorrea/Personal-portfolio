import { useLocation, useNavigate } from "react-router-dom";

export function useTriggerPageTransition() {
  return () => {
    document.documentElement.animate(
      [
        {
          clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        //pseudoElement: "::view-transition-new(root)", // puedes quitar esto si no se aplica
      }
    );
  };
}