interface AlertProps {
  message: string;
  type?: "success" | "error";
}

export default function Alert({
  message,
  type = "success",
}: AlertProps) {
  const styles =
    type === "success"
      ? "bg-green-50 text-green-800 border-green-200"
      : "bg-red-50 text-red-800 border-red-200";

  return <div className={`rounded-xl border p-3 ${styles}`}>{message}</div>;
}