import { ToDoContainer } from "@/components/ToDoContainer";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ToDoContainer />
    </div>
  );
}
