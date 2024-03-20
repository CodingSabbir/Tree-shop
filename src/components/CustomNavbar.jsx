
import React, { useState } from 'react';
import logo from '../assets/img/plant.png';
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleSearchVisibility = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchText);
    // Clear the input field after search
    setSearchText('');
    // Hide the search input field after search
    setSearchVisible(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav>
      <Navbar fluid={true} className='fixed top-0 w-full bg-black z-20'>
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container className="flex items-center">
            <Navbar.Brand>
              <img className="h-[50px] w-[50px] cursor-pointer" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Divider></Navbar.Divider>
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-8"
            >
              <Link to={'/'} className=' cursor-pointer lg:py-6 relative block transition-all duration-300 text-body-4 font-normal text-white hover:text-metal-600   text-xl'>Home</Link>
              <li className=' cursor-pointer lg:py-6 relative block transition-all duration-300 text-body-4 font-normal text-white hover:text-metal-600   text-xl'>About</li>
              <li className=' cursor-pointer lg:py-6 relative block transition-all duration-300 text-body-4 font-normal text-white hover:text-metal-600   text-xl'>Product</li>
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                <Navbar.Link linkName="Home" />
                <Navbar.Link linkName="Projects" />
                <Navbar.Link linkName="Blogs" />
                <Navbar.Link linkName="News" />
                <Navbar.Link linkName="Resources" />
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container className="flex gap-2 relative">
            <Button size="sm" variant="link" onClick={toggleSearchVisibility}>
              <span>
                <MagnifyingGlass size={30} color="#fff" />
              </span>
              <span className="ml-2 text-white md:text-xl">Search</span>
            </Button>
            {isSearchVisible && (
              <input
                type="text"
                className="absolute top-full left-0 mt-1 w-48 h-8 px-4 py-1 bg-white border border-gray-300 rounded-md text-md focus:outline-none"
                placeholder="Search..."
                value={searchText}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
            )}
            <Button size="sm" className='md:text-xl bg-[#FF204E]' onClick={handleSearch}>
              Register
            </Button>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </nav>
  );
};

export default CustomNavbar;


