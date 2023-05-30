const Calculation = () => {
  return (
    <div>
      <h3>Employee 1</h3>
      {/* TODO: INPUT SALARY */}
      <div>
        <label>Basic Salary</label>
        <input type="number" placeholder="Enter salary here"></input>
      </div>

      <div>
        <h3>Summary of EPF, SOCSO and EIS Payment</h3>
        {/* TODO: Calculation of all policies */}
        <ul>
          <li><label><input type="checkbox"/>EPF</label></li>
          <li><label><input type="checkbox"/>SOCSO</label></li>
          <li><label><input type="checkbox"/>EIS</label></li>
        </ul>
        <div>
          <h4>Total Pay by Employee</h4>
          <input type="number" placeholder="RM"/>
        </div>
        <div>
          <h4>Total Pay by Employer</h4>
          <input type="number" placeholder="RM"/>
        </div>
        <div>
          <h4>Total Salary to Pay</h4>
          <input type="number" placeholder="RM"/>
        </div>
        {/* TODO: All button */}
        <div>
          <button>See more</button>
          <button>Add more employee</button>
        </div>
      </div>
    </div>
  );
};
export default Calculation;
