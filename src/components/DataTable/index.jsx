import React from 'react';
import { TableCell, Button } from '@material-ui/core';
import { TKTableToolbar, TKDataDropdown, TKDataTable, createProvideDataPage, createProvideInputOptions } from 'tk-admin';

const provideCustomerDataPage = createProvideDataPage('https://tk-cm-dummy.herokuapp.com/api/v1/customers');
const provideResourceOptions = createProvideInputOptions('https://tk-cm-dummy.herokuapp.com/api/v1/courses', 'name', '_id');

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <TKDataTable
        headers={[
          {
            title: 'First name',
            dataField: 'personalInfo.firstName',
            sortable: true
          },
          {
            title: 'Last name',
            dataField: 'personalInfo.lastName',
            sortable: true,
          },
          {
            title: 'Email',
            dataField: 'personalInfo.email',
          },
          {
            title: 'Phone',
            dataField: 'personalInfo.phoneNumber',
          },
          {
            title: 'Registrations', 
            dataField: 'regInfoList.length',
            renderDataCell: props => (
              <TableCell key={props.key}>
                <Button onClick={() => props.change([], 'regInfoList')}>{props.value}</Button>
              </TableCell>)
          }
        ]}
        provide={provideCustomerDataPage}
        renderToolbar={props => (
          <TKTableToolbar
            filterConfigs={[
              {
                filterField: 'regInfoList',
                provide: provideResourceOptions,
                render: props => <TKDataDropdown title="Course" {...props} />,
              }
            ]}
            {...props}
          />
        ) }
      />
    );
  }
}

export default DataTable;
