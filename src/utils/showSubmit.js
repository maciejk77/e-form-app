const showSubmit = (output) => {
  // Date-Time hack until solution found in format.js
  const { date, time } = output;
  const joinedDateTime = `${date}T${time}`;
  delete output.time;
  const newOutput = { ...output, date: joinedDateTime };

  console.log('--- SUBMITTED --- ', newOutput);

  // persisting the form state after submission to localStorage
  localStorage.setItem('persisted-form', JSON.stringify(newOutput));
};

export default showSubmit;
