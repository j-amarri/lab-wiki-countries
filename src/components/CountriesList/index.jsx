import React from 'react';
import countries from './../../countries.json';

import { Link } from 'react-router-dom';

const CountriesList = () => {
  return (
    <div>
      {countries.map((country) => (
        <div
          className="col-7"
          key={country.cca3}
          style={{ overflow: 'scroll' }}
        >
          <div className="list-group">
            <Link
              className="list-group-item list-group-item-action"
              to={`/countries/${country.cca3}`}
            >
              {country.flag} {country.name.common}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
