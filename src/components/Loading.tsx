import { CircleNotch } from "phosphor-react";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
}

export default function Loading(props: LoadingProps) {
  const { size = "md" } = props;

  return (
    <div className="flex flex-1 my-16 justify-center items-center">
      <CircleNotch 
        size={
          size === "sm" ? 10 :
          size === "md" ? 32 :
          size === "lg" ? 48 :
          32
        }
        className="text-terracota-600 animate-spin "/>
    </div>
  )
}