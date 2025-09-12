// // // // import React from 'react'

// // // // function FertilizerAdvisor() {
// // // //   return (
// // // //     <div>
// // // //       <h1>FertlilizerAdvisor</h1>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default FertilizerAdvisor
// // // import React, { useState } from "react";
// // // import { getFertilizerRecommendation } from "../api/fertilizer";


// // // export default function FertilizerForm() {
// // //   const [form, setForm] = useState({
// // //     Temperature: "",
// // //     Humidity: "",
// // //     Moisture: "",
// // //     "Soil Type": "",
// // //     "Crop Type": "",
// // //     Nitrogen: "",
// // //     Potassium: "",
// // //     Phosphorous: ""
// // //   });
// // //   const [result, setResult] = useState(null);

// // //   const onChange = (e) => {
// // //     const { name, value } = e.target;
// // //     // Make numbers actually numbers
// // //     const numeric = ["Temperature","Humidity","Moisture","Nitrogen","Potassium","Phosphorous"];
// // //     setForm({ ...form, [name]: numeric.includes(name) ? Number(value) : value });
// // //   };

// // //   const onSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const data = await getFertilizerRecommendation(form);
// // //     setResult(data);
// // //   };

// // //   return (
// // //     <div style={{ maxWidth: 480 }}>
// // //       <h2>Fertilizer Advisor</h2>
// // //       <form onSubmit={onSubmit}>
// // //         {Object.keys(form).map((key) => (
// // //           <div key={key} style={{ marginBottom: 8 }}>
// // //             <label style={{ display: "block" }}>{key}</label>
// // //             <input name={key} value={form[key]} onChange={onChange} />
// // //           </div>
// // //         ))}
// // //         <button type="submit">Get Recommendation</button>
// // //       </form>

// // //       {result && (
// // //         <div style={{ marginTop: 16 }}>
// // //           <h3>Recommended: {result.fertilizer_name}</h3>
// // //           <p>Dosage: {result.dosage_per_acre}</p>
// // //           <h4>Purpose</h4>
// // //           <ul>{result.purpose.map((p, i) => <li key={i}>{p}</li>)}</ul>
// // //           <h4>Why this</h4>
// // //           <ul>{result.explanation.why_this_fertilizer.map((p, i) => <li key={i}>{p}</li>)}</ul>
// // //           <h4>Soil health</h4>
// // //           <ul>{result.explanation.soil_health.map((p, i) => <li key={i}>{p}</li>)}</ul>
// // //           <h4>Farmer notes</h4>
// // //           <ul>{result.explanation.farmer_notes.map((p, i) => <li key={i}>{p}</li>)}</ul>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // import React, { useState } from "react";
// // import { getFertilizerRecommendation } from "../api/fertilizer";

// // export default function FertilizerForm() {
// //   const [form, setForm] = useState({
// //     Temperature: "",
// //     Humidity: "",
// //     Moisture: "",
// //     "Soil Type": "",
// //     "Crop Type": "",
// //     Nitrogen: "",
// //     Potassium: "",
// //     Phosphorous: ""
// //   });
// //   const [result, setResult] = useState(null);

// //   const onChange = (e) => {
// //     const { name, value } = e.target;
// //     const numeric = [
// //       "Temperature",
// //       "Humidity",
// //       "Moisture",
// //       "Nitrogen",
// //       "Potassium",
// //       "Phosphorous"
// //     ];
// //     setForm({ ...form, [name]: numeric.includes(name) ? Number(value) : value });
// //   };

// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     const data = await getFertilizerRecommendation(form);
// //     setResult(data);
// //   };

// //   return (
// //     <div
// //       style={{
// //         minHeight: "100vh",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         background:
// //           "linear-gradient(135deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
// //         fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
// //         padding: "2rem"
// //       }}
// //     >
// //       <div
// //         style={{
// //           width: "100%",
// //           maxWidth: "550px",
// //           background: "rgba(255, 255, 255, 0.15)",
// //           backdropFilter: "blur(12px)",
// //           borderRadius: "20px",
// //           padding: "2rem",
// //           boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
// //           color: "#fff"
// //         }}
// //       >
// //         <h2 style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "1.8rem" }}>
// //           🌱 Fertilizer Advisor
// //         </h2>

// //         <form onSubmit={onSubmit}>
// //           {Object.keys(form).map((key) => (
// //             <div key={key} style={{ marginBottom: "1.2rem" }}>
// //               <label
// //                 style={{
// //                   display: "block",
// //                   fontWeight: "600",
// //                   marginBottom: "0.4rem"
// //                 }}
// //               >
// //                 {key}
// //               </label>
// //               <input
// //                 name={key}
// //                 value={form[key]}
// //                 onChange={onChange}
// //                 style={{
// //                   width: "100%",
// //                   padding: "0.7rem 1rem",
// //                   borderRadius: "10px",
// //                   border: "1px solid rgba(255,255,255,0.4)",
// //                   background: "rgba(255,255,255,0.2)",
// //                   color: "#fff",
// //                   fontSize: "1rem",
// //                   outline: "none"
// //                 }}
// //               />
// //             </div>
// //           ))}

// //           <button
// //             type="submit"
// //             style={{
// //               width: "100%",
// //               padding: "0.9rem",
// //               borderRadius: "12px",
// //               border: "none",
// //               background: "linear-gradient(90deg,#00c6ff,#0072ff)",
// //               color: "#fff",
// //               fontWeight: "600",
// //               fontSize: "1.1rem",
// //               cursor: "pointer",
// //               transition: "0.3s"
// //             }}
// //             onMouseOver={(e) =>
// //               (e.target.style.background = "linear-gradient(90deg,#0072ff,#00c6ff)")
// //             }
// //             onMouseOut={(e) =>
// //               (e.target.style.background = "linear-gradient(90deg,#00c6ff,#0072ff)")
// //             }
// //           >
// //             Get Recommendation
// //           </button>
// //         </form>

// //         {result && (
// //           <div
// //             style={{
// //               marginTop: "2rem",
// //               background: "rgba(255,255,255,0.15)",
// //               borderRadius: "15px",
// //               padding: "1.5rem",
// //               color: "#fff"
// //             }}
// //           >
// //             <h3 style={{ marginBottom: "0.5rem" }}>
// //               ✅ Recommended: {result.fertilizer_name}
// //             </h3>
// //             <p>Dosage: {result.dosage_per_acre}</p>

// //             <h4 style={{ marginTop: "1rem" }}>🌾 Purpose</h4>
// //             <ul>
// //               {result.purpose.map((p, i) => (
// //                 <li key={i}>{p}</li>
// //               ))}
// //             </ul>

// //             <h4 style={{ marginTop: "1rem" }}>💡 Why this</h4>
// //             <ul>
// //               {result.explanation.why_this_fertilizer.map((p, i) => (
// //                 <li key={i}>{p}</li>
// //               ))}
// //             </ul>

// //             <h4 style={{ marginTop: "1rem" }}>🌍 Soil health</h4>
// //             <ul>
// //               {result.explanation.soil_health.map((p, i) => (
// //                 <li key={i}>{p}</li>
// //               ))}
// //             </ul>

// //             <h4 style={{ marginTop: "1rem" }}>🧑‍🌾 Farmer notes</h4>
// //             <ul>
// //               {result.explanation.farmer_notes.map((p, i) => (
// //                 <li key={i}>{p}</li>
// //               ))}
// //             </ul>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
import React, { useState } from "react";
import { getFertilizerRecommendation } from "../api/fertilizer";

export default function FertilizerForm() {
  const [form, setForm] = useState({
    Temperature: "",
    Humidity: "",
    Moisture: "",
    "Soil Type": "",
    "Crop Type": "",
    Nitrogen: "",
    Potassium: "",
    Phosphorous: ""
  });
  const [result, setResult] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    const numeric = [
      "Temperature",
      "Humidity",
      "Moisture",
      "Nitrogen",
      "Potassium",
      "Phosphorous"
    ];
    setForm({ ...form, [name]: numeric.includes(name) ? Number(value) : value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await getFertilizerRecommendation(form);
    setResult(data);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://img.freepik.com/free-photo/farm-worker-driving-tractor-prepares-harvest-generated-by-ai_188544-15242.jpg?semt=ais_hybrid&w=740&q=80')", // fertilizer spread on soil
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        padding: "2rem",
        color: "#fff"
      }}
    >
      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.55)",
          zIndex: 0
        }}
      ></div>

      <div
        style={{
          width: "100%",
          maxWidth: "550px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          padding: "2rem",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          position: "relative",
          zIndex: 1
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            fontSize: "1.8rem",
            color: "#fff"
          }}
        >
          🌱 Fertilizer Advisor
        </h2>

        <form onSubmit={onSubmit}>
          {Object.keys(form).map((key) => (
            <div key={key} style={{ marginBottom: "1.2rem" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: "600",
                  marginBottom: "0.4rem",
                  color: "#fff"
                }}
              >
                {key}
              </label>
              <input
                name={key}
                value={form[key]}
                onChange={onChange}
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.4)",
                  background: "rgba(0,0,0,0.4)",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none"
                }}
              />
            </div>
          ))}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.9rem",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(90deg,#00c6ff,#0072ff)",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "0.3s"
            }}
            onMouseOver={(e) =>
              (e.target.style.background = "linear-gradient(90deg,#0072ff,#00c6ff)")
            }
            onMouseOut={(e) =>
              (e.target.style.background = "linear-gradient(90deg,#00c6ff,#0072ff)")
            }
          >
            Get Recommendation
          </button>
        </form>

        {result && (
          <div
            style={{
              marginTop: "2rem",
              background: "rgba(0,0,0,0.5)",
              borderRadius: "15px",
              padding: "1.5rem",
              color: "#fff"
            }}
          >
            <h3 style={{ marginBottom: "0.5rem" }}>
              ✅ Recommended: {result.fertilizer_name}
            </h3>
            <p>Dosage: {result.dosage_per_acre}</p>

            <h4 style={{ marginTop: "1rem" }}>🌾 Purpose</h4>
            <ul>
              {result.purpose.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <h4 style={{ marginTop: "1rem" }}>💡 Why this</h4>
            <ul>
              {result.explanation.why_this_fertilizer.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <h4 style={{ marginTop: "1rem" }}>🌍 Soil health</h4>
            <ul>
              {result.explanation.soil_health.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <h4 style={{ marginTop: "1rem" }}>🧑‍🌾 Farmer notes</h4>
            <ul>
              {result.explanation.farmer_notes.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
// import React, { useState } from "react";
// import { getFertilizerRecommendation } from "../api/fertilizer";

// export default function FertilizerForm() {
//   const [form, setForm] = useState({
//     Temperature: "",
//     Humidity: "",
//     Moisture: "",
//     "Soil Type": "",
//     "Crop Type": "",
//     Nitrogen: "",
//     Potassium: "",
//     Phosphorous: ""
//   });
//   const [result, setResult] = useState(null);

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     const numeric = [
//       "Temperature",
//       "Humidity",
//       "Moisture",
//       "Nitrogen",
//       "Potassium",
//       "Phosphorous"
//     ];
//     setForm({ ...form, [name]: numeric.includes(name) ? Number(value) : value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const data = await getFertilizerRecommendation(form);
//     setResult(data);
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundImage:
//           "url('https://img.freepik.com/free-photo/farm-worker-driving-tractor-prepares-harvest-generated-by-ai_188544-15242.jpg?semt=ais_hybrid&w=740&q=80')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         padding: "20px"
//       }}
//     >
//       <div
//         style={{
//           background: "rgba(255, 255, 255, 0.9)",
//           padding: "30px",
//           borderRadius: "12px",
//           maxWidth: "500px",
//           width: "100%",
//           boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "20px",
//             color: "#2d6a4f"
//           }}
//         >
//           Fertilizer Advisor
//         </h2>
//         <form onSubmit={onSubmit}>
//           {Object.keys(form).map((key) => (
//             <div key={key} style={{ marginBottom: "15px" }}>
//               <label
//                 style={{
//                   display: "block",
//                   marginBottom: "6px",
//                   fontWeight: "600",
//                   color: "#333"
//                 }}
//               >
//                 {key}
//               </label>
//               <input
//                 name={key}
//                 value={form[key]}
//                 onChange={onChange}
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   border: "1px solid #ccc",
//                   borderRadius: "8px",
//                   fontSize: "14px"
//                 }}
//               />
//             </div>
//           ))}
//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: "12px",
//               background: "#2d6a4f",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               fontWeight: "600",
//               fontSize: "16px",
//               cursor: "pointer",
//               marginTop: "10px"
//             }}
//           >
//             Get Recommendation
//           </button>
//         </form>

//         {result && (
//           <div style={{ marginTop: 20 }}>
//             <h3 style={{ color: "#2d6a4f" }}>
//               Recommended: {result.fertilizer_name}
//             </h3>
//             <p>Dosage: {result.dosage_per_acre}</p>
//             <h4>Purpose</h4>
//             <ul>
//               {result.purpose.map((p, i) => (
//                 <li key={i}>{p}</li>
//               ))}
//             </ul>
//             <h4>Why this</h4>
//             <ul>
//               {result.explanation.why_this_fertilizer.map((p, i) => (
//                 <li key={i}>{p}</li>
//               ))}
//             </ul>
//             <h4>Soil health</h4>
//             <ul>
//               {result.explanation.soil_health.map((p, i) => (
//                 <li key={i}>{p}</li>
//               ))}
//             </ul>
//             <h4>Farmer notes</h4>
//             <ul>
//               {result.explanation.farmer_notes.map((p, i) => (
//                 <li key={i}>{p}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
