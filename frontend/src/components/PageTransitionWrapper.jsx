//Esto debería estar en la carpeta de hooks

// Aplica una animación de recorte (clip-path) sobre TODO el documento (<html>).

// Comienza mostrando una especie de banda horizontal (25% 75%), que parece un rectángulo pequeño o delgado.

// Luego lo expande visualmente hasta cubrir toda la pantalla con un efecto de “apertura”.
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
        duration: 3000, // Ajusta la duración según tu preferencia
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
      }
    );
  };
}