// // import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './Styles/CropCalendar.css';
// // import CalendarHeader from './CalendarHeader';
// // import ProgressRing from './ProgressRing';
// // import CalendarView from './CalendarView';

// // const cropData = {
// //   crop: 'Paddy',
// //   soil: 'Loamy Soil',
// //   rainfall: 'Avg Rainfall',
// //   location: 'Bhubaneswar',
// //   duration: '120 days',
// //   stages: [
// //     { label: 'Sowing', icon: '🌱', dates: 'June 15–25' },
// //     { label: 'Irrigation', icon: '💧', dates: 'July 10, Aug 5, Sep 1' },
// //     { label: 'Fertilizer', icon: '🌿', dates: 'July 20, Aug 15' },
// //     { label: 'Pest Alert', icon: '🚨', dates: 'Aug 10' },
// //     { label: 'Harvest', icon: '🌾', dates: 'Oct 10–20' },
// //     { label: 'PMFBY Deadline', icon: '🏛️', dates: 'Aug 15' },
// //     { label: 'Mandi Fair', icon: '⚖️', dates: 'Oct 5' },
// //   ],
// //   alert: '⚠️ Rain expected next week. Delay sowing by 3 days?',
// // };

// // const getBadgeClass = (label) => {
// //   switch (label) {
// //     case 'Sowing': return 'success';
// //     case 'Irrigation': return 'primary';
// //     case 'Fertilizer': return 'warning';
// //     case 'Pest Alert': return 'danger';
// //     case 'Harvest': return 'info';
// //     case 'PMFBY Deadline': return 'secondary';
// //     case 'Mandi Fair': return 'light';
// //     default: return 'dark';
// //   }
// // };

// // function CropCalendarPage() {
// //   const [view, setView] = useState('timeline');

// //   return (
// //     <div className="container">
// //       {/* 🌾 Crop Summary Header */}
// //       <CalendarHeader data={cropData} />

// //       {/* 🔄 View Toggle Tabs */}
// //       <ul className="nav nav-pills mb-3">
// //         <li className="nav-item">
// //           <button
// //             className={`nav-link ${view === 'timeline' ? 'active' : ''}`}
// //             onClick={() => setView('timeline')}
// //           >
// //             Timeline View
// //           </button>
// //         </li>
// //         <li className="nav-item">
// //           <button
// //             className={`nav-link ${view === 'calendar' ? 'active' : ''}`}
// //             onClick={() => setView('calendar')}
// //           >
// //             Calendar View
// //           </button>
// //         </li>
// //       </ul>

// //       {/* 🕒 Timeline or 📅 Calendar View */}
// //       {view === 'timeline' ? (
// //         <div className="row row-cols-1 row-cols-md-2 g-4">
// //           {cropData.stages.map((stage, idx) => (
// //             <div className="col" key={idx}>
// //               <div className={`card shadow-sm card-animated border-${getBadgeClass(stage.label)}`}>
// //                 <div className="card-body">
// //                   <h5 className="card-title d-flex align-items-center gap-3">
// //                     <ProgressRing
// //                       icon={stage.icon}
// //                       progress={(idx + 1) / cropData.stages.length * 100}
// //                       color={`var(--bs-${getBadgeClass(stage.label)})`}
// //                     />
// //                     {stage.label}
// //                   </h5>
// //                   <p className="card-text text-muted">{stage.dates}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <CalendarView />
// //       )}

// //       {/* ⚠️ Alert Banner */}
// //       <div className="alert alert-warning mt-4 d-flex justify-content-between align-items-center">
// //         <span>{cropData.alert}</span>
// //         <button className="btn btn-outline-danger btn-sm">Reschedule</button>
// //       </div>

// //       {/* 🌦️ Footer Panel */}
// //       <div className="bg-light p-3 mt-4 rounded shadow-sm">
// //         <h6 className="text-success">Weather Forecast</h6>
// //         <p className="mb-0">🌧️ Monsoon active. Moderate rainfall expected.</p>
// //         <p className="mb-0">💡 Ideal sowing window starts in 3 days.</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CropCalendarPage;
// // import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './Styles/CropCalendar.css';
// // import CalendarHeader from './CalendarHeader';
// // import ProgressRing from './ProgressRing';
// // import CalendarView from './CalendarView';

// // const cropData = {
// //   crop: 'Paddy',
// //   soil: 'Loamy Soil',
// //   rainfall: 'Avg Rainfall',
// //   location: 'Bhubaneswar',
// //   duration: '120 days',
// //   stages: [
// //     { label: 'Sowing', icon: '🌱', dates: 'June 15–25' },
// //     { label: 'Irrigation', icon: '💧', dates: 'July 10, Aug 5, Sep 1' },
// //     { label: 'Fertilizer', icon: '🌿', dates: 'July 20, Aug 15' },
// //     { label: 'Pest Alert', icon: '🚨', dates: 'Aug 10' },
// //     { label: 'Harvest', icon: '🌾', dates: 'Oct 10–20' },
// //     { label: 'PMFBY Deadline', icon: '🏛️', dates: 'Aug 15' },
// //     { label: 'Mandi Fair', icon: '⚖️', dates: 'Oct 5' },
// //   ],
// //   alert: '⚠️ Rain expected next week. Delay sowing by 3 days?',
// // };

// // const getBadgeClass = (label) => {
// //   switch (label) {
// //     case 'Sowing': return 'success';
// //     case 'Irrigation': return 'primary';
// //     case 'Fertilizer': return 'warning';
// //     case 'Pest Alert': return 'danger';
// //     case 'Harvest': return 'info';
// //     case 'PMFBY Deadline': return 'secondary';
// //     case 'Mandi Fair': return 'light';
// //     default: return 'dark';
// //   }
// // };

// // function CropCalendar() {
// //   const [view, setView] = useState('timeline');

// //   return (
// //     <div className="container">
// //       {/* 🌾 Crop Summary Header */}
// //       <CalendarHeader data={cropData} />

// //       {/* 🔄 View Toggle Tabs */}
// //       <ul className="nav nav-pills mb-3">
// //         <li className="nav-item">
// //           <button
// //             className={`nav-link ${view === 'timeline' ? 'active' : ''}`}
// //             onClick={() => setView('timeline')}
// //           >
// //             Timeline View
// //           </button>
// //         </li>
// //         <li className="nav-item">
// //           <button
// //             className={`nav-link ${view === 'calendar' ? 'active' : ''}`}
// //             onClick={() => setView('calendar')}
// //           >
// //             Calendar View
// //           </button>
// //         </li>
// //       </ul>

// //       {/* 🕒 Timeline or 📅 Calendar View */}
// //       {view === 'timeline' ? (
// //         <div className="row row-cols-1 row-cols-md-2 g-4">
// //           {cropData.stages.map((stage, idx) => (
// //             <div className="col" key={idx}>
// //               <div className={`card shadow-sm card-animated border-${getBadgeClass(stage.label)}`}>
// //                 <div className="card-body">
// //                   <h5 className="card-title d-flex align-items-center gap-3">
// //                     <ProgressRing
// //                       icon={stage.icon}
// //                       progress={(idx + 1) / cropData.stages.length * 100}
// //                       color={`var(--bs-${getBadgeClass(stage.label)})`}
// //                     />
// //                     {stage.label}
// //                   </h5>
// //                   <p className="card-text text-muted">{stage.dates}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <CalendarView />
// //       )}

// //       {/* ⚠️ Alert Banner */}
// //       <div className="alert alert-warning mt-4 d-flex justify-content-between align-items-center">
// //         <span>{cropData.alert}</span>
// //         <button className="btn btn-outline-danger btn-sm">Reschedule</button>
// //       </div>

// //       {/* 🌦️ Footer Panel */}
// //       <div className="bg-light p-3 mt-4 rounded shadow-sm">
// //         <h6 className="text-success">Weather Forecast</h6>
// //         <p className="mb-0">🌧️ Monsoon active. Moderate rainfall expected.</p>
// //         <p className="mb-0">💡 Ideal sowing window starts in 3 days.</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CropCalendar;



// // import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './Styles/CropCalendar.css';
// // import CalendarHeader from './CalendarHeader';
// // import ProgressRing from './ProgressRing';
// // import CalendarView from './CalendarView';

// // const getBadgeClass = (label) => {
// //   switch (label) {
// //     case 'Sowing': return 'success';
// //     case 'Irrigation': return 'primary';
// //     case 'Fertilizer': return 'warning';
// //     case 'Pest Alert': return 'danger';
// //     case 'Harvest': return 'info';
// //     case 'PMFBY Deadline': return 'secondary';
// //     case 'Mandi Fair': return 'light';
// //     default: return 'dark';
// //   }
// // };

// // const cropDurations = {
// //   Paddy: 120,
// //   Wheat: 110,
// //   Maize: 100,
// //   Cotton: 150,
// //   Sugarcane: 300,
// //   Groundnut: 105,
// //   Soybean: 95,
// //   Mustard: 90
// // };

// // function CropCalendar() {
// //   const [view, setView] = useState('timeline');
// //   const [form, setForm] = useState({
// //     location: '',
// //     crop: '',
// //     season: '',
// //     soil: '',
// //     irrigation: '',
// //     landSize: '',
// //     sowingDate: ''
// //   });
// //   const [cropData, setCropData] = useState(null);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const duration = cropDurations[form.crop] || 120;

// //     const stages = [
// //       { label: 'Sowing', icon: '🌱', dates: 'June 15–25' },
// //       { label: 'Irrigation', icon: '💧', dates: 'July 10, Aug 5, Sep 1' },
// //       { label: 'Fertilizer', icon: '🌿', dates: 'July 20, Aug 15' },
// //       { label: 'Pest Alert', icon: '🚨', dates: 'Aug 10' },
// //       { label: 'Harvest', icon: '🌾', dates: 'Oct 10–20' },
// //       { label: 'PMFBY Deadline', icon: '🏛️', dates: 'Aug 15' },
// //       { label: 'Mandi Fair', icon: '⚖️', dates: 'Oct 5' },
// //     ];

// //     setCropData({
// //       crop: form.crop,
// //       soil: form.soil,
// //       location: form.location,
// //       duration: `${duration} days`,
// //       stages,
// //       alert: '⚠️ Rain expected next week. Delay sowing by 3 days?'
// //     });
// //   };

// //   return (
// //     <div className="container">
// //       {/* 🧑‍🌾 Farmer Input Form */}
// //       <form className="bg-light p-4 rounded shadow-sm mb-4" onSubmit={handleSubmit}>
// //         <h4 className="mb-3">Plan Your Crop</h4>
// //         <div className="row g-3">
// //           <div className="col-md-4">
// //             <label>Location</label>
// //             <input name="location" className="form-control" value={form.location} onChange={handleChange} />
// //           </div>
// //           <div className="col-md-4">
// //             <label>Crop</label>
// //             <input name="crop" className="form-control" value={form.crop} onChange={handleChange} />
// //           </div>
// //           <div className="col-md-4">
// //             <label>Season</label>
// //             <select name="season" className="form-select" value={form.season} onChange={handleChange}>
// //               <option value="">Select</option>
// //               <option value="Kharif">Kharif</option>
// //               <option value="Rabi">Rabi</option>
// //               <option value="Zaid">Zaid</option>
// //             </select>
// //           </div>
// //           <div className="col-md-4">
// //             <label>Soil Type</label>
// //             <select name="soil" className="form-select" value={form.soil} onChange={handleChange}>
// //               <option value="">Select</option>
// //               <option value="Loamy">Loamy</option>
// //               <option value="Clayey">Clayey</option>
// //               <option value="Sandy">Sandy</option>
// //               <option value="Black">Black</option>
// //               <option value="Red">Red</option>
// //             </select>
// //           </div>
// //           <div className="col-md-4">
// //             <label>Irrigation Type</label>
// //             <select name="irrigation" className="form-select" value={form.irrigation} onChange={handleChange}>
// //               <option value="">Select</option>
// //               <option value="Rainfed">Rainfed</option>
// //               <option value="Canal">Canal</option>
// //               <option value="Drip">Drip</option>
// //               <option value="Sprinkler">Sprinkler</option>
// //             </select>
// //           </div>
// //           <div className="col-md-4">
// //             <label>Land Size (acres)</label>
// //             <input name="landSize" type="number" className="form-control" value={form.landSize} onChange={handleChange} />
// //           </div>
// //           <div className="col-md-4">
// //             <label>Sowing Date</label>
// //             <input name="sowingDate" type="date" className="form-control" value={form.sowingDate} onChange={handleChange} />
// //           </div>
// //         </div>
// //         <button className="btn btn-success mt-3">Generate Plan</button>
// //       </form>

// //       {/* 🌾 Crop Summary Header */}
// //       {cropData && <CalendarHeader data={cropData} />}

// //       {/* 🔄 View Toggle Tabs */}
// //       {cropData && (
// //         <ul className="nav nav-pills mb-3">
// //           <li className="nav-item">
// //             <button
// //               className={`nav-link ${view === 'timeline' ? 'active' : ''}`}
// //               onClick={() => setView('timeline')}
// //             >
// //               Timeline View
// //             </button>
// //           </li>
// //           <li className="nav-item">
// //             <button
// //               className={`nav-link ${view === 'calendar' ? 'active' : ''}`}
// //               onClick={() => setView('calendar')}
// //             >
// //               Calendar View
// //             </button>
// //           </li>
// //         </ul>
// //       )}

// //       {/* 🕒 Timeline or 📅 Calendar View */}
// //       {cropData && view === 'timeline' && (
// //         <div className="row row-cols-1 row-cols-md-2 g-4">
// //           {cropData.stages.map((stage, idx) => (
// //             <div className="col" key={idx}>
// //               <div className={`card shadow-sm card-animated border-${getBadgeClass(stage.label)}`}>
// //                 <div className="card-body">
// //                   <h5 className="card-title d-flex align-items-center gap-3">
// //                     <ProgressRing
// //                       icon={stage.icon}
// //                       progress={(idx + 1) / cropData.stages.length * 100}
// //                       color={`var(--bs-${getBadgeClass(stage.label)})`}
// //                     />
// //                     {stage.label}
// //                   </h5>
// //                   <p className="card-text text-muted">{stage.dates}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {cropData && view === 'calendar' && <CalendarView />}

// //       {/* ⚠️ Alert Banner */}
// //       {cropData && (
// //         <div className="alert alert-warning mt-4 d-flex justify-content-between align-items-center">
// //           <span>{cropData.alert}</span>
// //           <button className="btn btn-outline-danger btn-sm">Reschedule</button>
// //         </div>
// //       )}

// //       {/* 🌦️ Weather Forecast Panel */}
// //       {cropData && (
// //         <div className="bg-light p-3 mt-4 rounded shadow-sm">
// //           <h6 className="text-success">Weather Forecast</h6>
// //           <p className="mb-0">🌧️ Monsoon active. Moderate rainfall expected.</p>
// //           <p className="mb-0">💡 Ideal sowing window starts in 3 days.</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default CropCalendar;


// // import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './Styles/CropCalendar.css';
// // import CalendarHeader from './CalendarHeader';
// // import ProgressRing from './ProgressRing';
// // import CalendarView from './CalendarView';
// // import { format, addDays } from 'date-fns';

// // const getBadgeClass = (label) => {
// //   switch (label) {
// //     case 'Sowing': return 'success';
// //     case 'Irrigation': return 'primary';
// //     case 'Fertilizer': return 'warning';
// //     case 'Pest Alert': return 'danger';
// //     case 'Harvest': return 'info';
// //     case 'PMFBY Deadline': return 'secondary';
// //     case 'Mandi Fair': return 'light';
// //     default: return 'dark';
// //   }
// // };

// // const supportedCrops = [
// //   "Paddy", "Wheat", "Maize", "Cotton", "Sugarcane",
// //   "Groundnut", "Soybean", "Mustard", "Barley", "Bajra",
// //   "Jowar", "Urad", "Moong", "Gram", "Sesame"
// // ];

// // const cropDurations = {
// //   Paddy: 120, Wheat: 110, Maize: 100, Cotton: 150, Sugarcane: 300,
// //   Groundnut: 105, Soybean: 95, Mustard: 90, Barley: 100, Bajra: 85,
// //   Jowar: 90, Urad: 80, Moong: 75, Gram: 100, Sesame: 85
// // };

// // const generateStages = (sowingDateStr, durationDays) => {
// //   const sowingDate = new Date(sowingDateStr);
// //   const harvestDate = addDays(sowingDate, durationDays);

// //   return [
// //     { label: 'Sowing', icon: '🌱', dates: format(sowingDate, 'MMM d') },
// //     { label: 'Irrigation', icon: '💧', dates: `${format(addDays(sowingDate, 10), 'MMM d')}, ${format(addDays(sowingDate, 30), 'MMM d')}` },
// //     { label: 'Fertilizer', icon: '🌿', dates: `${format(addDays(sowingDate, 20), 'MMM d')}, ${format(addDays(sowingDate, 45), 'MMM d')}` },
// //     { label: 'Pest Alert', icon: '🚨', dates: format(addDays(sowingDate, 50), 'MMM d') },
// //     { label: 'Harvest', icon: '🌾', dates: format(harvestDate, 'MMM d') },
// //     { label: 'PMFBY Deadline', icon: '🏛️', dates: format(addDays(sowingDate, 60), 'MMM d') },
// //     { label: 'Mandi Fair', icon: '⚖️', dates: format(addDays(harvestDate, -5), 'MMM d') },
// //   ];
// // };

// // function CropCalendar() {
// //   const [view, setView] = useState('timeline');
// //   const [form, setForm] = useState({
// //     location: '',
// //     crop: '',
// //     season: '',
// //     soil: '',
// //     irrigation: '',
// //     landSize: '',
// //     sowingDate: ''
// //   });
// //   const [cropData, setCropData] = useState(null);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const duration = supportedCrops.includes(form.crop)
// //       ? cropDurations[form.crop]
// //       : 120;

// //     const stages = generateStages(form.sowingDate, duration);

// //     setCropData({
// //       crop: form.crop,
// //       soil: form.soil,
// //       location: form.location,
// //       duration: `${duration} days`,
// //       stages,
// //       alert: '⚠️ Rain expected next week. Delay sowing by 3 days?'
// //     });
// //   };

// //   return (
// //     <div className="container">
// //       {/* 🧑‍🌾 Farmer Input Form */}
// //       <form className="bg-light p-4 rounded shadow-sm mb-4" onSubmit={handleSubmit}>
// //         <h4 className="mb-3">Plan Your Crop</h4>
// //         <div className="row g-3">
// //           <div className="col-md-4">
// //             <label>Location</label>
// //             <input name="location" className="form-control" value={form.location} onChange={handleChange} />
// //           </div>

// //           <div className="col-md-4">
// //             <label>Crop (select or type)</label>
// //             <select
// //               className="form-select mb-2"
// //               value={form.crop}
// //               onChange={(e) => setForm({ ...form, crop: e.target.value })}
// //             >
// //               <option value="">Select from list</option>
// //               {supportedCrops.map((crop, idx) => (
// //                 <option key={idx} value={crop}>{crop}</option>
// //               ))}
// //             </select>
// //             <input
// //               type="text"
// //               className="form-control"
// //               placeholder="Or type your crop"
// //               value={form.crop}
// //               onChange={(e) => setForm({ ...form, crop: e.target.value })}
// //             />
// //             {!supportedCrops.includes(form.crop) && form.crop && (
// //               <small className="text-danger">
// //                 ⚠️ This crop is not in our database. Recommendations may be limited.
// //               </small>
// //             )}
// //           </div>

// //           <div className="col-md-4">
// //             <label>Season</label>
// //             <select name="season" className="form-select" value={form.season} onChange={handleChange}>
// //               <option value="">Select</option>
// //               <option value="Kharif">Kharif</option>
// //               <option value="Rabi">Rabi</option>
// //               <option value="Zaid">Zaid</option>
// //             </select>
// //           </div>

// //           <div className="col-md-4">
// //             <label>Soil Type</label>
// //             <select name="soil" className="form-select" value={form.soil} onChange={handleChange}>
// //               <option value="">Select</option>
// //               <option value="Loamy">Loamy</option>
// //               <option value="Clayey">Clayey</option>
// //               <option value="Sandy">Sandy</option>
// //               <option value="Black">Black</option>
// //               <option value="Red">Red</option>
// //             </select>
// //           </div>

// //           <div className="col-md-4">
// //             <label>Irrigation Type</label>
// //             <select name="irrigation" className="form-select" value={form.irrigation} onChange={handleChange}>
// //               <option value="">Select</option>
// //               <option value="Rainfed">Rainfed</option>
// //               <option value="Canal">Canal</option>
// //               <option value="Drip">Drip</option>
// //               <option value="Sprinkler">Sprinkler</option>
// //             </select>
// //           </div>

// //           <div className="col-md-4">
// //             <label>Land Size (acres)</label>
// //             <input name="landSize" type="number" className="form-control" value={form.landSize} onChange={handleChange} />
// //           </div>

// //           <div className="col-md-4">
// //             <label>Sowing Date</label>
// //             <input name="sowingDate" type="date" className="form-control" value={form.sowingDate} onChange={handleChange} />
// //           </div>
// //         </div>
// //         <button className="btn btn-success mt-3">Generate Plan</button>
// //       </form>

// //       {/* 🌾 Crop Summary Header */}
// //       {cropData && <CalendarHeader data={cropData} />}

// //       {/* 🔄 View Toggle Tabs */}
// //       {cropData && (
// //         <ul className="nav nav-pills mb-3">
// //           <li className="nav-item">
// //             <button
// //               className={`nav-link ${view === 'timeline' ? 'active' : ''}`}
// //               onClick={() => setView('timeline')}
// //             >
// //               Timeline View
// //             </button>
// //           </li>
// //           <li className="nav-item">
// //             <button
// //               className={`nav-link ${view === 'calendar' ? 'active' : ''}`}
// //               onClick={() => setView('calendar')}
// //             >
// //               Calendar View
// //             </button>
// //           </li>
// //         </ul>
// //       )}

// //       {/* 🕒 Timeline or 📅 Calendar View */}
// //       {cropData && view === 'timeline' && (
// //         <div className="row row-cols-1 row-cols-md-2 g-4">
// //           {cropData.stages.map((stage, idx) => (
// //             <div className="col" key={idx}>
// //               <div className={`card shadow-sm card-animated border-${getBadgeClass(stage.label)}`}>
// //                 <div className="card-body">
// //                   <p className="card-text text-muted">{stage.dates}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {cropData && view === 'calendar' && <CalendarView />}

// //       {/* ⚠️ Alert Banner */}
// //       {cropData && (
// //         <div className="alert alert-warning mt-4 d-flex justify-content-between align-items-center">
// //           <span>{cropData.alert}</span>
// //           <button className="btn btn-outline-danger btn-sm">Reschedule</button>
// //         </div>
// //       )}

// //       {/* 🌦️ Weather Forecast Panel */}
// //       {cropData && (
// //         <div className="bg-light p-3 mt-4 rounded shadow-sm">
// //           <h6 className="text-success">Weather Forecast</h6>
// //           <p className="mb-0">🌧️ Monsoon active. Moderate rainfall expected.</p>
// //           <p className="mb-0">💡 Ideal sowing window starts in 3 days.</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default CropCalendar;
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Styles/CropCalendar.css';
// import CalendarHeader from './CalendarHeader';
// import ProgressRing from './ProgressRing';
// import CalendarView from './CalendarView';
// import { format, addDays } from 'date-fns';

// const getBadgeClass = (label) => {
//   switch (label) {
//     case 'Sowing': return 'success';
//     case 'Irrigation': return 'primary';
//     case 'Fertilizer': return 'warning';
//     case 'Pest Alert': return 'danger';
//     case 'Harvest': return 'info';
//     case 'PMFBY Deadline': return 'secondary';
//     case 'Mandi Fair': return 'light';
//     default: return 'dark';
//   }
// };

// const supportedCrops = [
//   "Paddy", "Wheat", "Maize", "Cotton", "Sugarcane",
//   "Groundnut", "Soybean", "Mustard", "Barley", "Bajra",
//   "Jowar", "Urad", "Moong", "Gram", "Sesame"
// ];

// const cropDurations = {
//   Paddy: 120, Wheat: 110, Maize: 100, Cotton: 150, Sugarcane: 300,
//   Groundnut: 105, Soybean: 95, Mustard: 90, Barley: 100, Bajra: 85,
//   Jowar: 90, Urad: 80, Moong: 75, Gram: 100, Sesame: 85
// };

// const generateStages = (sowingDateStr, durationDays) => {
//   const sowingDate = new Date(sowingDateStr);
//   const harvestDate = addDays(sowingDate, durationDays);

//   return [
//     { label: 'Sowing', icon: '🌱', dates: format(sowingDate, 'MMM d'), notes: 'Use certified seeds and prepare soil' },
//     { label: 'Irrigation', icon: '💧', dates: `${format(addDays(sowingDate, 10), 'MMM d')}, ${format(addDays(sowingDate, 30), 'MMM d')}`, notes: 'Ensure proper water drainage' },
//     { label: 'Fertilizer', icon: '🌿', dates: `${format(addDays(sowingDate, 20), 'MMM d')}, ${format(addDays(sowingDate, 45), 'MMM d')}`, notes: 'Apply urea and potash as per dosage' },
//     { label: 'Pest Alert', icon: '🚨', dates: format(addDays(sowingDate, 50), 'MMM d'), notes: 'Watch for stem borer and leaf spot' },
//     { label: 'Harvest', icon: '🌾', dates: format(harvestDate, 'MMM d'), notes: 'Dry grains before storage' },
//     { label: 'PMFBY Deadline', icon: '🏛️', dates: format(addDays(sowingDate, 60), 'MMM d'), notes: 'Last date to apply for crop insurance' },
//     { label: 'Mandi Fair', icon: '⚖️', dates: format(addDays(harvestDate, -5), 'MMM d'), notes: 'Local market fair for selling produce' },
//   ];
// };

// function CropCalendar() {
//   const [view, setView] = useState('timeline');
//   const [form, setForm] = useState({
//     location: '',
//     crop: '',
//     season: '',
//     soil: '',
//     irrigation: '',
//     landSize: '',
//     sowingDate: ''
//   });
//   const [cropData, setCropData] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const duration = cropDurations[form.crop] || 120;
//     const stages = generateStages(form.sowingDate, duration);

//     setCropData({
//       crop: form.crop,
//       soil: form.soil,
//       location: form.location,
//       duration: `${duration} days`,
//       stages,
//       alert: '⚠️ Rain expected next week. Delay sowing by 3 days?'
//     });
//   };

//   return (
//     <div className="container">
//       {/* 🧑‍🌾 Farmer Input Form */}
//       <form className="bg-light p-4 rounded shadow-sm mb-4" onSubmit={handleSubmit}>
//         <h4 className="mb-3">Plan Your Crop</h4>
//         <div className="row g-3">
//           <div className="col-md-4">
//             <label>Location</label>
//             <input name="location" className="form-control" value={form.location} onChange={handleChange} />
//           </div>

//           <div className="col-md-4">
//             <label>Crop</label>
//             <select
//               name="crop"
//               className="form-select"
//               value={form.crop}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select crop</option>
//               {supportedCrops.map((crop, idx) => (
//                 <option key={idx} value={crop}>{crop}</option>
//               ))}
//             </select>
//           </div>

//           <div className="col-md-4">
//             <label>Season</label>
//             <select name="season" className="form-select" value={form.season} onChange={handleChange}>
//               <option value="">Select</option>
//               <option value="Kharif">Kharif</option>
//               <option value="Rabi">Rabi</option>
//               <option value="Zaid">Zaid</option>
//             </select>
//           </div>

//           <div className="col-md-4">
//             <label>Soil Type</label>
//             <select name="soil" className="form-select" value={form.soil} onChange={handleChange}>
//               <option value="">Select</option>
//               <option value="Loamy">Loamy</option>
//               <option value="Clayey">Clayey</option>
//               <option value="Sandy">Sandy</option>
//               <option value="Black">Black</option>
//               <option value="Red">Red</option>
//             </select>
//           </div>

//           <div className="col-md-4">
//             <label>Irrigation Type</label>
//             <select name="irrigation" className="form-select" value={form.irrigation} onChange={handleChange}>
//               <option value="">Select</option>
//               <option value="Rainfed">Rainfed</option>
//               <option value="Canal">Canal</option>
//               <option value="Drip">Drip</option>
//               <option value="Sprinkler">Sprinkler</option>
//             </select>
//           </div>

//           <div className="col-md-4">
//             <label>Land Size (acres)</label>
//             <input name="landSize" type="number" className="form-control" value={form.landSize} onChange={handleChange} />
//           </div>

//           <div className="col-md-4">
//             <label>Sowing Date</label>
//             <input name="sowingDate" type="date" className="form-control" value={form.sowingDate} onChange={handleChange} />
//           </div>
//         </div>
//         <button className="btn btn-success mt-3">Generate Plan</button>
//       </form>

//       {/* 🌾 Crop Summary Header */}
//       {cropData && <CalendarHeader data={cropData} />}

//       {/* 🔄 View Toggle Tabs */}
//       {cropData && (
//         <ul className="nav nav-pills mb-3">
//           <li className="nav-item">
//             <button
//               className={`nav-link ${view === 'timeline' ? 'active' : ''}`}
//               onClick={() => setView('timeline')}
//             >
//               Timeline View
//             </button>
//           </li>
//           <li className="nav-item">
//             <button
//               className={`nav-link ${view === 'calendar' ? 'active' : ''}`}
//               onClick={() => setView('calendar')}
//             >
//               Calendar View
//             </button>
//           </li>
//         </ul>
//       )}

//       {/* 🕒 Timeline or 📅 Calendar View */}
//       {cropData && view === 'timeline' && (
//         <div className="row row-cols-1 row-cols-md-2 g-4">
//           {cropData.stages.map((stage, idx) => (
//             <div className="col" key={idx}>
//               <div className={`card shadow-sm card-animated border-${getBadgeClass(stage.label)}`}>
//                 <div className="card-body">
//                   <h5 className="card-title d-flex align-items-center gap-3">
//                                         <ProgressRing
//                       icon={stage.icon}
//                       progress={(idx + 1) / cropData.stages.length * 100}
//                       color={`var(--bs-${getBadgeClass(stage.label)})`}
//                     />
//                     {stage.label}
//                   </h5>
//                   <p className="card-text text-muted">{stage.dates}</p>
//                   <p className="card-text">{stage.notes}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {cropData && view === 'calendar' && <CalendarView />}

//       {/* ⚠️ Alert Banner */}
//       {cropData && (
//         <div className="alert alert-warning mt-4 d-flex justify-content-between align-items-center">
//           <span>{cropData.alert}</span>
//           <button className="btn btn-outline-danger btn-sm">Reschedule</button>
//         </div>
//       )}

//       {/* 🌦️ Weather Forecast Panel */}
//       {cropData && (
//         <div className="bg-light p-3 mt-4 rounded shadow-sm">
//           <h6 className="text-success">Weather Forecast</h6>
//           <p className="mb-0">🌧️ Monsoon active. Moderate rainfall expected.</p>
//           <p className="mb-0">💡 Ideal sowing window starts in 3 days.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CropCalendar;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/CropCalendar.css';
import CalendarHeader from './CalendarHeader';
import ProgressRing from './ProgressRing';
import CalendarView from './CalendarView';
import { format, addDays } from 'date-fns';

const getBadgeClass = (label) => {
  switch (label) {
    case 'Sowing': return 'success';
    case 'Irrigation': return 'primary';
    case 'Fertilizer': return 'warning';
    case 'Pest Alert': return 'danger';
    case 'Harvest': return 'info';
    case 'PMFBY Deadline': return 'secondary';
    case 'Mandi Fair': return 'light';
    default: return 'dark';
  }
};

const supportedCrops = [
  "Paddy", "Wheat", "Maize", "Cotton", "Sugarcane",
  "Groundnut", "Soybean", "Mustard", "Barley", "Bajra",
  "Jowar", "Urad", "Moong", "Gram", "Sesame"
];

const cropDurations = {
  Paddy: 120, Wheat: 110, Maize: 100, Cotton: 150, Sugarcane: 300,
  Groundnut: 105, Soybean: 95, Mustard: 90, Barley: 100, Bajra: 85,
  Jowar: 90, Urad: 80, Moong: 75, Gram: 100, Sesame: 85
};

const generateStages = (sowingDateStr, durationDays) => {
  const sowingDate = new Date(sowingDateStr);
  const harvestDate = addDays(sowingDate, durationDays);

  return [
    { label: 'Sowing', icon: '🌱', dates: format(sowingDate, 'MMM d'), notes: 'Use certified seeds and prepare soil' },
    { label: 'Irrigation', icon: '💧', dates: `${format(addDays(sowingDate, 10), 'MMM d')}, ${format(addDays(sowingDate, 30), 'MMM d')}`, notes: 'Ensure proper water drainage' },
    { label: 'Fertilizer', icon: '🌿', dates: `${format(addDays(sowingDate, 20), 'MMM d')}, ${format(addDays(sowingDate, 45), 'MMM d')}`, notes: 'Apply urea and potash as per dosage' },
    { label: 'Pest Alert', icon: '🚨', dates: format(addDays(sowingDate, 50), 'MMM d'), notes: 'Watch for stem borer and leaf spot' },
    { label: 'Harvest', icon: '🌾', dates: format(harvestDate, 'MMM d'), notes: 'Dry grains before storage' },
    { label: 'PMFBY Deadline', icon: '🏛️', dates: format(addDays(sowingDate, 60), 'MMM d'), notes: 'Last date to apply for crop insurance' },
    { label: 'Mandi Fair', icon: '⚖️', dates: format(addDays(harvestDate, -5), 'MMM d'), notes: 'Local market fair for selling produce' },
  ];
};

function CropCalendar() {
  const [view, setView] = useState('timeline');
  const [form, setForm] = useState({
    location: '',
    crop: '',
    season: '',
    soil: '',
    irrigation: '',
    landSize: '',
    sowingDate: ''
  });
  const [cropData, setCropData] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const duration = cropDurations[form.crop] || 120;
    const stages = generateStages(form.sowingDate, duration);

    setCropData({
      crop: form.crop,
      soil: form.soil,
      location: form.location,
      duration: `${duration} days`,
      stages,
      alert: '⚠️ Rain expected next week. Delay sowing by 3 days?'
    });
  };

  return (
    <div className="container">
      {/* 🧑‍🌾 Farmer Input Form */}
      <form
        className="p-4 rounded shadow-sm mb-4"
        onSubmit={handleSubmit}
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1511735643442-503bb3bd348a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JvcHN8ZW58MHx8MHx8fDA%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff"
        }}
      >
        <h4 className="mb-3">Plan Your Crop</h4>
        <div className="row g-3">
          <div className="col-md-4">
            <label>Location</label>
            <input name="location" className="form-control" value={form.location} onChange={handleChange} />
          </div>

          <div className="col-md-4">
            <label>Crop</label>
            <select
              name="crop"
              className="form-select"
              value={form.crop}
              onChange={handleChange}
              required
            >
              <option value="">Select crop</option>
              {supportedCrops.map((crop, idx) => (
                <option key={idx} value={crop}>{crop}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <label>Season</label>
            <select name="season" className="form-select" value={form.season} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Kharif">Kharif</option>
              <option value="Rabi">Rabi</option>
              <option value="Zaid">Zaid</option>
            </select>
          </div>

          <div className="col-md-4">
            <label>Soil Type</label>
            <select name="soil" className="form-select" value={form.soil} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Loamy">Loamy</option>
              <option value="Clayey">Clayey</option>
              <option value="Sandy">Sandy</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
            </select>
          </div>

          <div className="col-md-4">
            <label>Irrigation Type</label>
            <select name="irrigation" className="form-select" value={form.irrigation} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Rainfed">Rainfed</option>
              <option value="Canal">Canal</option>
              <option value="Drip">Drip</option>
              <option value="Sprinkler">Sprinkler</option>
            </select>
          </div>

          <div className="col-md-4">
            <label>Land Size (acres)</label>
            <input name="landSize" type="number" className="form-control" value={form.landSize} onChange={handleChange} />
          </div>

          <div className="col-md-4">
            <label>Sowing Date</label>
            <input name="sowingDate" type="date" className="form-control" value={form.sowingDate} onChange={handleChange} />
          </div>
        </div>
        <button className="btn btn-success mt-3">Generate Plan</button>
      </form>

      {/* 🌾 Crop Summary Header */}
      {cropData && <CalendarHeader data={cropData} />}

      {/* 🔄 View Toggle Tabs */}
      {cropData && (
        <ul className="nav nav-pills mb-3">
          <li className="nav-item">
            <button
              className={`nav-link ${view === 'timeline' ? 'active' : ''}`}
              onClick={() => setView('timeline')}
            >
              Timeline View
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${view === 'calendar' ? 'active' : ''}`}
              onClick={() => setView('calendar')}
            >
              Calendar View
            </button>
          </li>
        </ul>
      )}

      {/* 🕒 Timeline or 📅 Calendar View */}
      {cropData && view === 'timeline' && (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {cropData.stages.map((stage, idx) => (
            <div className="col" key={idx}>
              <div className={`card shadow-sm card-animated border-${getBadgeClass(stage.label)}`}>
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center gap-3">
                    <ProgressRing
                      icon={stage.icon}
                      progress={(idx + 1) / cropData.stages.length * 100}
                      color={`var(--bs-${getBadgeClass(stage.label)})`}
                    />
                    {stage.label}
                  </h5>
                  <p className="card-text text-muted">{stage.dates}</p>
                  <p className="card-text">{stage.notes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cropData && view === 'calendar' && <CalendarView />}

      {/* ⚠️ Alert Banner */}
      {cropData && (
        <div className="alert alert-warning mt-4 d-flex justify-content-between align-items-center">
          <span>{cropData.alert}</span>
          <button className="btn btn-outline-danger btn-sm">Reschedule</button>
        </div>
      )}

      {/* 🌦️ Weather Forecast Panel */}
      {cropData && (
        <div className="bg-light p-3 mt-4 rounded shadow-sm">
          <h6 className="text-success">Weather Forecast</h6>
          <p className="mb-0">🌧️ Monsoon active. Moderate rainfall expected.</p>
          <p className="mb-0">💡 Ideal sowing window starts in 3 days.</p>
        </div>
      )}
    </div>
  );
}

export default CropCalendar;

