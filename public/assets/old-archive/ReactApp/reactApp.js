'use strict';

const Route = ReactRouterDOM.Route;
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { };
    }

    render() {
      return (
        <ReactRouterDOM.HashRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/creators" component={Creators} />
          <Footer />
          {/* <Route path="/register" component={Register} /> */}
        </ReactRouterDOM.HashRouter>
          // <div>
          //     <FilterList items={this.filterOptions} filter={(filter) => this.addFilter(filter)}/>
          //     <RestaurantList items={this.state.restaurants} />
          // </div>
      );
    }
  }

const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);