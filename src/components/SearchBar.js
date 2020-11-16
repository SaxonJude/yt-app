import React from 'react';
import logo from './images/logo.svg';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = e => {
        this.setState({ term: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();
        
        this.props.onTermSubmit(this.state.term);
    };

    render() {
        return (
            <nav className="header-nav">
                <img onClick={() => {
                    this.setState({ term: '' });
                    window.location.reload(false);
                    console.log(this.state.term);
                }} src={logo} alt="logo"/>
                <form onSubmit={this.onFormSubmit} className="form">
                    <div className="field-custom">
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                        <button type='submit'><i class="fas fa-search"></i></button>
                    </div>
                </form>
            </nav>
        );
    }
};

export default SearchBar;