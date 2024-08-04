const TablesAndForms = () => {
  return (
    <>
      {/* table hearders are vertical-rowspan */}
      <table>
        <tr>
          <th>Name</th>
          <td>Jill Smith</td>
        </tr>
        <tr>
          <th rowspan="2">Phone</th>
          <td>555-77854</td>
        </tr>
        <tr>
          <td>555-77854</td>
        </tr>
      </table>
      <hr />
      <table>
        {/* table hearders are horizontal-colspan */}

        <tr>
          <th colspan="2">Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>

      <hr />
      {/* description list,description terms with description */}

      <dl>
        <dt>Coffee</dt>

        <dd>black hot drink</dd>

        <dt>Milk</dt>

        <dd>white cold drink</dd>
      </dl>

      <hr />
      <form
        style={{ padding: "10px", margin: "10px" }}
        action="/action_page.php"
        method="post"
      >
        Name :{" "}
        <input
          type="text"
          name="name"
          placeholder="Your name here"
          maxLength={40}
        />{" "}
        <br />
        Email :{" "}
        <input
          type="email"
          size="30"
          // pattern=".+@example\.com"
          required
        />{" "}
        <br />
        PhoneNumber : <input type="tel" maxLength={10} />
        <br />
        Notice Period :{" "}
        <select name="Notice Period">
          <option value="0">Immediate Joiner</option>
          <option value="14">15days</option>
          <option value="30">1month</option>
          <option value="60">2months</option>
          <option value="90">3months</option>
        </select>
        <br />
        Salary :{" "}
        <input
          type="number"
          min="0"
          max="15000"
          name="salary"
          // placeholder="your expected salary"
        ></input>
        <br />
        <label for="meeting-time">Interview Time : </label>
        <input
          type="datetime-local"
          name="meeting-time"
          value="2024-08-08T13:00"
          min="2024-08-01T00:00"
          max="2024-08-30T00:00"
        />
        <br />
        Resume : <input type="file" name="resume" accept="pdf,docx" /> <br />
        URL :{" "}
        <input
          type="url"
          name="url"
          placeholder="https://example.com"
          pattern="https://.*"
          size="5"
        />
        <br />
        Comments/Message :
        <br />
        <textarea name="note" placeholder="your comments here"></textarea>
        <br />
        {/* <div>
          <input
            type="range"
            id="cowbell"
            name="cowbell"
            min="0"
            max="100"
            value="90"
            step="10"
          />
          <label for="cowbell">Cowbell</label>
        </div> */}
        <br />
        {/* <input type="week" name="week" id="camp-week" min="2018-W18" max="2018-W26" required /> */}
        <input type="checkbox" id="declaration" />
        <lable for="declaration">I hereby declare values are true</lable> <br />
        <input type="reset" value="Reset" />
        <input type="submit" value="Submit Form"></input>
      </form>
    </>
  );
};

export default TablesAndForms;
