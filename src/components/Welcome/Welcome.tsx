import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Welcome() {
	useEffect(() => {
		document.body.classList.add('welcome-page');

		return () => {
			document.body.classList.remove('welcome-page');
		};
	});

	return (
		<>
			<Outlet />
			<section className='welcome'>
				<h1 className='app-title welcome-title'>Discover</h1>

				<footer className='welcome-footer'>
					<a
						href='https://www.instagram.com/_bodyan_05/'
						className='about-author'
					>
						<img
							className='author-image'
							src='https://picsum.photos/seed/luky/200/300'
							alt='avatar'
						/>
						<ul className='author-desc'>
							<li>
								<h5 className='author-name'>Bohdan Diachenko</h5>
							</li>
							<li>
								<p className='author-username'>@_bodyan_05</p>
							</li>
						</ul>
					</a>
					<nav className='welcome-nav'>
						<ul
							className='welcome-list
					'
						>
							<li className='welcome-item'>
								<NavLink to='/login' className='menu-log'>
									LOG IN
								</NavLink>
							</li>
							<li className='welcome-item'>
								<NavLink to='/register' className='menu-reg'>
									REGISTER
								</NavLink>
							</li>
						</ul>
					</nav>
				</footer>
			</section>
		</>
	);
}

export default Welcome;
