function StylePlayground() {
    return(
        <>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Paragraph</p>
        <a href="#">Link</a>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <ol>
          <li>Numbered item 1</li>
          <li>Numbered item 2</li>
          <li>Numbered item 3</li>
        </ol>
        <table>
          <thead>
            <tr>
              <th>Table header 1</th>
              <th>Table header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Table data 1</td>
              <td>Table data 2</td>
            </tr>
            <tr>
              <td>Table data 3</td>
              <td>Table data 4</td>
            </tr>
          </tbody>
        </table>
        <form>
          <label>
            Input label:
            <input type="text" />
          </label>
          <br />
          <label>
            Checkbox label:
            <input type="checkbox" />
          </label>
          <br />
          <label>
            Radio label:
            <input type="radio" />
          </label>
          <br />
          <label>
            Select label:
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <hr />
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
      </>

    );
}

export default StylePlayground;