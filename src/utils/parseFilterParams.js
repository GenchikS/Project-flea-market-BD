
const parseName = (name) => {
  const isString = typeof name === 'string';
  if (!isString) return;
  if (isString) return name;
};



export const parseFilterParams = (query) => {
    const { name, email } = query;
    // console.log(`name parseFilterParams`, name);
    // console.log(`name parseFilterParams`, email);
    const parsedName = parseName(name);
  const parsedEmail = parseName(email);
  // console.log(`parsedName`, parsedName);
  // console.log(`parsedEmail`, parsedEmail);


    return {
      name: parsedName,
      email: parsedEmail,
    };
}
