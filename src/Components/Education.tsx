function Education() {
  return (
    <>
      {/* Educational History Section*/}
      <section id="education">
        <h2>Educational History</h2>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Degree Title</th>
              <th>Passing Year</th>
              <th>Total Marks</th>
              <th>Obtained Marks</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="deg">Matriculation</td>
              <td>2020</td>
              <td>1100</td>
              <td>958</td>
              <td>87%</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="deg">Intermediate</td>
              <td>2022</td>
              <td>1100</td>
              <td>853</td>
              <td>77%</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
export default Education;
