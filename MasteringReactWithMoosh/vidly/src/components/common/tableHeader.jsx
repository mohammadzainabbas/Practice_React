import React, { Component } from "react";

class TableHeader extends Component {
  raiseSortEvent = column => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.column === column) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.column = column;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.column) return null;
    if (sortColumn.order === "asc")
      return <i aria-hidden="true" className="fa fa-sort-asc" />;

    return <i aria-hidden="true" className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              style={{ cursor: "pointer" }}
              key={column.path || column.key}
              onClick={() => this.raiseSortEvent(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
