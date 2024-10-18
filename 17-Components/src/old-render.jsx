// import { useRef, useState } from "react";
// import "./App.css";
// import Button from "./components/Button/Button";
// import Input from "./components/Input/Input";

// function App() {
//   const inputRef = useRef(null)
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(inputRef.current.value)
//     inputRef.current.value = 10000
//     console.log("USERNAME : ", username);
//     console.log("PASSWORD : ", password);
//   }

//   return (
//     <>
//       <form action="" method="get">
//         <Input
//           ref={inputRef}
//           onClick={() => alert("you click me")}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//         />
//         <Input
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <Input placeholder="RandomNumber" />
//         <Button
//           className="bg-blue-500 font-bold px-4 py-2 rounded-md"
//           onClick={handleSubmit}
//         ></Button>
//       </form>
//     </>
//   );
// }

// export default App;
