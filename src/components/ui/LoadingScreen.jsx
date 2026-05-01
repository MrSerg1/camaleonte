import { Skeleton } from "./Skeleton.jsx";

export function LoadingScreen() {
  return (
    <div className="loading-screen">
      <Skeleton className="loading-screen-skeleton" />
      <span className="loading-screen-text">Cargando...</span>
    </div>
  );
}
