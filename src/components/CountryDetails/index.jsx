import React, { Component } from 'react';
import countries from './../../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
    };
  }

  componentDidMount() {
    this.loadCountry();
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadCountry();
    }
  }

  loadCountry() {
    const id = this.props.match.params.id;
    console.log(id);
    const country = countries.find((item) => item.cca3 === id);
    this.setState({
      country,
    });
  }

  render() {
    return (
      <div>
        {this.state.country && (
          <>
            <div>
              <h1>{this.state.country.name.common}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{ width: '100%' }}>Capital</td>
                    <td>{this.state.country.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {this.state.country.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {this.state.country.borders.map((country) => {
                          const countryBorder = countries.find(
                            (item) => item.cca3 === country
                          );
                          return (
                            <li key={country}>
                              <Link to={`/countries/${country}`}>
                                {countryBorder.name.common}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default CountryDetails;
