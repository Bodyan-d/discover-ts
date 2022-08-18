import React from 'react';
import { TailSpin } from 'react-loader-spinner';

function LoaderComp() {
	return <TailSpin color='#4A56E2' height={100} width={100} timeout={3000} />;
}

export default LoaderComp;
