import React from 'react'
import './Table.css'
const Table = () => {
  return (
    <div>
      
      <div class="table-container">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Total Marks</th>
                <th>Obtained Marks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="highlight">Eman</td>
                <td>--</td>
                <td>500</td>
                <td>450</td>
            </tr>
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Table
