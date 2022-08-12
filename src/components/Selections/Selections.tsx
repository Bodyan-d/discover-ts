import { NavLink, Outlet } from 'react-router-dom';

function Selections() {
	return (
		<>
			<Outlet />
			<section className='menu'>
				<span className='menu-line'></span>
				<ul className='menu-btns'>
					<li className='menu-item'>
						<NavLink to='/' className='menu-link'>
							<svg
								className='menu-icon'
								width='16'
								height='15'
								viewBox='0 0 16 15'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M0.707107 8.48528L1.77817 7.41421V13.0563V13.0564V14.0563H13.7782V13.0564V13.0563V7.41421L14.8492 8.48528L15.5563 7.77817L8.48528 0.707107L7.77817 0L7.07107 0.707107L0 7.77817L0.707107 8.48528ZM2.77817 13.0563V6.41421L7.77817 1.41421L12.7782 6.41421V13.0563H9.77817V9.05638V8.05638H5.77817V9.05638V13.0563H2.77817ZM6.77817 9.05638V13.0563H8.77817V9.05638H6.77817Z'
									fill='black'
									fillOpacity='0.8'
								/>
							</svg>
						</NavLink>
					</li>
					<li className='menu-item'>
						<NavLink to='/search' className='menu-link'>
							<svg
								className='menu-icon'
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M12 6.5C12 9.53757 9.53757 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5ZM10.7291 11.4362C9.59234 12.411 8.11495 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5C13 8.11495 12.411 9.59234 11.4362 10.7291L15.8536 15.1464L15.1464 15.8536L10.7291 11.4362Z'
									fill='black'
									fillOpacity='0.8'
								/>
							</svg>
						</NavLink>
					</li>
					<li className='menu-item menu-mid'>
						<NavLink className='menu-button' to='/addImage'>
							<svg
								className='menu-icon'
								width='14'
								height='14'
								viewBox='0 0 14 14'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M7.5 0.5H6.5V6.5H0.5V7.5H6.5V13.5H7.5V7.5H13.5V6.5H7.5V0.5Z'
									fill='white'
								/>
							</svg>
						</NavLink>
					</li>
					<li className='menu-item'>
						<NavLink to='/chats' className='menu-link'>
							<svg
								className='menu-icon'
								width='18'
								height='16'
								viewBox='0 0 18 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M3.92701 11.5266L3.6897 11.0341C3.24801 10.1174 3 9.08908 3 8C3 4.13401 6.13401 1 10 1C13.866 1 17 4.13401 17 8C17 11.866 13.866 15 10 15C8.89526 15 7.85296 14.7448 6.92628 14.2911L6.65842 14.1599L6.36249 14.1969L1.94388 14.7492L3.64047 11.9923L3.92701 11.5266ZM0.671856 14.9082L0 16L1.27203 15.841L6.48652 15.1892C7.5471 15.7085 8.73951 16 10 16C14.4183 16 18 12.4183 18 8C18 3.58172 14.4183 0 10 0C5.58172 0 2 3.58172 2 8C2 9.24258 2.28329 10.419 2.78881 11.4682L0.671856 14.9082Z'
									fill='black'
									fillOpacity='0.8'
								/>
							</svg>
						</NavLink>
					</li>
					<li className='menu-item'>
						<NavLink to='/profile' className='menu-link'>
							<svg
								className='menu-icon'
								width='12'
								height='17'
								viewBox='0 0 12 17'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M6.21739 9.47827C3.33591 9.47827 1 11.8142 1 14.6957V16H11.4348V14.6957C11.4348 11.8142 9.09888 9.47827 6.21739 9.47827Z'
									stroke='black'
								/>
								<ellipse
									cx='6.21776'
									cy='4.91304'
									rx='3.91307'
									ry='3.91304'
									stroke='black'
									strokeLinecap='square'
								/>
							</svg>
						</NavLink>
					</li>
				</ul>
			</section>
		</>
	);
}

export default Selections;
