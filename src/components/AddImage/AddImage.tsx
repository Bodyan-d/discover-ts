import React, { useState } from 'react';
import upload from '../../icons/upload.svg';

function AddImage() {
	const [imageSrc, setimageSrc] = useState<any>(upload);

	const [isSelected, setIsSelected] = useState(false);

	function handleInput(evt?: React.ChangeEvent<HTMLInputElement>) {
		const file = evt?.target.files;
		const image = evt?.target.files?.[0];

		const reader = new FileReader();
		if (file && image) {
			reader.onload = function (e) {
				setimageSrc(e?.target?.result);
				setIsSelected(true);
			};

			reader.readAsDataURL(image);
		}
	}

	function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
		evt.preventDefault();
	}

	return (
		<section>
			<header>
				<h1 className='app-title'>Сreate a post</h1>
			</header>

			<div className='form-flex'>
				<ul className='selected-list'>
					<li className='selected-item'>
						<img
							src={imageSrc}
							alt='selected'
							className={
								isSelected ? 'selected-img' : 'selected-img selected-img-fltr'
							}
						/>
					</li>
				</ul>
				<p className='dd-message'>Перетащите сюда фото и видео</p>
				<form
					onSubmit={handleSubmit}
					className={
						isSelected ? 'create-form  create-form-selected' : 'create-form'
					}
				>
					<input
						className='create-input'
						type='file'
						name='image'
						id='img'
						accept='image/*'
						size={10485760}
						onChange={handleInput}
					/>

					<label className='create-label' htmlFor='img'>
						{isSelected ? 'Change image' : 'Choose image'}
					</label>
					{isSelected ? (
						<button className='form-sbmt' type='submit'>
							Next
						</button>
					) : (
						''
					)}
				</form>
			</div>
		</section>
	);
}

export default AddImage;
