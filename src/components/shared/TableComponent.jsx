// import { Dynamicwidth } from "../../packages/utils";

import PaginatorComponent from "./PaginatorComponent";

/**
 * 
 * @param {Array} header
 * @param {Array } items
 * @param {Object} other
 * @returns JSXElement
 */
const TableComponent = ({ headers = [], items = [], ...other }) => {

  const data = items.filter((row) => {
    return headers.every((header) => {
      return row[header.value] !== undefined
    });
  });

  /**
   * When adding table default class, the name of the class must be same for both the className object property and the value property
   * className = {
   *  'default': 'default',
   * 'value': 'value'
   * }
   */
  let className = {
    'default': 'default',
  };

  /**
   * adding custom classes
   */
  if (other.className) {
    let otherClassNameArray = other['className'].split(' ');

    otherClassNameArray = [...otherClassNameArray, ...Object.keys(className)];
    className = otherClassNameArray.join(' ');
    other = {
      ...other,
      className: className
    };
  }

  /**
   * Defaults
   */
  if (!other.className) {
    className = [...Object.keys(className)]
    other = {
      ...other,
      className: className.join(' '),
    };
  }

  // const headersWithWidthInformation = Dynamicwidth(data, headers);
  // console.log(headersWithWidthInformation);

  return (
    <>
      <table {...other} >
        <thead>
          <tr>
            {
              headers.map((header) => {
                return (
                  <th key={header.value}>
                    {header.caption}
                  </th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              return (
                <tr key={item.id}>
                  {headers.map((h) => {
                    return (
                      <td key={h.value}>
                        {item[h.value]}
                      </td>
                    )
                  })}
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <PaginatorComponent />
    </>
  )
};

export default TableComponent;