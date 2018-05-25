import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import * as actions from '../actions';
import {renderField} from './renderField';

class SearchBar extends Component {

    handleSearch = ({search}) => {
        try {
            this.props.searchCity({search});
            this.props.searchCityForecast({search});
        } catch(err) {
            console.log(err)
        }
        console.log(search);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            // <div>
                <form className="search-form" onSubmit={handleSubmit(this.handleSearch)}>
                    <Field
                        name="search"
                        placeholder="Enter city..."
                        component={renderField}
                        type="text"
                        // label="Search your city"
                    />
                    <button type='submit'>Search</button>
                </form>
            // </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      errorMessage: state.main
    };
};

SearchBar = reduxForm({
    form: "searchForm"
})(SearchBar);
  
SearchBar = connect(mapStateToProps, actions)(SearchBar);
  
export default SearchBar;