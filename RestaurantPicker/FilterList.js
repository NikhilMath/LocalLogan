'use strict';

// import FilterItem from "./FilterItem.js";

// const e = React.createElement;

class FilterList extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    // console.log(this.props.items);
  }

  listItems = this.props.items.map((item) =>
    (<FilterItem name={item} key={item} filter={this.props.filter} />)
  )

  render() {
    // console.log("filt2:", this.props.filter);
    return (
      // <div>
      //   {this.filterOptions[0]}
      //   {this.filterOptions[1]}
      //   {this.filterOptions[2]}
      // </div>
      <div>
        <p className="lead text-center text-light">
          {this.props.name}
        </p>
        <ul>
          {this.listItems}
        </ul>
      </div>
      
      
    );
  }
}

// export default FilterList;