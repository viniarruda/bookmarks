import React from 'react'
import styled from 'styled-components'

const GridField = styled.div`
	flex: 1;
	display: flex;
	flex-flow: row wrap;
	max-width: 15%;
	justify-content: center;
	align-items: flex-start;
	@media (max-width: 500px) {
		max-width: initial;
		align-items: center;
	}
`;

export default GridField