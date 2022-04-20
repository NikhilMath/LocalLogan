'use strict';

// import FilterItem from "./FilterItem.js";

// const e = React.createElement;

class FilterColumns extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    // console.log(this.props.items);
  }

  listColumns() {
    return this.props.items.map((item) =>
      (<div className="col-sm-4">
        <FilterList name={Object.keys(item)[0]} items={item[Object.keys(item)[0]]} filter={this.props.filter} />
      </div>)
    )
  }

  render() {
    // console.log("items:", Object.keys(this.props.items[0])[0]);
    // console.log("itemkey?:", this.props.items[0][0], "items:", this.props.items[0][this.props.items[0][0]]);
    // console.log("filt:", this.props.filter);
    return (
      <div className="row">
        <div className="col-sm-4">
          <FilterList name={Object.keys(this.props.items[0])[0]} items={this.props.items[0][Object.keys(this.props.items[0])[0]]} filter={this.props.filter} />
        </div>
        <div className="col-sm-4">
          <FilterList name={Object.keys(this.props.items[1])[0]} items={this.props.items[1][Object.keys(this.props.items[1])[0]]} filter={this.props.filter} />
        </div>
        <div className="col-sm-4">
          <FilterList name={Object.keys(this.props.items[2])[0]} items={this.props.items[2][Object.keys(this.props.items[2])[0]]} filter={this.props.filter} />
        </div>
       {/* {this.listColumns()} */}
      </div>
      // <ul>
      //   {this.listItems}
      // </ul>
    );
  }
}

// export default FilterList;