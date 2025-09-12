// // // import React from 'react'

// // // function CropRecommendation() {
// // //   return (
// // //     <div>
// // //       <h1>CropRecommendation</h1>
// // //     </div>
// // //   )
// // // }

// // // export default CropRecommendation
// // import React, { useState } from "react";
// // import { getCropRecommendation } from "../api/crop";

// // function CropRecommendation() {
// //   const [form, setForm] = useState({
// //     N: "",
// //     P: "",
// //     K: "",
// //     temperature: "",
// //     humidity: "",
// //     ph: "",
// //     rainfall: ""
// //   });

// //   const [result, setResult] = useState(null);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     const numericFields = ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"];
// //     setForm({
// //       ...form,
// //       [name]: numericFields.includes(name) ? Number(value) : value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const data = await getCropRecommendation(form);
// //       setResult(data);
// //     } catch (error) {
// //       console.error("Error fetching crop recommendation:", error);
// //     }
// //   };
// //   return (
// //     <div>
// //       <h1>CropRecommendation</h1>
// //       <div style={{ maxWidth: 500, margin: "0 auto" }}>
// //       <h2>🌾 Crop Recommendation</h2>
// //       <form onSubmit={handleSubmit}>
// //         {Object.keys(form).map((field) => (
// //           <div key={field} style={{ marginBottom: "1rem" }}>
// //             <label htmlFor={field} style={{ display: "block", fontWeight: "bold" }}>
// //               {field}
// //             </label>
// //             <input
// //               type="text"
// //               id={field}
// //               name={field}
// //               value={form[field]}
// //               onChange={handleChange}
// //               style={{ width: "100%", padding: "0.5rem" }}
// //             />
// //           </div>
// //         ))}
// //         <button type="submit" style={{ padding: "0.5rem 1rem" }}>
// //           Get Recommendation
// //         </button>
// //       </form>

// //       {result && (
// //         <div style={{ marginTop: "2rem", background: "#f9f9f9", padding: "1rem", borderRadius: "8px" }}>
// //           <h3>✅ Recommended Crop: {result.crop_name}</h3>
// //           <p><strong>Sowing Season:</strong> {result.sowing_season}</p>
// //           <p><strong>Harvest Season:</strong> {result.harvest_season}</p>
// //           <p><strong>Expected Yield:</strong> {result.expected_yield}</p>

// //           <h4>🌱 Ideal Conditions</h4>
// //           <ul>
// //             {result.ideal_conditions.map((item, index) => (
// //               <li key={index}>{item}</li>
// //             ))}
// //           </ul>

// //           <h4>🧑‍🌾 Care Tips</h4>
// //           <ul>
// //             {result.care_tips.map((item, index) => (
// //               <li key={index}>{item}</li>
// //             ))}
// //           </ul>

// //           <h4>💡 Why This Crop</h4>
// //           <p>{result.why_this_crop}</p>
// //         </div>
// //       )}
// //     </div>
// //     </div>
// //   )
// // }

// // export default CropRecommendation;
// import React, { useState } from "react";
// import { getCropRecommendation } from "../api/crop";

// function CropRecommendation() {
//   const [form, setForm] = useState({
//     N: "",
//     P: "",
//     K: "",
//     temperature: "",
//     humidity: "",
//     ph: "",
//     rainfall: ""
//   });

//   const [result, setResult] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const numericFields = ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"];
//     setForm({
//       ...form,
//       [name]: numericFields.includes(name) ? Number(value) : value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await getCropRecommendation(form);
//       setResult(data);
//     } catch (error) {
//       console.error("Error fetching crop recommendation:", error);
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background:
//           "linear-gradient(135deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "2rem",
//         fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "600px",
//           width: "100%",
//           background: "rgba(255, 255, 255, 0.15)",
//           backdropFilter: "blur(12px)",
//           borderRadius: "20px",
//           padding: "2rem",
//           boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
//           color: "#fff"
//         }}
//       >
//         <h2 style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "1.8rem" }}>
//           🌾 Crop Recommendation
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {Object.keys(form).map((field) => (
//             <div key={field} style={{ marginBottom: "1.2rem" }}>
//               <label
//                 htmlFor={field}
//                 style={{
//                   display: "block",
//                   fontWeight: "600",
//                   marginBottom: "0.4rem",
//                   textTransform: "capitalize"
//                 }}
//               >
//                 {field}
//               </label>
//               <input
//                 type="text"
//                 id={field}
//                 name={field}
//                 value={form[field]}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   padding: "0.7rem 1rem",
//                   borderRadius: "10px",
//                   border: "1px solid rgba(255,255,255,0.4)",
//                   background: "rgba(255,255,255,0.2)",
//                   color: "#fff",
//                   fontSize: "1rem",
//                   outline: "none"
//                 }}
//               />
//             </div>
//           ))}
//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: "0.8rem",
//               borderRadius: "12px",
//               border: "none",
//               background: "linear-gradient(90deg,#11998e,#38ef7d)",
//               color: "#fff",
//               fontWeight: "600",
//               fontSize: "1.1rem",
//               cursor: "pointer",
//               transition: "0.3s"
//             }}
//             onMouseOver={(e) =>
//               (e.target.style.background = "linear-gradient(90deg,#38ef7d,#11998e)")
//             }
//             onMouseOut={(e) =>
//               (e.target.style.background = "linear-gradient(90deg,#11998e,#38ef7d)")
//             }
//           >
//             Get Recommendation
//           </button>
//         </form>

//         {result && (
//           <div
//             style={{
//               marginTop: "2rem",
//               background: "rgba(255,255,255,0.15)",
//               borderRadius: "15px",
//               padding: "1.5rem",
//               color: "#fff"
//             }}
//           >
//             <h3 style={{ marginBottom: "0.5rem" }}>
//               ✅ Recommended Crop: {result.crop_name}
//             </h3>
//             <p>
//               <strong>Sowing Season:</strong> {result.sowing_season}
//             </p>
//             <p>
//               <strong>Harvest Season:</strong> {result.harvest_season}
//             </p>
//             <p>
//               <strong>Expected Yield:</strong> {result.expected_yield}
//             </p>

//             <h4 style={{ marginTop: "1rem" }}>🌱 Ideal Conditions</h4>
//             <ul>
//               {result.ideal_conditions.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>

//             <h4 style={{ marginTop: "1rem" }}>🧑‍🌾 Care Tips</h4>
//             <ul>
//               {result.care_tips.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>

//             <h4 style={{ marginTop: "1rem" }}>💡 Why This Crop</h4>
//             <p>{result.why_this_crop}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CropRecommendation;
import React, { useState } from "react";
import { getCropRecommendation } from "../api/crop";

function CropRecommendation() {
  const [form, setForm] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericFields = ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"];
    setForm({
      ...form,
      [name]: numericFields.includes(name) ? Number(value) : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getCropRecommendation(form);
      setResult(data);
    } catch (error) {
      console.error("Error fetching crop recommendation:", error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNyb3BzfGVufDB8fDB8fHww')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        color: "#fff"
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          padding: "2rem",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            fontSize: "1.8rem",
            fontWeight: "700",
            letterSpacing: "1px"
          }}
        >
          🌾 Crop Recommendation
        </h2>

        <form onSubmit={handleSubmit}>
          {Object.keys(form).map((field) => (
            <div key={field} style={{ marginBottom: "1.2rem" }}>
              <label
                htmlFor={field}
                style={{
                  display: "block",
                  fontWeight: "600",
                  marginBottom: "0.4rem",
                  textTransform: "capitalize"
                }}
              >
                {field}
              </label>
              <input
                type="text"
                id={field}
                name={field}
                value={form[field]}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.4)",
                  background: "rgba(255,255,255,0.2)",
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
              padding: "0.8rem",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(90deg,#11998e,#38ef7d)",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "0.3s"
            }}
            onMouseOver={(e) =>
              (e.target.style.background = "linear-gradient(90deg,#38ef7d,#11998e)")
            }
            onMouseOut={(e) =>
              (e.target.style.background = "linear-gradient(90deg,#11998e,#38ef7d)")
            }
          >
            Get Recommendation
          </button>
        </form>

        {result && (
          <div
            style={{
              marginTop: "2rem",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "15px",
              padding: "1.5rem"
            }}
          >
            <h3 style={{ marginBottom: "0.5rem" }}>
              ✅ Recommended Crop: {result.crop_name}
            </h3>
            <p>
              <strong>Sowing Season:</strong> {result.sowing_season}
            </p>
            <p>
              <strong>Harvest Season:</strong> {result.harvest_season}
            </p>
            <p>
              <strong>Expected Yield:</strong> {result.expected_yield}
            </p>

            <h4 style={{ marginTop: "1rem" }}>🌱 Ideal Conditions</h4>
            <ul>
              {result.ideal_conditions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4 style={{ marginTop: "1rem" }}>🧑‍🌾 Care Tips</h4>
            <ul>
              {result.care_tips.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4 style={{ marginTop: "1rem" }}>💡 Why This Crop</h4>
            <p>{result.why_this_crop}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CropRecommendation;
