// import React from 'react';

// export default function SBIAppraiserCertificate() {
//   return (
//     <div className="flex justify-center items-start min-h-screen bg-gray-100 p-8">
//       <div className="bg-white shadow-lg" style={{ 
//         width: '210mm', 
//         minHeight: '297mm',
//         padding: '12mm 18mm',
//         fontFamily: 'Arial, sans-serif',
//         fontSize: '11pt'
//       }}>
//         {/* Header */}
//    <div className="flex justify-center items-center relative w-full">
//   {/* Centered Logo */}
//   <img 
//     src="./logo.png" 
//     alt="SBI Logo" 
//     className="h-[77px] w-[373px] "
//   />

//   {/* Annexure Text on Right Side */}
//   <div className="absolute right-4">
//     <p className="font-bold text-sm text-right">Annexure - 22</p>
//   </div>
// </div>


     

//         {/* Title */}
//         <h2 className="text-center text-base font-bold mb-4" style={{letterSpacing: '1px'}}>APPRAISER CERTIFICATE</h2>

//         {/* Address and Reference Section */}
//         <div className="flex justify-between mb-1">
//           <div className="w-1/2">
//             <p style={{fontSize: '10.5pt', lineHeight: '1.4'}}>The Branch Manager</p>
//           </div>
//           <div className="w-1/2 text-right">
//             <p className="font-semibold" style={{fontSize: '10.5pt'}}>SBA/CNO:........................................</p>
//           </div>
//         </div>
        
//         <div className="flex justify-between mb-3">
//           <div className="w-1/2">
//             <p style={{fontSize: '10.5pt', lineHeight: '1.4'}}>Stat bank of India,.......................Branch.</p>
//           </div>
//           <div className="w-1/2 text-right">
//             <p className="font-semibold" style={{fontSize: '10.5pt', lineHeight: '1.4'}}>GOLD LOAN / ACNO:</p>
//             <p className="font-semibold" style={{fontSize: '10.5pt', lineHeight: '1.4'}}>............................................................</p>
//           </div>
//         </div>

//         {/* Dear Sir Section */}
//        <div className="mb-3 w-full">
//   <p className="font-bold mb-2 text-[10.5pt]">Dear Sir,</p>

//   <div className="text-[10.5pt] leading-[1.6] text-justify w-full">
//     <p className="mb-1 indent-16 tracking-wider">
//         I hereby certify that the Gold Ornaments mentioned below belonging to
//     </p>
//     <p className="mb-1">
//       Sir/Smt..............................................................S/W/D of ........................................................... Resident
//     </p>
//     <p className="mb-1">
//       of ................................... have been weighed and scrutinized by me on Dt. .....................................
//     </p>
//     <p className="mb-1">
//       and the exact weight, purity of the metal, and market value of each item as on date are
//     </p>
//     <p className="mb-1">
//       indicated below.
//     </p>
//   </div>
// </div>


//         {/* Table */}
//         <table className="w-full mb-4" style={{borderCollapse: 'collapse', border: '2px solid black'}}>
//           <thead>
//             <tr>
//               <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '4%'}}>
//                 <div>1</div>
//                 <div style={{marginTop: '8px'}}>SR</div>
//                 <div>No</div>
//               </th>
//               <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '13%'}}>
//                 <div>2</div>
//                 <div style={{marginTop: '4px'}}>Description</div>
//                 <div>of</div>
//                 <div>Ornaments</div>
//               </th>
//               <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '6%'}}>
//                 <div>3</div>
//                 <div style={{marginTop: '4px'}}>No.of</div>
//                 <div>Orna</div>
//                 <div>ments</div>
//               </th>
//               <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
//                 <div>4</div>
//                 <div style={{marginTop: '4px'}}>Gross</div>
//                 <div>Weight</div>
//                 <div>( GSM )</div>
//               </th>
//               <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '3px 2px', fontSize: '8pt', lineHeight: '1.2', width: '11%'}}>
//                 <div>5</div>
//                 <div style={{marginTop: '2px'}}>Estimated weight</div>
//                 <div>of</div>
//                 <div>jewels, studded</div>
//                 <div>or</div>
//                 <div>fitted in the</div>
//                 <div>ornament</div>
//               </th>
//               <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
//                 <div>6</div>
//                 <div style={{marginTop: '4px'}}>Net</div>
//                 <div>Weight</div>
//                 <div>( GSM )</div>
//               </th>
//               <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
//                 <div>7</div>
//                 <div style={{marginTop: '4px'}}>Pyority</div>
//                 <div>of</div>
//                 <div>Gold</div>
//                 <div>(Carart)</div>
//               </th>
//               <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
//                 <div>8</div>
//                 <div style={{marginTop: '4px'}}>Market</div>
//                 <div>rate</div>
//                 <div>per</div>
//                 <div>Gram</div>
//               </th>
//               <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '11%'}}>
//                 <div>9</div>
//                 <div style={{marginTop: '4px'}}>Appraised</div>
//                 <div>value of</div>
//                 <div>Ornament</div>
//                 <div>as</div>
//                 <div>par Valuer</div>
//               </th>
//               <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
//                 <div>10</div>
//                 <div style={{marginTop: '4px'}}>Remarks</div>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
//               <tr key={num}>
//                 <td className="text-center" style={{border: '1px solid black', padding: '8px 4px', fontSize: '10pt'}}>{num}</td>
//                 <td style={{border: '1px solid black', padding: '8px 4px'}}></td>
//                 <td style={{border: '1px solid black', padding: '8px 4px'}}></td>
//                 <td style={{border: '1px solid black', padding: '8px 4px'}}></td>
//                 <td style={{border: '1px solid black', padding: '8px 4px'}}></td>
//                 <td style={{border: '1px solid black', padding: '8px 4px'}}></td>
//                 <td style={{border: '1px solid black', padding: '8px 4px'}}></td>
//                 <td style={{border: '1px solid black', padding: '8px 4px'}}></td>
//                 <td style={{border: '1px solid black', padding: '8px 4px'}}></td>
//                 <td style={{border: '1px solid black', padding: '8px 4px'}}></td>
//               </tr>
//             ))}
//             <tr>
//               <td colSpan="2" className="font-bold" style={{border: '1px solid black', padding: '10px 8px', fontSize: '10pt'}}>Total Ornaments :</td>
//               <td style={{border: '1px solid black', padding: '10px 4px'}}></td>
//               <td style={{border: '1px solid black', padding: '10px 4px'}}></td>
//               <td style={{border: '1px solid black', padding: '10px 4px'}}></td>
//               <td style={{border: '1px solid black', padding: '10px 4px'}}></td>
//               <td style={{border: '1px solid black', padding: '10px 4px'}}></td>
//               <td style={{border: '1px solid black', padding: '10px 4px'}}></td>
//               <td style={{border: '1px solid black', padding: '10px 4px'}}></td>
//               <td style={{border: '1px solid black', padding: '10px 4px'}}></td>
//             </tr>
//           </tbody>
//         </table>

//         {/* Declaration */}
//         <p style={{fontSize: '10.5pt', lineHeight: '1.5', textAlign: 'justify', marginBottom: '25px'}}>
//           <span style={{marginLeft: '30px'}}>I Solemnly declare that weight, purity of gold Ornaments / Precious Stones</span><br/>
//           indicated above are correct and I under take to indemnify the Bank against any Loss it<br/>
//           may sustain on account of any insurracy in the above appraisal.
//         </p>

//         {/* Footer Section */}
//         <div className="flex justify-between">
//           <div style={{width: '45%'}}>
//             <p style={{fontSize: '10.5pt', marginBottom: '8px'}}><span className="font-bold">Place :</span>.........................</p>
//             <p style={{fontSize: '10.5pt', marginBottom: '8px'}}><span className="font-bold">Date :</span>............................</p>
//             <p className="font-bold" style={{fontSize: '10.5pt', marginTop: '15px'}}>Signature Of Brower</p>
//             <p style={{fontSize: '10.5pt', marginTop: '25px'}}>.............................................</p>
//           </div>
//           <div className="text-right" style={{width: '50%'}}>
//             <p className="font-bold mr-[50px] " style={{fontSize: '10.5pt', marginBottom: '50px'}}>Yours faithfully.</p>
//             <p className="font-bold mr-[70px]" style={{fontSize: '10.5pt', marginBottom: '35px'}}>Appraiser</p>
//             <p className="font-bold" style={{fontSize: '10pt', lineHeight: '1.5'}}>Jay Mataji Jewelers (Padra Wala)</p>
//             <p className="font-bold" style={{fontSize: '10pt', lineHeight: '1.5'}}>Pro.: Paresh D. Kachhiya</p>
//             <p className="font-bold" style={{fontSize: '10pt', lineHeight: '1.5'}}>Mo.: 9426375344</p>
//             <p className="font-bold" style={{fontSize: '10pt', lineHeight: '1.5'}}>Mo.: 9016943582</p>
//             <p className="font-bold" style={{fontSize: '10pt', marginTop: '12px'}}>SBA/CNO:20096289954</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { Plus, Trash2 } from 'lucide-react';

// export default function SBIAppraiserCertificate() {
//   const [formData, setFormData] = useState({
//     branch: '',
//     cno: '',
//     acNo: '',
//     name: '',
//     guardianName: '',
//     resident: '',
//     residentOf: '',
//     date: '',
//     place: '',
//     bottomDate: ''
//   });

//   const [ornaments, setOrnaments] = useState([]);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const addOrnament = () => {
//     setOrnaments([...ornaments, {
//       description: '',
//       noOfOrnaments: '',
//       grossWeight: '',
//       estimatedWeight: '',
//       netWeight: '',
//       purity: '',
//       marketRate: '',
//       appraisedValue: '',
//       remarks: ''
//     }]);
//   };

//   const updateOrnament = (index, field, value) => {
//     const updated = [...ornaments];
//     updated[index][field] = value;
//     setOrnaments(updated);
//   };

//   const deleteOrnament = (index) => {
//     setOrnaments(ornaments.filter((_, i) => i !== index));
//   };

//   const calculateTotals = () => {
//     return {
//       totalOrnaments: ornaments.reduce((sum, item) => sum + (parseInt(item.noOfOrnaments) || 0), 0),
//       totalGross: ornaments.reduce((sum, item) => sum + (parseFloat(item.grossWeight) || 0), 0).toFixed(2),
//       totalEstimated: ornaments.reduce((sum, item) => sum + (parseFloat(item.estimatedWeight) || 0), 0).toFixed(2),
//       totalNet: ornaments.reduce((sum, item) => sum + (parseFloat(item.netWeight) || 0), 0).toFixed(2),
//       totalAppraised: ornaments.reduce((sum, item) => sum + (parseFloat(item.appraisedValue) || 0), 0).toFixed(2)
//     };
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   const totals = calculateTotals();

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
//       {/* Input Form Section */}
//       <div className="max-w-6xl mx-auto mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
//         <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Certificate Details Form</h2>
        
//         {/* Basic Details */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//           <div>
//             <label className="block text-sm font-semibold mb-2">State Bank of India Branch</label>
//             <input
//               type="text"
//               name="branch"
//               value={formData.branch}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter branch name"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-2">SBA/CNO Number</label>
//             <input
//               type="text"
//               name="cno"
//               value={formData.cno}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter CNO number"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-2">Gold Loan / AC NO</label>
//             <input
//               type="text"
//               name="acNo"
//               value={formData.acNo}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter account number"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-2">Sir/Smt Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter customer name"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-2">S/W/D of</label>
//             <input
//               type="text"
//               name="guardianName"
//               value={formData.guardianName}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter guardian name"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-2">Resident</label>
//             <input
//               type="text"
//               name="resident"
//               value={formData.resident}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter resident status"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-2">Of (Location)</label>
//             <input
//               type="text"
//               name="residentOf"
//               value={formData.residentOf}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter location"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-2">Date</label>
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-2">Place (Bottom)</label>
//             <input
//               type="text"
//               name="place"
//               value={formData.place}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter place"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-2">Date (Bottom)</label>
//             <input
//               type="text"
//               name="bottomDate"
//               value={formData.bottomDate}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter date"
//             />
//           </div>
//         </div>

//         {/* Ornaments Section */}
//         <div className="border-t pt-6">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
//             <h3 className="text-lg sm:text-xl font-bold text-gray-800">Ornaments Details</h3>
//             <button
//               onClick={addOrnament}
//               className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 w-full sm:w-auto justify-center"
//             >
//               <Plus size={20} /> Add Ornament
//             </button>
//           </div>

//           {ornaments.map((ornament, index) => (
//             <div key={index} className="border border-gray-300 rounded p-4 mb-4 bg-gray-50">
//               <div className="flex justify-between items-center mb-3">
//                 <h4 className="font-semibold text-gray-700">Ornament #{index + 1}</h4>
//                 <button
//                   onClick={() => deleteOrnament(index)}
//                   className="text-red-600 hover:text-red-800"
//                 >
//                   <Trash2 size={20} />
//                 </button>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
//                 <div>
//                   <label className="block text-xs font-semibold mb-1">Description</label>
//                   <input
//                     type="text"
//                     value={ornament.description}
//                     onChange={(e) => updateOrnament(index, 'description', e.target.value)}
//                     className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
//                     placeholder="e.g., Gold Chain"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold mb-1">No. of Ornaments</label>
//                   <input
//                     type="number"
//                     value={ornament.noOfOrnaments}
//                     onChange={(e) => updateOrnament(index, 'noOfOrnaments', e.target.value)}
//                     className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold mb-1">Gross Weight (GSM)</label>
//                   <input
//                     type="number"
//                     step="0.01"
//                     value={ornament.grossWeight}
//                     onChange={(e) => updateOrnament(index, 'grossWeight', e.target.value)}
//                     className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold mb-1">Estimated Weight</label>
//                   <input
//                     type="number"
//                     step="0.01"
//                     value={ornament.estimatedWeight}
//                     onChange={(e) => updateOrnament(index, 'estimatedWeight', e.target.value)}
//                     className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold mb-1">Net Weight (GSM)</label>
//                   <input
//                     type="number"
//                     step="0.01"
//                     value={ornament.netWeight}
//                     onChange={(e) => updateOrnament(index, 'netWeight', e.target.value)}
//                     className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold mb-1">Purity (Carat)</label>
//                   <input
//                     type="text"
//                     value={ornament.purity}
//                     onChange={(e) => updateOrnament(index, 'purity', e.target.value)}
//                     className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
//                     placeholder="e.g., 22K"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold mb-1">Market Rate/Gram</label>
//                   <input
//                     type="number"
//                     step="0.01"
//                     value={ornament.marketRate}
//                     onChange={(e) => updateOrnament(index, 'marketRate', e.target.value)}
//                     className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold mb-1">Appraised Value</label>
//                   <input
//                     type="number"
//                     step="0.01"
//                     value={ornament.appraisedValue}
//                     onChange={(e) => updateOrnament(index, 'appraisedValue', e.target.value)}
//                     className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold mb-1">Remarks</label>
//                   <input
//                     type="text"
//                     value={ornament.remarks}
//                     onChange={(e) => updateOrnament(index, 'remarks', e.target.value)}
//                     className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Certificate Preview */}
//       <div className="flex justify-center items-start overflow-x-auto">
//         <div className="bg-white shadow-lg" style={{ 
//           width: '210mm', 
//           minHeight: '297mm',
//           padding: '12mm 18mm',
//           fontFamily: 'Arial, sans-serif',
//           fontSize: '11pt',
//           minWidth: '210mm'
//         }}>
//           {/* Header */}
//           <div className="flex justify-center items-center relative w-full">
//             <img 
//               src="./logo.png" 
//               alt="SBI Logo" 
//               className="h-[77px] w-[373px]"
//             />
//             <div className="absolute right-4">
//               <p className="font-bold text-sm text-right">Annexure - 22</p>
//             </div>
//           </div>

//           {/* Title */}
//           <h2 className="text-center text-base font-bold mb-4" style={{letterSpacing: '1px'}}>APPRAISER CERTIFICATE</h2>

//           {/* Address and Reference Section */}
//           <div className="flex justify-between mb-1">
//             <div className="w-1/2">
//               <p style={{fontSize: '10.5pt', lineHeight: '1.4'}}>The Branch Manager</p>
//             </div>
//             <div className="w-1/2 text-right">
//               <p className="font-semibold" style={{fontSize: '10.5pt'}}>SBA/CNO:{formData.cno || '........................................'}</p>
//             </div>
//           </div>
          
//           <div className="flex justify-between mb-3">
//             <div className="w-1/2">
//               <p style={{fontSize: '10.5pt', lineHeight: '1.4'}}>State Bank of India, {formData.branch || '.......................'} Branch.</p>
//             </div>
//             <div className="w-1/2 text-right">
//               <p className="font-semibold" style={{fontSize: '10.5pt', lineHeight: '1.4'}}>GOLD LOAN / ACNO:</p>
//               <p className="font-semibold" style={{fontSize: '10.5pt', lineHeight: '1.4'}}>{formData.acNo || '............................................................'}</p>
//             </div>
//           </div>

//           {/* Dear Sir Section */}
//           <div className="mb-3 w-full">
//             <p className="font-bold mb-2 text-[10.5pt]">Dear Sir,</p>
//             <div className="text-[10.5pt] leading-[1.6] text-justify w-full">
//               <p className="mb-1 indent-16 tracking-wider">
//                 I hereby certify that the Gold Ornaments mentioned below belonging to
//               </p>
//               <p className="mb-1">
//                 Sir/Smt {formData.name || '..............................................................'} S/W/D of {formData.guardianName || '...........................................................'} Resident
//               </p>
//               <p className="mb-1">
//                 of {formData.residentOf || '...................................'} have been weighed and scrutinized by me on Dt. {formatDate(formData.date) || '.....................................'}
//               </p>
//               <p className="mb-1">
//                 and the exact weight, purity of the metal, and market value of each item as on date are
//               </p>
//               <p className="mb-1">
//                 indicated below.
//               </p>
//             </div>
//           </div>

//           {/* Table */}
//           <table className="w-full mb-4" style={{borderCollapse: 'collapse', border: '2px solid black'}}>
//             <thead>
//               <tr>
//                 <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '4%'}}>
//                   <div>1</div>
//                   <div style={{marginTop: '8px'}}>SR</div>
//                   <div>No</div>
//                 </th>
//                 <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '13%'}}>
//                   <div>2</div>
//                   <div style={{marginTop: '4px'}}>Description</div>
//                   <div>of</div>
//                   <div>Ornaments</div>
//                 </th>
//                 <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '6%'}}>
//                   <div>3</div>
//                   <div style={{marginTop: '4px'}}>No.of</div>
//                   <div>Orna</div>
//                   <div>ments</div>
//                 </th>
//                 <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
//                   <div>4</div>
//                   <div style={{marginTop: '4px'}}>Gross</div>
//                   <div>Weight</div>
//                   <div>( GSM )</div>
//                 </th>
//                 <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '3px 2px', fontSize: '8pt', lineHeight: '1.2', width: '11%'}}>
//                   <div>5</div>
//                   <div style={{marginTop: '2px'}}>Estimated weight</div>
//                   <div>of</div>
//                   <div>jewels, studded</div>
//                   <div>or</div>
//                   <div>fitted in the</div>
//                   <div>ornament</div>
//                 </th>
//                 <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
//                   <div>6</div>
//                   <div style={{marginTop: '4px'}}>Net</div>
//                   <div>Weight</div>
//                   <div>( GSM )</div>
//                 </th>
//                 <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
//                   <div>7</div>
//                   <div style={{marginTop: '4px'}}>Purity</div>
//                   <div>of</div>
//                   <div>Gold</div>
//                   <div>(Carat)</div>
//                 </th>
//                 <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
//                   <div>8</div>
//                   <div style={{marginTop: '4px'}}>Market</div>
//                   <div>rate</div>
//                   <div>per</div>
//                   <div>Gram</div>
//                 </th>
//                 <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '11%'}}>
//                   <div>9</div>
//                   <div style={{marginTop: '4px'}}>Appraised</div>
//                   <div>value of</div>
//                   <div>Ornament</div>
//                   <div>as</div>
//                   <div>par Valuer</div>
//                 </th>
//                 <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
//                   <div>10</div>
//                   <div style={{marginTop: '4px'}}>Remarks</div>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {[...Array(10)].map((_, index) => {
//                 const ornament = ornaments[index];
//                 return (
//                   <tr key={index}>
//                     <td className="text-center" style={{border: '1px solid black', padding: '8px 4px', fontSize: '10pt'}}>{index + 1}</td>
//                     <td style={{border: '1px solid black', padding: '8px 4px', fontSize: '9pt'}}>{ornament?.description || ''}</td>
//                     <td className="text-center" style={{border: '1px solid black', padding: '8px 4px', fontSize: '9pt'}}>{ornament?.noOfOrnaments || ''}</td>
//                     <td className="text-center" style={{border: '1px solid black', padding: '8px 4px', fontSize: '9pt'}}>{ornament?.grossWeight || ''}</td>
//                     <td className="text-center" style={{border: '1px solid black', padding: '8px 4px', fontSize: '9pt'}}>{ornament?.estimatedWeight || ''}</td>
//                     <td className="text-center" style={{border: '1px solid black', padding: '8px 4px', fontSize: '9pt'}}>{ornament?.netWeight || ''}</td>
//                     <td className="text-center" style={{border: '1px solid black', padding: '8px 4px', fontSize: '9pt'}}>{ornament?.purity || ''}</td>
//                     <td className="text-center" style={{border: '1px solid black', padding: '8px 4px', fontSize: '9pt'}}>{ornament?.marketRate || ''}</td>
//                     <td className="text-center" style={{border: '1px solid black', padding: '8px 4px', fontSize: '9pt'}}>{ornament?.appraisedValue || ''}</td>
//                     <td className="text-center" style={{border: '1px solid black', padding: '8px 4px', fontSize: '9pt'}}>{ornament?.remarks || ''}</td>
//                   </tr>
//                 );
//               })}
//               <tr>
//                 <td colSpan="2" className="font-bold" style={{border: '1px solid black', padding: '10px 8px', fontSize: '10pt'}}>Total Ornaments :</td>
//                 <td className="text-center font-bold" style={{border: '1px solid black', padding: '10px 4px', fontSize: '9pt'}}>{totals.totalOrnaments || ''}</td>
//                 <td className="text-center font-bold" style={{border: '1px solid black', padding: '10px 4px', fontSize: '9pt'}}>{totals.totalGross || ''}</td>
//                 <td className="text-center font-bold" style={{border: '1px solid black', padding: '10px 4px', fontSize: '9pt'}}>{totals.totalEstimated || ''}</td>
//                 <td className="text-center font-bold" style={{border: '1px solid black', padding: '10px 4px', fontSize: '9pt'}}>{totals.totalNet || ''}</td>
//                 <td style={{border: '1px solid black', padding: '10px 4px'}}></td>
//                 <td style={{border: '1px solid black', padding: '10px 4px'}}></td>
//                 <td className="text-center font-bold" style={{border: '1px solid black', padding: '10px 4px', fontSize: '9pt'}}>{totals.totalAppraised || ''}</td>
//                 <td style={{border: '1px solid black', padding: '10px 4px'}}></td>
//               </tr>
//             </tbody>
//           </table>

//           {/* Declaration */}
//           <p style={{fontSize: '10.5pt', lineHeight: '1.5', textAlign: 'justify', marginBottom: '25px'}}>
//             <span style={{marginLeft: '30px'}}>I Solemnly declare that weight, purity of gold Ornaments / Precious Stones</span><br/>
//             indicated above are correct and I under take to indemnify the Bank against any Loss it<br/>
//             may sustain on account of any insurracy in the above appraisal.
//           </p>

//           {/* Footer Section */}
//           <div className="flex justify-between">
//             <div style={{width: '45%'}}>
//               <p style={{fontSize: '10.5pt', marginBottom: '8px'}}><span className="font-bold">Place :</span>{formData.place || '.........................'}</p>
//               <p style={{fontSize: '10.5pt', marginBottom: '8px'}}><span className="font-bold">Date :</span>{formData.bottomDate || '..........................'}</p>
//               <p className="font-bold" style={{fontSize: '10.5pt', marginTop: '15px'}}>Signature Of Brower</p>
//               <p style={{fontSize: '10.5pt', marginTop: '25px'}}>.............................................</p>
//             </div>
//             <div className="text-right" style={{width: '50%'}}>
//               <p className="font-bold mr-[50px]" style={{fontSize: '10.5pt', marginBottom: '50px'}}>Yours faithfully.</p>
//               <p className="font-bold mr-[70px]" style={{fontSize: '10.5pt', marginBottom: '35px'}}>Appraiser</p>
//               <p className="font-bold" style={{fontSize: '10pt', lineHeight: '1.5'}}>Jay Mataji Jewelers (Padra Wala)</p>
//               <p className="font-bold" style={{fontSize: '10pt', lineHeight: '1.5'}}>Pro.: Paresh D. Kachhiya</p>
//               <p className="font-bold" style={{fontSize: '10pt', lineHeight: '1.5'}}>Mo.: 9426375344</p>
//               <p className="font-bold" style={{fontSize: '10pt', lineHeight: '1.5'}}>Mo.: 9016943582</p>
//               <p className="font-bold" style={{fontSize: '10pt', marginTop: '12px'}}>SBA/CNO:20096289954</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


  import React, { useState, useRef } from 'react';
import { Plus, Trash2, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import InstallPWAButton from './InstallPWAButton';

export default function SBIAppraiserCertificate() {
  const [formData, setFormData] = useState({
    branch: '',
    cno: '',
    acNo: '',
    name: '',
    guardianName: '',
    resident: '',
    residentOf: '',
    date: '',
    place: '',
    bottomDate: ''
  });

  const [ornaments, setOrnaments] = useState([]);
  const certificateRef = useRef();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addOrnament = () => {
    setOrnaments([...ornaments, {
      description: '',
      noOfOrnaments: '',
      grossWeight: '',
      estimatedWeight: '',
      netWeight: '',
      purity: '18',
      marketRate: '',
      appraisedValue: '',
      remarks: ''
    }]);
  };

  const updateOrnament = (index, field, value) => {
    const updated = [...ornaments];
    updated[index][field] = value;
    setOrnaments(updated);
  };

  const deleteOrnament = (index) => {
    setOrnaments(ornaments.filter((_, i) => i !== index));
  };

  const calculateTotals = () => {
    return {
      totalOrnaments: ornaments.reduce((sum, item) => sum + (parseInt(item.noOfOrnaments) || 0), 0),
      totalGross: ornaments.reduce((sum, item) => sum + (parseFloat(item.grossWeight) || 0), 0).toFixed(2),
      totalEstimated: ornaments.reduce((sum, item) => sum + (parseFloat(item.estimatedWeight) || 0), 0).toFixed(2),
      totalNet: ornaments.reduce((sum, item) => sum + (parseFloat(item.netWeight) || 0), 0).toFixed(2),
      totalAppraised: ornaments.reduce((sum, item) => sum + (parseFloat(item.appraisedValue) || 0), 0).toFixed(2)
    };
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // ✅ Optimized PDF download
const downloadPDF = async () => {
  const element = certificateRef.current;
  if (!element) return;

  const scale = 2;

  const canvas = await html2canvas(element, {
    scale,
    useCORS: true,
    logging: false,
    scrollX: 0,
    scrollY: 0,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
  });

  // ✅ Convert to grayscale
  const ctx = canvas.getContext("2d");
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const avg = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    data[i] = avg;       // Red
    data[i + 1] = avg;   // Green
    data[i + 2] = avg;   // Blue
  }

  ctx.putImageData(imageData, 0, 0);

  // Now get grayscale PNG
  const imgData = canvas.toDataURL("image/png", 1.0);

  const imgWidthPx = canvas.width;
  const imgHeightPx = canvas.height;

  const pxToMm = 0.264583;
  const pdfWidth = imgWidthPx * pxToMm;
  const pdfHeight = imgHeightPx * pxToMm;

  const orientation = pdfWidth > pdfHeight ? "landscape" : "portrait";

  const pdf = new jsPDF({
    orientation,
    unit: "mm",
    format: [pdfWidth, pdfHeight],
  });

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("SBI_Appraiser_Certificate.pdf");
};

  const totals = calculateTotals();

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Input Form Section */}
      <div className="max-w-6xl mx-auto mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Certificate Details Form</h2>

        {/* Basic Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            { label: 'State Bank of India Branch', name: 'branch', placeholder: 'Enter branch name' },
            { label: 'SBA/CNO Number', name: 'cno', placeholder: 'Enter CNO number' },
            { label: 'Gold Loan / AC NO', name: 'acNo', placeholder: 'Enter account number' },
            { label: 'Sir/Smt Name', name: 'name', placeholder: 'Enter customer name' },
            { label: 'S/W/D of', name: 'guardianName', placeholder: 'Enter guardian name' },
            { label: 'Resident', name: 'resident', placeholder: 'Enter resident status' },
            { label: 'Of (Location)', name: 'residentOf', placeholder: 'Enter location' },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-sm font-semibold mb-2">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder={field.placeholder}
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-semibold mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Place (Bottom)</label>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter place"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Date (Bottom)</label>
            <input
              type="date"
              name="bottomDate"
              value={formData.bottomDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter date"
            />
          </div>
        </div>

        {/* Ornaments Section */}
        <div className="border-t pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Ornaments Details</h3>
            <button
              onClick={addOrnament}
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 w-full sm:w-auto justify-center"
            >
              <Plus size={20} /> Add Ornament
            </button>
          </div>
{ornaments.map((ornament, index) => (
  <div key={index} className="border border-gray-300 rounded p-4 mb-4 bg-gray-50">
    <div className="flex justify-between items-center mb-3">
      <h4 className="font-semibold text-gray-700">Ornament #{index + 1}</h4>
      <button onClick={() => deleteOrnament(index)} className="text-red-600 hover:text-red-800">
        <Trash2 size={20} />
      </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {[
        ['Description', 'description', 'e.g., Gold Chain', 'text'],
        ['No. of Ornaments', 'noOfOrnaments', '', 'number'],
        ['Gross Weight (GSM)', 'grossWeight', '', 'number'],
        ['Estimated Weight', 'estimatedWeight', '', 'number'],
        ['Net Weight (GSM)', 'netWeight', '', 'number'],
        ['Purity (Carat)', 'purity', '18', 'dropdown'], // 👈 changed type to dropdown
        ['Market Rate/Gram', 'marketRate', '', 'number'],
        ['Appraised Value', 'appraisedValue', '', 'number'],
        ['Remarks', 'remarks', '', 'text'],
      ].map(([label, name, placeholder, type], idx) => (
        <div key={idx}>
          <label className="block text-xs font-semibold mb-1">{label}</label>

          {type === 'dropdown' ? (
            <select
              value={ornament.purity || '18'}
              onChange={(e) => updateOrnament(index, name, e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="18">18</option>
              <option value="20">20</option>
              <option value="22">22</option>
            </select>
          ) : (
            <input
              type={type}
              step="0.01"
              value={
                name === 'netWeight'
                  ? (parseFloat(ornament.grossWeight || 0) -
                      parseFloat(ornament.estimatedWeight || 0)).toFixed(2)
                  : name === 'appraisedValue'
                  ? (
                      (parseFloat(ornament.grossWeight || 0) -
                        parseFloat(ornament.estimatedWeight || 0)) *
                      parseFloat(ornament.marketRate || 0)
                    ).toFixed(2)
                  : ornament[name]
              }
              onChange={(e) => {
                if (name === 'netWeight' || name === 'appraisedValue') return;
                updateOrnament(index, name, e.target.value);
              }}
              className={`w-full border border-gray-300 rounded px-2 py-1 text-sm ${
                name === 'netWeight' || name === 'appraisedValue'
                  ? 'bg-gray-100 cursor-not-allowed'
                  : ''
              }`}
              placeholder={placeholder}
              readOnly={name === 'netWeight' || name === 'appraisedValue'}
            />
          )}
        </div>
      ))}
    </div>
  </div>
))}

        </div>

        {/* Download PDF Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={downloadPDF}
            className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
          >
            <Download size={20} />
            Download PDF Certificate
          </button>
        </div>
      </div>

      {/* Certificate Preview (unchanged structure) */}
      <div className="flex item-center justify-center w-[1000px] overflow-auto">
        <div
          ref={certificateRef}
          className="bg-white border-2 border-black shadow-lg "
          style={{
            width: '730px',
            minHeight: '1000px',
            padding: '12mm 10mm',
           
          }}
        >
            {/* Header */}
            <div className="flex justify-center items-center relative w-full">
              <img 
                src="./logo.png" 
                alt="SBI Logo" 
                className="h-[77px] w-[373px]"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute right-4">
                <p className="font-bold text-sm text-right">Annexure - 22</p>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-center text-base font-bold mb-4" style={{letterSpacing: '1px'}}>APPRAISER CERTIFICATE</h2>

            {/* Address and Reference Section */}
            <div className="flex justify-between mb-1">
              <div className="w-1/2">
                <p style={{fontSize: '10.5pt', lineHeight: '1.4'}}>The Branch Manager</p>
              </div>
              <div className="w-1/2 text-right">
                <p className="font-semibold" style={{fontSize: '10.5pt'}}>SBA/CNO:{formData.cno || '........................................'}</p>
              </div>
            </div>
            
            <div className="flex justify-between mb-3">
              <div className="w-1/2">
                <p style={{fontSize: '10.5pt', lineHeight: '1.4'}}>State Bank of India, {formData.branch || '.......................'} Branch.</p>
              </div>
              <div className="w-1/2 text-right">
                <p className="font-semibold" style={{fontSize: '10.5pt', lineHeight: '1.4'}}>GOLD LOAN / ACNO:</p>
                <p className="font-semibold" style={{fontSize: '10.5pt', lineHeight: '1.4'}}>{formData.acNo || '............................................................'}</p>
              </div>
            </div>

            {/* Dear Sir Section */}
 <div className="mb-3 w-full">
  <p className="font-bold mb-2 text-[10.5pt]">Dear Sir,</p>
  <div className="text-[10.5pt] leading-[1.6] text-justify w-full">
    <p className="mb-1 indent-16 tracking-wider">
      I hereby certify that the Gold Ornaments mentioned below belonging to
    </p>

    <p className="mb-1">
      Sir/Smt 
      <span className="relative inline-block mx-1 align-middle">
        <span className="opacity-50 select-none">..........................................................................</span>
        <span
          className={`absolute inset-0 flex justify-center items-center whitespace-nowrap ${
            formData.name ? 'font-bold tracking-wide' : ''
          }`}
          style={{ letterSpacing: '0.5px', paddingBottom: '1px' }}
        >
          {formData.name || ''}
        </span>
      </span>
      S/W/D of 
      <span className="relative inline-block mx-1 align-middle">
        <span className="opacity-50 select-none">...................................................................</span>
        <span
          className={`absolute inset-0 flex justify-center items-center whitespace-nowrap ${
            formData.guardianName ? 'font-bold tracking-wide' : ''
          }`}
          style={{ letterSpacing: '0.5px', paddingBottom: '1px' }}
        >
          {formData.guardianName || ''}
        </span>
      </span>
      Resident
    </p>

    <p className="mb-1">
      of 
      <span className="relative inline-block mx-1 align-middle">
        <span className="opacity-50 select-none">...........................................................</span>
        <span
          className={`absolute inset-0 flex justify-center items-center whitespace-nowrap ${
            formData.resident ? 'font-bold tracking-wide' : ''
          }`}
          style={{ letterSpacing: '0.5px', paddingBottom: '1px' }}
        >
          {formData.resident || ''}
        </span>
      </span>
      have been weighed and scrutinized by me on Dt. 
      <span className="relative inline-block mx-1 align-middle">
        <span className="opacity-50 select-none">.....................................</span>
        <span
          className={`absolute inset-0 flex justify-center items-center whitespace-nowrap ${
            formData.date ? 'font-bold tracking-wide' : ''
          }`}
          style={{ letterSpacing: '0.5px', paddingBottom: '1px' }}
        >
          {formatDate(formData.date) || ''}
        </span>
      </span>
    </p>

    <p className="mb-1">
      and the exact weight, purity of the metal, and market value of each item as on date are
    </p>
    <p className="mb-1">
      indicated below.
    </p>
  </div>
</div>



            {/* Table */}
            <table className="w-full mb-4" style={{borderCollapse: 'collapse', border: '2px solid black'}}>
              <thead>
                <tr>
                  <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '4%'}}>
                    <div>1</div>
                    <div style={{marginTop: '8px'}}>SR</div>
                    <div>No</div>
                  </th>
                  <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '13%'}}>
                    <div>2</div>
                    <div style={{marginTop: '4px'}}>Description</div>
                    <div>of</div>
                    <div>Ornaments</div>
                  </th>
                  <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '6%'}}>
                    <div>3</div>
                    <div style={{marginTop: '4px'}}>No.of</div>
                    <div>Orna</div>
                    <div>ments</div>
                  </th>
                  <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
                    <div>4</div>
                    <div style={{marginTop: '4px'}}>Gross</div>
                    <div>Weight</div>
                    <div>( GSM )</div>
                  </th>
                  <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '2px 1px', fontSize: '7.5pt', lineHeight: '1.2', width: '11%'}}>
                    <div>5</div>
                    <div style={{marginTop: '1px'}}>Estimated weight</div>
                    <div>of</div>
                    <div>jewels, studded</div>
                    <div>or</div>
                    <div>fitted in the</div>
                    <div>ornament</div>
                  </th>
                  <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
                    <div>6</div>
                    <div style={{marginTop: '4px'}}>Net</div>
                    <div>Weight</div>
                    <div>( GSM )</div>
                  </th>
                  <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
                    <div>7</div>
                    <div style={{marginTop: '4px'}}>Purity</div>
                    <div>of</div>
                    <div>Gold</div>
                    <div>(Carat)</div>
                  </th>
                  <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
                    <div>8</div>
                    <div style={{marginTop: '4px'}}>Market</div>
                    <div>rate</div>
                    <div>per</div>
                    <div>Gram</div>
                  </th>
                  <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '11%'}}>
                    <div>9</div>
                    <div style={{marginTop: '4px'}}>Appraised</div>
                    <div>value of</div>
                    <div>Ornament</div>
                    <div>as</div>
                    <div>par Valuer</div>
                  </th>
                  <th className="text-center align-top font-bold" style={{border: '1px solid black', padding: '4px', fontSize: '9pt', lineHeight: '1.3', width: '9%'}}>
                    <div>10</div>
                    <div style={{marginTop: '4px'}}>Remarks</div>
                  </th>
                </tr>
              </thead>
             <tbody>
  {(() => {
    // Dynamic totals calculation (no useState)
    const totals = ornaments.reduce(
      (acc, o) => {
        const gross = parseFloat(o.grossWeight || 0);
        const estimated = parseFloat(o.estimatedWeight || 0);
        const net = gross - estimated;
        const appraised = net * parseFloat(o.marketRate || 0);

        acc.totalOrnaments += parseFloat(o.noOfOrnaments || 0);
        acc.totalGross += gross;
        acc.totalEstimated += estimated;
        acc.totalNet += net;
        acc.totalAppraised += appraised;
        return acc;
      },
      { totalOrnaments: 0, totalGross: 0, totalEstimated: 0, totalNet: 0, totalAppraised: 0 }
    );

    return (
      <>
        {[...Array(10)].map((_, index) => {
          const ornament = ornaments[index];
          if (!ornament) {
            return (
              <tr key={index}>
                {Array(10).fill(null).map((_, i) => (
                  <td key={i} style={{ border: '1px solid black', padding: '8px 4px' }}></td>
                ))}
              </tr>
            );
          }

          const gross = parseFloat(ornament.grossWeight || 0);
          const estimated = parseFloat(ornament.estimatedWeight || 0);
          const net = gross - estimated;
          const appraised = net * parseFloat(ornament.marketRate || 0);

          return (
            <tr key={index}>
              <td className="text-center" style={{ border: '1px solid black', padding: '8px 4px', fontSize: '10pt' }}>{index + 1}</td>
              <td style={{ border: '1px solid black', padding: '8px 4px', fontSize: '9pt' }}>{ornament.description || ''}</td>
              <td className="text-center" style={{ border: '1px solid black', padding: '8px 4px', fontSize: '9pt' }}>{ornament.noOfOrnaments || ''}</td>
              <td className="text-center" style={{ border: '1px solid black', padding: '8px 4px', fontSize: '9pt' }}>{gross.toFixed(3) || ''}</td>
              <td className="text-center" style={{ border: '1px solid black', padding: '8px 4px', fontSize: '9pt' }}>{estimated.toFixed(3) || ''}</td>
              <td className="text-center" style={{ border: '1px solid black', padding: '8px 4px', fontSize: '9pt' }}>{net.toFixed(3)}</td>
              <td className="text-center" style={{ border: '1px solid black', padding: '8px 4px', fontSize: '9pt' }}>{ornament.purity || ''}</td>
              <td className="text-center" style={{ border: '1px solid black', padding: '8px 4px', fontSize: '9pt' }}>{ornament.marketRate || ''}</td>
              <td className="text-center" style={{ border: '1px solid black', padding: '8px 4px', fontSize: '9pt' }}>{appraised.toFixed(3)}</td>
              <td className="text-center" style={{ border: '1px solid black', padding: '8px 4px', fontSize: '9pt' }}>{ornament.remarks || ''}</td>
            </tr>
          );
        })}

        {/* Total row */}
        <tr>
          <td colSpan="2" className="font-bold" style={{ border: '1px solid black', padding: '8px 8px', fontSize: '9pt' }}>Total Ornaments :</td>
          <td className="text-center font-bold" style={{ border: '1px solid black', padding: '8px 4px', fontSize: '9pt' }}>{totals.totalOrnaments.toFixed(0)}</td>
          <td className="text-center font-bold" style={{ border: '1px solid black', padding: '8px 4px', fontSize: '9pt' }}>{totals.totalGross.toFixed(3)}</td>
          <td className="text-center font-bold" style={{ border: '1px solid black', padding: '8px 4px', fontSize: '9pt' }}>{totals.totalEstimated.toFixed(3)}</td>
          <td className="text-center font-bold" style={{ border: '1px solid black', padding: '8px 4px', fontSize: '9pt' }}>{totals.totalNet.toFixed(3)}</td>
          <td style={{ border: '1px solid black', padding: '10px 4px' }}></td>
          <td style={{ border: '1px solid black', padding: '10px 4px' }}></td>
          <td className="text-center font-bold" style={{ border: '1px solid black', padding: '10px 4px', fontSize: '9pt' }}>{totals.totalAppraised.toFixed(3)}</td>
          <td style={{ border: '1px solid black', padding: '10px 4px' }}></td>
        </tr>
      </>
    );
  })()}
</tbody>

            </table>

            {/* Declaration */}
            <p style={{fontSize: '10.5pt', lineHeight: '1.5', textAlign: 'justify', marginBottom: '25px'}}>
              <span style={{marginLeft: '30px'}}>I Solemnly declare that weight, purity of gold Ornaments / Precious Stones</span><br/>
              indicated above are correct and I under take to indemnify the Bank against any Loss it<br/>
              may sustain on account of any insurracy in the above appraisal.
            </p>

            {/* Footer Section */}
            <div className="flex justify-between">
              <div style={{width: '45%'}}>
                <p style={{fontSize: '10.5pt', marginBottom: '8px'}}><span className="font-bold">Place :</span>{formData.place || '.........................'}</p>
                <p style={{fontSize: '10.5pt', marginBottom: '8px'}}><span className="font-bold">Date :</span>{formatDate(formData.bottomDate)  || '..........................'}</p>
                <p className="font-bold" style={{fontSize: '10.5pt', marginTop: '15px'}}>Signature Of Brower</p>
                <p style={{fontSize: '10.5pt', marginTop: '25px'}}>.............................................</p>
              </div>
              <div className="text-right" style={{width: '50%'}}>
                <p className="font-bold mr-[50px]" style={{fontSize: '10.5pt', marginBottom: '50px'}}>Yours faithfully.</p>
                <p className="font-bold mr-[70px]" style={{fontSize: '10.5pt', marginBottom: '35px'}}>Appraiser</p>
                <p className="font-bold" style={{fontSize: '10pt', lineHeight: '1.5'}}>Jay Mataji Jewelers (Padra Wala)</p>
                <p className="font-bold" style={{fontSize: '10pt', lineHeight: '1.5'}}>Pro.: Paresh D. Kachhiya</p>
                <p className="font-bold" style={{fontSize: '10pt', lineHeight: '1.5'}}>Mo.: 9426375344</p>
                <p className="font-bold" style={{fontSize: '10pt', lineHeight: '1.5'}}>Mo.: 9016943582</p>
                <p className="font-bold" style={{fontSize: '10pt', marginTop: '12px'}}>SBA/CNO:20096289954</p>
              </div>
            </div>
          </div>
        </div>
      <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white mt-8 py-3 px-4 shadow-inner w-full">
  {/* Mobile View */}
  <div className="flex flex-col items-center text-center sm:hidden">
    <h2 className="text-lg font-bold tracking-wide hover:text-gray-300 transition-colors duration-300">
      ValueWeb
    </h2>
    <div className="flex justify-center items-center gap-4 mt-1">
      <a
        href="tel:7203977628"
        className="text-sm font-medium hover:text-gray-300 transition-colors duration-300"
      >
        Yash Gandhi Ph: <span className="font-semibold">7203977628</span>
      </a>
      <a
        href="tel:9265637794"
        className="text-sm font-medium hover:text-gray-300 transition-colors duration-300"
      >
        Prit Gandhi Ph: <span className="font-semibold">9265637794</span>
      </a>
    </div>
  </div>

  {/* Desktop View */}
  <div className="hidden sm:flex flex-row justify-between items-center text-center text-sm sm:text-base">
    <a
      href="tel:7203977628"
      className="font-medium hover:text-gray-300 transition-colors duration-300"
    >
      Yash Gandhi Ph: <span className="font-semibold">7203977628</span>
    </a>

    <h2 className="text-lg sm:text-xl font-bold tracking-wide hover:text-gray-300 transition-colors duration-300">
      ValueWeb
    </h2>

    <a
      href="tel:9265637794"
      className="font-medium hover:text-gray-300 transition-colors duration-300"
    >
      Prit Gandhi Ph: <span className="font-semibold">9265637794</span>
    </a>
  </div>

  <div className="mt-2 text-center text-xs text-gray-400 w-full">
    © {new Date().getFullYear()} ValueWeb. All rights reserved.
  </div>
</footer>
<InstallPWAButton />
      </div>
      
    );
  }