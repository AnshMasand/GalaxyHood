import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from "./HOOD.svg"
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { stocksSearch } from "./SearchObject";



function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const [value, setValue] = useState("");

  if (!sessionUser) {
    return <></>
  }

  	const onChangeHandler = (e) => {
      setValue(e.target.value);
    };

  	const onClickhHandler = (company, ticker) => {
      //setValue(company)
      //setStockTick(ticker)
      history.push(`/stocks/${ticker}`);
      setValue("");
    };

    const filterData = (data) => {
      const filteredData = data.filter((item) => {
        const searchInfo = value.toLowerCase();
        const companyName = item.company.toLowerCase();
        return (
          searchInfo &&
          companyName.startsWith(searchInfo) &&
          companyName !== searchInfo
        );
      });

      const resultList = filteredData.slice(0, 6);
      return resultList;
    };

	return (
    <div className="nav-wrapper">
      <div className="nav-logo">
        <NavLink exact to="/">
          <img src={logo} width={25} alt="logo" />
        </NavLink>
      </div>
      <div className="nav-search">
        <i className="fas fa-search" />
        <input
          className="nav-search-bar"
          type="text"
          onChange={onChangeHandler}
          value={value}
          placeholder="Search"
        />
        <div className={value ? "search-dropdown" : "hidden"}>
          {filterData(stocksSearch).map((item) => (
            <div
              key={item.company}
              className="search-results"
              onClick={() => onClickhHandler(item.company, item.ticker)}
            >
              <div className="search-ticker">{item.ticker}</div>
              <div className="search-divider"></div>
              <div>{item.company}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="nav-links-container">
        {/* <div className="nav-link">My Portfolio</div>
        <div className="nav-link">Purchase History</div>
        <div className="nav-link">My Lists</div> */}
        {isLoaded && (
          <div>
            <ProfileButton user={sessionUser} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
