export default st => `
  <main>
    ${st.paragraphs.map(info => `<p>${info.paragraph1}</p>`).join("")}
  </main>
`;
