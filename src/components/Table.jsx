import React from 'react'

export default function Table() {
  return (
    <div className='table'>
        <table>
            <thead>
                <tr>
                  <th>Drug Name</th>
                  <th>Description</th>
                  <th>Unit of Pricing</th>
                  <th>Drug Code</th>
                  <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button>DELETE</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}