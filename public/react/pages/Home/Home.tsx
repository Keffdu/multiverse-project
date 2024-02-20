import React, { useState, useEffect } from "react";
import { ItemsList } from "../../components/ItemsList/ItemsList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initializeItems } from "../../reducers/itemReducer/itemReducer";
import './Home.css';
import { ItemObj, UserObj } from "../../types";

interface Props {
	user: UserObj
} 

const Home = ({ user } : Props) => {
	const [search, setSearch] = useState('');
	const [showAll, setShowAll] = useState(true);

	const dispatch = useDispatch();
	const items = useSelector((state: { items: ItemObj[] }) => state.items);
	
	const handleSearch = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const searchData: string = search;
		setSearch(searchData);
		// fixes bug i had where hitting enter would sometimes show all instead of filter results
		showAll ? setShowAll(!showAll) : setShowAll(showAll);
	};

	const itemsToShow: ItemObj[] = showAll
    ? items
    : items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

	const showBtn = () => {
		setShowAll(true);
		setSearch('');
	};

	useEffect(() => {
		dispatch(initializeItems());
	}, []);

    return (
    <div>
		<header>
			<a href="#" className="logo">
			<h1>CELC Inc.</h1></a>
		<ul className="navbar">
			<li><Link to="/" className= "active">Home</Link></li>
			<li><Link to="/login" className= "active">Login</Link></li>
			{ user && <li><Link to="/cart" className= "active">Cart</Link></li>}
		</ul>

		<div className="icons">
			
			<a href="#">search</a>
			<form onSubmit={handleSearch}>
				<input value={search} onChange={(e) => setSearch(e.target.value)} />
				<div>
				<button type="submit">Search</button>
				</div>
			</form>
			<button onClick={showBtn}>Show All</button>
		
			<a href="#">cart</a>
		</div>
		</header>
		<main>
		<section className="home">
		  <div className="home-text">
        	<h2>All Items:</h2>
		  </div>
		  <div className="home-img">
			<img src={require('./inventory.jpg')} alt=""/>
		  </div>
		</section>
		<Link to='/newItem' className= "btn">Post New Item</Link>
        <ItemsList items={itemsToShow} />
		</main>
    </div>
    )
};

export default Home;