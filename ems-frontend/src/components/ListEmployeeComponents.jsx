import React from 'react'

const ListEmployeeComponents = () => {

  const dummyData = [

    {
      "id": 1,
      "firstName": "Seun",
      "lastName": "Ogunlana",
      "email": "ogunlanz@gmail.com"
    },
    {
      "id": 2,
      "firstName": "Ade",
      "lastName": "Faloye",
      "email": "fallayooz@gmail.com"
    },
    {
      "id": 3,
      "firstName": "Tope",
      "lastName": "Awotona",
      "email": "tonza@gmail.com"
    }
  ]
  return (
    <div className='container'>
      <h2>List of Employees</h2>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee FirstName</th>
            <th>Employee LastName</th>
            <th>Employee Email</th>
          </tr>
        </thead>
        <tbody>
          {
            dummyData.map(employee =>
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponents