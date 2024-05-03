// import React, { useState } from 'react';
// import GeneralInfo from './GeneralInfo.jsx';
// import Education from './Education.jsx';
// import Experience from './Experience.jsx';

// function CVForm() {
//   const [generalInfo, setGeneralInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//   });

//   const [education, setEducation] = useState([]);
//   const [experience, setExperience] = useState([]);

//   // Add functions to handle form submissions, editing, and updating state for each section (GeneralInfo, Education, Experience)

//   return (
//     <form>
//       {/* Render GeneralInfo component */}
//       <GeneralInfo info={generalInfo} setInfo={setGeneralInfo} />

//       {/* Render Education section with list of EducationItem components */}
//       <Education education={education} setEducation={setEducation} />

//       {/* Render Experience section with list of ExperienceItem components */}
//       <Experience experience={experience} setExperience={setExperience} />

//       <button type="submit">Submit</button>
//       <button type="button">Edit</button>
//     </form>
//   );
// }

// export default CVForm;
